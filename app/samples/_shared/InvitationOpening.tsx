"use client";

import { useRef, useState, type ReactNode } from "react";

type Props = { cover: ReactNode; children: ReactNode; music: string };

export default function InvitationOpening({ cover, children, music }: Props) {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const invitation = useRef<HTMLDivElement>(null);

  function playMusic() {
    void audio.current?.play().catch(() => setPlaying(false));
  }

  return (
    <>
      <audio ref={audio} src={music} preload="none" loop
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
            {cover}
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
