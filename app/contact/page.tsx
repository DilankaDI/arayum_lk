import { Suspense } from "react";
import { ContactDraft } from "../../components/contact-draft";
import { Eyebrow, Header, sectionHeading, wrap } from "../../components/storefront";

export const metadata = { title: "Request an Invitation | ArayumLK" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={`${wrap} py-13 sm:py-20`}>
        <div className="mx-auto max-w-xl">
          <Eyebrow>Contact ArayumLK</Eyebrow>
          <h1 className={sectionHeading}>Tell us about your celebration.</h1>
          <p className="mt-4 mb-7 text-sm leading-7 text-muted">Choose a design and include your event date so we can discuss your invitation.</p>
          <Suspense><ContactDraft /></Suspense>
        </div>
      </main>
    </>
  );
}
