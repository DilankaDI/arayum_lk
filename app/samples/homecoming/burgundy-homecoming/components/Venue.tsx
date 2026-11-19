import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { card, serif, focus } from "./styles";
import { homecoming } from "../lib/homecoming";

export default function Venue() {

  return (
    <section
      id="homecoming-venue"
      className={`${card} scroll-mt-4 px-6 py-9 sm:px-9`}
    >
        <p className="m-0 text-center text-[10px] uppercase tracking-[0.25em] text-[#c9a44c]">
        The celebration
      </p>

      <h2
        className={`${serif} mb-7 mt-3 text-center text-[34px] font-normal`}
      >
        Homecoming Reception
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <CalendarDays
            size={20}
            aria-hidden="true"
            className="mt-1 shrink-0 text-[#c9a44c]"
          />

          <div>
            <p className="m-0 text-[10px] uppercase tracking-widest text-[#c9a44c]">
              The date
            </p>
            <p className={`${serif} mb-0 mt-1 text-xl`}>
              {homecoming.dateLabel}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock3
            size={20}
            aria-hidden="true"
            className="mt-1 shrink-0 text-[#c9a44c]"
          />

          <div>
            <p className="m-0 text-[10px] uppercase tracking-widest text-[#c9a44c]">
              The time
            </p>
            <p className={`${serif} mb-0 mt-1 text-xl`}>
              {homecoming.time}
            </p>
            <p className="mb-0 mt-1 text-xs text-[#cdb5ba]">
              Sri Lanka Standard Time
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin
            size={20}
            aria-hidden="true"
            className="mt-1 shrink-0 text-[#c9a44c]"
          />

          <div>
            <p className="m-0 text-[10px] uppercase tracking-widest text-[#c9a44c]">
              The venue
            </p>
            <p className={`${serif} mb-0 mt-1 text-xl`}>
              {homecoming.venue}
            </p>
            <p className="mb-0 mt-1 text-xs leading-6 text-[#cdb5ba]">
              {homecoming.hall}
              <br />
              {homecoming.address}
            </p>
          </div>
        </div>
      </div>

      <a
        href={homecoming.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${focus} mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c9a44c]/50 bg-[#c9a44c]/10 px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-[#d2b45c] transition-colors hover:bg-[#c9a44c]/20`}
      >
        Get directions
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
