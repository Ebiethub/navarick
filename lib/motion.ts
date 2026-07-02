import type { Transition, Variants } from "framer-motion";

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  linear: "linear",
} as const;

export const DURATION = {
  instant: 0.12,
  fast: 0.22,
  base: 0.42,
  medium: 0.5,
  slow: 0.7,
  cinematic: 1.1,
} as const;

export const transition: Transition = {
  duration: DURATION.base,
  ease: EASE.out,
};

export const REDUCED_MOTION_TRANSITION: Transition = {
  duration: DURATION.instant,
};

export function createStagger(staggerChildren = 0.06, delayChildren = 0) {
  return { delayChildren, staggerChildren };
}

export const motionThresholds = {
  viewportRevealAmount: 0.14,
  maxParallaxPercent: 8,
  preferredParallaxPercent: 5,
  maxMagneticOffset: 8,
  maxProjectCropScale: 1.03,
  maxButtonLiftPx: 2,
  maxMenuLinkStagger: 0.055,
  maxCardRotateDegrees: 1.8,
  maxHeroParallaxPx: 34,
  maxLightingDriftPx: 18,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const ruleDraw: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left center" },
  visible: {
    scaleX: 1,
    transformOrigin: "left center",
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
};

export const mediaReveal: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

export const pageReveal: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
};

export const mobileMenuPanel: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: DURATION.medium,
      ease: EASE.out,
      when: "beforeChildren",
      ...createStagger(motionThresholds.maxMenuLinkStagger, 0.08),
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: DURATION.fast, ease: EASE.inOut },
  },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE.out },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(3px)",
    transition: { duration: DURATION.fast, ease: EASE.inOut },
  },
};

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
