export const colorTokens = {
  obsidian950: "#070706",
  obsidian900: "#0D0D0C",
  charcoal800: "#181816",
  charcoal700: "#24221F",
  bronze500: "#A8733A",
  bronze400: "#C08A4A",
  champagne300: "#D8C29A",
  champagne200: "#E7D8BB",
  chrome300: "#BFC3C5",
  chrome100: "#E3E5E5",
  softWhite: "#F2F0EB",
  mutedGray: "#9A9892",
  quietGray: "#696762",
  signalRed: "#C45A4A",
  signalGreen: "#78906B",
} as const;

export const semanticColorTokens = {
  canvas: "obsidian950",
  canvasTonal: "obsidian900",
  surface: "charcoal800",
  surfaceStrong: "charcoal700",
  textPrimary: "softWhite",
  textSecondary: "mutedGray",
  textDisabled: "quietGray",
  accent: "bronze500",
  accentActive: "bronze400",
  action: "champagne300",
  actionSubtle: "champagne200",
  metadata: "chrome300",
  specular: "chrome100",
  error: "signalRed",
  success: "signalGreen",
} as const;

export const spacingTokens = [
  4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 240,
] as const;

export const layoutTokens = {
  containerMax: 1600,
  desktop: { columns: 12, margin: 64, gutter: 24 },
  laptop: { columns: 12, margin: 32, gutter: 20 },
  tablet: { columns: 8, margin: 24, gutter: 20 },
  mobile: { columns: 4, margin: 20, gutter: 16 },
  reading: { narrow: 560, standard: 720, wide: 840 },
  section: { mobile: 80, compactMobile: 64, desktop: 160, compactDesktop: 128 },
  cinematicPause: { mobile: 96, desktop: 240 },
} as const;

export const radiusTokens = {
  none: "0",
  input: "4px",
  control: "4px",
  navigation: "10px",
  pill: "999px",
} as const;

export const borderTokens = {
  default: "rgb(242 240 235 / 12%)",
  strong: "rgb(242 240 235 / 22%)",
  chrome: "rgb(227 229 229 / 14%)",
} as const;

const typeRole = (
  desktopSize: number,
  mobileSize: number,
  lineHeight: number,
  weight: number,
  tracking = "0",
) => ({
  desktop: { size: desktopSize, lineHeight },
  mobile: { size: mobileSize, lineHeight },
  weight,
  tracking,
});

export const typographyTokens = {
  hero: typeRole(112, 58, 0.92, 500, "-0.05em"),
  page: typeRole(104, 48, 0.94, 500, "-0.04em"),
  editorial: typeRole(96, 52, 0.96, 400, "-0.02em"),
  h1: typeRole(72, 42, 1, 500, "-0.035em"),
  h2: typeRole(48, 34, 1.05, 500, "-0.025em"),
  h3: typeRole(30, 26, 1.15, 500, "-0.015em"),
  subheading: typeRole(22, 19, 1.35, 500, "-0.01em"),
  bodyLarge: typeRole(20, 18, 1.5, 400),
  body: typeRole(16, 16, 1.6, 400),
  bodyStrong: typeRole(16, 16, 1.55, 600),
  caption: typeRole(14, 14, 1.45, 400, "0.01em"),
  navigation: typeRole(14, 16, 1.2, 500),
  label: typeRole(12, 12, 1.2, 500, "0.12em"),
  micro: typeRole(11, 11, 1.3, 500, "0.08em"),
} as const;

export type ColorToken = keyof typeof colorTokens;
export type SemanticColorToken = keyof typeof semanticColorTokens;
export type TypographyRole = keyof typeof typographyTokens;
