import { NextResponse } from 'next/server';
import { getMysqlPages, saveMysqlPage } from '@/lib/cms-mysql';

export async function GET() {
  const pages = await getMysqlPages();
  return NextResponse.json({ success: true, data: pages || [] });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const id = body.id || `page-${Date.now()}`;
    const pageData = {
      id,
      title: body.title || 'New Untitled Page',
      slug: body.slug || `new-page-${Date.now()}`,
      status: body.status || 'DRAFT',
      blocks: body.blocks || [],
      metaTitle: body.metaTitle || '',
      metaDescription: body.metaDescription || '',
    };

    const saved = await saveMysqlPage(pageData);
    if (!saved) {
      return NextResponse.json({ success: false, message: 'Failed to save page to database' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: saved });
  } catch (err: any) {
    const isConflict = err.message?.toLowerCase().includes('slug is already in use');
    return NextResponse.json(
      { success: false, message: err.message || 'Failed to save page' },
      { status: isConflict ? 409 : 500 }
    );
  }
}
