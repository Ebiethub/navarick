import type { MetadataRoute } from "next";

import { getPublishedProjects } from "@/lib/portfolio";
import { SITE_URL } from "@/lib/constants";

const staticRoutes = ["", "/about", "/services", "/work", "/contact", "/privacy", "/terms"] as const;
const lastModified = new Date("2026-07-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: (route === "" ? "monthly" : "yearly") as "monthly" | "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
  const projectEntries = getPublishedProjects().map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: project.featured ? 0.7 : 0.6,
  }));

  return [...staticEntries, ...projectEntries];
}
