"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";

import { wedding } from "../lib/wedding";

const field = "mt-2 w-full rounded-xl border border-current/30 bg-transparent px-3 py-2.5 text-sm outline-offset-3";

export default function Rsvp() {
  const names = wedding.card.names;
  const [preview, setPreview] = useState("");

  return (
    <section className="section">
      <h2>{wedding.rsvpTitle}</h2>
      <p>{wedding.rsvpPrompt}</p>
      <form className="mx-auto mt-7 max-w-lg rounded-3xl border border-current/25 p-5 text-left sm:p-7" onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") || "").trim();
        if (!name) {
          const input = event.currentTarget.elements.namedItem("name");
          if (input instanceof HTMLInputElement) input.focus();
          return;
        }
        const reply = data.get("reply") === "yes" ? `I’ll be attending with a party of ${data.get("party")}.` : "I won’t be able to attend.";
        setPreview(`Hi ${names.join(" & ")}! This is ${name}. ${reply}`);
      }}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-xs font-extrabold">Sample guest name <input className={field} name="name" required maxLength={60} placeholder="e.g. Alex" /></label>
          <label className="text-xs font-extrabold">Will you attend? <select name="reply" className={field}><option value="yes" className="text-ink">Joyfully accept</option><option value="no" className="text-ink">Regretfully decline</option></select></label>
        </div>
        <label className="mt-4 block text-xs font-extrabold">Party size <input className={field} name="party" type="number" min={1} max={20} defaultValue={1} required /></label>
        <button type="submit" className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-current/45 px-4 text-sm font-extrabold hover:bg-black/10"><MessageCircle size={16} /> Preview RSVP message</button>
        {preview && <div role="status" className="mt-4 rounded-xl border border-current/25 p-3 text-sm"><p className="mb-2 flex items-center gap-2 text-xs font-extrabold"><Check size={15} /> Sample WhatsApp message</p><p className="break-words">{preview}</p></div>}
      </form>
    </section>
  );
}
