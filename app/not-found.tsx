import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found - NAVARICK",
  description: "The page you're looking for may have moved, changed, or never existed.",
  path: "/404",
  robots: { index: false, follow: true },
});

export default function NotFoundPage() {
  return (
    <main className="about-page" id="main-content">
      <section className="about-hero premium-section" aria-labelledby="not-found-title">
        <div className="about-shell">
          <Reveal className="about-hero__grid">
            <div>
              <p className="about-label">404</p>
              <h1 id="not-found-title">
                <EditorialHeading lines={["This Page Drifted", "Out of Frame."]} />
              </h1>
            </div>
            <div className="about-hero__copy">
              <p>
                The page you&apos;re looking for may have moved, changed, or never existed.
              </p>
              <div className="about-cta__actions">
                <Link className="about-button focus-ring" href="/">
                  <span>Return Home</span>
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
                <Link className="about-link focus-ring" href="/work">
                  <span>View Work</span>
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
