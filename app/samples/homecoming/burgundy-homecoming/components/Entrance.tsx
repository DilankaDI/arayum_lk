import { ArrowUpRight, Heart } from "lucide-react";
import { card, serif, focus } from "./styles";
import { homecoming } from "../lib/homecoming";

export default function Entrance({ guestName, openInvitation }: { guestName: string; openInvitation: () => void }) {

  return (
    <section
      aria-labelledby="opening-heading"
      className="
        relative isolate flex min-h-[100svh]
        items-center justify-center overflow-hidden
        px-5 py-10 sm:px-6
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(110,16,32,0.4),transparent_75%)]
        "
      />

      <div
        className={`${card} relative w-full max-w-[460px] overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-14`}
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
            className="
              mx-auto mb-7 grid size-16 place-items-center
              rounded-full border border-[#c9a44c]/40
              bg-[#c9a44c]/5 text-[#d2b45c]
            "
          >
            <Heart size={26} strokeWidth={1.2} />
          </div>

          <p className="m-0 text-[10px] uppercase leading-6 tracking-[0.23em] text-[#d2b45c]">
            A special invitation for you
          </p>

          <p
            className={`${serif} mb-0 mt-6 break-words text-[25px] leading-snug text-[#ead8b5] sm:text-[29px]`}
          >
            {guestName
              ? `Dear ${guestName},`
              : "Dear family & friends,"}
          </p>

          <h1
            id="opening-heading"
            className={`${serif} my-8 text-[clamp(44px,10vw,62px)] font-normal leading-none`}
          >
            {homecoming.bride}

            <span className="my-4 block text-[30px] italic text-[#c9a44c]">
              &amp;
            </span>

            {homecoming.groom}
          </h1>

          <div
            aria-hidden="true"
            className="mx-auto mb-7 h-px w-16 bg-[#c9a44c]/40"
          />

          <p className="mb-0 text-sm leading-7 text-[#cdb5ba]">
            Invite you to celebrate
            <br />
            their homecoming
          </p>

          <button
            type="button"
            onClick={openInvitation}
            className={`${focus} mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c9a44c] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1b0710] transition-colors hover:bg-[#ddbd68]`}
          >
            Open invitation
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
