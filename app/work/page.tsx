import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { WorkGallery } from "@/components/portfolio/work-gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";
import { getPortfolioGalleryItems } from "@/lib/portfolio-gallery";

export const metadata: Metadata = createMetadata({
  title: "Selected Work - NAVARICK",
  description:
    "Explore selected branding, website, and UI/UX projects from NAVARICK, crafted with strategy, clarity, and purpose.",
  path: "/work",
});

function WorkEmptyState() {
  return (
    <Reveal className="work-empty">
      <p className="work-label">Portfolio in progress</p>
      <h2>Selected work is being prepared.</h2>
      <p>Approved projects will appear here when the context, assets, and permissions are ready.</p>
      <Link className="work-contact__button focus-ring" href="/contact">
        <span>Start a Project</span>
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </Link>
    </Reveal>
  );
}

export default function WorkPage() {
  const galleryItems = getPortfolioGalleryItems();

  return (
    <main className="work-page" id="main-content">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <section className="work-hero premium-section" aria-labelledby="work-title">
        <div className="work-shell">
          <Reveal className="work-hero__grid">
            <div>
              <p className="work-label">Selected work</p>
              <h1 id="work-title">
                <EditorialHeading lines={["Selected", "Work"]} />
              </h1>
            </div>
            <div className="work-hero__statement">
              <p>Identity, web, and digital work, shown with only the context currently approved.</p>
              <span>{galleryItems.length} visual references</span>
            </div>
          </Reveal>
        </div>
      </section>

      {galleryItems.length === 0 ? (
        <section className="work-featured premium-section" aria-labelledby="work-empty-title">
          <div className="work-shell">
            <WorkEmptyState />
          </div>
        </section>
      ) : null}

      {galleryItems.length > 0 ? <WorkGallery items={galleryItems} /> : null}

      <section className="work-contact premium-section" aria-labelledby="work-contact-title">
        <div className="work-shell work-contact__grid">
          <Reveal>
            <p className="work-label">Start the conversation</p>
            <h2 id="work-contact-title">
              <EditorialHeading lines={["Have work worth", "shaping well?"]} />
            </h2>
          </Reveal>
          <Reveal className="work-contact__action">
            <p>Tell us what you are building, changing, or ready to make clearer.</p>
            <Link className="work-contact__button focus-ring" href="/contact">
              <span>Start a Project</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
