import Link from "next/link";
import Button from "@/components/common/Button";

interface PlatformLink {
  title: string;
  subtitle: string;
  href: string;
}

const platforms: PlatformLink[] = [
  {
    title: "IndiaZakat",
    subtitle: "Zakat Crowdfunding",
    href: "https://indiazakat.com/",
  },
  {
    title: "AMPowerJobs",
    subtitle: "Employment & Jobs",
    href: "https://ampowerjobs.com/",
  },
  {
    title: "AMP India",
    subtitle: "Education & Progress",
    href: "https://www.ampindia.org/",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/groups/2228112/profile",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "http://x.com/AMPIndia",
    icon: (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ampindia.org/",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] text-white">
      {/* Decorative ambient background glows */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8B1321]/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Top Grid: Brand & Description | Get in Touch */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Brand & Short Description */}
          <div className="lg:col-span-7 space-y-2.5">
            <Link
              href="/"
              className="inline-flex flex-col transition-opacity hover:opacity-90 focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight">
                AMP NTS
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                National Talent Search
              </span>
            </Link>

            <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-200">
              AMP is an intellectual organization spread out at a national level, having more than 200 active chapters across India and growing further with a strong presence of professional base across the country.
            </p>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Get In Touch
              </h3>
              <div className="h-0.5 w-8 bg-white/40 rounded-full" />
            </div>

            <div className="space-y-2 pt-0.5">
              {/* Mail Us */}
              <a
                href="mailto:info@ampindia.org"
                className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-all hover:border-white/25 hover:bg-white/10"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-zinc-200 transition-colors group-hover:bg-white group-hover:text-[#610D17]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                    Mail Us
                  </span>
                  <span className="truncate text-xs sm:text-sm font-semibold text-white transition-colors group-hover:text-zinc-100">
                    info@ampindia.org
                  </span>
                </div>
              </a>

              {/* Working Hours & Phone */}
              <a
                href="tel:+917303116060"
                className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-all hover:border-white/25 hover:bg-white/10"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-zinc-200 transition-colors group-hover:bg-white group-hover:text-[#610D17]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                    Mon to Fri : 11:00 AM – 7:00 PM
                  </span>
                  <span className="truncate text-xs sm:text-sm font-semibold text-white transition-colors group-hover:text-zinc-100">
                    +91 7303116060
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Platforms & Social Links */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Our Platforms */}
            <div className="flex-1 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Our Platforms
                </span>
                <div className="h-0.5 w-6 bg-white/40 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {platforms.map((platform) => (
                  <Button
                    key={platform.title}
                    variant="frosted"
                    size="sm"
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full justify-between rounded-lg border-white/10 bg-white/5 !px-3 !py-2.5 text-left hover:border-white/25 hover:bg-white/10"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-zinc-100">
                        {platform.title}
                      </h4>
                      <p className="text-[11px] font-normal text-zinc-300">{platform.subtitle}</p>
                    </div>
                    <svg
                      className="h-3.5 w-3.5 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Button>
                ))}
              </div>
            </div>

            {/* Connect With Us */}
            <div className="space-y-2.5 lg:pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Connect With Us
                </span>
                <div className="h-0.5 w-6 bg-white/40 rounded-full" />
              </div>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="frosted"
                    size="sm"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name}`}
                    className="!h-9 !w-9 !p-0 rounded-lg border-white/10 bg-white/5 text-zinc-200 transition-all hover:border-white hover:bg-white hover:text-[#610D17]"
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-zinc-300">
          <p>
            &copy; 2026 Association of Muslim Professionals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
