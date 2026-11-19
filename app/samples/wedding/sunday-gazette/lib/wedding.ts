export const wedding = {
  inquiryWhatsApp: "94773312721",
  card: {
    occasion: "wedding",
    slug: "sunday-gazette",
    title: "Sunday Gazette",
    category: "Editorial",
    description:
      "A newspaper masthead and monochrome portrait lead into the afternoon edition.",
    names: ["Meera", "Ishan"],
    paper: "#f4f0e5",
    ink: "#242821",
    accent: "#9c4a37",
    stage: "#c5c2ad",
    date: "3 April 2027",
    isoDate: "2027-04-03T15:00:00+05:30",
    venue: "Galle Face Hotel",
    location: "Colombo, Sri Lanka",
    ceremony: "Wedding ceremony",
    samplePhoto: "champagne-seal",
    previewImage: "/design-previews/sunday-gazette.webp",
  },
  opening: "The Sunday Edition",
  heroCaption: "With our families",
  storyTitle: "A date worth printing",
  story:
    "On Sunday mornings we traded the arts pages across a café table. This is the date we finally get to put in print.",
  heroImage: "/weddings/champagne-seal.webp",
  music: "/weddings/maroon-garden/music/sample1.mp3",
  rsvpTitle: "Kindly reply",
  rsvpPrompt: "Let us know who will be joining our celebration.",
  schedule: [
    {
      time: "3:00 PM",
      title: "Wedding ceremony",
    },
    {
      time: "4:00 PM",
      title: "Family portraits",
    },
    {
      time: "5:00 PM",
      title: "Reception",
    },
  ],
  gallery: [
    {
      src: "/weddings/champagne-seal.webp",
      alt: "Portrait of the sample couple",
    },
  ],
} as const;
