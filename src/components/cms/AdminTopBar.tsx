'use client';

import { usePathname } from 'next/navigation';

export default function AdminTopBar() {
  const pathname = usePathname();

  // If in page builder, builder has its own specialized header
  if (pathname?.includes('/builder')) {
    return null;
  }

  // Dynamic page title based on path
  let pageTitle = 'Dashboard';
  let pageSubtitle = 'Manage pages, content blocks and portal users across AMP NTS';

  if (pathname === '/portal/cms/pages') {
    pageTitle = 'All Pages';
    pageSubtitle = 'Create, manage, and publish pages across the website';
  } else if (pathname === '/portal/cms/users') {
    pageTitle = 'User Management';
    pageSubtitle = 'Manage CMS administrators, editors, and access credentials';
  }

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-zinc-200/90 px-5 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs shrink-0">
      {/* Page Title & Subtitle */}
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-zinc-900 leading-tight">
          {pageTitle}
        </h1>
        <p className="text-xs text-zinc-500 font-normal mt-0.5 hidden sm:block">
          {pageSubtitle}
        </p>
      </div>
    </header>
  );
}
