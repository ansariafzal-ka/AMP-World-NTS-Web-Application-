"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Activity,
  LogOut,
} from "lucide-react";

interface ExamCentreSidebarProps {
  centreName?: string;
}

export default function ExamCentreSidebar({ centreName }: ExamCentreSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("amp_exam_centre_session");
    }
    router.push("/portal/login?portal=exam-centre");
  };

  const isDashboardActive =
    pathname === "/portal/exam-centre" ||
    pathname === "/portal/exam-centre/dashboard" ||
    pathname.startsWith("/portal/exam-centre/dashboard");

  return (
    <>
      {/* =========================================================
          MOBILE TOP BAR (Visible on screens < md)
      ========================================================= */}
      <div className="md:hidden sticky top-0 z-40 bg-[#4A0D15] border-b border-[#5A121D] px-4 py-3 flex items-center justify-between shadow-md">
        <Link href="/portal/exam-centre/dashboard" className="flex items-center gap-2.5">
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
            <span className="text-sm font-bold text-white tracking-wide block">
              Exam Centre
            </span>
            <span className="text-[10px] text-rose-200/70 font-medium block">
              Portal
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-[#4A0D15] text-white z-50 shadow-2xl flex flex-col justify-between p-4 transition-transform duration-200 ease-in-out border-r border-[#5A121D] ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Drawer Top Brand Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#5A121D]">
            <Link
              href="/portal/exam-centre/dashboard"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-2.5"
            >
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
                <span className="text-base font-bold text-white tracking-wide block">
                  Exam Centre
                </span>
                <span className="text-xs text-rose-200/70 font-medium block">
                  Portal
                </span>
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

          {/* Navigation Items (Only Dashboard under OVERVIEW) */}
          <div className="py-5 space-y-4">
            <div>
              <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-rose-200/50">
                OVERVIEW
              </p>
              <nav className="space-y-1">
                <Link
                  href="/portal/exam-centre/dashboard"
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isDashboardActive
                      ? "bg-[#6D1522] text-white shadow-xs"
                      : "text-rose-100/75 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="h-4 w-4 shrink-0 text-white" />
                    <span>Dashboard</span>
                  </div>
                  {isDashboardActive && (
                    <span className="h-2 w-2 rounded-full bg-[#E5A93C] shrink-0 shadow-xs" />
                  )}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Footer */}
        <div className="border-t border-[#5A121D] pt-4 space-y-3">
          {/* System Status Widget */}
          <div className="p-2.5 rounded-xl bg-black/25 border border-white/5 flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-[#14382B] text-[#34D399] flex items-center justify-center shrink-0">
              <Activity className="h-3.5 w-3.5" />
            </div>
            <div className="leading-tight min-w-0">
              <p className="text-xs font-bold text-white truncate">
                All systems normal
              </p>
              <p className="text-[10px] text-rose-200/60 font-medium">
                NTS 2026 cycle
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-950/40 hover:text-white transition-colors cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5 text-rose-400" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* =========================================================
          DESKTOP SIDEBAR (Visible on screens >= md)
      ========================================================= */}
      <aside
        className={`hidden md:flex shrink-0 bg-[#4A0D15] text-white flex-col justify-between h-screen sticky top-0 transition-all duration-200 ease-in-out z-40 border-r border-[#5A121D] ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div>
          {/* Header Brand */}
          <div
            className={`p-4 border-b border-[#5A121D] flex items-center ${
              isCollapsed ? "justify-center" : "justify-between"
            }`}
          >
            <Link
              href="/portal/exam-centre/dashboard"
              className="flex items-center gap-3 overflow-hidden"
            >
              <div className="h-10 w-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-xs shrink-0">
                <Image
                  src="/amp_Logo.png"
                  alt="AMP Logo"
                  width={30}
                  height={30}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>

              {!isCollapsed && (
                <div className="leading-tight whitespace-nowrap min-w-0">
                  <span className="text-[15px] font-bold text-white tracking-wide block truncate">
                    Exam Centre
                  </span>
                  <span className="text-xs text-rose-200/70 font-medium block">
                    Portal
                  </span>
                </div>
              )}
            </Link>

            {/* Collapse toggle button */}
            {!isCollapsed && (
              <button
                type="button"
                onClick={() => setIsCollapsed(true)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-rose-300/80 hover:bg-white/10 hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Collapse sidebar"
                aria-label="Collapse sidebar"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Navigation Section */}
          <div className="p-3 space-y-4">
            <div>
              {!isCollapsed ? (
                <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-rose-200/50">
                  OVERVIEW
                </p>
              ) : (
                <div className="h-4" />
              )}

              <nav className="space-y-1">
                {/* Single Dashboard item under OVERVIEW */}
                <Link
                  href="/portal/exam-centre/dashboard"
                  title="Dashboard"
                  className={`flex items-center ${
                    isCollapsed ? "justify-center px-0 py-2.5" : "justify-between px-3.5 py-2.5"
                  } rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isDashboardActive
                      ? "bg-[#6D1522] text-white shadow-xs"
                      : "text-rose-100/75 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <LayoutDashboard
                      className={`h-4 w-4 shrink-0 ${
                        isDashboardActive ? "text-white" : "text-rose-200/70"
                      }`}
                    />
                    {!isCollapsed && <span>Dashboard</span>}
                  </div>

                  {!isCollapsed && isDashboardActive && (
                    <span className="h-2 w-2 rounded-full bg-[#E5A93C] shrink-0 shadow-xs" />
                  )}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="p-3 border-t border-[#5A121D] space-y-2">
          {/* Status Widget */}
          {!isCollapsed ? (
            <div className="p-2.5 rounded-xl bg-black/25 border border-white/5 flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-[#14382B] text-[#34D399] flex items-center justify-center shrink-0">
                <Activity className="h-3.5 w-3.5" />
              </div>
              <div className="leading-tight min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  All systems normal
                </p>
                <p className="text-[10px] text-rose-200/60 font-medium truncate">
                  NTS 2026 cycle
                </p>
              </div>
            </div>
          ) : (
            <div
              className="h-9 w-9 mx-auto rounded-lg bg-[#14382B] text-[#34D399] flex items-center justify-center"
              title="All systems normal · NTS 2026 cycle"
            >
              <Activity className="h-4 w-4" />
            </div>
          )}

          {/* Expand Button when collapsed */}
          {isCollapsed && (
            <button
              type="button"
              onClick={() => setIsCollapsed(false)}
              className="w-full flex h-9 items-center justify-center rounded-lg text-rose-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title="Expand sidebar"
              aria-label="Expand sidebar"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
