import { NextResponse } from 'next/server';
import { getMysqlPageBySlug } from '@/lib/cms-mysql';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = await getMysqlPageBySlug(slug);
  if (!page) {
    return NextResponse.json({ success: false, error: 'Page not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: page });
}
