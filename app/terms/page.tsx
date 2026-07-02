import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service - NAVARICK",
  description:
    "Website use, intellectual property, portfolio content, liability, and contact terms for NAVARICK.",
  path: "/terms",
});

const sections = [
  {
    title: "Website Use",
    body: "This website is provided for general information about NAVARICK, its services, and selected work. You agree not to misuse the site, interfere with its operation, or attempt unauthorized access.",
  },
  {
    title: "Intellectual Property",
    body: "The NAVARICK name, site design, copy, visuals, code, and presentation are protected by applicable intellectual property rights unless otherwise stated.",
  },
  {
    title: "Portfolio Content",
    body: "Portfolio imagery and case-study content are shown for presentation and informational purposes. Project details may be updated as approved information becomes available.",
  },
  {
    title: "No Guarantees",
    body: "The website may describe creative services and process, but it does not guarantee business, growth, ranking, or performance outcomes.",
  },
  {
    title: "Limitation of Liability",
    body: "NAVARICK is not liable for indirect, incidental, or consequential damages arising from website use, unavailable pages, third-party services, or reliance on website content.",
  },
  {
    title: "Updates",
    body: "These terms may be updated as the website, services, or production configuration changes. Continued use of the site means you accept the latest version.",
  },
] as const;

export default function TermsPage() {
  return (
    <main className="about-page" id="main-content">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <section className="about-hero premium-section" aria-labelledby="terms-title">
        <div className="about-shell">
          <Reveal className="about-hero__grid">
            <div>
              <p className="about-label">Terms</p>
              <h1 id="terms-title">
                <EditorialHeading lines={["Terms of", "Service."]} />
              </h1>
            </div>
            <div className="about-hero__copy">
              <p>
                Minimal terms for using the NAVARICK website and viewing its portfolio content.
              </p>
              <Link className="about-link focus-ring" href="/contact">
                <span>Contact NAVARICK</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-values premium-section" aria-labelledby="terms-details-title">
        <div className="about-shell">
          <Reveal className="about-values__intro">
            <p className="about-label">Last reviewed July 2, 2026</p>
            <h2 id="terms-details-title">Website terms.</h2>
          </Reveal>
          <div className="about-values__list">
            {sections.map((section, index) => (
              <Reveal className="about-value" key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </Reveal>
            ))}
            <Reveal className="about-value">
              <span>07</span>
              <h3>Contact</h3>
              <p>
                Questions about these terms can be sent to{" "}
                <a className="about-link focus-ring" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                . Confirm the final business email before launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
