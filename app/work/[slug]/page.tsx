import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { EditorialHeading, Reveal } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import type { Project, ProjectMedia } from "@/types";
import {
  formatProjectDisciplines,
  formatProjectYear,
  getNextProject,
  getProjectBySlug,
  getPublishedProjects,
} from "@/lib/portfolio";
import { createMetadata, createProjectMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd, createProjectJsonLd } from "@/lib/structured-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const caseSections = [
  ["Overview", "overview"],
  ["Challenge", "challenge"],
  ["Approach", "strategy"],
  ["Creative Direction", "creativeDirection"],
  ["Execution", "digitalExperience"],
  ["Outcome", "outcome"],
] as const;

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Case Study - NAVARICK",
      description: "The requested NAVARICK case study could not be found.",
      path: "/work",
      robots: { index: false, follow: true },
    });
  }

  return createProjectMetadata(project);
}

function CaseStudyVisual({
  label,
  media,
  priority = false,
  fit = "cover",
}: {
  label: string;
  media?: ProjectMedia | null;
  priority?: boolean;
  fit?: "contain" | "cover";
}) {
  return (
    <figure className="case-visual case-visual--system case-visual--wide">
      {media ? (
        <div className="case-visual__stage">
          <Image
            alt={media.alt}
            className={`portfolio-image portfolio-image--${fit}`}
            fill
            priority={priority}
            quality={priority ? 82 : 72}
            sizes={priority ? "(max-width: 768px) 100vw, 88vw" : "(max-width: 768px) 100vw, 78vw"}
            src={media.src}
          />
        </div>
      ) : (
        <div aria-label={label} className="case-visual__stage" role="img">
          <span className="case-visual__glow" aria-hidden="true" />
          <span className="case-visual__frame" aria-hidden="true" />
          <span className="case-visual__system" aria-hidden="true" />
        </div>
      )}
      <figcaption>{media ? label : "Approved project media will appear here when available."}</figcaption>
    </figure>
  );
}

function usesLogoContain(project: Project) {
  return project.disciplines.includes("Logo Design") && !project.disciplines.includes("Website Design");
}

function NextProjectVisual({ project }: { project: Project }) {
  return (
    <figure className="case-visual case-visual--system case-visual--wide">
      <div className="case-visual__stage">
        {project.cover ? (
          <Image
            alt={project.cover.alt}
            className={`portfolio-image portfolio-image--${usesLogoContain(project) ? "contain" : "cover"}`}
            fill
            quality={72}
            sizes="(max-width: 768px) 100vw, 58vw"
            src={project.cover.src}
          />
        ) : (
          <>
            <span className="case-visual__glow" aria-hidden="true" />
            <span className="case-visual__frame" aria-hidden="true" />
            <span className="case-visual__system" aria-hidden="true" />
          </>
        )}
      </div>
    </figure>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  return (
    <main className="case-page" id="main-content">
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.title, path: `/work/${project.slug}` },
          ]),
          createProjectJsonLd(project),
        ]}
      />
      <section className="case-hero premium-section" aria-labelledby="case-title">
        <div className="case-shell">
          <Reveal className="case-hero__intro">
            <p className="case-label">Case study / {project.client}</p>
            <h1 id="case-title">
              <EditorialHeading lines={[project.title]} />
            </h1>
            <p>{project.summary}</p>
          </Reveal>

          <Reveal>
            <dl className="case-facts">
              <div>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{project.sector}</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>{formatProjectDisciplines(project)}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{formatProjectYear(project)}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal>
            <CaseStudyVisual
              fit={usesLogoContain(project) ? "contain" : "cover"}
              label={`${project.client} project cover image`}
              media={project.cover}
              priority
            />
          </Reveal>
        </div>
      </section>

      {caseSections.map(([title, key], index) => (
        <section
          aria-labelledby={`${key}-title`}
          className={index === 0 ? "case-overview premium-section" : "case-chapter premium-section"}
          id={key}
          key={key}
        >
          <div className={index === 0 ? "case-shell case-overview__grid" : "case-shell"}>
            <Reveal className={index === 0 ? undefined : "case-chapter__header"}>
              <p className="case-label">{String(index + 1).padStart(2, "0")} / {title}</p>
              <h2 id={`${key}-title`}>
                <EditorialHeading lines={[title]} />
              </h2>
            </Reveal>
            <Reveal className={index === 0 ? "case-overview__content" : "case-copy"}>
              <p>{project[key]}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="case-chapter premium-section" id="gallery" aria-labelledby="gallery-title">
        <div className="case-shell">
          <Reveal className="case-chapter__header">
            <p className="case-label">07 / Gallery</p>
            <h2 id="gallery-title">
              <EditorialHeading lines={["Gallery"]} />
            </h2>
          </Reveal>
          <Reveal className="case-media-stack">
            {project.gallery.length > 0 ? (
              project.gallery.map((item) => (
                <CaseStudyVisual
                  fit={usesLogoContain(project) ? "contain" : "cover"}
                  label={item.alt}
                  key={item.src}
                  media={item}
                />
              ))
            ) : (
              <CaseStudyVisual label={`${project.title} approved gallery media`} />
            )}
          </Reveal>
        </div>
      </section>

      {nextProject ? (
        <section className="case-next premium-section" aria-labelledby="next-project-title">
          <div className="case-shell case-next__grid">
            <Reveal>
              <Link
                aria-label={`View next project, ${nextProject.title}`}
                className="case-next__media focus-ring"
                href={`/work/${nextProject.slug}`}
              >
                <NextProjectVisual project={nextProject} />
              </Link>
            </Reveal>
            <Reveal className="case-next__content">
              <p className="case-label">Next project</p>
              <h2 id="next-project-title">{nextProject.title}</h2>
              <p>{nextProject.excerpt}</p>
              <Link className="case-link focus-ring" href={`/work/${nextProject.slug}`}>
                <span>Next Project</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="case-contact premium-section" aria-labelledby="case-contact-title">
        <div className="case-shell case-contact__grid">
          <Reveal>
            <p className="case-label">Start a project</p>
            <h2 id="case-contact-title">
              <EditorialHeading lines={["Have something", "worth shaping well?"]} />
            </h2>
          </Reveal>
          <Reveal className="case-contact__content">
            <p>
              Tell us what you are building, changing, or trying to clarify. We will look at the
              work carefully and suggest the right next step.
            </p>
            <Link className="case-button focus-ring" href="/contact">
              <span>Start a Project</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
