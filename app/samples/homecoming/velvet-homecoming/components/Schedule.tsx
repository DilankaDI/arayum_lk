import { calendarHref } from "../lib/calendar";
import { wedding } from "../lib/wedding";

export default function Schedule() {
  const { venue, location, names, isoDate, slug } = wedding.card;
  const address = venue + ", " + location;
  return (
    <section className="section">
      <h2>The celebration</h2>
      <ol className="program">
        {wedding.schedule.map(event => (
          <li key={event.title}><time>{event.time}</time><span>{event.title}</span></li>
        ))}
      </ol>
      <p className="mt-7">{address}</p>
      <div className="mt-3 flex flex-wrap gap-5 text-sm font-bold">
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}>Get directions</a>
        <a href={calendarHref(slug, isoDate, names.join(" & ") + " · " + wedding.card.ceremony, address)}
          download={slug + ".ics"}>Add to calendar</a>
      </div>
    </section>
  );
}
