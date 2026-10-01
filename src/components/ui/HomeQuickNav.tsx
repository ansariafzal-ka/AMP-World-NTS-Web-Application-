"use client";

import React from "react";
import Link from "next/link";

interface QuickNavItem {
  id: string;
  label: string;
  href?: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const navItems: QuickNavItem[] = [
  {
    id: "glance",
    label: "At a Glance",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    id: "scholarships",
    label: "Scholarships & Awards",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.496m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.496 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492c.981.142 1.954.317 2.916.52a6.003 6.003 0 0 1-5.395 4.972m-2.749 1.35a6.726 6.726 0 0 1-2.748 1.35" />
      </svg>
    ),
  },
  {
    id: "how-to-participate",
    label: "How to Participate",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    id: "highlights",
    label: "Highlights & Videos",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    id: "mobile-app",
    label: "Mobile App",
    href: "/AMP_World_App",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

export default function HomeQuickNav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Quick Section Navigation"
      className="sticky top-20 z-30 border-y border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-xs py-3 sm:py-3.5 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nav Pills Container - centered on tablet, laptop & desktop */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 px-1 w-full scroll-smooth">
          {navItems.map((item) => {
            const Icon = item.icon;
            const commonClasses =
              "group inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-zinc-50/90 hover:bg-[#610D17] hover:border-[#610D17] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-[13px] font-bold text-zinc-700 hover:text-white transition-all duration-200 shrink-0 shadow-2xs hover:shadow-xs";

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={commonClasses}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#610D17] group-hover:text-rose-200 transition-colors shrink-0" />
                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={commonClasses}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#610D17] group-hover:text-rose-200 transition-colors shrink-0" />
                <span className="whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
