'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CmsSidebar from '@/components/cms/CmsSidebar';
import { useAuthStore } from '@/store/auth.store';

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const loadFromStorage = useAuthStore((state) => state.loadFromStorage);

  useEffect(() => {
    if (pathname === '/cms/login') {
      setCheckingAuth(false);
      return;
    }

    loadFromStorage();
    const token = typeof window !== 'undefined' ? localStorage.getItem('amp_auth_token') : null;
    if (token) {
      setIsAuthenticated(true);
      setCheckingAuth(false);
    } else {
      setIsAuthenticated(false);
      setCheckingAuth(false);
      window.location.href = '/cms/login';
    }
  }, [pathname, loadFromStorage]);

  if (pathname === '/cms/login') {
    return <>{children}</>;
  }

  if (checkingAuth || !isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-50">
        <div className="h-8 w-8 animate-spin rounded-full border-3 border-[#610D17] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-zinc-900 font-sans antialiased flex-col md:flex-row">
      <CmsSidebar />
      <main className="flex-1 overflow-y-auto min-w-0">
        {children}
      </main>
    </div>
  );
}
