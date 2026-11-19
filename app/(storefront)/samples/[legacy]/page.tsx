import { notFound } from "next/navigation";
import { sampleHref, templates } from "../../../../components/templates";

const previous = templates.filter(t => !["summer-garden", "burgundy-homecoming"].includes(t.slug))
  .map(t => ({ legacy: t.slug === "maroon-lace" ? "maroon-garden" : t.slug, href: sampleHref(t.slug) }));

export function generateStaticParams() {
  return previous.map(({ legacy }) => ({ legacy }));
}

export default async function PreviousSample({ params }: { params: Promise<{legacy: string}> }) {
  const { legacy } = await params;
  const route = previous.find(item => item.legacy === legacy);
  if (!route) notFound();
  return <main><meta httpEquiv="refresh" content={`0;url=${route.href}`} /><a href={route.href}>Open the invitation</a></main>;
}
