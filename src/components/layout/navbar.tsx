"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/common/Button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About NTS", href: "/About_NTS" },
  { label: "Important Dates", href: "/Important_Dates" },
  { label: "Mock Papers", href: "/Mock_Papers" },
  { label: "Exam Center", href: "/Become_An_Exam_Center" },
  { label: "FAQs", href: "/FAQs" },
  { label: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white shadow-sm">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo (Left) */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none"
        >
          <Image
            src="/amp_Logo.png"
            alt="Association of Muslim Professionals Logo"
            width={1740}
            height={254}
            className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Navigation Links (Laptop & Desktop: lg+) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2.5 xl:px-3 py-1.5 text-sm font-semibold transition-colors ${isActive
                  ? "bg-[#fbf2f3] text-[#610D17] font-bold"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: All Documents, Desktop Login & Mobile Hamburger (< lg) */}
        <div className="flex items-center gap-3">
          {/* Desktop All Documents Redirect Button (lg+) */}
          <div className="hidden lg:block">
            <Button
              href="https://drive.google.com/drive/folders/1qzirip8K-OzIRuexnOa7XXH2CAo_B0At"
              target="_blank"
              rel="noopener noreferrer"
              variant="brand-outline"
              size="sm"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              All Documents
            </Button>
          </div>

          {/* Desktop Login Button (lg+) */}
          <div className="hidden lg:block">
            <Button href="/login" variant="primary" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile & Tablet Hamburger Button (< lg) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-30 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 active:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#610D17] select-none"
            >
              {isOpen ? (
                // Close icon
                <svg
                  className="pointer-events-none h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="pointer-events-none h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu (< lg) */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } relative z-20 w-full border-t border-zinc-200 bg-white px-4 pt-2 pb-5 shadow-lg lg:hidden`}
      >
        <div className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3.5 py-3 text-base font-bold transition-colors ${isActive
                  ? "bg-[#fbf2f3] text-[#610D17]"
                  : "text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Action Buttons */}
          <div className="pt-2.5 border-t border-zinc-100 mt-1 flex flex-col gap-2">
            <Button
              href="https://www.tinyurl.com/AllNTSDocument"
              target="_blank"
              rel="noopener noreferrer"
              variant="brand-outline"
              size="md"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              All Documents
            </Button>
            <Button
              href="/login"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}