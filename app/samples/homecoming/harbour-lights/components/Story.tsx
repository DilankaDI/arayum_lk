import { Countdown } from "./Countdown";
import { wedding } from "../lib/wedding";
import { scene } from "../lib/scene";
export default function Story() {
  return (
    <section className="memory voyage">
      <figure className="memory-photo">
        <img
          src={wedding.heroImage}
          loading="lazy"
          alt={wedding.card.names.join(" and ")}
        />
      </figure>
      <div className="memory-copy">
        <p className="small-head">{scene.storyLabel}</p>
        <h2>{wedding.storyTitle}</h2>
        <p>{wedding.story}</p>
      </div>
      <aside className="timepiece">
        <p className="small-head">Until the evening</p>
        <Countdown date={wedding.card.isoDate} />
      </aside>
    </section>
  );
}
