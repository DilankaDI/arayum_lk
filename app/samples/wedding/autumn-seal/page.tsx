import Entrance from "./components/Entrance";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import { inquiryHref } from "./lib/inquiry";
import { wedding } from "./lib/wedding";

export default function InvitationPage() {
  return (
    <main>
      <nav
        className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-bold"
        aria-label="Sample invitation"
      >
        <a href="/templates/">← Templates</a>
        <a href={inquiryHref()}>Choose this design ↗</a>
      </nav>
      <Entrance>
        <Hero />
        <Gallery />
        <Story />
        <Schedule />
        <Rsvp />
        <footer>
          {wedding.card.names.join(" & ")} · {wedding.card.date}
        </footer>
      </Entrance>
    </main>
  );
}
