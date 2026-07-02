import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy - NAVARICK",
  description:
    "How NAVARICK handles contact form submissions, analytics, cookies, and third-party services.",
  path: "/privacy",
});

const sections = [
  {
    title: "Information Collected",
    body: "NAVARICK may collect information you choose to submit through the contact form, including your name, email address, company or project name, selected project type, budget range, and project details.",
  },
  {
    title: "Contact Form Usage",
    body: "Contact form submissions are used to review project inquiries, respond to the sender, and understand the requested scope. Do not submit sensitive personal, financial, or confidential information through the form.",
  },
  {
    title: "Analytics",
    body: "Analytics tools may be enabled only through environment variables. When enabled, they help understand site performance, page usage, and launch health. Analytics identifiers are not hardcoded into the source code.",
  },
  {
    title: "Cookies",
    body: "The website does not require account cookies. Analytics providers may set cookies or use similar technologies if analytics are enabled in production.",
  },
  {
    title: "Third-Party Services",
    body: "NAVARICK may use third-party services for email delivery, analytics, hosting, and performance monitoring. These services process data according to their own policies.",
  },
  {
    title: "User Rights",
    body: "You may request access, correction, or deletion of information you submitted, subject to reasonable verification and any legal or operational retention requirements.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <main className="about-page" id="main-content">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <section className="about-hero premium-section" aria-labelledby="privacy-title">
        <div className="about-shell">
          <Reveal className="about-hero__grid">
            <div>
              <p className="about-label">Privacy</p>
              <h1 id="privacy-title">
                <EditorialHeading lines={["Privacy", "Policy."]} />
              </h1>
            </div>
            <div className="about-hero__copy">
              <p>
                A concise overview of how NAVARICK handles inquiry data, analytics, cookies, and
                third-party services.
              </p>
              <Link className="about-link focus-ring" href="/contact">
                <span>Contact NAVARICK</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-values premium-section" aria-labelledby="privacy-details-title">
        <div className="about-shell">
          <Reveal className="about-values__intro">
            <p className="about-label">Last reviewed July 2, 2026</p>
            <h2 id="privacy-details-title">What this policy covers.</h2>
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
                Privacy requests can be sent to{" "}
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
