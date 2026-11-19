import { Countdown } from "./Countdown";
import { wedding } from "../lib/wedding";
import { scene } from "../lib/scene";
export default function Story() {
  return (
    <section className="memory letter">
      <details className="personal-letter">
        <summary>
          <span className="crest">
            {wedding.card.names.map((n) => n[0]).join(" & ")}
          </span>{" "}
          Read our letter <span aria-hidden="true">↓</span>
        </summary>
        <div className="memory-copy">
          <p className="small-head">{scene.storyLabel}</p>
          <h2>{wedding.storyTitle}</h2>
          <p>{wedding.story}</p>
        </div>
      </details>
      <aside className="timepiece">
        <p className="small-head">Until the wedding</p>
        <Countdown date={wedding.card.isoDate} />
      </aside>
    </section>
  );
}
