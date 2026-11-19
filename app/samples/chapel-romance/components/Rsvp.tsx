import { SampleRsvp } from "../../../../components/sample-rsvp";
import { wedding } from "../lib/wedding";

export default function Rsvp() {
  return (
    <section className="section">
      <h2>{wedding.rsvpTitle}</h2>
      <p>{wedding.rsvpPrompt}</p>
      <SampleRsvp names={wedding.card.names} />
    </section>
  );
}
