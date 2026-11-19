import { ArrowUpRight, CalendarDays } from "lucide-react";
import { card, serif, focus } from "./styles";

export default function Countdown({ timeLeft, downloadCalendar }: { timeLeft: number[] | null; downloadCalendar: () => void }) {

  return (
    <section
      id="homecoming-countdown"
      aria-label="Homecoming countdown"
      className={`${card} scroll-mt-4 px-4 py-7 text-center sm:px-8`}
    >
      <p className="m-0 text-[10px] uppercase leading-6 tracking-[0.15em] text-[#c9a44c]">
        Counting moments until celebration
      </p>

      <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
        {["Days", "Hours", "Mins", "Secs"].map(
          (label, index) => (
            <div
              key={label}
              className="rounded-2xl border border-[#c9a44c]/30 bg-[#130406]/50 px-1 py-4"
            >
              <span
                className={`${serif} block text-[32px] font-semibold italic leading-none sm:text-[38px]`}
              >
                {timeLeft
                  ? String(timeLeft[index]).padStart(2, "0")
                  : "--"}
              </span>

              <span className="mt-3 block text-[9px] uppercase tracking-[0.08em] text-[#cfb775]">
                {label}
              </span>
            </div>
          ),
        )}
      </div>

      <button
        type="button"
        onClick={downloadCalendar}
        className={`${focus} mt-5 inline-flex min-h-11 items-center gap-2 rounded px-2 text-[10px] uppercase tracking-[0.12em] text-[#d2b45c] hover:text-[#f7eedc]`}
      >
        <CalendarDays size={15} aria-hidden="true" />
        Add to calendar
        <ArrowUpRight size={14} aria-hidden="true" />
      </button>
    </section>
  );
}
