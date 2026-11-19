import { wedding } from "../lib/wedding";

export default function Hero() {
  const { names, date, ceremony } = wedding.card;
  return (
    <header className="hero">
      <img src={wedding.heroImage} alt={ceremony + " invitation artwork"} />
      <div className="hero-copy">
        <p className="eyeline">{wedding.heroCaption}</p>
        <h1 className="couple my-5">{names.join(" & ")}</h1>
        <p>{ceremony} · {date}</p>
      </div>
    </header>
  );
}
