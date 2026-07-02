import { site } from "@/data/site";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants";
import type { Project } from "@/types";

function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

function organizationId() {
  return `${SITE_URL}/#organization`;
}

function websiteId() {
  return `${SITE_URL}/#website`;
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId(),
    name: site.name,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description: site.description,
    serviceType: [
      "Brand Identity Design",
      "Web Design",
      "Web Development",
      "UI/UX Design",
    ],
    sameAs: [site.social.facebook.href],
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: site.name,
    url: SITE_URL,
    description: site.description,
    publisher: {
      "@id": organizationId(),
    },
  };
}

export function createBreadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/work/${project.slug}`)}#creative-work`,
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: absoluteUrl(`/work/${project.slug}`),
    image: project.cover ? absoluteUrl(project.cover.src) : undefined,
    creator: {
      "@id": organizationId(),
    },
    genre: project.sector,
    keywords: project.disciplines.join(", "),
  };
}
