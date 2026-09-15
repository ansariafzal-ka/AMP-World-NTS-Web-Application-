import { NextResponse } from 'next/server';
import { getMysqlUsers, saveMysqlUser } from '@/lib/cms-mysql';

export async function GET() {
  const users = await getMysqlUsers();
  return NextResponse.json({ success: true, data: users || [] });
}

export async function POST(req: Request) {
  try {
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
