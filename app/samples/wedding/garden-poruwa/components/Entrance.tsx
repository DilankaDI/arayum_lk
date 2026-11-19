"use client";

import { useRef, useState, type ReactNode } from "react";

import { wedding } from "../lib/wedding";

export default function Entrance({ children }: { children: ReactNode }) {
  const { names, date } = wedding.card;
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const invitation = useRef<HTMLDivElement>(null);

  function playMusic() {
    void audio.current?.play().catch(() => setPlaying(false));
  }

  return (
    <>
      <audio ref={audio} src={wedding.music} preload="none" loop
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      {opened ? (
        <div ref={invitation} tabIndex={-1} className="invitation-body">
          <button className="music-toggle" type="button" aria-pressed={playing}
            onClick={() => playing ? audio.current?.pause() : playMusic()}>
            {playing ? "Pause music" : "Play music"}
          </button>
          {children}
        </div>
      ) : (
        <section className="invitation-cover">
          <div className="cover-card">
            <span className="monogram" aria-hidden="true">{names.map(name => name[0]).join(" · ")}</span>
            <p className="eyeline">{wedding.opening}</p>
            <h1 className="couple my-5">{names.join(" & ")}</h1>
            <p>{date}</p>
            <button className="open-button" type="button" onClick={() => {
              setOpened(true);
              playMusic();
              requestAnimationFrame(() => invitation.current?.focus());
            }}>Open invitation</button>
          </div>
        </section>
      )}
    </>
  );
}
