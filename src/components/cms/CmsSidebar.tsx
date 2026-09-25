'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  LogOut,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { apiClient } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/api/endpoints';

interface SidebarProps {
  onLogout?: () => void;
}

export default function CmsSidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();
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
      window.location.href = '/portal/cms/login';
    }
  };

  const navSections = [
    {
      title: 'OVERVIEW',
      items: [
        { label: 'Dashboard', href: '/portal/cms', icon: LayoutDashboard },
      ],
    },
    {
      title: 'MASTERS',
      items: [
        { label: 'All Pages', href: '/portal/cms/pages', icon: FileText },
      ],
    },
    ...(user?.role === 'Admin'
      ? [
          {
            title: 'ADMINISTRATION',
            items: [
              { label: 'User Management', href: '/portal/cms/users', icon: Users },
            ],
          },
        ]
      : []),
  ];

  return (
    <>
      {/* Mobile Top Navigation Bar (Mobile only: < md) */}
      <div className="md:hidden sticky top-0 z-40 bg-[#3E0B12] border-b border-[#4E0E18] px-4 py-3 flex items-center justify-between shadow-md">
        <Link href="/portal/cms" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs shrink-0">
            <Image
              src="/amp_Logo.png"
              alt="AMP Logo"
              width={26}
              height={26}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold text-white tracking-wide block">Admin</span>
            <span className="text-[10px] text-rose-200/60 font-medium block">Portal</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {user && (
            <span className="px-2 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider bg-white/10 text-rose-100 border border-white/10">
              {user.role}
            </span>
          )}

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
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
          className="md:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity animate-in fade-in"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Off-Canvas Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-[#3E0B12] text-white z-50 shadow-2xl flex flex-col justify-between p-4 transition-transform duration-250 ease-in-out border-r border-[#4E0E18] ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#4E0E18]">
            <Link href="/portal/cms" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-xs shrink-0">
                <Image
                  src="/amp_Logo.png"
                  alt="AMP Logo"
                  width={28}
                  height={28}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold text-white tracking-wide block">Admin</span>
                <span className="text-xs text-rose-200/60 font-medium block">Portal</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-rose-200 hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Nav Sections */}
          <div className="py-4 space-y-4">
            {navSections.map((section) => (
              <div key={section.title}>
                <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-200/40">
                  {section.title}
                </p>
                <nav className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === '/portal/cms'
                        ? pathname === '/portal/cms'
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                          isActive
                            ? 'bg-[#5D131E] text-white shadow-xs'
                            : 'text-rose-100/75 hover:bg-white/[0.08] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-rose-200/70'}`} />
                          <span>{item.label}</span>
                        </div>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E5A93C] shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="border-t border-[#4E0E18] pt-4 space-y-2">
          {/* Status Widget */}
          <div className="p-2.5 rounded-xl bg-black/25 border border-white/5 flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-[#14382B] text-[#34D399] flex items-center justify-center shrink-0">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="leading-tight min-w-0">
              <p className="text-xs font-bold text-white truncate">All systems normal</p>
              <p className="text-[10px] text-rose-200/60 font-medium">NTS 2026 cycle</p>
            </div>
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-rose-200/80 hover:bg-white/[0.08] hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2.5">
              <ExternalLink className="h-3.5 w-3.5 text-rose-300" />
              <span>Public Website</span>
            </span>
            <span className="text-[10px] text-rose-300/60">Live</span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-950/40 hover:text-white transition-colors cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5 text-rose-400" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Desktop Sidebar (Desktop only: >= md) */}
      <aside
        className={`hidden md:flex shrink-0 bg-[#3E0B12] text-white flex-col justify-between h-screen sticky top-0 transition-all duration-250 ease-in-out z-40 border-r border-[#4E0E18] ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className={`p-4 border-b border-[#4E0E18] flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            <Link href="/portal/cms" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-xs shrink-0">
                <Image
                  src="/amp_Logo.png"
                  alt="AMP Logo"
                  width={32}
                  height={32}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              {!isCollapsed && (
                <div className="leading-tight">
                  <h2 className="text-sm font-bold text-white tracking-wide">Admin</h2>
                  <p className="text-[11px] text-rose-200/60 font-medium">Portal</p>
                </div>
              )}
            </Link>

            {/* Collapse / Expand Toggle Button */}
            {!isCollapsed && (
              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-rose-200/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Collapse sidebar"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* When collapsed, small expand button */}
          {isCollapsed && (
            <div className="p-2 flex justify-center border-b border-[#4E0E18]">
              <button
                type="button"
                onClick={() => setIsCollapsed(false)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-rose-200/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Expand sidebar"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Categorized Navigation Sections */}
          <div className="p-3 space-y-4">
            {navSections.map((section) => (
              <div key={section.title}>
                {!isCollapsed && (
                  <p className="px-3 mb-1 text-[10px] font-bold uppercase tracking-wider text-rose-200/40">
                    {section.title}
                  </p>
                )}
                <nav className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = 
                      item.href === '/portal/cms' 
                        ? pathname === '/portal/cms' 
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        title={item.label}
                        className={`flex items-center rounded-xl text-xs font-semibold transition-all duration-150 ${
                          isCollapsed 
                            ? 'justify-center h-10 w-full' 
                            : 'justify-between px-3.5 py-2.5'
                        } ${
                          isActive
                            ? 'bg-[#5D131E] text-white shadow-xs'
                            : 'text-rose-100/75 hover:bg-white/[0.08] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-rose-200/70'}`} />
                          {!isCollapsed && <span>{item.label}</span>}
                        </div>
                        {!isCollapsed && isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E5A93C] shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-3 border-t border-[#4E0E18] space-y-2 pb-5">
          {/* Status Widget from Screenshot */}
          {!isCollapsed && (
            <div className="p-2.5 rounded-xl bg-black/25 border border-white/5 flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-[#14382B] text-[#34D399] flex items-center justify-center shrink-0">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <div className="leading-tight min-w-0">
                <p className="text-xs font-bold text-white truncate">All systems normal</p>
                <p className="text-[10px] text-rose-200/60 font-medium">NTS 2026 cycle</p>
              </div>
            </div>
          )}

          <Link
            href="/"
            target="_blank"
            title="Main Website"
            className={`flex items-center rounded-xl text-xs font-medium text-rose-200/80 hover:bg-white/[0.08] hover:text-white transition-colors ${
              isCollapsed 
                ? 'justify-center h-10 w-full' 
                : 'justify-between px-3.5 py-2'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <ExternalLink className="h-3.5 w-3.5 text-rose-300 shrink-0" />
              {!isCollapsed && <span>Public Website</span>}
            </span>
            {!isCollapsed && <span className="text-[10px] text-rose-300/60">Live</span>}
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            title="Logout"
            className={`w-full flex items-center rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-950/40 hover:text-white transition-colors cursor-pointer ${
              isCollapsed 
                ? 'justify-center h-10' 
                : 'gap-2.5 px-3.5 py-2'
            }`}
          >
            <LogOut className="h-3.5 w-3.5 text-rose-400 shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
