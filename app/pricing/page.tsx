import { Eyebrow, Faq, Footer, Header, Plans, sectionHeading, wrap } from "../../components/storefront";

export const metadata = { title: "Event Invitation Pricing | ArayumLK" };

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-blush/45 py-13 sm:py-20">
          <div className={wrap}>
            <div className="mb-8 text-center">
              <Eyebrow>Pricing</Eyebrow>
              <h1 className={sectionHeading}>Invitation pricing</h1>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">Choose a ready-made design or ask us to create one for your celebration.</p>
            </div>
            <div className="mx-auto max-w-4xl"><Plans /></div>
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
