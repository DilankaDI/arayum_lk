import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Menu, MessageCircle, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export const primary = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose px-5 text-sm font-extrabold text-white shadow-[0_8px_20px_-9px_var(--color-rose)] transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose";
export const secondary = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-extrabold text-ink transition-colors hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose";
export const wrap = "mx-auto w-full max-w-[1280px] px-5 sm:px-9 lg:px-12";
export const sectionHeading = "text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.06] font-extrabold tracking-[-.055em]";

export const businessWhatsApp = process.env.NEXT_PUBLIC_ARAYUMLK_WHATSAPP?.trim() || "94773312721";

export function inquiryHref(design?: string) {
  const number = businessWhatsApp;
  const request = design ? `?design=${encodeURIComponent(design)}` : "";
  if (!number || !/^\d{8,15}$/.test(number)) return `/contact/${request}`;
  const message = design ? `Hi ArayumLK! I'd like to ask about ${design} for my event.` : "Hi ArayumLK! I'd like to ask about a digital event invitation.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function Brand() {
  return (
    <a href="/" className="inline-flex shrink-0 items-center gap-2.5 font-extrabold tracking-[-.045em]" aria-label="ArayumLK home">
      <span className="grid size-9 place-items-center rounded-full bg-rose font-serif text-2xl leading-none font-bold text-white">A</span>
      <span className="text-[22px]">Arayum<span className="text-rose">LK</span></span>
    </a>
  );
}

const nav = [
  { href: "/templates/", label: "Templates" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
      <div className={`${wrap} relative flex min-h-17 items-center justify-between gap-4`}>
        <Brand />
        <nav className="hidden items-center gap-7 text-[13px] font-bold text-muted lg:flex" aria-label="Main navigation">
          {nav.map(({ href, label }) => <a key={href} href={href} className="hover:text-rose">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={inquiryHref()} aria-label="Chat on WhatsApp" className={`${primary} min-h-10 px-4 max-[380px]:size-10 max-[380px]:p-0`}><MessageCircle size={16} /> <span className="hidden sm:inline">Chat on</span><span className="max-[380px]:hidden">WhatsApp</span></a>
          <details className="group lg:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-line [&::-webkit-details-marker]:hidden" aria-label="Navigation menu"><Menu size={19} /></summary>
            <nav className="absolute inset-x-5 top-[calc(100%+8px)] grid gap-1 rounded-2xl border border-line bg-white p-3 text-sm font-bold shadow-xl sm:inset-x-auto sm:right-9 sm:w-56" aria-label="Mobile navigation">
              {nav.map(({ href, label }) => <a key={href} href={href} className="rounded-lg px-3 py-2.5 hover:bg-blush">{label}</a>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[11px] font-extrabold tracking-[.17em] text-rose uppercase">{children}</p>;
}

const questions = [
  ["How do we order an invitation?", "Choose a design and contact us with your event date. We’ll confirm the details, prepare your personalized preview, and send you the shareable link after approval and payment."],
  ["Can I preview an invitation for free?", "Yes. Every template has a live demo you can open on your phone. You can also ask us for a personalized preview."],
  ["Can we invite guests to a wedding and a homecoming?", "Yes. We can show multiple events on an invitation, or make separate wedding and homecoming links. Ask for a quote if you need separate invitations."],
  ["Where do guest replies go?", "The RSVP button on your live invitation opens a prefilled message to your chosen WhatsApp number so guests can confirm their attendance and party size."],
  ["How long does the invitation stay online?", "Hosting is included until three months after your event date. If you need the link for longer, contact us on WhatsApp to arrange an extension."],
  ["Can you add our event photos after the event?", "Yes. For LKR 1,000, we can add up to 10 event photos during the included hosting period."],
  ["How do we pay?", "Payment is by bank transfer. Template orders are paid in full. Custom designs require a 50% non-refundable deposit, with the balance due after the design is ready."],
] as const;

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line bg-white py-17 sm:py-24">
      <div className={`${wrap} grid gap-8 lg:grid-cols-[.7fr_1.3fr]`}>
        <div><Eyebrow>FAQ</Eyebrow><h2 className={sectionHeading}>Good to know.</h2><p className="mt-3 text-muted">A few things hosts ask before getting started.</p></div>
        <div className="divide-y divide-line rounded-3xl border border-line bg-paper px-5 sm:px-7">
          {questions.map(([question, answer]) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-extrabold [&::-webkit-details-marker]:hidden">{question}<ChevronDown className="shrink-0 text-rose transition-transform group-open:rotate-180" size={17} /></summary>
              <p className="pb-5 text-sm leading-7 text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  { title: "Template invitation", price: "LKR 2,500", description: "LKR 2,500 applies to the wedding and homecoming templates currently in the collection.", features: ["One personalized invitation website", "Event schedule, directions and WhatsApp RSVP", "Hosting until three months after your event"], cta: "Browse templates", href: "/templates/" },
  { title: "Custom invitation", price: "Request a quote", description: "Tell us your occasion and design ideas. We’ll quote a price on WhatsApp.", features: ["A bespoke design and layout", "Review your design before launch", "Bank transfer with a 50% upfront deposit"], cta: "Ask about custom design", href: inquiryHref("a custom invitation") },
];

export function Plans() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {plans.map((plan, index) => (
        <article key={plan.title} className={`flex flex-col rounded-[28px] border bg-white p-6 sm:p-8 ${index === 0 ? "border-rose/35 shadow-[0_15px_45px_#ce1d5410]" : "border-line"}`}>
          <div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-xl font-extrabold">{plan.title}</h3>{index === 0 && <span className="rounded-full bg-blush px-3 py-1 text-[11px] font-extrabold text-rose">Launch offer</span>}</div>
          <p className="mt-4 flex flex-wrap items-baseline gap-3"><strong className="text-3xl font-extrabold tracking-tight">{plan.price}</strong>{index === 0 && <del className="text-sm text-muted">LKR 4,000</del>}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{plan.description}</p>
          <ul className="mt-5 flex-1 space-y-3 border-t border-line py-5 text-sm">
            {plan.features.map((feature) => <li key={feature} className="flex gap-2"><Check size={17} className="shrink-0 text-rose" />{feature}</li>)}
          </ul>
          <a href={plan.href} className={index === 0 ? primary : secondary}>{plan.cta} <ArrowUpRight size={16} /></a>
        </article>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <>
      <section className="bg-ink py-15 text-center text-white sm:py-21">
        <div className={wrap}>
          <Heart size={24} className="mx-auto mb-5 text-pink-300" />
          <h2 className={sectionHeading}>Let’s make your invitation.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/75">Pick a design you love. We’ll help you turn it into a link your guests can open anywhere.</p>
          <a href={inquiryHref()} className={`${primary} mt-6`}><MessageCircle size={17} /> Chat on WhatsApp <ArrowRight size={16} /></a>
        </div>
      </section>
      <footer className="bg-white py-8">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-5`}>
          <Brand />
          <p className="text-xs text-muted">© {new Date().getFullYear()} ArayumLK · Made for Sri Lankan celebrations</p>
          <a href="/contact/" className="flex items-center gap-2 text-xs font-bold">Contact <ArrowDownRight size={14} /></a>
        </div>
      </footer>
    </>
  );
}

export function SmallBadge({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-rose/15 bg-white px-3.5 py-2 text-[11px] font-extrabold tracking-wide text-rose"><Sparkles size={14} />{children}</span>;
}
