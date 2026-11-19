export const wedding = {
  card: {
    occasion: "homecoming",
    slug: "velvet-homecoming", title: "Velvet Homecoming", category: "Homecoming",
    description: "Burgundy and candlelight for an evening homecoming reception.",
    names: ["Maya", "Rohan"], paper: "#481e30", ink: "#fae5d6", accent: "#dcb28f", stage: "#e1cbd3",
    date: "16 January 2027", isoDate: "2027-01-16T16:00:00+05:30",
    venue: "Galle Face Hotel", location: "Colombo, Sri Lanka", ceremony: "Homecoming Reception",
  },
  opening: "You are invited for the evening",
  heroCaption: "An evening with",
  storyTitle: "Coming home",
  story: "After years of travelling between cities, Maya and Rohan are coming home to Colombo. They have saved a dance for everyone who made the journey with them.",
  heroImage: "/weddings/velvet-homecoming.webp",
  music: "/weddings/maroon-garden/music/sample1.mp3",
  rsvpTitle: "On the guest list",
  rsvpPrompt: "Send your reply for an evening of dinner and dancing.",
  schedule: [
    { time: "4:00 PM", title: "Homecoming reception" },
    { time: "4:45 PM", title: "Dinner and toasts" },
    { time: "6:00 PM", title: "First dance" },
  ],
  gallery: [
    { src: "/weddings/maroon-garden/photos/image7.webp", alt: "Wedding gallery photograph 1" },
    { src: "/weddings/maroon-garden/photos/image4.webp", alt: "Wedding gallery photograph 2" },
    { src: "/weddings/maroon-garden/photos/image5.webp", alt: "Wedding gallery photograph 3" },
  ],
} as const;
