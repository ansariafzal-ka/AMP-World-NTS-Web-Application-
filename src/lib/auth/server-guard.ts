import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor';
}

export async function verifyAdminAccess(req?: Request): Promise<{ authorized: boolean; user: DecodedToken | null }> {
  try {
    let token: string | null = null;

    if (req) {
      const authHeader = req.headers.get('authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    if (!token) {
      const cookieStore = await cookies();
      token = cookieStore.get('amp_auth_token')?.value || null;
    }

    if (!token) {
      return { authorized: false, user: null };
    }

    const secret = process.env.JWT_SECRET || 'fallback-secret-for-dev';
    const decoded = jwt.verify(token, secret) as DecodedToken;

    if (decoded && decoded.role === 'Admin') {
      return { authorized: true, user: decoded };
    }

    return { authorized: false, user: decoded };
  } catch {
    return { authorized: false, user: null };
  }
}
