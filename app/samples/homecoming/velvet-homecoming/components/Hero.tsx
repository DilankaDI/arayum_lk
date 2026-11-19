import { wedding } from "../lib/wedding";
import Atmosphere from "./Atmosphere";
import { scene } from "../lib/scene";
export default function Hero() {
  const { names } = wedding.card;
  return (
    <header className="inside-hero concert">
      <img className="scene-art" src={scene.art} alt="" />{" "}
      <div className="concert-bill">
        <p className="small-head">{wedding.heroCaption}</p>{" "}
        <h1>
          {names[0]} <em>&amp;</em> {names[1]}
        </h1>{" "}
        <span className="rule" aria-hidden="true" />{" "}
        <p className="where">
          <strong>{wedding.card.date}</strong>
          <br />
          {wedding.card.venue} · {wedding.card.location}
        </p>
      </div>
      <Atmosphere />
    </header>
  );
}
