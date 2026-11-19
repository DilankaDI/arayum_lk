import { wedding as maroonWedding } from "../app/samples/maroon-garden/lib/wedding";
import { wedding as champagneWedding } from "../app/samples/champagne-seal/lib/wedding";
import { wedding as gardenWedding } from "../app/samples/garden-poruwa/lib/wedding";
import { wedding as chapelWedding } from "../app/samples/chapel-romance/lib/wedding";
import { wedding as velvetWedding } from "../app/samples/velvet-homecoming/lib/wedding";
import { wedding as autumnWedding } from "../app/samples/autumn-seal/lib/wedding";

export const templates = [
  champagneWedding.card,
  gardenWedding.card,
  chapelWedding.card,
  velvetWedding.card,
  {
    slug: "maroon-lace", title: "Maroon Lace", category: "Church",
    description: "Maroon florals, a gold-trimmed lace frame, and a ceremony-to-reception timeline.",
    names: [maroonWedding.groom, maroonWedding.bride], paper: "#fbf5ec", ink: "#6b1d2d", accent: "#b48e57", stage: "#ddbec6",
    date: maroonWedding.dateLabel, isoDate: maroonWedding.dateISO,
    venue: maroonWedding.venues.church.name, location: maroonWedding.venues.church.place, ceremony: maroonWedding.schedule[0].title,
    samplePhoto: "chapel-romance", design: "lace",
  },
  autumnWedding.card,
] as const;

export type Invitation = (typeof templates)[number];

export function invitationPhoto(template: Invitation) {
  if (template.slug === "maroon-lace") return "/weddings/maroon-garden/photos/hero.png";
  return `/weddings/${"samplePhoto" in template ? template.samplePhoto : template.slug}.webp`;
}

export function sampleHref(slug: Invitation["slug"]) {
  return `/samples/${slug === "maroon-lace" ? "maroon-garden" : slug}/`;
}
