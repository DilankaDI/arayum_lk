import { wedding } from "./wedding";

export function inquiryHref() {
  const number = wedding.inquiryWhatsApp.trim();
  const design = wedding.card.title;
  if (!/^\d{8,15}$/.test(number)) return `/contact/?design=${encodeURIComponent(design)}`;
  const message = `Hi ArayumLK! I'd like to ask about ${design} for my event.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
