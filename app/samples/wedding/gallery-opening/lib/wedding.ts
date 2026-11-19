export const wedding = {
  inquiryWhatsApp: "94773312721",
  card: {
    occasion: "wedding",
    slug: "gallery-opening",
    title: "Gallery Opening",
    category: "Contemporary",
    description:
      "A private-viewing card with a mounted portrait and asymmetric typography.",
    names: ["Neha", "Ravi"],
    paper: "#f2ece4",
    ink: "#292a37",
    accent: "#584db0",
    stage: "#c4bfd6",
    date: "3 July 2027",
    isoDate: "2027-07-03T15:00:00+05:30",
    venue: "Tangerine Beach Hotel",
    location: "Kalutara, Sri Lanka",
    ceremony: "Wedding ceremony",
    samplePhoto: "chapel-romance",
    previewImage: "/design-previews/gallery-opening.webp",
  },
  opening: "A private viewing",
  heroCaption: "With our families",
  storyTitle: "The opening night",
  story:
    "We spoke for the first time in front of the same painting. Neither of us remembers its title, but we both remember the conversation.",
  heroImage: "/weddings/chapel-romance.webp",
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
      src: "/weddings/chapel-romance.webp",
      alt: "Portrait of the sample couple",
    },
  ],
} as const;
