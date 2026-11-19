import { calendarHref } from "../lib/calendar";
import { scene } from "../lib/scene";
import { wedding } from "../lib/wedding";
export default function Schedule() {
  const { venue, location, isoDate, names, slug, ceremony } = wedding.card;
  const address = venue + ", " + location;
  return (
    <section className="itinerary exhibition">
      <div className="itinerary-title">
        <p className="small-head">{wedding.card.date}</p>
        <h2>{scene.programme}</h2>
      </div>
      <ol>
        {wedding.schedule.map((event) => (
          <li key={event.title}>
            <span className="event-mark" aria-hidden="true">
              ＋
            </span>
            <time>{event.time}</time>
            <h3>{event.title}</h3>
          </li>
        ))}
      </ol>
      <div className="arrival">
        <div>
          <strong>{venue}</strong>
          <p>{location}</p>
        </div>
        <div className="guest-links">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          >
            Get directions
          </a>
          <a
            download={slug + ".ics"}
            href={calendarHref(
              slug,
              isoDate,
              names.join(" & ") + " · " + ceremony,
              address,
            )}
          >
            Add to calendar
          </a>
        </div>
      </div>
    </section>
  );
}
