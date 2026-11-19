"use client";

import { useEffect, useState } from "react";

export function Countdown({ date }: { date: string }) {
  const [remaining, setRemaining] = useState<number>();

  useEffect(() => {
    const tick = () =>
      setRemaining(
        Math.max(0, Math.floor((Date.parse(date) - Date.now()) / 1000)),
      );
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [date]);

  const parts =
    remaining === undefined
      ? ["–", "–", "–", "–"]
      : [
          Math.floor(remaining / 86400),
          Math.floor(remaining / 3600) % 24,
          Math.floor(remaining / 60) % 60,
          remaining % 60,
        ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
        <div
          key={label}
          className="rounded-xl border border-current/25 p-3 text-center"
        >
          <p className="font-serif text-3xl tabular-nums sm:text-4xl">
            {parts[index]}
          </p>
          <p className="text-[9px] font-bold tracking-wider uppercase">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
