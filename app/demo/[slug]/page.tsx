import { ArrowLeft, ArrowUpRight, CalendarDays, Heart, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { Countdown } from "../../../components/countdown";
import { DemoOpening } from "../../../components/demo-opening";
import { SampleRsvp } from "../../../components/sample-rsvp";
import { inquiryHref } from "../../../components/storefront";
import { StationeryHero } from "../../../components/wedding-stationery";
import { invitationPhoto, templates } from "../../../components/templates";

type DemoProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DemoProps) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  return { title: template ? `${template.title} | ArayumLK Demo` : "ArayumLK" };
}

export default async function Demo({ params }: DemoProps) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) notFound();

  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${template.venue}, ${template.location}`)}`;
  const photo = invitationPhoto(template);
  const title = "font-serif text-[clamp(2.5rem,7vw,4.75rem)] leading-[.9] tracking-tight";
  const kicker = "mb-3 text-[10px] font-extrabold tracking-[.2em] uppercase";
  const block = "mx-auto max-w-3xl scroll-mt-20 border-b border-current/20 px-5 py-13 text-center sm:px-10 sm:py-18";
  const dateStamp = new Date(template.isoDate).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const calendar = `data:text/calendar;charset=utf-8,${encodeURIComponent(["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//ArayumLK//Invitation Demo//EN", "BEGIN:VEVENT", `UID:${template.slug}@arayumlk.space`, `DTSTAMP:${dateStamp}`, `DTSTART:${dateStamp}`, `SUMMARY:${template.ceremony}`, `LOCATION:${template.venue}`, "END:VEVENT", "END:VCALENDAR", ""].join("\r\n"))}`;

  return (
    <main style={{ backgroundColor: template.paper, color: template.ink }} className="min-h-dvh">
      <nav className="sticky top-0 z-20 border-b border-current/20 backdrop-blur" style={{ backgroundColor: template.paper }} aria-label="Sample invitation">
        <div className="mx-auto flex min-h-15 max-w-5xl items-center justify-between gap-3 px-5 text-[11px] font-extrabold sm:px-8">
          <a href="/templates/" className="inline-flex items-center gap-1.5"><ArrowLeft size={15} /> Templates</a>
          <span className="hidden tracking-wider uppercase sm:inline">Sample invitation</span>
          <a href={inquiryHref(template.title)} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-current/45 px-3">Choose this design <ArrowUpRight size={13} /></a>
        </div>
      </nav>
      <DemoOpening template={template}>
        {"design" in template ? <StationeryHero template={template} /> : <header className="relative isolate mx-auto flex min-h-[66svh] max-w-5xl items-end justify-center overflow-hidden px-5 pb-12 text-center text-white sm:rounded-b-[36px]">
          <img src={photo} alt="Illustrative wedding portrait" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
          <div><p className={kicker}>{template.ceremony} · Sample invitation</p><h1 className="font-serif text-[clamp(3.9rem,12vw,8.5rem)] leading-[.8] tracking-[-.065em]">{template.names.join(" & ")}</h1><p className="mt-5 text-sm font-bold">{template.date}</p></div>
        </header>}
        <section className={block}>
          <Heart className="mx-auto mb-5" size={23} strokeWidth={1.5} />
          <p className={kicker}>Our story</p><h2 className={title}>A day to celebrate together.</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7">What started with a conversation became a life full of little adventures. We’d love to have you with us for this next one.</p>
          <div className="mx-auto mt-7 max-w-md"><Countdown date={template.isoDate} /></div>
        </section>
        <section className={block}>
          <p className={kicker}>The celebration</p><h2 className={title}>When &amp; where</h2>
          {"schedule" in template && <ol aria-label="Sample event schedule" className="mx-auto mt-7 max-w-lg divide-y divide-current/15 rounded-2xl border border-current/25 px-4 text-left">
            {template.schedule.map(([time, event]) => <li key={event} className="flex items-center gap-4 py-3 text-sm"><span className="w-20 shrink-0 text-xs font-extrabold">{time}</span><span className="font-serif text-xl font-semibold">{event}</span></li>)}
          </ol>}
          <div className="mx-auto mt-7 max-w-lg rounded-3xl border border-current/25 p-6">
            <p className="font-serif text-3xl font-semibold">{template.ceremony}</p>
            <p className="mt-2 text-sm font-bold">{template.date} · 4:00 PM</p>
            <p className="mt-3 text-sm">{template.venue} · {template.location}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <a href={map} className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-current/40 px-3 text-xs font-extrabold"><MapPin size={15} /> Get directions</a>
              <a href={calendar} download={`${template.slug}.ics`} className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-current/40 px-3 text-xs font-extrabold"><CalendarDays size={15} /> Add to calendar</a>
            </div>
          </div>
        </section>
        <section className={block}>
          <p className={kicker}>Captured moments</p><h2 className={title}>A little look at us.</h2>
          <img src={photo} alt="Illustrative portrait of the couple" loading="lazy" className="mx-auto mt-7 aspect-[4/3] w-full max-w-lg rounded-3xl object-cover" />
        </section>
        <section className={block}>
          <p className={kicker}>Kindly reply</p><h2 className={title}>Will you join us?</h2>
          <p className="mt-4 text-sm">Try the guest experience with a sample RSVP.</p>
          <SampleRsvp names={template.names} />
        </section>
        <footer className="px-5 py-9 text-center text-xs font-bold"><a href="/templates/" className="underline underline-offset-4">Explore more ArayumLK designs</a></footer>
      </DemoOpening>
    </main>
  );
}
