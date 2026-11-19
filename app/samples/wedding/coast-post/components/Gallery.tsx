"use client";
import { useState } from "react";
import { wedding } from "../lib/wedding";
import { scene } from "../lib/scene";
const memories = [
  ...wedding.gallery.map((p, i) => ({
    src: p.src,
    alt: p.alt,
    label: "Portrait " + (i + 1),
  })),
  {
    src: scene.art,
    alt: "Illustration for " + wedding.card.title,
    label: "Invitation artwork",
  },
];
export default function Gallery() {
  const [index, select] = useState(0);
  const current = memories[index];
  return (
    <section className="collection voyage">
      <div className="gallery-caption">
        <h2>Postcards</h2>
        <p aria-live="polite">
          {current.label} · {index + 1} / {memories.length}
        </p>
      </div>
      <figure>
        <img
          key={current.src}
          src={current.src}
          loading="lazy"
          alt={current.alt}
        />
      </figure>
      <div className="frames" role="group" aria-label="Choose a keepsake">
        {memories.map((m, i) => (
          <button
            key={m.src}
            aria-pressed={index === i}
            type="button"
            onClick={() => select(i)}
          >
            <img src={m.src} alt="" loading="lazy" />
            <span>{m.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
