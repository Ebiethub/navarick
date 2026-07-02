"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeIn, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "fade-up";
  once?: boolean;
};

const variants = {
  fade: fadeIn,
  "fade-up": fadeUp,
};

export function Reveal({ children, className, variant = "fade-up", once = true }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.14 }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
