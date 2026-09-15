import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyMysqlCredentials } from '@/lib/cms-mysql';

// Check current session
export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get('cms_session')?.value || cookieStore.get('amp_auth_token')?.value;
  if (session) {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}

// Login
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    const user = await verifyMysqlCredentials(email, password);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password. Access denied.' },
        { status: 401 }
      );
    }

    const cookieStore = await cookies();
    cookieStore.set('cms_session', 'authenticated_admin', {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || 'Authentication error' },
      { status: 500 }
    );
  }
}

// Logout
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.set('cms_session', '', {
    path: '/',
    maxAge: 0,
  });
  cookieStore.set('amp_auth_token', '', {
    path: '/',
    maxAge: 0,
  });
  return NextResponse.json({ success: true });
}
