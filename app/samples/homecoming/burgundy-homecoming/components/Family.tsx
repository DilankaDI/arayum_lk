import { Heart } from "lucide-react";
import { card, serif } from "./styles";
import { homecoming } from "../lib/homecoming";

export default function Family() {

  return (
    <section
      className={`${card} px-6 py-9 text-center sm:px-10`}
    >
      <Heart
        size={22}
        strokeWidth={1.4}
        aria-hidden="true"
        className="mx-auto mb-5 text-[#c9a44c]"
      />

      <h2
        className={`${serif} m-0 text-[32px] font-normal`}
      >
        With Joyful Hearts
      </h2>

      <div
        className={`${serif} mt-6 space-y-4 text-xl leading-relaxed text-[#ead8d4]`}
      >
        <div>
          {homecoming.parents.bride.map((parent) => (
            <p key={parent} className="m-0">
              {parent}
            </p>
          ))}
        </div>

        <p className="m-0 text-sm italic text-[#c9a44c]">
          together with
        </p>

        <div>
          {homecoming.parents.groom.map((parent) => (
            <p key={parent} className="m-0">
              {parent}
            </p>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mx-auto my-6 h-px w-14 bg-[#c9a44c]/35"
      />

      <p className="m-0 text-[13px] leading-7 text-[#cdb5ba]">
        Request the honour of your presence to celebrate the
        homecoming of their beloved children. Join us for an
        evening of love, laughter, and beautiful beginnings.
      </p>
    </section>
  );
}
