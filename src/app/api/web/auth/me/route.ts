import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET(req: Request) {
  try {
    let token: string | null = null;
    const authHeader = req.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } else {
      const cookieStore = await cookies();
      token = cookieStore.get('amp_auth_token')?.value || null;
    }

    if (!token) {
      return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-for-dev');
    return NextResponse.json({ success: true, data: decoded });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid or expired token' }, { status: 401 });
  }
}
