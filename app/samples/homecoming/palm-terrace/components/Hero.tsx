import { wedding } from "../lib/wedding";
import Atmosphere from "./Atmosphere";
import { scene } from "../lib/scene";
export default function Hero() {
  const { names } = wedding.card;
  return (
    <header className="inside-hero supper">
      <div className="supper-image">
        <img className="scene-art" src={scene.art} alt="" />
      </div>
      <div className="menu-title">
        <p className="small-head">{wedding.heroCaption}</p>{" "}
        <h1>
          {names[0]} <em>&amp;</em> {names[1]}
        </h1>{" "}
        <p className="invite-line">
          Invite you to share the evening with their families.
        </p>{" "}
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
