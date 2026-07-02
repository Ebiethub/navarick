import type { Metadata } from "next";

import { CinematicHero } from "@/components/hero";
import { HomepageExperience } from "@/components/home/homepage-experience";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import { createOrganizationJsonLd, createWebsiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "NAVARICK - Designing Brands That Deserve to Be Remembered",
  description:
    "Premium brand identity, web design, web development, and UI/UX design for ambitious businesses that want to communicate clearly, build trust, and grow with confidence.",
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main-content">
      <JsonLd data={[createOrganizationJsonLd(), createWebsiteJsonLd()]} />
      <CinematicHero />
      <HomepageExperience />
    </main>
  );
}
