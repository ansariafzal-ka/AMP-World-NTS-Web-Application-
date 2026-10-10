"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Bell, ChevronDown, LogOut, User } from "lucide-react";

interface ExamCentreSession {
  mobile?: string;
  centreCode?: string;
  centreName?: string;
  contactPerson?: string;
  role?: string;
}

export default function ExamCentreTopBar() {
  const router = useRouter();
  const [session, setSession] = useState<ExamCentreSession | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("amp_exam_centre_session");
        if (stored) {
          setSession(JSON.parse(stored));
        }
      } catch (e) {
        console.error("Failed to parse session", e);
      }

      const handleCentreUpdated = (e: Event) => {
        const customEvent = e as CustomEvent<ExamCentreSession>;
        if (customEvent.detail) {
          setSession((prev) => ({ ...prev, ...customEvent.detail }));
        }
      };

      window.addEventListener("amp-centre-updated", handleCentreUpdated);
      return () => window.removeEventListener("amp-centre-updated", handleCentreUpdated);
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("amp_exam_centre_session");
    }
    router.push("/portal/login?portal=exam-centre");
  };

  const displayName = session?.contactPerson || "Exam Centre User";
  const displayCentre = session?.centreName || "Exam Centre";

  // Derive 2 letter avatar initials
  const initials = displayName
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "EC";

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-zinc-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs shrink-0">
      {/* =========================================================
          LEFT: TITLE & NTS SUBTITLE (MATCHING SCREENSHOT)
      ========================================================= */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-tight">
          Dashboard
        </h1>
        <p className="text-xs sm:text-[13px] text-zinc-400 font-normal mt-0.5">
          {displayCentre} - NTS overview
        </p>
      </div>

      {/* =========================================================
          RIGHT: NOTIFICATION BELL & USER PROFILE
      ========================================================= */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notification Bell */}
        <button
          type="button"
          className="relative p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
          title="Notifications"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-zinc-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#A32A29] rounded-full ring-2 ring-white" />
        </button>

        {/* User Profile Pill & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2.5 p-1 sm:pr-2.5 rounded-full sm:rounded-xl hover:bg-zinc-100 transition-colors cursor-pointer group"
          >
            {/* Dark Maroon Circular Avatar */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4A0D15] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs shrink-0">
              {initials}
            </div>

            {/* User Name */}
            <span className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-zinc-900">
              {displayName}
            </span>

            {/* Chevron Icon */}
            <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-transform hidden sm:block" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-zinc-200/80 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-2.5 border-b border-zinc-100">
                <p className="text-xs font-bold text-zinc-900 truncate">
                  {displayName}
                </p>
                <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                  {displayCentre}
                </p>
                {session?.centreCode && (
                  <span className="inline-block mt-1 text-[10px] font-mono font-semibold text-[#A32A29] bg-[#A32A29]/10 px-2 py-0.5 rounded-md">
                    {session.centreCode}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleSignOut}
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
