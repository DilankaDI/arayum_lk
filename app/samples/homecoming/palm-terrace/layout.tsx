import type { ReactNode } from "react";
import { wedding } from "./lib/wedding";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/manrope";
import "./palm-terrace.css";

export const metadata = {
  title: wedding.card.names.join(" & ") + " | " + wedding.card.title,
  description: wedding.card.description,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="invitation-sample palm-terrace">{children}</body>
    </html>
  );
}
