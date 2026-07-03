import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import { getFeaturedProjects, getProjectBySlug, getPublishedProjects } from "@/lib/portfolio";
import { getPortfolioGalleryItems } from "@/lib/portfolio-gallery";

describe("portfolio content architecture", () => {
  it("uses a single project data source for the current portfolio", () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it("publishes real image-backed portfolio entries", () => {
    expect(projects.length).toBeGreaterThan(0);
    expect(getPublishedProjects().length).toBe(projects.length);
    expect(getFeaturedProjects().length).toBeGreaterThan(0);

    for (const project of projects) {
      expect(project.cover?.src).toMatch(/^\/images\//);
      expect(project.cover?.alt).toBeTruthy();
    }
  });

  it("does not resolve removed temporary case studies", () => {
    expect(getProjectBySlug("angelinos-law")).toBeUndefined();
    expect(getProjectBySlug("apex-intelligence-labs")).toBeUndefined();
    expect(getProjectBySlug("ui-ux-concept-project")).toBeUndefined();
  });

  it("builds the work gallery from mapped image folders", () => {
    const items = getPortfolioGalleryItems();
    const categories = new Set(items.map((item) => item.category));

    expect(items.length).toBeGreaterThan(90);
    expect(categories).toContain("Logo Design");
    expect(categories).toContain("Brand Identity");
    expect(categories).toContain("Web Design");
    expect(categories).toContain("UI/UX Design");
    expect(categories).toContain("Development");
  });

  it("excludes known broken hashtag-heavy assets from the work gallery", () => {
    const galleryIndex = getPortfolioGalleryItems()
      .map((item) => item.id.toLowerCase())
      .join(" ");

    expect(galleryIndex).not.toContain("logo-41");
    expect(galleryIndex).not.toContain("uiuxdesign");
    expect(galleryIndex).not.toContain("shopifydesign");
    expect(galleryIndex).not.toContain("outfit & fashion design hashtags");
  });

  it("does not show duplicate original and optimized designs in the work gallery", () => {
    const items = getPortfolioGalleryItems();
    const ids = items.map((item) => item.id.toLowerCase());

    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).not.toContain("brand-identity/brand-identity-06.jpg");
    expect(ids).not.toContain("brand-identity/brand-identity-09.jpg");
    expect(ids).not.toContain("brand-identity/brand-identity-11.jpg");
    expect(ids).not.toContain("brand-identity/brand-identity-13.jpg");
    expect(ids).not.toContain("brand-identity/brand-identity-17.webp");
  });
});
