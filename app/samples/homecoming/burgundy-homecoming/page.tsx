"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  CalendarDays,
  MapPin,
  Music2,
  Pause,
  Sparkles,
} from "lucide-react";
import Entrance from "./components/Entrance";
import Family from "./components/Family";
import Venue from "./components/Venue";
import Countdown from "./components/Countdown";
import Rsvp from "./components/Rsvp";
import { calendarHref } from "./lib/calendar";
import HomecomingNav from "./components/HomecomingNav";

import { homecoming } from "./lib/homecoming";
import { card, serif, focus } from "./components/styles";

function calculateTimeLeft() {
  const remaining = Math.max(
    0,
    new Date(homecoming.dateISO).getTime() - Date.now(),
  );

  return [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
}

export default function HomecomingPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [timeLeft, setTimeLeft] = useState<number[] | null>(null);
  const [playing, setPlaying] = useState(false);
  const [musicError, setMusicError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const invitedName = (params.get("to") ?? "")
      .trim()
      .slice(0, 120);

    setGuestName(invitedName);


    const update = () => setTimeLeft(calculateTimeLeft());

    update();

    const timer = window.setInterval(update, 1000);
    const audio = audioRef.current;

    return () => {
      window.clearInterval(timer);
      audio?.pause();
    };
  }, []);

  useEffect(() => {
    if (opened) {
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [opened]);

  async function playMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    setMusicError("");
    audio.volume = 0.4;

    try {
      // Called directly from a button click so playback is
      // associated with the guest's interaction.
      await audio.play();
    } catch {
      setMusicError(
        "Music could not start. Tap the music button to try again.",
      );
    }
  }

  function openInvitation() {
    // Start playback before any delayed work.
    void playMusic();
    setOpened(true);
  }

  function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      void playMusic();
    } else {
      audio.pause();
      setMusicError("");
    }
  }

  function downloadCalendar() {
    const link = document.createElement("a");
    link.href = calendarHref("burgundy-homecoming", homecoming.dateISO,
      homecoming.bride + " & " + homecoming.groom + " Homecoming", homecoming.venue);
    link.download = "burgundy-homecoming.ics";
    link.click();
  }

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlBackground = html.style.backgroundColor;
    const previousBodyBackground = body.style.backgroundColor;
    const previousBodyMargin = body.style.margin;

    html.style.backgroundColor = "#130406";
    body.style.backgroundColor = "#130406";
    body.style.margin = "0";

    return () => {
      html.style.backgroundColor = previousHtmlBackground;
      body.style.backgroundColor = previousBodyBackground;
      body.style.margin = previousBodyMargin;
    };
  }, []);

  return (
    <main className="min-h-[100svh] w-full bg-[#130406] text-[#f7eedc]">
      {/* Keep this mounted before and after opening. */}
      <audio
        ref={audioRef}
        src={homecoming.song}
        loop
        preload="auto"
        onPlay={() => {
          setPlaying(true);
          setMusicError("");
        }}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setMusicError(
            "Unable to load the song. Please try the music button again.",
          );
        }}
      />

      {!opened ? (
        /* Opening screen */
            <Entrance guestName={guestName} openInvitation={openInvitation} />
      ) : (
        /* Invitation content */
        <div className="px-4 py-12 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[560px] space-y-6 sm:space-y-8">
            <section
              id="homecoming-top"
              aria-labelledby="homecoming-heading"
              className={`${card} relative scroll-mt-4 overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-12`}
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 opacity-30
                  bg-[radial-gradient(circle,rgba(201,164,76,0.2)_1px,transparent_1px)]
                  [background-size:20px_20px]
                "
              />

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="mb-7 flex items-center justify-center gap-4 text-[#c9a44c]"
                >
                  <span className="h-px w-12 bg-[#c9a44c]/40" />
                  <Sparkles size={20} strokeWidth={1.3} />
                  <span className="h-px w-12 bg-[#c9a44c]/40" />
                </div>

                <div className="mb-8">
                  <p
                    className={`${serif} m-0 text-[27px] leading-snug sm:text-[34px]`}
                  >
                    {guestName ? (
                      <>
                        Dear{" "}
                        <span className="break-words font-semibold text-[#d2b45c]">
                          {guestName}
                        </span>
                        ,
                      </>
                    ) : (
                      "Dear family & friends,"
                    )}
                  </p>

                  <p className="mb-0 mt-4 text-[10px] uppercase leading-6 tracking-[0.18em] text-[#d6bfc2]">
                    You are warmly invited to
                  </p>
                </div>

                <p className="m-0 text-[10px] uppercase leading-6 tracking-[0.25em] text-[#d2b45c]">
                  The homecoming reception of
                </p>

                <h1
                  ref={headingRef}
                  tabIndex={-1}
                  id="homecoming-heading"
                  className={`${serif} mb-0 mt-7 break-words text-[clamp(46px,10vw,72px)] font-semibold uppercase leading-[1.1] tracking-[-0.035em] outline-none`}
                >
                  <span className="block">{homecoming.bride}</span>

                  <span className="my-5 block text-[36px] font-normal italic leading-none text-[#c9a44c]">
                    &amp;
                  </span>

                  <span className="block">{homecoming.groom}</span>
                </h1>

                <div className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#c9a44c]/35 bg-[#130406]/40 px-4 py-3 text-[11px] leading-relaxed text-[#ead8b5]">
                  <CalendarDays
                    size={15}
                    aria-hidden="true"
                    className="shrink-0 text-[#c9a44c]"
                  />
                  {homecoming.dateLabel}
                </div>

                <p className="mb-0 mt-5 flex items-center justify-center gap-2 text-xs text-[#d6bfc2]">
                  <MapPin
                    size={14}
                    aria-hidden="true"
                    className="shrink-0"
                  />
                  {homecoming.venue}
                </p>
              </div>
            </section>

            {/* Countdown */}
            <Countdown timeLeft={timeLeft} downloadCalendar={downloadCalendar} />

            {/* Parents */}
            <Family />

            {/* Reception details */}
            <Venue />

            {/* Homecoming RSVP */}
            <Rsvp guestName={guestName} />

            <footer className="px-4 pb-4 pt-5 text-center">
              <p
                className={`${serif} m-0 text-[34px] italic text-[#ead8b5]`}
              >
                {homecoming.bride} &amp; {homecoming.groom}
              </p>

              <p className="mb-0 mt-3 text-[9px] uppercase tracking-[0.3em] text-[#c9a44c]">
                With love &amp; gratitude
              </p>
            </footer>
          </div>

          <HomecomingNav />

          {/* Music control */}
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={playing ? "Pause music" : "Play music"}
            aria-pressed={playing}
            className={`${focus} fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-30 grid size-12 place-items-center rounded-full border border-[#c9a44c]/50 bg-[#300b19] text-[#d2b45c] shadow-lg md:bottom-6 md:right-6`}
          >
            {playing ? (
              <Pause size={20} aria-hidden="true" />
            ) : (
              <Music2 size={20} aria-hidden="true" />
            )}
          </button>

          {musicError && (
            <p
              role="status"
              className="
                fixed bottom-20 right-4 z-30 max-w-[250px]
                rounded-lg border border-[#c9a44c]/30
                bg-[#300b19] px-4 py-3 text-xs leading-6
                text-[#f7eedc]
              "
            >
              {musicError}
            </p>
          )}
        </div>
      )}
    </main>
  );
}
