import type { Metadata } from "next";

import { site } from "@/data/site";
import { SITE_URL } from "@/lib/constants";
import type { Project } from "@/types";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
  robots?: Metadata["robots"];
  type?: "website" | "article";
};

const defaultOgImage = {
  alt: "NAVARICK premium creative studio social preview.",
  height: 630,
  src: "/opengraph-image",
  width: 1200,
} as const;

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL);
}

export function createMetadata(input: MetadataInput = {}): Metadata {
  const title = input.title ?? site.title;
  const description = input.description ?? site.description;
  const url = absoluteUrl(input.path ?? "/");
  const image = input.image ?? defaultOgImage;
  const imageUrl = absoluteUrl(image.src);

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: site.name,
    title,
    description,
    icons: {
      icon: [
        {
          rel: "icon",
          sizes: "512x512",
          type: "image/png",
          url: "/brand/navarick-favicon.png",
        },
      ],
      shortcut: "/brand/navarick-favicon.png",
      apple: [
        {
          sizes: "512x512",
          type: "image/png",
          url: "/brand/navarick-favicon.png",
        },
      ],
    },
    keywords: [
      "brand identity design",
      "web design",
      "web development",
      "UI/UX design",
      "creative studio",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: input.type ?? "website",
      locale: "en_US",
      siteName: site.name,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: image.alt,
        },
      ],
    },
    robots: input.robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createProjectMetadata(project: Project): Metadata {
  return createMetadata({
    title: `${project.title} Case Study - NAVARICK`,
    description: project.excerpt || project.summary,
    path: `/work/${project.slug}`,
    image: project.cover
      ? {
          alt: project.cover.alt,
          height: project.cover.height,
          src: project.cover.src,
          width: project.cover.width,
        }
      : undefined,
    type: "article",
  });
}
