import { Countdown } from "../../../../../components/countdown";
import { wedding } from "../lib/wedding";

export default function Story() {
  return (
    <section className="section">
      <h2>{wedding.storyTitle}</h2>
      <p className="max-w-prose leading-8">{wedding.story}</p>
      <div className="mt-8 max-w-md"><Countdown date={wedding.card.isoDate} /></div>
    </section>
  );
}
