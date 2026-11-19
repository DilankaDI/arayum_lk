import { ArrowUpRight, CalendarDays, Heart, Images, MapPin, MessageCircle, Wifi } from "lucide-react";
import { Envelope, LaceFlowers } from "./wedding-stationery";
import { invitationPhoto, type Invitation } from "./templates";

export function PhonePreview({ template, cover = false, className = "" }: { template: Invitation; cover?: boolean; className?: string }) {
  const { paper, ink, accent, names, date } = template;
  const design = "design" in template ? template.design : null;
  const initials = names.map((name) => name[0]).join("");
  return (
    <div aria-hidden="true" className={`relative aspect-[.5] rounded-[17%/8.5%] border border-[#66606a] bg-[#201c23] p-[2.3cqw] shadow-[0_23px_55px_-14px_#51314880] ${className}`}>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[14%/7%] [container-type:inline-size]" style={{ backgroundColor: paper, color: ink }}>
        <div className="relative z-10 flex items-center justify-between px-[8cqw] pt-[5cqw] pb-[3cqw] text-[4.3cqw] font-extrabold">
          <span>9:41</span><span className="absolute top-[4cqw] left-1/2 h-[7cqw] w-[28cqw] -translate-x-1/2 rounded-full bg-[#201c23]" /><Wifi className="size-[5cqw]" />
        </div>
        {cover ? (
          <div className="relative isolate flex flex-1 flex-col items-center justify-center overflow-hidden px-[9cqw] text-center">
            <div className="absolute inset-[7%] rounded-t-[48%] rounded-b-[5%] border opacity-55" style={{ borderColor: accent }} />
            {design === "lace" && <LaceFlowers />}
            <Heart className="mb-[6cqw] size-[7cqw]" style={{ color: accent }} />
            <span className="text-[3.1cqw] font-extrabold tracking-[.2em] uppercase">You’re invited</span>
            <span className="mt-[5cqw] font-serif text-[16cqw] leading-[.86]">{names[0]}<br /><i className="text-[10cqw]">&amp;</i><br />{names[1]}</span>
            <span className="mt-[6cqw] text-[4cqw] font-bold">{date}</span>
            {design === "envelope" ? <div className="mt-[6cqw] w-[60cqw]"><Envelope initials={initials} /></div> : <span className="mt-[8cqw] grid size-[19cqw] place-items-center rounded-full font-serif text-[8cqw] font-semibold text-white shadow-md" style={{ background: accent }}>{initials}</span>}
            <span className="mt-[4cqw] text-[3cqw] font-bold tracking-widest uppercase">Open invitation</span>
          </div>
        ) : (
          <div className="relative flex min-h-0 flex-1 flex-col">
            <div className="relative flex min-h-0 flex-[1.45] items-end overflow-hidden">
              <img src={invitationPhoto(template)} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
              <div className="relative w-full px-[5cqw] pb-[8cqw] text-center text-white">
                <p className="mb-[3cqw] text-[3cqw] font-bold tracking-[.2em] uppercase">{template.ceremony}</p>
                <p className="font-serif text-[12.6cqw] leading-[.85]">{names.join(" & ")}</p>
              </div>
            </div>
            <div className="flex flex-[.75] flex-col items-center justify-center px-[6cqw] text-center">
              <span className="text-[3.1cqw] font-extrabold tracking-[.15em] uppercase">Together with our families</span>
              <p className="mt-[2cqw] font-serif text-[8cqw] leading-none">{date}</p>
              <p className="mt-[2cqw] text-[3.5cqw] font-bold">{template.venue}</p>
            </div>
            <div className="flex justify-evenly border-t border-current/15 px-[5cqw] py-[5cqw]">
              {[Heart, CalendarDays, Images, MapPin, MessageCircle].map((Icon, index) => <Icon key={index} className="size-[6cqw]" strokeWidth={1.6} />)}
            </div>
          </div>
        )}
        <div className="mx-auto my-[3cqw] h-[1.5cqw] w-[34cqw] shrink-0 rounded-full bg-[#201c23]/80" />
      </div>
    </div>
  );
}

export function FeaturedPhones({ template }: { template: Invitation }) {
  return (
    <a href={`/demo/${template.slug}/`} className="group relative isolate mx-auto block w-full max-w-[535px] rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-rose [container-type:inline-size]" aria-label={`Open the ${template.title} live demo`}>
      <div aria-hidden="true" className="absolute inset-[8%] -z-10 rounded-full bg-rose/15 blur-[70px]" />
      <div className="relative mx-auto flex w-full items-center justify-center py-2 sm:py-5">
        <PhonePreview template={template} cover className="z-0 -mr-[8%] hidden w-[39%] -translate-y-[3%] -rotate-11 transition-transform duration-500 group-hover:-rotate-13 sm:block motion-reduce:transition-none" />
        <PhonePreview template={template} className="z-10 w-[63%] max-w-[290px] rotate-4 transition-transform duration-500 group-hover:rotate-1 sm:w-[49%] motion-reduce:transition-none" />
        <span className="absolute right-[3%] bottom-[5%] z-10 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[11px] font-extrabold shadow-lg sm:right-[0%]"><span className="size-1.5 rounded-full bg-rose" /> Live demo <ArrowUpRight size={13} /></span>
      </div>
    </a>
  );
}
