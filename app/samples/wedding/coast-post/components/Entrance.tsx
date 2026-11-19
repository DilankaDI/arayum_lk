"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { wedding } from "../lib/wedding";
import { scene } from "../lib/scene";
import Atmosphere, { MotionPreference } from "./Atmosphere";

export default function Entrance({ children }: { children: ReactNode }) {
  const [state, setState] = useState<"cover" | "opening" | "inside">("cover");
  const [quiet, setQuiet] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const inside = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    if (state === "inside") {
      window.scrollTo(0, 0);
      inside.current?.focus({ preventScroll: true });
    }
  }, [state]);
  function openInvitation() {
    if (state !== "cover") return;
    if (audio.current) {
      audio.current.volume = 0.35;
      void audio.current.play().catch(() => setPlaying(false));
    }
    if (quiet || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("inside");
      return;
    }
    setState("opening");
    timer.current = window.setTimeout(() => setState("inside"), 920);
  }
  return (
    <MotionPreference.Provider value={quiet}>
      <audio
        ref={audio}
        src={wedding.music}
        preload="none"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {state !== "inside" ? (
        <section
          className={`dream-cover postcard ${state === "opening" ? "opening" : ""}`}
          aria-label={wedding.card.title}
          data-paused={quiet}
        >
          <div className="world-image" aria-hidden="true" />
          <div className="vignette" aria-hidden="true" />
          <div className="cover-content">
            <img
              className="cover-art"
              alt=""
              src={scene.art}
              fetchPriority="high"
            />{" "}
            <div className="postal">
              <span aria-hidden="true" className="crest">
                {wedding.card.names.map((n) => n[0]).join(" · ")}
              </span>{" "}
              <p className="cover-label">{scene.invitation}</p>{" "}
              <h1>
                {wedding.card.names[0]} <em>&amp;</em> {wedding.card.names[1]}
              </h1>{" "}
              <p className="cover-date">
                {wedding.card.date} <span>·</span> {wedding.card.venue}
              </p>{" "}
              <button
                className="open-invite"
                type="button"
                onClick={openInvitation}
                disabled={state === "opening"}
              >
                {scene.action}
                <span aria-hidden="true"> →</span>
              </button>
            </div>
          </div>
          <Atmosphere />
          <span className="transition-leaf" aria-hidden="true" />
        </section>
      ) : (
        <div className="dream-inside" tabIndex={-1} ref={inside}>
          {children}
        </div>
      )}
      <div className="guest-controls">
        {state === "inside" && (
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => {
              if (playing) audio.current?.pause();
              else void audio.current?.play().catch(() => setPlaying(false));
            }}
          >
            {playing ? "Pause music" : "Play music"}
          </button>
        )}
        <button
          className="motion-control"
          type="button"
          aria-pressed={quiet}
          onClick={() => setQuiet(!quiet)}
        >
          {quiet ? "Resume motion" : "Pause motion"}
        </button>
      </div>
      {state === "inside" && (
        <style>
          {quiet
            ? ".dream-inside *, .dream-inside *::before, .dream-inside *::after {animation-play-state:paused!important}"
            : ""}
        </style>
      )}
    </MotionPreference.Provider>
  );
}
