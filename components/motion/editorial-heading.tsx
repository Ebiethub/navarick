"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DURATION, EASE, createStagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

type EditorialHeadingProps = {
  className?: string;
  lines: readonly string[];
};

export function EditorialHeading({ className, lines }: EditorialHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const label = lines.join(" ");

  if (prefersReducedMotion) {
    return (
      <span className={cn("editorial-heading", className)}>
        {lines.map((line) => (
          <span className="editorial-heading__line" key={line}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={cn("editorial-heading", className)}
      initial="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: createStagger(0.12, 0.08),
        },
      }}
      viewport={{ once: true, amount: 0.4 }}
      whileInView="visible"
    >
      <span className="sr-only">{label}</span>
      {lines.map((line) => (
        <span aria-hidden="true" className="editorial-heading__mask" key={line}>
          <motion.span
            className="editorial-heading__line"
            variants={{
              hidden: { opacity: 0, y: "0.7em", filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: DURATION.cinematic,
                  ease: EASE.out,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
