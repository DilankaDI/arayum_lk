import { Eyebrow, Footer, Header, sectionHeading, wrap } from "../../components/storefront";
import { TemplateGallery } from "../../components/template-gallery";

export const metadata = { title: "Event Invitation Templates | ArayumLK" };

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className={`${wrap} py-13 sm:py-20`}>
        <Eyebrow>Browse designs</Eyebrow>
        <h1 className={sectionHeading}>Find an invitation that feels like you.</h1>
        <p className="mt-4 mb-8 max-w-xl text-sm leading-7 text-muted sm:text-base">Explore the collection and try a complete live demo before choosing your design.</p>
        <TemplateGallery />
      </main>
      <Footer />
    </>
  );
}
