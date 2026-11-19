function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/[,;]/g, "\\$&");
}

export function calendarHref(slug: string, starts: string, title: string, venue: string) {
  const stamp = new Date(starts).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const lines = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//ArayumLK//Invitation//EN",
    "BEGIN:VEVENT", `UID:${slug}@arayumlk.space`, `DTSTAMP:${stamp}`, `DTSTART:${stamp}`,
    `SUMMARY:${escapeText(title)}`, `LOCATION:${escapeText(venue)}`, "END:VEVENT", "END:VCALENDAR", "",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}
