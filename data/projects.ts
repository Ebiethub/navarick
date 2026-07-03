import type { Project } from "@/types";

const placeholderCopy = {
  overview:
    "A portfolio entry assembled from available project imagery. Client context, scope, and launch notes can be added when confirmed.",
  challenge:
    "The full project background is still being documented. This presentation focuses on the visible design direction and available assets.",
  research:
    "Research notes are not yet available. This section can be replaced once discovery, audience, and market context are confirmed.",
  strategy:
    "Strategic notes are pending. Until then, this section frames the intended direction without claiming results or undocumented decisions.",
  creativeDirection:
    "Creative direction is shown through the available imagery, with emphasis on composition, contrast, hierarchy, and brand feel.",
  identitySystem:
    "System details are still being compiled. Logo, colour, type, interface, and application notes can be expanded as the case study is completed.",
  digitalExperience:
    "Execution notes are pending. Where interface or application images are available, they are shown as visual references rather than performance claims.",
  outcome:
    "Outcome details are still to be confirmed. Results, metrics, testimonials, and launch claims should be added only when approved.",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "melvbee-vellora-brand-identity",
    title: "Melvbee Vellora Identity System",
    client: "Melvbee Vellora",
    year: null,
    sector: "Brand Identity",
    disciplines: ["Brand Identity", "Logo Design"],
    summary:
      "An identity presentation showing logo applications across merchandise, signage, mobile, and environmental touchpoints.",
    excerpt:
      "A high-contrast identity direction presented through practical brand applications.",
    status: "published",
    featured: true,
    cover: {
      src: "/images/brand-identity/brand-identity-10.webp",
      alt: "Melvbee Vellora brand identity board with logo, apparel, signage, color palette, and mobile mockups.",
      width: 1800,
      height: 1200,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/brand-identity/brand-identity-10.webp",
        alt: "Full Melvbee Vellora identity presentation board.",
        width: 1800,
        height: 1200,
      },
    ],
  },
  {
    slug: "motrion-fitness-brand-identity",
    title: "Motrion Fitness Identity System",
    client: "Motrion Fitness Club",
    year: null,
    sector: "Fitness",
    disciplines: ["Brand Identity", "Logo Design"],
    summary:
      "A fitness identity direction built around strong contrast, active colour, and practical branded applications.",
    excerpt:
      "A gym-focused identity presentation shown across apparel, equipment, signage, mobile iconography, and brand assets.",
    status: "published",
    featured: true,
    cover: {
      src: "/images/brand-identity/brand-identity-12.webp",
      alt: "Motrion Fitness Club identity board with gym signage, apparel, bottle, app icon, and logo applications.",
      width: 1800,
      height: 1200,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/brand-identity/brand-identity-12.webp",
        alt: "Full Motrion Fitness Club brand identity presentation board.",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/brand-identity/brand-identity-06.jpg",
        alt: "Fitness brand logo presentation with gym-oriented mockups.",
        width: 1500,
        height: 1000,
      },
    ],
  },
  {
    slug: "mountess-fitness-brand-identity",
    title: "Mountess Fitness Identity System",
    client: "Mountess",
    year: null,
    sector: "Fitness",
    disciplines: ["Brand Identity", "Logo Design"],
    summary:
      "A fitness brand board presenting logo usage, type, colour, campaign graphics, and environmental applications.",
    excerpt:
      "A structured fitness identity direction with bold accent colour and a broad set of applications.",
    status: "published",
    featured: true,
    cover: {
      src: "/images/brand-identity/brand-identity-14.webp",
      alt: "Mountess fitness identity board with logo, color palette, typography, gym wall graphics, and campaign mockups.",
      width: 1800,
      height: 1200,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/brand-identity/brand-identity-14.webp",
        alt: "Full Mountess fitness identity presentation board.",
        width: 1800,
        height: 1200,
      },
    ],
  },
  {
    slug: "peptide-ecommerce-ui-design",
    title: "Peptide Ecommerce Interface",
    client: "Details to be confirmed",
    year: null,
    sector: "Ecommerce",
    disciplines: ["UI/UX Design", "Website Design"],
    summary:
      "A dark ecommerce interface direction for a product-led online store, shown through homepage and supporting screen states.",
    excerpt:
      "A product-led ecommerce interface with premium presentation and a clean content hierarchy.",
    status: "published",
    featured: true,
    cover: {
      src: "/images/uiux-design/uiux-06.jpg",
      alt: "Dark ecommerce website UI for a peptide product store with hero product visuals and supporting page sections.",
      width: 735,
      height: 551,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/uiux-design/uiux-06.jpg",
        alt: "Peptide ecommerce website UI presentation.",
        width: 735,
        height: 551,
      },
      {
        src: "/images/uiux-design/uiux-07.jpg",
        alt: "Fashion ecommerce UI reference with product-led page sections.",
        width: 736,
        height: 1104,
      },
    ],
  },
  {
    slug: "smart-home-website-design",
    title: "Smart Home Website Direction",
    client: "Details to be confirmed",
    year: null,
    sector: "Technology",
    disciplines: ["Website Design", "UI/UX Design"],
    summary:
      "A product-led website direction with a cinematic hero and restrained interface structure.",
    excerpt:
      "A dark website composition with editorial spacing and a focused first-screen experience.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/website-design/website-05.jpg",
      alt: "Dark product website design with a superbike hero, navigation, and minimal editorial layout.",
      width: 735,
      height: 575,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/website-design/website-05.jpg",
        alt: "Premium product website design reference.",
        width: 735,
        height: 575,
      },
      {
        src: "/images/website-design/website-07.jpg",
        alt: "Fashion website design reference with clean ecommerce composition.",
        width: 736,
        height: 552,
      },
    ],
  },
  {
    slug: "fashion-logo-design",
    title: "Fashion Wordmark Direction",
    client: "Details to be confirmed",
    year: null,
    sector: "Fashion and Beauty",
    disciplines: ["Logo Design", "Brand Identity"],
    summary:
      "A logo-focused portfolio entry using available identity and wordmark presentation assets.",
    excerpt:
      "A refined wordmark direction for a fashion or beauty brand, ready for fuller project notes.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/logo-design/logo-21.webp",
      alt: "Elegant fashion wordmark logo design presentation for a ready-to-wear brand.",
      width: 736,
      height: 736,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/logo-design/logo-21.webp",
        alt: "Fashion wordmark logo design presentation.",
        width: 736,
        height: 736,
      },
      {
        src: "/images/logo-design/logo-32.jpg",
        alt: "Luxury gold logo mockup for beauty industry branding.",
        width: 736,
        height: 920,
      },
    ],
  },
  {
    slug: "alura-interiors-logo-design",
    title: "Alura Interiors Wordmark",
    client: "Alura Interiors",
    year: null,
    sector: "Interior Design",
    disciplines: ["Logo Design", "Brand Identity"],
    summary:
      "A monochrome wordmark presentation with an editorial interior design feel.",
    excerpt:
      "A minimal wordmark direction with a high-contrast brand presentation.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/logo-design/logo-02.webp",
      alt: "Alura Interiors monochrome wordmark logo presentation.",
      width: 1280,
      height: 738,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/logo-design/logo-02.webp",
        alt: "Alura Interiors logo design presentation.",
        width: 1280,
        height: 738,
      },
    ],
  },
  {
    slug: "astoria-logo-design",
    title: "Astoria Logo Direction",
    client: "Astoria",
    year: null,
    sector: "Interior and Decor",
    disciplines: ["Logo Design", "Brand Identity"],
    summary:
      "A logo presentation using serif typography, ornate detailing, and a deep green brand field.",
    excerpt:
      "A restrained logo direction with serif typography and a champagne-on-green presentation.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/logo-design/logo-33.webp",
      alt: "Astoria luxury logo design with gold typography on a deep green background.",
      width: 736,
      height: 1318,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/logo-design/logo-33.webp",
        alt: "Astoria luxury logo design presentation.",
        width: 736,
        height: 1318,
      },
    ],
  },
  {
    slug: "mana-logo-design",
    title: "Mana Wellness Logo",
    client: "Mana",
    year: null,
    sector: "Wellness",
    disciplines: ["Logo Design", "Brand Identity"],
    summary:
      "A wellness logo presentation centred on a soft geometric mark and spacious wordmark.",
    excerpt:
      "A calm logo direction with centred mark composition and restrained colour.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/logo-design/logo-27.webp",
      alt: "Mana self-care logo mark and wordmark in champagne on a deep green background.",
      width: 736,
      height: 1318,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/logo-design/logo-27.webp",
        alt: "Mana logo design presentation.",
        width: 736,
        height: 1318,
      },
    ],
  },
  {
    slug: "skincare-brand-strategy",
    title: "Skincare Brand Direction",
    client: "Details to be confirmed",
    year: null,
    sector: "Beauty and Skincare",
    disciplines: ["Brand Strategy", "Brand Identity"],
    summary:
      "A skincare brand direction shown through available packaging, identity, and visual system references.",
    excerpt:
      "A clean beauty brand presentation with packaging-led identity references and calm structure.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/brand-strategy/brand-strategy-14.jpg",
      alt: "Organic skincare brand design presentation with packaging and identity references.",
      width: 735,
      height: 950,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/brand-strategy/brand-strategy-14.jpg",
        alt: "Organic skincare packaging and brand design reference.",
        width: 735,
        height: 950,
      },
      {
        src: "/images/brand-strategy/brand-strategy-16.jpg",
        alt: "Brand identity board with logo, mockups, and color palette.",
        width: 736,
        height: 1104,
      },
    ],
  },
  {
    slug: "mobile-app-ui-design",
    title: "Mobile App Interface Direction",
    client: "Details to be confirmed",
    year: null,
    sector: "Digital Product",
    disciplines: ["Mobile Apps", "UI/UX Design"],
    summary:
      "A mobile-first interface entry using available app and digital product presentation assets.",
    excerpt:
      "A mobile interface presentation with a dark visual direction and product-focused composition.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/mobile-app/mobile-app-02.jpg",
      alt: "Dark mode mobile UI and landing page presentation for a luxury electric vehicle concept.",
      width: 736,
      height: 1282,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/mobile-app/mobile-app-02.jpg",
        alt: "Dark mobile UI presentation for a luxury electric vehicle concept.",
        width: 736,
        height: 1282,
      },
      {
        src: "/images/mobile-app/mobile-app-01.jpg",
        alt: "Mobile and web interface design presentation with multiple screen states.",
        width: 736,
        height: 1308,
      },
    ],
  },
  {
    slug: "product-design-project",
    title: "Product Presentation Direction",
    client: "Details to be confirmed",
    year: null,
    sector: "Consumer Product",
    disciplines: ["Product Design"],
    summary:
      "A product-focused portfolio entry using available packaging and presentation assets.",
    excerpt:
      "A product presentation with clear feature communication and retail-oriented hierarchy.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/product-design/product-03.jpg",
      alt: "Electric pepper grinder product presentation with rechargeable feature and seasoning use case.",
      width: 736,
      height: 1104,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/product-design/product-03.jpg",
        alt: "Electric pepper grinder product design presentation.",
        width: 736,
        height: 1104,
      },
      {
        src: "/images/product-design/product-04.jpg",
        alt: "Wireless controller product presentation reference.",
        width: 736,
        height: 981,
      },
    ],
  },
  {
    slug: "web-development-project",
    title: "Service Website Development Direction",
    client: "Details to be confirmed",
    year: null,
    sector: "Web Development",
    disciplines: ["Web Development", "Website Design"],
    summary:
      "A development-focused portfolio entry using available website and service-page presentation assets.",
    excerpt:
      "A clean service website presentation, ready for fuller implementation notes.",
    status: "published",
    featured: false,
    cover: {
      src: "/images/web-development/webdev-02.webp",
      alt: "Dental services website template with service sections and professional web layout.",
      width: 736,
      height: 1104,
    },
    ...placeholderCopy,
    gallery: [
      {
        src: "/images/web-development/webdev-02.webp",
        alt: "Dental services website development presentation.",
        width: 736,
        height: 1104,
      },
      {
        src: "/images/web-development/webdev-07.webp",
        alt: "Industrial metal roofing website design presentation.",
        width: 736,
        height: 1104,
      },
    ],
  },
];
