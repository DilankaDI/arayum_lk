"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PhonePreview } from "./phone-preview";
import { inquiryHref } from "./storefront";
import { templates } from "./templates";

const categories = ["All designs", ...new Set(templates.map(({ category }) => category))] as const;

export function TemplateGallery({ filter = false }: { filter?: boolean }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All designs");
  const reducedMotion = useReducedMotion();
  const visible = templates.filter((item) => category === "All designs" || item.category === category);

  return (
    <>
      {filter && <div role="group" aria-label="Filter templates" className="mb-7 flex flex-wrap gap-2">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`min-h-10 cursor-pointer rounded-full border px-4 text-sm font-bold ${category === item ? "border-rose bg-rose text-white" : "border-line bg-white text-muted hover:bg-blush"}`}>{item}</button>)}
      </div>}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <motion.article key={template.slug} layout={reducedMotion ? false : "position"} className="overflow-hidden rounded-[23px] border border-line bg-white shadow-[0_14px_35px_-22px_#50324835]">
            <a href={`/demo/${template.slug}/`} aria-label={`Preview ${template.title}`} className="group relative flex h-[235px] items-center justify-center overflow-hidden [container-type:inline-size]" style={{ background: template.stage }}>
              <PhonePreview template={template} cover className="relative -mr-[7%] w-[34%] -translate-y-[4%] -rotate-10 transition-transform duration-500 group-hover:-translate-x-2 motion-reduce:transition-none" />
              <PhonePreview template={template} className="relative w-[41%] translate-y-[9%] rotate-7 transition-transform duration-500 group-hover:translate-x-2 motion-reduce:transition-none" />
              <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold">{template.category}</span>
            </a>
            <div className="flex flex-col p-4">
              <h3 className="text-lg font-extrabold tracking-tight">{template.title}</h3>
              <p className="mt-1 min-h-12 text-xs leading-5 text-muted">{template.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-2">
                <a href={`/demo/${template.slug}/`} className="inline-flex min-h-9 items-center gap-1.5 text-xs font-extrabold hover:text-rose"><Play size={13} /> Live preview</a>
                <a href={inquiryHref(template.title)} className="inline-flex min-h-9 items-center gap-1 text-xs font-extrabold text-rose hover:text-rose-deep">Choose design <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
