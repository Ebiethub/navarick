import { describe, expect, it } from "vitest";

import {
  colorTokens,
  borderTokens,
  layoutTokens,
  radiusTokens,
  semanticColorTokens,
  spacingTokens,
  typographyTokens,
} from "@/lib/design-tokens";

describe("NAVARICK design tokens", () => {
  it("exposes the approved core palette", () => {
    expect(colorTokens.obsidian950).toBe("#070706");
    expect(colorTokens.bronze500).toBe("#A8733A");
    expect(colorTokens.champagne300).toBe("#D8C29A");
    expect(colorTokens.softWhite).toBe("#F2F0EB");
  });

  it("maps semantic colour roles without repeating raw component colours", () => {
    expect(semanticColorTokens.canvas).toBe("obsidian950");
    expect(semanticColorTokens.action).toBe("champagne300");
    expect(semanticColorTokens.textSecondary).toBe("mutedGray");
  });

  it("uses the approved four-pixel spacing scale", () => {
    expect(spacingTokens).toEqual([
      4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 240,
    ]);
  });

  it("keeps the production grid and reading widths stable", () => {
    expect(layoutTokens.containerMax).toBe(1600);
    expect(layoutTokens.desktop.columns).toBe(12);
    expect(layoutTokens.desktop.margin).toBe(64);
    expect(layoutTokens.mobile.columns).toBe(4);
    expect(layoutTokens.mobile.margin).toBe(20);
    expect(layoutTokens.reading.standard).toBe(720);
    expect(layoutTokens.section.desktop).toBe(160);
    expect(layoutTokens.cinematicPause.mobile).toBe(96);
  });

  it("keeps radius and rule tokens aligned to the production surface rules", () => {
    expect(radiusTokens.input).toBe("4px");
    expect(radiusTokens.navigation).toBe("10px");
    expect(borderTokens.default).toBe("rgb(242 240 235 / 12%)");
    expect(borderTokens.strong).toBe("rgb(242 240 235 / 22%)");
  });

  it("defines desktop and mobile typography for every core role", () => {
    expect(typographyTokens.hero.desktop.size).toBe(112);
    expect(typographyTokens.hero.mobile.size).toBe(58);
    expect(typographyTokens.body.desktop.lineHeight).toBe(1.6);
    expect(typographyTokens.body.mobile.size).toBe(16);
  });
});
