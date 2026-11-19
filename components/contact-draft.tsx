"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Copy, MessageCircle } from "lucide-react";
import { businessWhatsApp, primary, secondary } from "./storefront";
import { templates } from "./templates";

const field = "mt-2 block w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-rose";
const options = [...templates.map(({ title }) => title), "a custom invitation"];

export function ContactDraft() {
  const requested = useSearchParams().get("design") ?? "";
  const [design, setDesign] = useState(options.includes(requested) ? requested : "");
  const [date, setDate] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const number = businessWhatsApp;
  const connected = Boolean(number && /^\d{8,15}$/.test(number));
  const message = `Hi ArayumLK! I’d like to ask about ${design || "a digital event invitation"}.${date ? ` My event date is ${date}.` : ""}`;

  return (
    <div className="rounded-3xl border border-line bg-white p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-extrabold">Invitation design
          <select className={field} value={design} onChange={(event) => { setDesign(event.target.value); setCopied(false); }}>
            <option value="">Help me choose</option>
            {options.map((title) => <option key={title} value={title}>{title === "a custom invitation" ? "Custom invitation" : title}</option>)}
          </select>
        </label>
        <label className="text-sm font-extrabold">Event date
          <input className={field} type="date" value={date} onChange={(event) => { setDate(event.target.value); setCopied(false); }} />
        </label>
      </div>
      <label className="mt-4 block text-sm font-extrabold">Your message
        <textarea className={field} rows={3} readOnly value={message} />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {connected && <a className={primary} href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}><MessageCircle size={16} /> Open WhatsApp</a>}
        <button type="button" className={`${secondary} cursor-pointer`} onClick={async () => {
          try {
            await navigator.clipboard.writeText(message);
            setCopied(true);
            setCopyError(false);
          } catch {
            setCopyError(true);
          }
        }}><Copy size={16} /> {copied ? "Copied" : "Copy message"}</button>
      </div>
      <p aria-live="polite" className="mt-3 text-xs leading-5 text-muted">{copyError ? "Select and copy the message above." : connected ? "WhatsApp opens with your message ready to send." : "WhatsApp ordering will be available when our business number is connected."}</p>
    </div>
  );
}
