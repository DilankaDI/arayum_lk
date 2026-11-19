import { useState, type FormEvent } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { homecoming } from "../lib/homecoming";
import { card, focus, serif } from "./styles";

export default function Rsvp({ guestName }: { guestName: string }) {
  const [name, setName] = useState(guestName);
  const [guests, setGuests] = useState(1);
  const [attend, setAttend] = useState(true);
  const [preview, setPreview] = useState("");
  function handleRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const responseName = name.trim();

    if (!responseName) return;

    const message = [
      `Hi ${homecoming.groom}!`,
      "",
      `Homecoming of ${homecoming.bride} & ${homecoming.groom}`,
      `Date: ${homecoming.dateLabel}`,
      "",
      ...(guestName
        ? [`Invitation for: ${guestName}`]
        : []),
      `Responding name: ${responseName}`,
      `Attendance: ${
        attend ? "Joyfully accepts" : "Regretfully declines"
      }`,
      ...(attend
        ? [`Number attending, including myself: ${guests}`]
        : []),
      "",
      attend
        ? "Looking forward to celebrating with you!"
        : "Wishing you both a wonderful celebration!",
    ].join("\n");

    setPreview(message);
  }
  return (
    <section
      id="homecoming-rsvp"
      aria-labelledby="homecoming-rsvp-heading"
      className={`${card} scroll-mt-4 px-6 py-9 text-center sm:px-10`}
    >
      <p className="m-0 text-[10px] uppercase tracking-[0.25em] text-[#c9a44c]">
        Kindly respond
      </p>

      <h2
        id="homecoming-rsvp-heading"
        className={`${serif} mb-0 mt-3 text-[40px] font-normal leading-tight`}
      >
        Will You Join Us?
      </h2>

      <p className="mt-4 text-[13px] leading-7 text-[#cdb5ba]">
        Your presence is our greatest gift. Let us know if
        you will join our homecoming celebration.
      </p>

      <form
        onSubmit={handleRsvp}
        className="mt-7 grid gap-5"
      >
        <div className="text-left">
          <label
            htmlFor="homecoming-rsvp-name"
            className="text-[10px] uppercase tracking-widest text-[#d2b45c]"
          >
            Your name
          </label>

          <input
            id="homecoming-rsvp-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            pattern=".*\S.*"
            title="Please enter your name."
            maxLength={120}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className={`${focus} mt-2 w-full min-w-0 rounded-xl border border-[#c9a44c]/30 bg-[#130406]/50 px-4 py-3 text-base text-[#f7eedc] placeholder:text-[#cdb5ba]/60`}
          />
        </div>

        <fieldset className="m-0 min-w-0 border-0 p-0">
          <legend className="sr-only">
            Will you attend?
          </legend>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                value: true,
                label: "Joyfully accepts",
              },
              {
                value: false,
                label: "Regretfully declines",
              },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                aria-pressed={attend === option.value}
                onClick={() => setAttend(option.value)}
                className={`${focus} min-h-12 rounded-xl border px-3 py-3 text-[10px] uppercase tracking-wider transition-colors ${
                  attend === option.value
                    ? "border-[#c9a44c] bg-[#c9a44c] text-[#1b0710]"
                    : "border-[#c9a44c]/30 bg-transparent text-[#ead8b5]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        {attend && (
          <div
            role="group"
            aria-labelledby="homecoming-guest-count"
            className="py-2"
          >
            <p
              id="homecoming-guest-count"
              className="m-0 text-[10px] uppercase leading-6 tracking-wider text-[#cdb5ba]"
            >
              Number attending, including yourself
            </p>

            <div className="mt-4 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Remove guest"
                disabled={guests <= 1}
                onClick={() =>
                  setGuests((value) =>
                    Math.max(1, value - 1),
                  )
                }
                className={`${focus} grid size-11 place-items-center rounded-full border border-[#c9a44c]/40 text-[#d2b45c] disabled:cursor-not-allowed disabled:opacity-30`}
              >
                <Minus size={16} aria-hidden="true" />
              </button>

              <span
                aria-live="polite"
                aria-atomic="true"
                className={`${serif} min-w-7 text-[32px]`}
              >
                {guests}
              </span>

              <button
                type="button"
                aria-label="Add guest"
                disabled={guests >= 10}
                onClick={() =>
                  setGuests((value) =>
                    Math.min(10, value + 1),
                  )
                }
                className={`${focus} grid size-11 place-items-center rounded-full border border-[#c9a44c]/40 text-[#d2b45c] disabled:cursor-not-allowed disabled:opacity-30`}
              >
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`${focus} flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c9a44c] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b0710] transition-colors hover:bg-[#ddbd68]`}
        >
          Preview RSVP message
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>

        <p className="m-0 text-xs leading-6 text-[#cdb5ba]">
          <span role="status" className="whitespace-pre-line">{preview || "Try a sample RSVP."}</span>
        </p>
      </form>
    </section>
  );
}
