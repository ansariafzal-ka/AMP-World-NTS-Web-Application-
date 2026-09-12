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
            src="/nts-logo.jpeg"
            alt="AMP NTS Logo"
            width={58}
            height={70}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Navigation Links (Laptop & Desktop: lg+) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-3.5 py-2 text-base font-bold transition-colors ${isActive
                  ? "bg-[#fbf2f3] text-[#610D17]"
                  : "text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Desktop Login & Mobile Hamburger (< lg) */}
        <div className="flex items-center gap-3">
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

          {/* Mobile Login Button */}
          <div className="pt-2.5 border-t border-zinc-100 mt-1">
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