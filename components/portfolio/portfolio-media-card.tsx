"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { type PointerEvent, useEffect, useRef, useState } from "react";

import { EASE, motionThresholds } from "@/lib/motion";
import type { ProjectMedia } from "@/types";

type PortfolioCardMedia = Pick<ProjectMedia, "alt" | "src">;

type PortfolioMediaCardProps = {
  media: PortfolioCardMedia;
  alt?: string;
  href?: string;
  priority?: boolean;
  sizes: string;
  fit?: "contain" | "cover";
  variant?: "logo" | "cover";
  className?: string;
};

export function PortfolioMediaCard({
  media,
  alt,
  href,
  priority = false,
  sizes,
  fit = "cover",
  variant = "cover",
  className,
}: PortfolioMediaCardProps) {
  const resolvedFit = variant === "logo" ? "contain" : fit;
  const prefersReducedMotion = useReducedMotion();
  const [canUsePointerDepth, setCanUsePointerDepth] = useState(false);
  const frameRef = useRef<number | null>(null);
  const latestPointer = useRef({ x: 0, y: 0 });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 24, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 24, mass: 0.45 });
  const rotateY = useTransform(
    smoothX,
    [-1, 1],
    [-motionThresholds.maxCardRotateDegrees, motionThresholds.maxCardRotateDegrees],
  );
  const rotateX = useTransform(
    smoothY,
    [-1, 1],
    [motionThresholds.maxCardRotateDegrees, -motionThresholds.maxCardRotateDegrees],
  );

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointerPreference = () => setCanUsePointerDepth(query.matches);

    updatePointerPreference();
    query.addEventListener("change", updatePointerPreference);

    return () => {
      query.removeEventListener("change", updatePointerPreference);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const image = (
    <Image
      alt={alt ?? media.alt}
      className={`portfolio-media-card__image portfolio-media-card__image--${resolvedFit}`}
      fill
      priority={priority}
      quality={priority ? 90 : variant === "logo" ? 88 : 78}
      sizes={sizes}
      src={media.src}
    />
  );

  const classes = ["portfolio-media-card", `portfolio-media-card--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const shouldUsePointerDepth = canUsePointerDepth && !prefersReducedMotion;
  const motionProps = shouldUsePointerDepth
    ? {
        onPointerMove: (event: PointerEvent<HTMLDivElement>) => {
          const rect = event.currentTarget.getBoundingClientRect();
          latestPointer.current = {
            x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
            y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
          };
          event.currentTarget.style.setProperty("--card-light-x", latestPointer.current.x.toFixed(3));
          event.currentTarget.style.setProperty("--card-light-y", latestPointer.current.y.toFixed(3));

          if (frameRef.current !== null) {
            return;
          }

          frameRef.current = requestAnimationFrame(() => {
            pointerX.set(latestPointer.current.x);
            pointerY.set(latestPointer.current.y);
            frameRef.current = null;
          });
        },
        onPointerLeave: (event: PointerEvent<HTMLDivElement>) => {
          if (frameRef.current !== null) {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
          }
          event.currentTarget.style.setProperty("--card-light-x", "0");
          event.currentTarget.style.setProperty("--card-light-y", "0");
          pointerX.set(0);
          pointerY.set(0);
        },
        whileHover: { y: -3, scale: 1.012 },
        style: { rotateX, rotateY },
        transition: {
          duration: 0.32,
          ease: EASE.out,
        },
      }
    : prefersReducedMotion
      ? {}
      : {
          whileHover: {
            y: -3,
            scale: 1.01,
          },
          transition: {
            duration: 0.28,
            ease: EASE.out,
          },
        };

  if (href) {
    return (
      <motion.div className={classes} {...motionProps}>
        <Link className="portfolio-media-card__link focus-ring" href={href}>
          {image}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div className={classes} {...motionProps}>
      <div className="portfolio-media-card__link">{image}</div>
    </motion.div>
  );
}
