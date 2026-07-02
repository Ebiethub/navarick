import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "About - NAVARICK",
  description:
    "Learn about NAVARICK's approach to strategy, craft, and purposeful design for brands and digital experiences.",
  path: "/about",
});

const values = [
  {
    title: "Excellence",
    body: "The standard is visible in the decisions no one has to explain.",
  },
  {
    title: "Clarity",
    body: "Complexity is shaped until it becomes useful.",
  },
  {
    title: "Craftsmanship",
    body: "Proportion, hierarchy, restraint, and finish carry the work.",
  },
  {
    title: "Partnership",
    body: "Honest collaboration keeps the work moving and the standard intact.",
  },
] as const;

const capabilities = [
  "Brand Identity Design",
  "Web Design",
  "Web Development",
  "UI/UX Design",
] as const;

const approach = [
  {
    title: "Discover",
    body: "We listen for the business problem beneath the visible request.",
  },
  {
    title: "Strategy",
    body: "We agree on the direction before style begins to lead the conversation.",
  },
  {
    title: "Design",
    body: "We create a system with enough character to be remembered and enough discipline to last.",
  },
  {
    title: "Develop",
    body: "We translate the direction into a working experience with care.",
  },
  {
    title: "Launch",
    body: "We prepare the work for release and leave the next decisions clear.",
  },
] as const;

function AboutMaterial() {
  return (
    <div
      aria-label="NAVARICK editorial material study"
      className="about-material"
      role="img"
    >
      <span className="about-material__beam" aria-hidden="true" />
      <span className="about-material__plate" aria-hidden="true" />
      <span className="about-material__line" aria-hidden="true" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page" id="main-content">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="about-hero premium-section" aria-labelledby="about-title">
        <div className="about-shell">
          <Reveal className="about-hero__grid">
            <div>
              <p className="about-label">About NAVARICK</p>
              <h1 id="about-title">
                <EditorialHeading lines={["Built Around Strategy,", "Craft, and Purpose."]} />
              </h1>
            </div>
            <div className="about-hero__copy">
              <p>
                NAVARICK exists to help ambitious businesses become easier to understand, trust,
                and remember.
              </p>
              <Link className="about-link focus-ring" href="/work">
                <span>View Selected Work</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-story premium-section" aria-labelledby="about-story-title">
        <div className="about-shell about-story__grid">
          <Reveal>
            <p className="about-label">Studio philosophy</p>
            <h2 id="about-story-title">
              <EditorialHeading
                lines={["Design should", "carry meaning."]}
              />
            </h2>
          </Reveal>
          <Reveal className="about-story__copy">
            <p>
              We believe a brand earns attention by becoming unmistakably clear. The work begins
              with strategy because taste alone is too fragile a foundation.
            </p>
            <p>
              Clients can expect direct thinking, careful execution, and a process built around
              decisions rather than spectacle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-philosophy premium-section" aria-labelledby="about-philosophy-title">
        <div className="about-shell about-philosophy__grid">
          <Reveal className="about-philosophy__visual">
            <AboutMaterial />
          </Reveal>
          <Reveal className="about-philosophy__content">
            <p className="about-label">Design philosophy</p>
            <h2 id="about-philosophy-title">
              <EditorialHeading lines={["Clarity first.", "Distinction second.", "Craft always."]} />
            </h2>
            <p>
              Strong brands do not need to shout. They need direction, distinction, and the patience
              to remove what weakens them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-values premium-section" aria-labelledby="about-values-title">
        <div className="about-shell">
          <Reveal className="about-values__intro">
            <p className="about-label">Core values</p>
            <h2 id="about-values-title">The principles behind the work.</h2>
          </Reveal>
          <div className="about-values__list">
            {values.map((value, index) => (
              <Reveal className="about-value" key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-capabilities premium-section" aria-labelledby="about-capabilities-title">
        <div className="about-shell about-capabilities__grid">
          <Reveal>
            <p className="about-label">Capabilities</p>
            <h2 id="about-capabilities-title">
              <EditorialHeading lines={["A focused practice", "across brand and digital."]} />
            </h2>
          </Reveal>
          <div className="about-capabilities__list" aria-label="NAVARICK capabilities">
            {capabilities.map((capability) => (
              <Reveal className="about-capability" key={capability}>
                <span>{capability}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach premium-section" aria-labelledby="about-approach-title">
        <div className="about-shell">
          <Reveal className="about-approach__header">
            <p className="about-label">Approach</p>
            <h2 id="about-approach-title">
              <EditorialHeading lines={["A calm process for", "high-consideration work."]} />
            </h2>
            <p>
              Calm enough for honest thinking. Structured enough to keep decisions moving.
            </p>
          </Reveal>
          <ol className="about-approach__list">
            {approach.map((stage, index) => (
              <Reveal key={stage.title}>
                <li className="about-approach__stage">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-cta premium-section" aria-labelledby="about-cta-title">
        <div className="about-shell about-cta__grid">
          <Reveal>
            <p className="about-label">Start a project</p>
            <h2 id="about-cta-title">
              <EditorialHeading lines={["Every remarkable brand begins", "with a clear vision."]} />
            </h2>
          </Reveal>
          <Reveal className="about-cta__content">
            <p>
              Bring the ambition, the uncertainty, or the first loose shape of the idea. We will help
              make it clearer.
            </p>
            <div className="about-cta__actions">
              <Link className="about-button focus-ring" href="/contact">
                <span>Start a Project</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
              <Link className="about-link focus-ring" href="/services">
                <span>Explore Services</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
