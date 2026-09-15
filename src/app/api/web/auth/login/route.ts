import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { verifyMysqlCredentials } from '@/lib/cms-mysql';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Verify against MySQL
    const user = await verifyMysqlCredentials(email, password);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password. Access denied.' },
        { status: 401 }
      );
    }

    // Sign JWT Token
    const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-for-dev';
    const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || jwtSecret;

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: '1d' });
    const refreshToken = jwt.sign({ id: user.id }, jwtRefreshSecret, { expiresIn: '7d' });

    // Set HTTP Cookies for session & middleware guards
    const cookieStore = await cookies();
    cookieStore.set('amp_auth_token', accessToken, {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    });
    cookieStore.set('cms_session', 'authenticated_admin', {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({
      success: true,
      data: {
        user: payload,
        accessToken,
        refreshToken,
      },
      message: 'User logged in successfully',
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || 'Authentication error' },
      { status: 500 }
    );
  }
}
