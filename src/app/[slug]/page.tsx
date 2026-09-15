import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import BlockRenderer from '@/components/cms/renderer/BlockRenderer';
import { getMysqlPageBySlug } from '@/lib/cms-mysql';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const page = await getMysqlPageBySlug(slug);

  if (!page) {
    return {
      title: 'Page Not Found — AMP NTS',
    };
  }

  return {
    title: page.metaTitle || `${page.title} — AMP NTS`,
    description: page.metaDescription || undefined,
  };
}

export default async function DynamicCmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const page = await getMysqlPageBySlug(slug);

  if (!page) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
      <Navbar />

      {/* Preview banner if page is draft */}
      {page.status === 'DRAFT' && (
        <div className="bg-amber-500 text-zinc-950 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider">
          Draft Preview Mode — This page is currently hidden from public navigation
        </div>
      )}

      <main className="flex-1">
        <BlockRenderer blocks={page.blocks} />
      </main>

      <Footer />
    </div>
  );
}
