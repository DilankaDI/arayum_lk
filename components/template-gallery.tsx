"use client";


import { ArrowUpRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PhonePreview } from "./phone-preview";
import { inquiryHref } from "./storefront";
import { occasionOf, occasions, sampleHref, templates, type Invitation } from "./templates";

function DesignCards({ visible }: { visible: readonly Invitation[] }) {
  const reducedMotion = useReducedMotion();
  return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <motion.article key={template.slug} layout={reducedMotion ? false : "position"} className="overflow-hidden rounded-[23px] border border-line bg-white shadow-[0_14px_35px_-22px_#50324835]">
            <a href={sampleHref(template.slug)} aria-label={`Preview ${template.title}`} className="group relative flex h-[235px] items-center justify-center overflow-hidden [container-type:inline-size]" style={{ background: template.stage }}>
              <PhonePreview template={template} cover className="relative -mr-[7%] w-[34%] -translate-y-[4%] -rotate-10 transition-transform duration-500 group-hover:-translate-x-2 motion-reduce:transition-none" />
              <PhonePreview template={template} className="relative w-[41%] translate-y-[9%] rotate-7 transition-transform duration-500 group-hover:translate-x-2 motion-reduce:transition-none" />
              <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold">{template.category}</span>
            </a>
            <div className="flex flex-col p-4">
              <h3 className="text-lg font-extrabold tracking-tight">{template.title}</h3>
              <p className="mt-1 min-h-12 text-xs leading-5 text-muted">{template.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-2">
                <a href={sampleHref(template.slug)} className="inline-flex min-h-9 items-center gap-1.5 text-xs font-extrabold hover:text-rose"><Play size={13} /> Live preview</a>
                <a href={inquiryHref(template.title)} className="inline-flex min-h-9 items-center gap-1 text-xs font-extrabold text-rose hover:text-rose-deep">Choose design <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
  );
}

export function OccasionLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {occasions.map(({ key, title, description }) => {
        const count = templates.filter(item => occasionOf(item) === key).length;
        const href = count ? `/templates/#${key}` : inquiryHref(customRequest(key));
        return (
          <article key={key} className="flex flex-col rounded-2xl border border-line bg-paper p-5">
            <h3 className="font-serif text-3xl font-semibold">{title}</h3>
            <p className="my-3 flex-1 text-sm leading-6 text-muted">{description}</p>
            <a href={href} className="text-sm font-bold text-rose underline underline-offset-4">
              {count ? `Browse ${count} designs` : "Ask about a custom invitation"}
            </a>
          </article>
        );
      })}
    </div>
  );
}

function customRequest(key: string) {
  return key === "birthdays" ? "a quote for a custom birthday invitation" : "a quote for a custom office party invitation";
}

export function TemplateGallery() {
  return (
    <div className="space-y-14">
      {occasions.map(({key, title}) => {
        const designs = templates.filter(template => occasionOf(template) === key);
        return (
          <section id={key} key={key} className="scroll-mt-24">
            <h2 className="mb-4 font-serif text-4xl font-semibold">{title}</h2>
            {designs.length ? <DesignCards visible={designs} /> : (
              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="mb-3 text-sm">Tell us about your event for a personalized quote on WhatsApp.</p>
                <a className="font-bold text-rose underline" href={inquiryHref(customRequest(key))}>Ask about a custom invitation</a>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
