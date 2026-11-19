export const wedding = {
  inquiryWhatsApp: "94773312721",
  card: {
    occasion: "wedding",
    slug: "garden-poruwa", title: "Garden Poruwa", category: "Traditional",
    description: "Botanical greens and gold for a traditional Poruwa celebration.",
    names: ["Ishara", "Devin"], paper: "#eff0dc", ink: "#304530", accent: "#77824d", stage: "#d5dfcb",
    date: "19 December 2026", isoDate: "2026-12-19T16:00:00+05:30",
    venue: "Water’s Edge", location: "Battaramulla, Sri Lanka", ceremony: "Poruwa Ceremony",
  },
  opening: "Beneath the garden canopy",
  heroCaption: "Together with our families",
  storyTitle: "Where our paths crossed",
  story: "Ishara and Devin first met on a Sunday walk. One walk turned into a weekly ritual, and the garden became the place they chose for their Poruwa ceremony.",
  heroImage: "/weddings/garden-poruwa.webp",
  music: "/weddings/maroon-garden/music/sample1.mp3",
  rsvpTitle: "Join us in the garden",
  rsvpPrompt: "Let us know who will be joining our celebration.",
  schedule: [
    { time: "4:00 PM", title: "Poruwa ceremony" },
    { time: "4:45 PM", title: "Blessings from our families" },
    { time: "6:00 PM", title: "Garden reception" },
  ],
  gallery: [
    { src: "/weddings/maroon-garden/photos/image5.webp", alt: "Wedding gallery photograph 1" },
    { src: "/weddings/maroon-garden/photos/image6.webp", alt: "Wedding gallery photograph 2" },
    { src: "/weddings/maroon-garden/photos/image7.webp", alt: "Wedding gallery photograph 3" },
  ],
} as const;
