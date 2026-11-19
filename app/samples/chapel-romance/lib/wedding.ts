export const wedding = {
  card: {
    slug: "chapel-romance", title: "Chapel Romance", category: "Church",
    description: "Soft ivory and rose with room for the church service and reception.",
    names: ["Elena", "Daniel"], paper: "#fbefec", ink: "#632c3b", accent: "#a46574", stage: "#ead7db",
    date: "9 January 2027", isoDate: "2027-01-09T16:00:00+05:30",
    venue: "St. Mary’s Church", location: "Negombo, Sri Lanka", ceremony: "Nuptial Mass",
  },
  opening: "With grateful hearts",
  heroCaption: "The marriage of",
  storyTitle: "A Sunday in January",
  story: "Elena and Daniel met while arranging flowers for a Sunday service. This January, they will walk down the same aisle with their families beside them.",
  heroImage: "/weddings/chapel-romance.webp",
  music: "/weddings/maroon-garden/music/sample1.mp3",
  rsvpTitle: "A seat at our table",
  rsvpPrompt: "Please share your reply for the service and reception.",
  schedule: [
    { time: "4:00 PM", title: "Nuptial Mass" },
    { time: "4:45 PM", title: "Church portraits" },
    { time: "6:00 PM", title: "Wedding reception" },
  ],
  gallery: [
    { src: "/weddings/maroon-garden/photos/image6.webp", alt: "Wedding gallery photograph 1" },
    { src: "/weddings/maroon-garden/photos/image7.webp", alt: "Wedding gallery photograph 2" },
    { src: "/weddings/maroon-garden/photos/image4.webp", alt: "Wedding gallery photograph 3" },
  ],
} as const;
