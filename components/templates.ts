import { wedding as sundayGazette } from "../app/samples/wedding/sunday-gazette/lib/wedding";
import { wedding as coastPost } from "../app/samples/wedding/coast-post/lib/wedding";
import { wedding as jasminePress } from "../app/samples/wedding/jasmine-press/lib/wedding";
import { wedding as midnightAtlas } from "../app/samples/wedding/midnight-atlas/lib/wedding";
import { wedding as teaCountry } from "../app/samples/wedding/tea-country/lib/wedding";
import { wedding as indigoLoom } from "../app/samples/wedding/indigo-loom/lib/wedding";
import { wedding as whiteSpace } from "../app/samples/wedding/white-space/lib/wedding";
import { wedding as cinnamonCourtyard } from "../app/samples/wedding/cinnamon-courtyard/lib/wedding";
import { wedding as pearlChapel } from "../app/samples/wedding/pearl-chapel/lib/wedding";
import { wedding as sunlitCitrus } from "../app/samples/wedding/sunlit-citrus/lib/wedding";
import { wedding as silverExposure } from "../app/samples/wedding/silver-exposure/lib/wedding";
import { wedding as lotusPool } from "../app/samples/wedding/lotus-pool/lib/wedding";
import { wedding as scarletRibbon } from "../app/samples/wedding/scarlet-ribbon/lib/wedding";
import { wedding as galleryOpening } from "../app/samples/wedding/gallery-opening/lib/wedding";
import { wedding as jazzAfterDark } from "../app/samples/homecoming/jazz-after-dark/lib/wedding";
import { wedding as supperClub } from "../app/samples/homecoming/supper-club/lib/wedding";
import { wedding as vinylSocial } from "../app/samples/homecoming/vinyl-social/lib/wedding";
import { wedding as marqueeNight } from "../app/samples/homecoming/marquee-night/lib/wedding";
import { wedding as harbourLights } from "../app/samples/homecoming/harbour-lights/lib/wedding";
import { wedding as palmTerrace } from "../app/samples/homecoming/palm-terrace/lib/wedding";
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
  sundayGazette.card,
  coastPost.card,
  jasminePress.card,
  midnightAtlas.card,
  teaCountry.card,
  indigoLoom.card,
  whiteSpace.card,
  cinnamonCourtyard.card,
  pearlChapel.card,
  sunlitCitrus.card,
  silverExposure.card,
  lotusPool.card,
  scarletRibbon.card,
  galleryOpening.card,
  jazzAfterDark.card,
  supperClub.card,
  vinylSocial.card,
  marqueeNight.card,
  harbourLights.card,
  palmTerrace.card,
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
