export const templates = [
  {
    slug: "champagne-seal", title: "Champagne Seal", category: "Classic",
    description: "Champagne paper, garden portraits, and a classic wax-seal opening.",
    names: ["Amaya", "Kavin"], paper: "#f7ebd9", ink: "#57382b", accent: "#aa784f", stage: "#e9d8c3",
    date: "12 December 2026", isoDate: "2026-12-12T16:00:00+05:30",
    venue: "Tangerine Beach Hotel", location: "Kalutara, Sri Lanka", ceremony: "Wedding Ceremony",
  },
  {
    slug: "garden-poruwa", title: "Garden Poruwa", category: "Traditional",
    description: "Botanical greens and gold for a traditional Poruwa celebration.",
    names: ["Ishara", "Devin"], paper: "#eff0dc", ink: "#304530", accent: "#77824d", stage: "#d5dfcb",
    date: "19 December 2026", isoDate: "2026-12-19T16:00:00+05:30",
    venue: "Water’s Edge", location: "Battaramulla, Sri Lanka", ceremony: "Poruwa Ceremony",
  },
  {
    slug: "chapel-romance", title: "Chapel Romance", category: "Church",
    description: "Soft ivory and rose with room for the church service and reception.",
    names: ["Elena", "Daniel"], paper: "#fbefec", ink: "#632c3b", accent: "#a46574", stage: "#ead7db",
    date: "9 January 2027", isoDate: "2027-01-09T16:00:00+05:30",
    venue: "St. Mary’s Church", location: "Negombo, Sri Lanka", ceremony: "Nuptial Mass",
  },
  {
    slug: "velvet-homecoming", title: "Velvet Homecoming", category: "Homecoming",
    description: "Burgundy and candlelight for an evening homecoming reception.",
    names: ["Maya", "Rohan"], paper: "#481e30", ink: "#fae5d6", accent: "#dcb28f", stage: "#e1cbd3",
    date: "16 January 2027", isoDate: "2027-01-16T16:00:00+05:30",
    venue: "Galle Face Hotel", location: "Colombo, Sri Lanka", ceremony: "Homecoming Reception",
  },
  {
    slug: "maroon-lace", title: "Maroon Lace", category: "Church",
    description: "Maroon florals, a gold-trimmed lace frame, and a ceremony-to-reception timeline.",
    names: ["Nora", "Adrian"], paper: "#fbf5ec", ink: "#6b1d2d", accent: "#b48e57", stage: "#ddbec6",
    date: "13 February 2027", isoDate: "2027-02-13T16:00:00+05:30",
    venue: "St. Lucia’s Cathedral", location: "Colombo, Sri Lanka", ceremony: "Nuptial Mass",
    samplePhoto: "chapel-romance", design: "lace",
    schedule: [["4:00 PM", "Nuptial Mass"], ["5:30 PM", "Family portraits"], ["7:00 PM", "Reception & dinner"]],
  },
  {
    slug: "autumn-seal", title: "Autumn Seal", category: "Traditional",
    description: "Terracotta stationery, a wax-sealed envelope, and an illustrated wedding timeline.",
    names: ["Talia", "Ravi"], paper: "#f7eee3", ink: "#743f32", accent: "#a67558", stage: "#e5c7b1",
    date: "20 February 2027", isoDate: "2027-02-20T16:00:00+05:30",
    venue: "The Blue Water", location: "Wadduwa, Sri Lanka", ceremony: "Poruwa Ceremony",
    samplePhoto: "garden-poruwa", design: "envelope",
    schedule: [["4:00 PM", "Poruwa ceremony"], ["4:45 PM", "Marriage registration"], ["6:00 PM", "Reception & dinner"]],
  },
] as const;

export type Invitation = (typeof templates)[number];

export function invitationPhoto(template: Invitation) {
  return `/weddings/${"samplePhoto" in template ? template.samplePhoto : template.slug}.webp`;
}
