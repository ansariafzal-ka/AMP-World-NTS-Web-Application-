'use client';

import { useState, useEffect } from 'react';
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
  ChevronRight,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { apiClient } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/api/endpoints';

interface SidebarProps {
  onLogout?: () => void;
}

export default function CmsSidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const loadFromStorage = useAuthStore((state) => state.loadFromStorage);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  // Automatically close mobile menu upon navigation
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT).catch(() => {});
    } catch (e) {
      console.error(e);
    }
    clearAuth();
    if (onLogout) onLogout();
    if (typeof window !== 'undefined') {
      window.location.href = '/cms/login';
    }
  };

  // Only Admin can see and access the Users management tab
  const navLinks = [
    { label: 'Dashboard', href: '/cms', icon: LayoutDashboard },
    { label: 'All Pages', href: '/cms/pages', icon: FileText },
    ...(user?.role === 'Admin' ? [{ label: 'Users', href: '/cms/users', icon: Users }] : []),
  ];


  return (
    <>
      {/* Mobile Top Navigation Bar (Mobile only: < md) */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-zinc-200 px-4 py-3 flex items-center justify-between shadow-2xs">
        <Link href="/cms" className="flex items-center">
          <Image
            src="/amp_Logo.png"
            alt="AMP Logo"
            width={120}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          {user && (
            <span className={`px-2 py-0.5 rounded-md font-black text-[10px] uppercase tracking-wider ${
              user.role === 'Admin' ? 'bg-[#610D17] text-white' : 'bg-zinc-200 text-zinc-700'
            }`}>
              {user.role}
            </span>
          )}

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
            title="Toggle Navigation Menu"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Off-Canvas Drawer Backdrop */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-xs transition-opacity animate-in fade-in"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Off-Canvas Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col justify-between p-4 transition-transform duration-250 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <Link href="/cms" onClick={() => setIsMobileOpen(false)} className="flex items-center">
              <Image
                src="/amp_Logo.png"
                alt="AMP Logo"
                width={130}
                height={36}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="py-4 space-y-1.5">
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
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#610D17] text-white shadow-xs'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-zinc-100 pt-4 space-y-2">
          {user && (
            <div className="px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200/70 flex items-center justify-between">
              <div className="min-w-0 mr-2">
                <p className="font-bold text-zinc-900 truncate text-xs">{user.name}</p>
                <p className="text-[10px] text-zinc-400 font-mono truncate">{user.email}</p>
              </div>
              <span className={`px-2 py-0.5 rounded-md font-black text-[10px] uppercase tracking-wider shrink-0 ${
                user.role === 'Admin' ? 'bg-[#610D17] text-white' : 'bg-zinc-200 text-zinc-700'
              }`}>
                {user.role}
              </span>
            </div>
          )}

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
          >
            <span className="flex items-center gap-3">
              <ExternalLink className="h-4 w-4 text-zinc-500 shrink-0" />
              <span>Main Website</span>
            </span>
            <span className="text-xs text-zinc-400">Public</span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-rose-700 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="h-4 w-4 text-rose-600 shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Desktop Sidebar (Desktop only: >= md) */}
      <aside
        className={`hidden md:flex shrink-0 border-r border-zinc-200 bg-white flex-col justify-between h-screen sticky top-0 transition-all duration-250 ease-in-out z-40 ${
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
          {!isCollapsed && user && (
            <div className="px-3.5 py-2 mb-2 flex items-center justify-between text-xs rounded-xl bg-zinc-50 border border-zinc-200/70">
              <div className="min-w-0 flex-1 mr-2">
                <p className="font-bold text-zinc-900 truncate text-xs">{user.name}</p>
                <p className="text-[10px] text-zinc-400 font-mono truncate">{user.email}</p>
              </div>
              <span className={`px-2 py-0.5 rounded-md font-black text-[10px] uppercase tracking-wider shrink-0 ${
                user.role === 'Admin' ? 'bg-[#610D17] text-white' : 'bg-zinc-200 text-zinc-700'
              }`}>
                {user.role}
              </span>
            </div>
          )}

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
    </>
  );
}
