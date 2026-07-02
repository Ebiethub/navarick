import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { EditorialHeading, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Start a Project - NAVARICK",
  description:
    "Start a branding, website, development, or UI/UX project with NAVARICK. Share your goals and begin the conversation.",
  path: "/contact",
});

const nextSteps = [
  {
    title: "Review",
    body: "We read the inquiry and look for the real decision behind the request.",
  },
  {
    title: "Clarify",
    body: "If the fit is right, we respond with any questions needed to understand scope, timing, and priorities.",
  },
  {
    title: "Shape",
    body: "From there, we define the next conversation and the most useful way to begin.",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="contact-page" id="main-content">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="contact-hero premium-section" aria-labelledby="contact-title">
        <div className="contact-shell contact-hero__grid">
          <Reveal>
            <p className="contact-label">Contact NAVARICK</p>
            <h1 id="contact-title">
              <EditorialHeading lines={["Begin With", "A Clear Conversation."]} />
            </h1>
          </Reveal>
          <Reveal className="contact-hero__copy">
            <p>
              Tell us what you are building, changing, or trying to understand. We will review the
              context and respond with a thoughtful next step.
            </p>
            <Link className="contact-link focus-ring" href="#project-inquiry">
              <span>Start the Inquiry</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="contact-inquiry premium-section" id="project-inquiry" aria-labelledby="inquiry-title">
        <div className="contact-shell contact-inquiry__grid">
          <Reveal className="contact-inquiry__intro">
            <p className="contact-label">Project inquiry</p>
            <h2 id="inquiry-title">
              <EditorialHeading lines={["Tell us what needs", "to become clearer."]} />
            </h2>
            <p>
              Share enough context for a useful first response: the goal, the timing, and what feels
              unresolved.
            </p>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="contact-next premium-section" aria-labelledby="contact-next-title">
        <div className="contact-shell">
          <Reveal className="contact-next__header">
            <p className="contact-label">Expectations</p>
            <h2 id="contact-next-title">
              <EditorialHeading lines={["What happens", "next."]} />
            </h2>
          </Reveal>
          <ol className="contact-next__list">
            {nextSteps.map((step, index) => (
              <Reveal key={step.title}>
                <li className="contact-next__item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact-reassurance premium-section" aria-labelledby="contact-reassurance-title">
        <div className="contact-shell contact-reassurance__grid">
          <Reveal>
            <p className="contact-label">A careful beginning</p>
            <h2 id="contact-reassurance-title">
              <EditorialHeading lines={["No inflated promises.", "Just a considered start."]} />
            </h2>
          </Reveal>
          <Reveal className="contact-reassurance__copy">
            <p>
              The first response is not a pitch. It is a careful read of what you are trying to make
              clearer, and whether NAVARICK is the right studio for it.
            </p>
            <Link className="contact-link focus-ring" href="/services">
              <span>Review Services</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
