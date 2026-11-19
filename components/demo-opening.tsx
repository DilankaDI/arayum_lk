"use client";

import gsap from "gsap";
import { ArrowDown, Heart } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Envelope, LaceFlowers } from "./wedding-stationery";
import type { Invitation } from "./templates";

export function DemoOpening({ template, children }: { template: Invitation; children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const revealed = useRef<HTMLDivElement>(null);
  const opening = useRef<gsap.core.Timeline | null>(null);
  const cover = useRef<HTMLDivElement>(null);
  const design = "design" in template ? template.design : null;
  const heading = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!opened) return;
    heading.current?.focus();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const tween = gsap.fromTo(revealed.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", clearProps: "transform,opacity" });
      return () => { tween.kill(); };
    }
  }, [opened]);

  useLayoutEffect(() => () => { opening.current?.kill(); }, []);

  function openInvitation() {
    if (opening.current) return;
    if (design !== "envelope" || !cover.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpened(true);
      return;
    }

    opening.current = gsap.timeline({ onComplete: () => setOpened(true) });
    opening.current
      .to(cover.current.querySelector("[data-seal]"), { scale: 0.75, opacity: 0, duration: 0.24 })
      .to(cover.current.querySelector("[data-flap]"), { rotateX: 175, duration: 0.42, ease: "power2.inOut" }, "<0.08");
  }

  if (opened) return <div ref={revealed}><h2 tabIndex={-1} ref={heading} className="sr-only">Invitation opened</h2>{children}</div>;

  return (
    <section className="mx-auto grid min-h-[min(780px,calc(100svh-65px))] max-w-lg place-items-center px-5 py-7 sm:py-10">
      <div ref={cover} className="relative isolate grid min-h-[490px] w-full place-items-center overflow-hidden rounded-[32px] border border-current/25 px-5 py-10 text-center shadow-[0_20px_50px_#33182328]">
        <div aria-hidden="true" className="absolute inset-3 -z-10 rounded-[44%_44%_22px_22px] border border-current/30" />
        {design === "lace" && <LaceFlowers />}
        <div className="w-full max-w-sm">
          <Heart className="mx-auto mb-5 size-6" strokeWidth={1.5} />
          <p className="text-[10px] font-extrabold tracking-[.25em] uppercase">You’re invited</p>
          <h1 className="mt-5 font-serif text-[clamp(3.9rem,11vw,6.5rem)] leading-[.75] tracking-[-.06em]">{template.names[0]}<br /><i className="text-[.55em]">&amp;</i><br />{template.names[1]}</h1>
          <p className="mt-6 text-xs font-extrabold tracking-[.16em] uppercase">{template.date}</p>
          {design === "envelope" && <div className="mx-auto mt-6 w-full max-w-[250px]"><Envelope initials={template.names.map((name) => name[0]).join("")} /></div>}
          <button type="button" onClick={openInvitation} className="mt-7 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-current/50 px-5 text-xs font-extrabold tracking-wide transition-colors hover:bg-black/10">Open invitation <ArrowDown size={16} /></button>
        </div>
      </div>
    </section>
  );
}
