import type { Service } from "@/types";

export const services = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    shortTitle: "Brand identity",
    description:
      "Identity systems that make a business easier to recognise, trust, and choose.",
    outcomes: ["Recognition", "Positioning", "Brand memory"],
  },
  {
    id: "web-design",
    title: "Web Design",
    shortTitle: "Web design",
    description:
      "Websites that turn a brand's value into a clear, credible digital presence.",
    outcomes: ["Clarity", "Usability", "Conversion"],
  },
  {
    id: "web-development",
    title: "Web Development",
    shortTitle: "Development",
    description:
      "Front-end builds that protect the design, load quickly, and scale cleanly.",
    outcomes: ["Performance", "Maintainability", "Launch readiness"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    description:
      "Interfaces that reduce friction and help people move with confidence.",
    outcomes: ["Reduced friction", "Clear journeys", "Product confidence"],
  },
] as const satisfies readonly Service[];
