import { wedding } from "../lib/wedding";
import Atmosphere from "./Atmosphere";
import { scene } from "../lib/scene";
export default function Hero() {
  const { names } = wedding.card;
  return (
    <header className="inside-hero letter">
      <div className="hand-letter">
        <p className="small-head">{wedding.heroCaption}</p>{" "}
        <h1>
          {names[0]} <em>&amp;</em> {names[1]}
        </h1>{" "}
        <p className="invite-line">
          Invite you to join their families in celebrating their marriage.
        </p>{" "}
        <span className="rule" aria-hidden="true" />{" "}
        <p className="where">
          <strong>{wedding.card.date}</strong>
          <br />
          {wedding.card.venue} · {wedding.card.location}
        </p>
      </div>
      <div className="keepsake">
        <img
          className="couple-photo"
          src={wedding.heroImage}
          alt={names.join(" and ")}
        />
      </div>
      <Atmosphere />
    </header>
  );
}
