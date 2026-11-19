import { homecoming } from "../app/samples/homecoming/burgundy-homecoming/lib/homecoming";
import { wedding as summer } from "../app/samples/wedding/summer-garden/lib/wedding";
import { wedding as maroonWedding } from "../app/samples/wedding/maroon-garden/lib/wedding";
import { wedding as champagneWedding } from "../app/samples/wedding/champagne-seal/lib/wedding";
import { wedding as gardenWedding } from "../app/samples/wedding/garden-poruwa/lib/wedding";
import { wedding as chapelWedding } from "../app/samples/wedding/chapel-romance/lib/wedding";
import { wedding as velvetWedding } from "../app/samples/homecoming/velvet-homecoming/lib/wedding";
import { wedding as autumnWedding } from "../app/samples/wedding/autumn-seal/lib/wedding";

export const templates = [
  champagneWedding.card,
  gardenWedding.card,
  chapelWedding.card,
  velvetWedding.card,
  {
    occasion: "wedding", slug: "maroon-lace", title: "Maroon Lace", category: "Church",
    description: "Maroon florals, a gold-trimmed lace frame, and a ceremony-to-reception timeline.",
    names: [maroonWedding.groom, maroonWedding.bride], paper: "#fbf5ec", ink: "#6b1d2d", accent: "#b48e57", stage: "#ddbec6",
    date: maroonWedding.dateLabel, isoDate: maroonWedding.dateISO,
    venue: maroonWedding.venues.church.name, location: maroonWedding.venues.church.place, ceremony: maroonWedding.schedule[0].title,
    samplePhoto: "chapel-romance", design: "lace",
  },
  autumnWedding.card,
  {
    occasion: "wedding", slug: "summer-garden", title: "Summer Garden", category: "Traditional",
    description: "A terracotta envelope unfolds into a sunlit garden invitation with falling leaves.",
    names: [summer.bride, summer.groom], paper: "#f4ede1", ink: "#3d2b24", accent: "#b96f52", stage: "#eddfcb",
    date: summer.dateLabel, isoDate: summer.dateISO, venue: summer.ceremony.name,
    location: summer.ceremony.address, ceremony: "Poruwa Ceremony", design: "envelope", samplePhoto: "garden-poruwa",
  },
  {
    occasion: "homecoming", slug: "burgundy-homecoming", title: "Burgundy Homecoming", category: "Homecoming",
    description: "A personal greeting opens onto gold-edged burgundy reception stationery.",
    names: [homecoming.bride, homecoming.groom], paper: "#300b19", ink: "#f7eedc", accent: "#c9a44c", stage: "#d8b79e",
    date: homecoming.dateLabel, isoDate: homecoming.dateISO, venue: homecoming.venue,
    location: homecoming.address, ceremony: "Homecoming Reception", samplePhoto: "velvet-homecoming",
  },
] as const;

export type Invitation = (typeof templates)[number];

export function invitationPhoto(template: Invitation) {
  if (template.slug === "maroon-lace") return "/weddings/maroon-garden/photos/hero.png";
  return `/weddings/${"samplePhoto" in template ? template.samplePhoto : template.slug}.webp`;
}

export const occasions = [
  { key: "wedding", title: "Weddings", description: "Ceremony, reception and the story that brought you here." },
  { key: "homecoming", title: "Homecomings", description: "Welcome family and friends to your reception." },
  { key: "birthdays", title: "Birthdays", description: "Tell us the theme, from a first birthday to a milestone party." },
  { key: "office-parties", title: "Office Parties", description: "Bring the team together for dinner, awards or a year-end celebration." },
] as const;

export function occasionOf(template: Invitation) {
  return template.occasion;
}

export function sampleHref(slug: Invitation["slug"]) {
  const template = templates.find(item => item.slug === slug)!;
  const folder = slug === "maroon-lace" ? "maroon-garden" : slug;
  return `/samples/${occasionOf(template)}/${folder}/`;
}
