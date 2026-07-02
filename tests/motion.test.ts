import { describe, expect, it } from "vitest";

import {
  DURATION,
  EASE,
  REDUCED_MOTION_TRANSITION,
  createStagger,
  mediaReveal,
  mobileMenuItem,
  mobileMenuPanel,
  motionThresholds,
  pageReveal,
  ruleDraw,
} from "@/lib/motion";

describe("NAVARICK motion contracts", () => {
  it("uses the approved durations and easing curves", () => {
    expect(DURATION).toMatchObject({
      instant: 0.12,
      fast: 0.22,
      base: 0.42,
      medium: 0.5,
      slow: 0.7,
      cinematic: 1.1,
    });
    expect(EASE.out).toEqual([0.16, 1, 0.3, 1]);
    expect(EASE.inOut).toEqual([0.65, 0, 0.35, 1]);
  });

  it("creates stagger transitions inside the approved range", () => {
    expect(createStagger(0.06, 0.12)).toEqual({
      delayChildren: 0.12,
      staggerChildren: 0.06,
    });
  });

  it("keeps reduced-motion transitions effectively immediate", () => {
    expect(REDUCED_MOTION_TRANSITION.duration).toBeLessThanOrEqual(0.16);
  });

  it("keeps reveal and interaction thresholds inside approved bounds", () => {
    expect(motionThresholds.viewportRevealAmount).toBeGreaterThanOrEqual(0.1);
    expect(motionThresholds.viewportRevealAmount).toBeLessThanOrEqual(0.18);
    expect(motionThresholds.maxMagneticOffset).toBeLessThanOrEqual(8);
    expect(motionThresholds.maxProjectCropScale).toBeLessThanOrEqual(1.03);
    expect(motionThresholds.maxButtonLiftPx).toBeLessThanOrEqual(2);
    expect(motionThresholds.maxMenuLinkStagger).toBeLessThanOrEqual(0.055);
    expect(motionThresholds.maxCardRotateDegrees).toBeLessThanOrEqual(1.8);
    expect(motionThresholds.maxHeroParallaxPx).toBeLessThanOrEqual(34);
    expect(motionThresholds.maxLightingDriftPx).toBeLessThanOrEqual(18);
  });

  it("defines rule and media reveal variants for shared motion primitives", () => {
    expect(ruleDraw.hidden).toMatchObject({ scaleX: 0 });
    expect(mediaReveal.hidden).toMatchObject({ opacity: 0, scale: 1.03 });
    expect(pageReveal.hidden).toMatchObject({ opacity: 0, y: 10 });
    expect(mobileMenuPanel.hidden).toMatchObject({ opacity: 0 });
    expect(mobileMenuItem.hidden).toMatchObject({ opacity: 0, y: 14 });
  });
});
