import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { PortfolioMediaCard } from "@/components/portfolio/portfolio-media-card";
import { logoShowcaseItems } from "@/data/portfolio-media";
import { services } from "@/data/services";

const processStages = [
  {
    title: "Discover",
    body: "We study the business, audience, constraints, and ambition behind the work.",
  },
  {
    title: "Strategy",
    body: "We set the direction so every creative decision has a reason to exist.",
  },
  {
    title: "Design",
    body: "We shape the identity, interface, and content system with restraint and precision.",
  },
  {
    title: "Develop",
    body: "We build the experience to preserve the design and perform reliably in use.",
  },
  {
    title: "Launch",
    body: "We prepare the work for release, then refine what needs sharper execution.",
  },
] as const;

function PortfolioPreview() {
  if (logoShowcaseItems.length === 0) {
    return (
      <Reveal className="portfolio-empty portfolio-empty--editorial">
        <p className="home-label">Portfolio in progress</p>
        <h3>Selected work is being prepared with care.</h3>
        <p>
          Published projects will appear here when the context, assets, and permissions are ready.
        </p>
      </Reveal>
    );
  }

  return (
    <div className="logo-showcase">
      <Reveal className="logo-showcase__grid" aria-label="Curated logo identity showcase">
        {logoShowcaseItems.slice(0, 6).map((item) => (
          <article
            aria-label={`Logo Design: ${item.title}`}
            className="logo-showcase__item"
            key={item.src}
          >
            <PortfolioMediaCard
              fit="contain"
              media={item}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 30vw"
              variant="logo"
            />
            <div className="logo-showcase__meta">
              <p className="home-label">Logo Design</p>
            </div>
          </article>
        ))}
      </Reveal>
      <Reveal className="featured-work__cta">
        <Link className="final-cta__primary focus-ring" href="/work">
          <span>View Selected Work</span>
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </Link>
      </Reveal>
    </div>
  );
}

export function HomepageExperience() {
  return (
    <>
      <section className="home-section featured-work premium-section" id="work" aria-labelledby="featured-work-title">
        <div className="home-section__inner">
          <Reveal className="home-section__intro home-section__intro--split">
            <p className="home-label">Featured Work</p>
            <div>
              <h2 className="home-heading" id="featured-work-title">
                <EditorialHeading lines={["Selected Identity Work"]} />
              </h2>
              <p className="home-lede">
                A concise look at identity marks and visual systems, presented without overstating
                what is still being documented.
              </p>
            </div>
          </Reveal>

          <PortfolioPreview />
        </div>
      </section>

      <section className="home-section studio-philosophy premium-section" aria-labelledby="studio-philosophy-title">
        <div className="home-section__inner">
          <Reveal variant="fade">
            <div className="studio-philosophy__rule" aria-hidden="true" />
          </Reveal>
          <Reveal className="studio-philosophy__grid">
            <p className="home-label">Studio Philosophy</p>
            <div>
              <h2 className="home-heading home-heading--statement" id="studio-philosophy-title">
                <EditorialHeading
                  lines={["Great Design Earns Trust", "Before It Demands Attention."]}
                />
              </h2>
              <div className="studio-philosophy__copy">
                <p>
                  NAVARICK exists for businesses that need their presence to feel as considered as
                  their ambition.
                </p>
                <p>
                  We believe the strongest work is clear before it is expressive. Strategy gives the
                  brand direction; craft gives it memory.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section capabilities premium-section" id="services" aria-labelledby="capabilities-title">
        <div className="home-section__inner">
          <Reveal className="home-section__intro home-section__intro--split">
            <p className="home-label">Capabilities</p>
            <div>
              <h2 className="home-heading" id="capabilities-title">
                <EditorialHeading lines={["Focused Disciplines", "Built to Work Together."]} />
              </h2>
            </div>
          </Reveal>

          <div className="capabilities__list">
            {services.map((service, index) => (
              <Reveal className="capability-row" key={service.id}>
                <span className="capability-row__index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section process premium-section" aria-labelledby="process-title">
        <div className="home-section__inner">
          <Reveal className="home-section__intro home-section__intro--split">
            <p className="home-label">Process</p>
            <div>
              <h2 className="home-heading" id="process-title">
                <EditorialHeading lines={["Understanding First.", "Expression Second."]} />
              </h2>
            </div>
          </Reveal>

          <ol className="process__timeline">
            {processStages.map((stage, index) => (
              <li className="process-stage" key={stage.title}>
                <Reveal>
                  <span className="process-stage__number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-section final-cta premium-section" id="contact" aria-labelledby="final-cta-title">
        <div className="home-section__inner">
          <Reveal className="final-cta__panel">
            <p className="home-label">Start the conversation</p>
            <h2 className="home-heading home-heading--statement" id="final-cta-title">
              <EditorialHeading lines={["Let's Create Something", "Worth Remembering."]} />
            </h2>
            <p>
              Bring the ambition, the uncertainty, or the thing that no longer feels right. We will
              help give it form.
            </p>
            <div className="final-cta__actions">
              <Link className="final-cta__primary focus-ring" href="/contact">
                <span>Start a Project</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
              <Link className="home-arrow-link focus-ring" href="#work">
                <span>View Selected Work</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
