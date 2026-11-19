import { Heart } from "lucide-react";
import { Hydrangea } from "./hydrangea";
import { invitationPhoto, type Invitation } from "./templates";

export function Envelope({ initials }: { initials: string }) {
  return (
    <div aria-hidden="true" className="relative isolate mx-auto aspect-[1.82] w-full overflow-hidden rounded-md border border-[#a67558]/50 bg-[#e8cbb1] shadow-[0_16px_30px_-15px_#59301f80] [container-type:inline-size]">
      <div className="absolute inset-0 bg-linear-to-t from-[#f0dcc8] to-[#dab99c] [clip-path:polygon(0_100%,50%_30%,100%_100%)]" />
      <div data-flap className="absolute inset-x-0 top-0 h-[63%] origin-top bg-linear-to-b from-[#f0d9c2] to-[#c89875] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
      <div data-seal className="absolute top-[53%] left-1/2 grid size-[14cqw] -translate-x-1/2 place-items-center rounded-full border border-[#f2d1ad]/70 bg-[#8c4939] font-serif text-[6cqw] text-[#fff1da] shadow-md">{initials}</div>
    </div>
  );
}

export function LaceFlowers() {
  return <><Hydrangea className="pointer-events-none absolute -top-[12%] -left-[14%] -z-10 w-[44%] opacity-75" /><Hydrangea className="pointer-events-none absolute -right-[14%] -bottom-[12%] -z-10 w-[44%] opacity-75" /></>;
}

export function StationeryHero({ template }: { template: Extract<Invitation, { design: string }> }) {
  const lace = template.design === "lace";
  return (
    <header className={`relative isolate mx-auto grid max-w-6xl items-center gap-8 overflow-hidden px-5 py-13 sm:px-12 sm:py-18 ${lace ? "min-h-[65svh] place-items-center" : "md:grid-cols-2"}`}>
      {lace && <><img src={invitationPhoto(template)} alt="" className="absolute inset-0 -z-20 size-full object-cover" /><div className="absolute inset-0 -z-10 bg-[#52282b]/30" /></>}
      <div className={`relative isolate w-full max-w-lg overflow-hidden bg-[#fffbf3] px-7 py-12 text-center shadow-xl sm:px-10 ${lace ? "rounded-[28%_28%_24%_24%] border-4 border-double border-[#b48e57]" : "mx-auto rounded-3xl border border-[#a67558]/35"}`}>
        {lace && <LaceFlowers />}
        <div aria-hidden="true" className={`pointer-events-none absolute inset-3 -z-10 border border-current/20 ${lace ? "rounded-[inherit]" : "rounded-2xl"}`} />
        <Heart aria-hidden="true" className="mx-auto mb-5" size={20} strokeWidth={1.3} />
        <p className="text-[10px] font-extrabold tracking-[.2em] uppercase">Together with their families</p>
        <h1 className="my-5 font-serif text-[clamp(3.7rem,9vw,6.5rem)] leading-[.78] tracking-tight italic">{template.names[0]}<br /><span className="text-[.55em]">&amp;</span><br />{template.names[1]}</h1>
        <p className="text-xs font-bold tracking-[.12em] uppercase">{template.date}</p>
        <p className="mt-3 font-serif text-lg">{template.ceremony} · Sample invitation</p>
      </div>
      {!lace && <figure className="mx-auto w-full max-w-lg rounded-md border border-[#a67558]/30 bg-[#fffaf2] p-3 pb-5 shadow-lg md:rotate-2"><img src={invitationPhoto(template)} alt="Illustrative wedding portrait" className="aspect-[5/4] w-full object-cover" /><figcaption className="pt-4 text-center font-serif text-xl italic">To our next chapter</figcaption></figure>}
    </header>
  );
}
