'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CmsSidebar from '@/components/cms/CmsSidebar';

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    if (pathname === '/cms/login') {
      setCheckingAuth(false);
      return;
    }

    // Verify session from server endpoint
    fetch('/api/cms/auth', { cache: 'no-store' })
      .then((res) => {
        if (res.ok) {
          setIsAuthenticated(true);
          setCheckingAuth(false);
        } else {
          localStorage.removeItem('cms_authenticated');
          setIsAuthenticated(false);
          setCheckingAuth(false);
          window.location.href = '/cms/login';
        }
      })
      .catch(() => {
        localStorage.removeItem('cms_authenticated');
        setIsAuthenticated(false);
        setCheckingAuth(false);
        window.location.href = '/cms/login';
      });
  }, [pathname]);

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
    <div className="flex min-h-screen bg-[#f8fafc] text-zinc-900 font-sans antialiased">
      <CmsSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
