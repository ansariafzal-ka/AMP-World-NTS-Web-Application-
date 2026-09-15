import { NextResponse } from 'next/server';
import { deleteMysqlUser } from '@/lib/cms-mysql';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const success = await deleteMysqlUser(id);
  return NextResponse.json({ success: Boolean(success) });
}
