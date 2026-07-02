import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { EditorialHeading, Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Services - NAVARICK",
  description:
    "Brand identity design, web design, web development, and UI/UX services for businesses that want refined, strategic, and memorable digital experiences.",
  path: "/services",
});

const serviceChapters = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    eyebrow: "01 / Identity",
    description:
      "A brand system gives the business a recognisable voice, visual language, and standard for every public touchpoint.",
    outcome:
      "The result is a clearer market position and a presence people can remember after the first encounter.",
    why:
      "Without a coherent identity, even strong offers feel fragmented. Identity turns perception into an asset.",
    deliverables: [
      "Logo design",
      "Visual identity systems",
      "Brand guidelines",
      "Typography systems",
      "Colour systems",
      "Brand collateral",
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    eyebrow: "02 / Web",
    description:
      "A website should make the brand easy to understand, easy to trust, and easy to act on.",
    outcome:
      "The result is a digital presence that explains the offer clearly and moves visitors toward the right next step.",
    why:
      "A refined website does more than look current. It gives the business a credible front door.",
    deliverables: [
      "Website design",
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "User experience design",
      "Responsive design",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    eyebrow: "03 / Build",
    description:
      "Development translates the approved design into a fast, stable, maintainable experience.",
    outcome:
      "The result is a site that performs reliably across screens and stays easier to improve after launch.",
    why:
      "Strong execution protects the design investment and removes friction from future growth.",
    deliverables: [
      "Frontend development",
      "Next.js development",
      "Responsive development",
      "Performance optimisation",
      "CMS integration",
      "Technical SEO",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    eyebrow: "04 / Product",
    description:
      "Interface work clarifies how people move through a product, platform, or service.",
    outcome:
      "The result is a more confident user journey, with fewer dead ends and clearer decisions.",
    why:
      "When a product feels easy to use, trust builds quietly in the background.",
    deliverables: [
      "Product design",
      "Dashboard design",
      "SaaS interfaces",
      "Mobile app interfaces",
      "UX audits",
      "User flows",
    ],
  },
] as const;

const processStages = [
  {
    title: "Discover",
    body: "We study the business, audience, constraints, and ambition behind the work.",
  },
  {
    title: "Strategy",
    body: "We define the direction before visual decisions begin.",
  },
  {
    title: "Design",
    body: "We shape the identity, interface, and content system with deliberate restraint.",
  },
  {
    title: "Develop",
    body: "We translate the approved direction into a reliable digital experience.",
  },
  {
    title: "Launch",
    body: "We prepare the work for release and clarify what should evolve next.",
  },
] as const;

const faqs = [
  {
    question: "Can NAVARICK handle brand and website work together?",
    answer:
      "Yes. Identity, website, interface, and development can move as one system.",
  },
  {
    question: "Do all projects include development?",
    answer:
      "No. Scope is shaped around the problem, timeline, and handoff.",
  },
  {
    question: "Are results or growth guaranteed?",
    answer:
      "No. Verified outcomes are only published when evidence is available.",
  },
  {
    question: "What should a business prepare before starting?",
    answer:
      "A clear ambition, existing material, known constraints, and what needs to change.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="services-page" id="main-content">
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="services-hero premium-section" aria-labelledby="services-title">
        <div className="services-shell">
          <Reveal className="services-hero__grid">
            <div>
              <p className="services-label">Services</p>
              <h1 id="services-title">
                <EditorialHeading
                  lines={["Strategic Design.", "Thoughtful Development.", "Meaningful Experiences."]}
                />
              </h1>
            </div>
            <div className="services-hero__copy">
              <p>
                Focused brand, web, and interface work for businesses ready to make their value
                easier to understand.
              </p>
              <Link className="services-link focus-ring" href="#service-chapters">
                <span>Explore Services</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="services-index premium-section"
        id="service-chapters"
        aria-labelledby="service-chapters-title"
      >
        <div className="services-shell">
          <Reveal className="services-index__intro">
            <p className="services-label">Outcomes</p>
            <h2 id="service-chapters-title">
              <EditorialHeading lines={["Outcome-led", "creative work."]} />
            </h2>
          </Reveal>

          <div className="services-chapters">
            {serviceChapters.map((service) => (
              <Reveal className="service-chapter" key={service.id}>
                <div className="service-chapter__heading">
                  <p className="services-label">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-chapter__body">
                  <p>{service.description}</p>
                  <p>{service.outcome}</p>
                  <p>{service.why}</p>
                  <div>
                    <h4>Deliverables</h4>
                    <ul>
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process premium-section" aria-labelledby="services-process-title">
        <div className="services-shell">
          <Reveal className="services-process__header">
            <p className="services-label">Our approach</p>
            <h2 id="services-process-title">
                <EditorialHeading lines={["Understanding First.", "Execution With Intent."]} />
            </h2>
            <p>
              Context first. Then direction, design, build, and launch.
            </p>
          </Reveal>

          <ol className="services-process__list">
            {processStages.map((stage, index) => (
              <Reveal key={stage.title}>
                <li className="services-process__stage">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="services-faq premium-section" aria-labelledby="services-faq-title">
        <div className="services-shell services-faq__grid">
          <Reveal>
            <p className="services-label">FAQ</p>
            <h2 id="services-faq-title">Straight answers before the project starts.</h2>
          </Reveal>
          <div className="services-faq__items">
            {faqs.map((item) => (
              <Reveal className="services-faq__item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta premium-section" aria-labelledby="services-cta-title">
        <div className="services-shell services-cta__grid">
          <Reveal>
            <p className="services-label">Start a project</p>
            <h2 id="services-cta-title">
              <EditorialHeading lines={["Need a brand or digital", "experience built with purpose?"]} />
            </h2>
          </Reveal>
          <Reveal className="services-cta__content">
            <p>
              Tell us what you are building, changing, or ready to make more coherent.
            </p>
            <Link className="services-button focus-ring" href="/contact">
              <span>Start a Project</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
