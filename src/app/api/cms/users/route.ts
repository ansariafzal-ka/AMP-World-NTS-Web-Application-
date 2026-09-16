import { NextResponse } from 'next/server';
import { getMysqlUsers, saveMysqlUser, deleteMysqlUser } from '@/lib/cms-mysql';
import { verifyAdminAccess } from '@/lib/auth/server-guard';

export async function GET() {
  const users = await getMysqlUsers();
  return NextResponse.json({ success: true, data: users || [] });
}

export async function POST(req: Request) {
  try {
    const { authorized } = await verifyAdminAccess(req);
    if (!authorized) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Only administrators can create or manage CMS users.' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { name, email, role, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: role || 'Editor',
      password: password.trim(),
    };

    const saved = await saveMysqlUser(payload);
    if (!saved) {
      return NextResponse.json({ success: false, message: 'Failed to save user to database' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: saved });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { authorized } = await verifyAdminAccess(req);
    if (!authorized) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Only administrators can delete CMS users.' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, message: 'User ID is required' }, { status: 400 });
    }

    const success = await deleteMysqlUser(id);
    return NextResponse.json({ success: Boolean(success) });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

