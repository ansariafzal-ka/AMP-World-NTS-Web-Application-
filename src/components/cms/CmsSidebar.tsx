'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  LogOut,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  onLogout?: () => void;
}

export default function CmsSidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/web/auth/logout', { method: 'POST' });
      await fetch('/api/cms/auth', { method: 'DELETE' }).catch(() => {});
    } catch (e) {
      console.error(e);
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem('amp_auth_token');
      localStorage.removeItem('amp_auth_user');
      localStorage.removeItem('cms_authenticated');
      document.cookie = 'amp_auth_token=; path=/; max-age=0; SameSite=Lax';
      document.cookie = 'cms_session=; path=/; max-age=0; SameSite=Lax';
      window.location.href = '/cms/login';
    }
  };

  const navLinks = [
    { label: 'Dashboard', href: '/cms', icon: LayoutDashboard },
    { label: 'All Pages', href: '/cms/pages', icon: FileText },
    { label: 'Users', href: '/cms/users', icon: Users },
  ];

  return (
    <aside
      className={`shrink-0 border-r border-zinc-200 bg-white flex flex-col justify-between h-screen sticky top-0 transition-all duration-250 ease-in-out z-40 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Brand Header */}
        <div className={`p-4 border-b border-zinc-100 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <Link href="/cms" className="flex items-center">
              <Image
                src="/amp_Logo.png"
                alt="AMP Logo"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          )}

          {/* Collapse / Expand Toggle Button */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-3 space-y-1.5">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = 
              item.href === '/cms' 
                ? pathname === '/cms' 
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`flex items-center rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isCollapsed 
                    ? 'justify-center h-11 w-full' 
                    : 'gap-3 px-3.5 py-2.5'
                } ${
                  isActive
                    ? 'bg-[#610D17] text-white shadow-xs'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Navigation */}
      <div className="p-3 border-t border-zinc-100 space-y-1.5 pb-6">
        <Link
          href="/"
          target="_blank"
          title="Main Website"
          className={`flex items-center rounded-xl text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors ${
            isCollapsed 
              ? 'justify-center h-11 w-full' 
              : 'justify-between px-3.5 py-2.5'
          }`}
        >
          <span className="flex items-center gap-3">
            <ExternalLink className="h-4 w-4 text-zinc-500 shrink-0" />
            {!isCollapsed && <span>Main Website</span>}
          </span>
          {!isCollapsed && <span className="text-xs text-zinc-400">Public</span>}
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          title="Logout"
          className={`w-full flex items-center rounded-xl text-sm font-semibold text-rose-700 hover:bg-rose-50 hover:text-rose-800 transition-colors ${
            isCollapsed 
              ? 'justify-center h-11' 
              : 'gap-3 px-3.5 py-2.5'
          }`}
        >
          <LogOut className="h-4 w-4 text-rose-600 shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
