import { wedding } from "../lib/wedding";

export default function Gallery() {
  return (
    <section className="section">
      <h2>Our moments</h2>
      <div className="album">
        {wedding.gallery.map(photo => <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />)}
      </div>
    </section>
  );
}
