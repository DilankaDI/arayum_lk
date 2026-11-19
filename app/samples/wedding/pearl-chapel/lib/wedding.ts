export const wedding = {
  inquiryWhatsApp: "94773312721",
  card: {
    occasion: "wedding",
    slug: "pearl-chapel",
    title: "Pearl Chapel",
    category: "Church",
    description:
      "A lancet-window portrait and cool ivory paper introduce the church service.",
    names: ["Clara", "Jude"],
    paper: "#f4f2ed",
    ink: "#394653",
    accent: "#718391",
    stage: "#ced2d5",
    date: "29 May 2027",
    isoDate: "2027-05-29T15:00:00+05:30",
    venue: "St. Mary’s Church",
    location: "Negombo, Sri Lanka",
    ceremony: "Nuptial Mass",
    samplePhoto: "chapel-romance",
    previewImage: "/design-previews/pearl-chapel.webp",
  },
  opening: "A service of marriage",
  heroCaption: "With our families",
  storyTitle: "The last hymn",
  story:
    "We met in the choir loft while putting the hymn books away. This time, we will be walking down the aisle together.",
  heroImage: "/weddings/chapel-romance.webp",
  music: "/weddings/maroon-garden/music/sample1.mp3",
  rsvpTitle: "Kindly reply",
  rsvpPrompt: "Let us know who will be joining our celebration.",
  schedule: [
    {
      time: "3:00 PM",
      title: "Nuptial Mass",
    },
    {
      time: "4:00 PM",
      title: "Blessings and the recessional",
    },
    {
      time: "4:30 PM",
      title: "Family photographs",
    },
  ],
  gallery: [
    {
      src: "/weddings/chapel-romance.webp",
      alt: "Portrait of the sample couple",
    },
  ],
} as const;
