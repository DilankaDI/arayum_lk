import { ArrowRight, ArrowUpRight, CalendarDays, Check, Eye, Heart, Images, LayoutTemplate, Link2, MapPin, MessageCircle, Play, Smartphone } from "lucide-react";
import { FeaturedPhones } from "../components/phone-preview";
import { Eyebrow, Faq, Footer, Header, Plans, inquiryHref, primary, secondary, sectionHeading, SmallBadge, wrap } from "../components/storefront";
import { TemplateGallery } from "../components/template-gallery";
import { templates } from "../components/templates";

const steps = [
  { title: "Pick a design", text: "Try the live invitations and choose a style that feels right for your day.", icon: LayoutTemplate },
  { title: "Send your details", text: "Tell us your names, dates, venues, and what you’d like to include.", icon: MessageCircle },
  { title: "Review your preview", text: "Open your personalized draft on your phone and tell us what to adjust.", icon: Eye },
  { title: "Share your link", text: "Once it’s ready, send your invitation to guests directly on WhatsApp.", icon: Link2 },
];

const features = [
  { title: "WhatsApp RSVPs", text: "Attendance replies go straight to the WhatsApp number you choose.", icon: MessageCircle },
  { title: "Every event in one place", text: "Share times for your ceremony, reception, or homecoming.", icon: CalendarDays },
  { title: "Directions in a tap", text: "Help guests find the right venue with a Google Maps link.", icon: MapPin },
  { title: "Your story and photos", text: "Give guests a glimpse of your story and the moments you’ve shared.", icon: Images },
  { title: "Made for phones", text: "Guests can open the invitation from a link in their browser.", icon: Smartphone },
  { title: "Personalized for you", text: "We set up your design with the details that matter to your celebration.", icon: Heart },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden border-b border-line bg-[radial-gradient(ellipse_at_74%_48%,var(--color-blush),transparent_64%)]">
          <div className={`${wrap} grid items-center gap-5 pt-11 pb-10 sm:pt-15 lg:min-h-172.5 lg:grid-cols-[.96fr_1.04fr] lg:gap-10 lg:py-12`}>
            <div className="relative z-10 max-w-156.25">
              <SmallBadge>Digital invitations for Sri Lankan weddings</SmallBadge>
              <h1 className="mt-5 text-[clamp(2.75rem,5vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-.065em]">A wedding invitation website, <span className="inline-block text-rose">made for you.</span></h1>
              <p className="mt-5 max-w-[50ch] text-base leading-7 text-muted sm:text-lg sm:leading-8">Your story, every event, and WhatsApp RSVP in one beautiful link. Choose a design and we’ll personalize it for your celebration.</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <a href="/templates/" className={primary}>Browse templates <ArrowRight size={17} /></a>
                <a href="/demo/champagne-seal/" className={secondary}><Play size={15} /> See a live demo</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold text-muted sm:text-sm"><span className="text-rose">Launch offer</span><strong className="font-extrabold text-ink">LKR 2,500</strong><del>LKR 4,000</del><span className="text-muted">· One-time payment</span></div>
            </div>
            <FeaturedPhones template={templates[0]} />
          </div>
        </section>
        <section className="bg-white py-15 sm:py-22">
          <div className={wrap}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div><Eyebrow>The collection</Eyebrow><h2 className={sectionHeading}>Find your invitation style.</h2><p className="mt-3 text-sm leading-7 text-muted sm:text-base">Open a full invitation on your phone and see what your guests will see.</p></div>
              <a href="/templates/" className={secondary}>See all templates <ArrowUpRight size={16} /></a>
            </div>
            <TemplateGallery />
          </div>
        </section>
        <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-blush/60 py-16 sm:py-23">
          <div className={wrap}>
            <div className="mb-9 text-center"><Eyebrow>How it works</Eyebrow><h2 className={sectionHeading}>From your first pick to “send.”</h2><p className="mt-3 text-sm leading-7 text-muted sm:text-base">You send the wedding details. We put the invitation together.</p></div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ title, text, icon: Icon }, index) => <li key={title} className="rounded-2xl border border-line bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-full bg-blush text-rose"><Icon size={20} /></span><span className="text-xs font-extrabold text-muted">0{index + 1}</span></div><h3 className="mt-5 text-base font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></li>)}</ol>
          </div>
        </section>
        <section id="features" className="scroll-mt-20 bg-white py-16 sm:py-23">
          <div className={wrap}>
            <div className="mb-8"><Eyebrow>What’s included</Eyebrow><h2 className={sectionHeading}>Everything guests need, in one link.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-2xl border border-line bg-paper p-5"><Icon size={22} className="text-rose" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</div>
          </div>
        </section>
        <section id="pricing" className="scroll-mt-20 border-y border-line bg-blush/45 py-16 sm:py-23">
          <div className={wrap}>
            <div className="mb-8 text-center"><Eyebrow>Pricing</Eyebrow><h2 className={sectionHeading}>One payment for your invitation.</h2><p className="mt-3 inline-flex items-center gap-2 text-sm text-muted"><Check size={16} className="text-rose" /> Three months of hosting after your event included</p></div>
            <div className="mx-auto max-w-4xl"><Plans /></div>
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
