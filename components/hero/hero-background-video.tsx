"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { motionThresholds } from "@/lib/motion";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4";
const HERO_POSTER_SRC = "/images/navarick-hero-poster-placeholder.svg";

export function HeroBackgroundVideo() {
  const prefersReducedMotion = useReducedMotion();
  const [canUseParallax, setCanUseParallax] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { scrollYProgress } = useScroll();
  const shouldUseParallax = canUseParallax && !prefersReducedMotion;
  const mediaY = useTransform(
    scrollYProgress,
    [0, 0.28],
    [0, shouldUseParallax ? motionThresholds.maxHeroParallaxPx : 0],
  );
  const lightY = useTransform(
    scrollYProgress,
    [0, 0.28],
    [0, shouldUseParallax ? -motionThresholds.maxLightingDriftPx : 0],
  );
  const lightOpacity = useTransform(scrollYProgress, [0, 0.24], [1, shouldUseParallax ? 0.74 : 1]);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
    let idleCallbackId: number | undefined;
    let fallbackTimerId: ReturnType<typeof setTimeout> | undefined;

    const scheduleVideoLoad = () => {
      if (!query.matches || prefersReducedMotion) {
        setShouldLoadVideo(false);
        return;
      }

      const loadVideo = () => setShouldLoadVideo(true);

      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(loadVideo, { timeout: 1800 });
      } else {
        fallbackTimerId = globalThis.setTimeout(loadVideo, 900);
      }
    };

    const updateParallaxPreference = () => {
      setCanUseParallax(query.matches);
      scheduleVideoLoad();
    };

    updateParallaxPreference();
    query.addEventListener("change", updateParallaxPreference);

    return () => {
      query.removeEventListener("change", updateParallaxPreference);
      if (idleCallbackId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (fallbackTimerId !== undefined) {
        window.clearTimeout(fallbackTimerId);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div className="hero-video" aria-hidden="true">
      {shouldLoadVideo ? (
        <motion.video
          autoPlay
          className="hero-video__media"
          loop
          muted
          playsInline
          poster={HERO_POSTER_SRC}
          preload="none"
          src={HERO_VIDEO_SRC}
          style={{ y: mediaY }}
        />
      ) : null}
      <motion.div className="hero-video__depth" style={{ y: mediaY }} />
      <div className="hero-video__obsidian" />
      <motion.div className="hero-video__vignette" style={{ y: lightY, opacity: lightOpacity }} />
      <motion.div className="hero-video__champagne" style={{ y: lightY, opacity: lightOpacity }} />
      <motion.div className="hero-video__edge" style={{ y: lightY, opacity: lightOpacity }} />
      <div className="hero-video__scroll-cue">
        <span />
      </div>
      <div className="hero-video__bottom" />
    </div>
  );
}
