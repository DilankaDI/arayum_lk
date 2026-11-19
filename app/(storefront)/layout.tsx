import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArayumLK | Digital Event Invitations in Sri Lanka",
  description: "Browse digital event invitation designs and live demos. ArayumLK personalizes your invitation with your events, photos and WhatsApp RSVP.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="bg-paper font-sans text-ink antialiased">{children}</body></html>;
}
