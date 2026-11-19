export const wedding = {
  inquiryWhatsApp: "94773312721",
  card: {
    occasion: "wedding",
    slug: "coast-post",
    title: "Coast Post",
    category: "Destination",
    description:
      "A photographic postcard with a handwritten-style greeting and destination details.",
    names: ["Nila", "Aran"],
    paper: "#eef2eb",
    ink: "#17423f",
    accent: "#b64a31",
    stage: "#c5ddd7",
    date: "10 April 2027",
    isoDate: "2027-04-10T15:00:00+05:30",
    venue: "Jetwing Lighthouse",
    location: "Galle, Sri Lanka",
    ceremony: "Wedding ceremony",
    samplePhoto: "chapel-romance",
    previewImage: "/design-previews/coast-post.webp",
  },
  opening: "A postcard from the coast",
  heroCaption: "With our families",
  storyTitle: "Wish you were here",
  story:
    "A delayed train gave us an afternoon on the coast. We walked until sunset and have returned to that stretch of beach every year since.",
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
