import { Heart } from "lucide-react";
import Reveal from "./ui/Reveal";
import { wedding } from "../lib/wedding";

export default function Footer() {
  return (
    <footer
  className="
    relative isolate
    px-[22px] pt-16 pb-8
    sm:px-8 sm:pt-24
    before:pointer-events-none
    before:absolute before:inset-0 before:-z-10
    before:bg-[#f8f2e8]/60
    before:content-['']
  "
>
      <div className="mx-auto max-w-[1000px]">
        {/* Opening divider */}
        <div
          aria-hidden="true"
          className="mb-14 flex items-center justify-center gap-5 sm:mb-16"
        >
          <span className="h-px w-20 bg-[var(--terracotta)]/30 sm:w-32" />

          <Heart
            size={17}
            strokeWidth={1.2}
            className="text-[var(--terracotta)]"
          />

          <span className="h-px w-20 bg-[var(--terracotta)]/30 sm:w-32" />
        </div>

        <Reveal className="text-center">
          <p
            className="
              m-0 text-[12px] uppercase
              tracking-[0.3em] text-[var(--muted)]
            "
          >
            With love
          </p>

          <h2
            className="
              mt-5 mb-0 flex flex-wrap
              items-baseline justify-center gap-x-4 gap-y-1
              text-[clamp(44px,7vw,84px)]
              leading-[1.1] font-medium
              tracking-[-0.035em] text-[var(--rust)]
              [font-family:var(--font-cormorant),serif]
              sm:gap-x-5
            "
          >
            <span>{wedding.bride}</span>

            <span className="text-[0.65em] font-normal italic text-[var(--terracotta)]">
              &amp;
            </span>

            <span>{wedding.groom}</span>
          </h2>

          <p
            className="
              mx-auto mt-6 mb-0 max-w-[420px]
              text-[14px] leading-[1.9] text-[var(--muted)]
              sm:text-[15px]
            "
          >
            We can’t wait to celebrate with you.
            <br />
            Thank you for being part of our story.
          </p>

          <p
            className="
              mt-7 mb-0 text-[11px] font-medium
              tracking-[0.25em] text-[var(--rust)]
            "
          >
            {wedding.shortDate}
          </p>

          <a className="mt-8 inline-block underline" href="/templates/#wedding">Explore wedding templates</a>
        </Reveal>

        {/* Closing detail */}
        <div className="mt-16 text-center sm:mt-20">
          <p
            className="
              m-0 text-[24px] italic
              text-[var(--terracotta)]
              [font-family:var(--font-cormorant),serif]
            "
          >
            From one search to forever.
          </p>

          <span
            aria-hidden="true"
            className="
              mx-auto mt-6 block h-8 w-px
              bg-[var(--terracotta)]/35
            "
          />
        </div>
      </div>
    </footer>
  );
}
