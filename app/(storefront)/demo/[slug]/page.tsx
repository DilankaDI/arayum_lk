import { notFound } from "next/navigation";
import { sampleHref, templates } from "../../../../components/templates";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ slug }));
}

export default async function LegacyDemo({ params }: Props) {
  const { slug } = await params;
  const template = templates.find(item => item.slug === slug);
  if (!template) notFound();
  const href = sampleHref(template.slug);
  return (
    <main className="p-8">
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <a href={href}>Open the {template.title} invitation</a>
    </main>
  );
}
