import { NextResponse } from 'next/server';
import { getMysqlPageById, saveMysqlPage, deleteMysqlPage } from '@/lib/cms-mysql';
import { verifyAdminAccess } from '@/lib/auth/server-guard';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const page = await getMysqlPageById(id);
  if (!page) {
    return NextResponse.json({ success: false, error: 'Page not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: page });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const pageData = {
      ...body,
      id,
    };

    const saved = await saveMysqlPage(pageData);
    if (!saved) {
      return NextResponse.json({ success: false, message: 'Failed to update page in database' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: saved });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { authorized } = await verifyAdminAccess(req);
  if (!authorized) {
    return NextResponse.json(
      { success: false, message: 'Forbidden: Only administrators can delete pages.' },
      { status: 403 }
    );
  }

  const { id } = await params;
  const success = await deleteMysqlPage(id);
  return NextResponse.json({ success: Boolean(success) });
}

