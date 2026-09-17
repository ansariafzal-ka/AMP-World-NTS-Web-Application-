"use client";

import React from "react";

interface QuickNavItem {
  id: string;
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const navItems: QuickNavItem[] = [
  {
    id: "about-nts",
    label: "Overview",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
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
    id: "certificates-beyond",
    label: "Certificates & Beyond",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <rect x="4" y="3" width="16" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M8 15h4" />
        <circle cx="16" cy="15.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17 14 19.5l2-1 2 1-1-2.5" />
      </svg>
    ),
  },
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
    id: "how-to-participate",
    label: "How to Participate",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    id: "registration",
    label: "Registration Portals",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
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
      className="sticky top-20 z-30 border-y border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-xs py-3.5 sm:py-4 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Nav Pills Container */}
          <div className="flex items-center justify-start md:justify-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-0.5 w-full scroll-smooth">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="group inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-zinc-50/90 hover:bg-[#610D17] hover:border-[#610D17] px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-[13px] font-bold text-zinc-700 hover:text-white transition-all duration-200 shrink-0 shadow-2xs hover:shadow-xs"
                >
                  <Icon className="w-4 h-4 text-[#610D17] group-hover:text-rose-200 transition-colors shrink-0" />
                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
