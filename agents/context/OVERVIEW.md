# AMP NTS Web Application — Project Overview & Context Refresher

> **Purpose:** Use this document as an immediate context refresher for new chats and incoming agents. It captures the project purpose, architecture, established conventions, design system, and current implementation progress.

---

## 1. Project Summary
- **Organization:** Association of Muslim Professionals (AMP)
- **Project:** National Talent Search (NTS) Web Application
- **Active Scope:** **Public Website Module** (unauthenticated, public-facing informational pages and contact flow).

---

## 2. Technology Stack
- **Framework:** Next.js (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`)
- **API Communication:** Centralized `fetch` wrapper (`src/lib/api/client.ts`)
- **Server / API State:** TanStack Query (`@tanstack/react-query`)
- **Client / UI State:** Zustand
- **Forms & Validation:** React Hook Form + Zod (`@hookform/resolvers`)
- **Backend API:** Separate Node.js + Express service calling SQL Server via **Stored Procedures only**.

---

## 3. Core Architectural Rules & Constraints
1. **No Direct Database Access:** Next.js never connects to the database or uses an ORM. All business data flows strictly through the backend REST API (`/api/web/*`).
2. **Light Mode Only:** Dark mode is strictly disabled. Do not add `dark:*` Tailwind classes. `@media (prefers-color-scheme: dark)` has been removed from `globals.css`.
3. **Strict Route Naming:** Page folder names in `src/app/` follow PascalCase with underscores:
   - `/` ➔ Home (`src/app/page.tsx`)
   - `/About_NTS` ➔ About NTS (`src/app/About_NTS/`)
   - `/Important_Dates` ➔ Important Dates (`src/app/Important_Dates/`)
   - `/Student_Journey` ➔ Student Journey (`src/app/Student_Journey/`)
   - `/FAQs` ➔ FAQs (`src/app/FAQs/`)
   - `/Contact` ➔ Contact / Helpdesk (`src/app/Contact/`)
4. **Agent Working Rules (`agents/INSTRUCTIONS.md`):**
   - **DO NOT** code or modify files without explicit user approval.
   - Confirm understanding in a short, concise response.
   - Ask **"Shall I proceed?"** and wait for command before executing work.

---

## 4. Brand & Design System
- **Primary Color:** `#610D17` (Deep Maroon)
- **Primary Hover:** `#4B0A12`
- **Primary Light Tint:** `#FBF2F3`
- **Background / Surface:** Clean white (`#FFFFFF`) and light zinc (`#FAFAFA` / `bg-zinc-50`)
- **Typography:** Bold, clean navigation labels (`text-base font-bold`), high-contrast dark text (`text-zinc-800` / `text-zinc-950`).
- **Brand Logo:** Official logo located at [`public/nts-logo.jpeg`](/public/nts-logo.jpeg).

---

## 5. Folder Structure (`src/`)
```
src/
├── app/
│   ├── (auth)/                 # Preserved auth routes (login, forget-password)
│   ├── About_NTS/              # Route: /About_NTS
│   ├── Contact/                # Route: /Contact
│   ├── FAQs/                   # Route: /FAQs
│   ├── Important_Dates/        # Route: /Important_Dates
│   ├── Student_Journey/        # Route: /Student_Journey
│   ├── globals.css             # Tailwind config & CSS color variables
│   ├── layout.tsx              # Root HTML shell
│   └── page.tsx                # Home page mounting Navbar & HeroSection
├── components/
│   ├── common/                 # Reusable shared components
│   ├── dates/                  # Important Dates page components (DatesHero, DatesTimeline, etc.)
│   ├── home/                   # Home page sections
│   │   └── hero-section.tsx    # Viewport-fitted responsive Hero section
│   ├── layout/                 # Layout components (Navbar, Footer, etc.)
│   │   └── navbar.tsx          # Responsive Public Navbar
│   └── ui/                     # Primitives (buttons, inputs, modals)
├── lib/
│   ├── api/                    # Centralized fetch client & endpoints
│   ├── auth/                   # Frontend auth utilities
│   └── utils/                  # Helper functions
├── store/                      # Zustand state stores (ui.store.ts, auth.store.ts)
└── types/                      # Common TypeScript definitions (common.ts)
```

---

## 6. Current Implementation Status

### Completed:
- Full folder structure scaffolded under `src/`.
- Brand theme configured in `src/app/globals.css` with `#610D17` primary tokens and dark mode removed.
- Responsive **Navbar Component** created at `src/components/layout/navbar.tsx`:
  - Official logo: [`public/nts-logo.jpeg`](/public/nts-logo.jpeg) rendered via `next/image` (`h-14 w-auto`, header `h-20`).
  - Centered navigation links on desktop/laptops (`lg+`): About NTS, Important Dates, Student Journey, FAQs, Contact.
  - Responsive hamburger toggle on tablets & mobile (`< lg`) using a 44×44px touch target.
  - Dropdown navigation drawer with active state highlight (`#FBF2F3` bg + `#610D17` text).
- Responsive **Hero Section Component** created at `src/components/home/hero-section.tsx` and mounted on `src/app/page.tsx`:
  - **Background Styling:** Primary deep maroon solid gradient (`#610D17` via `#520A13` to `#3B070D`) with ambient lighting glows (`blur-3xl`).
  - **Top Heading:** Minimal organization eyebrow (*Association of Muslim Professionals*), title (*AMP National Talent Search (NTS) 2026*), and concise tagline without edition text.
  - **Left Column (YouTube Tutorial Video):** Responsive 16:9 YouTube video embed (`https://www.youtube.com/embed/R3BPYpBNUTQ`) titled *"How to Register for NTS 2026"* with rounded border and subtle drop shadows.
  - **Right Column (3 Registration Buttons):** 3 sleek, uniform white action buttons with brand maroon text and forward arrows:
    1. **Student Registration** (`/Student_Registration`)
    2. **Exam Center Registration** (`/Exam_Center_Registration`)
    3. **Institute Registration** (`/Institute_Registration`)
- Reusable **Accordion Component** created at `src/components/common/Accordion.tsx`:
  - PascalCase component accepting `items` (with automatic bullet point rendering via `points: string[]` or custom `content`), `columns` (`1` or `2`), `defaultOpenIds`, and `allowMultiple`.
  - Responsive multi-column layout with accessible headers (`aria-expanded`, `aria-controls`), custom SVG icon badges, and smooth chevron animation.
- Responsive **NTS 2026 at a Glance Section Component** created at `src/components/home/NTSAtAGlance.tsx` and mounted on `src/app/page.tsx`:
  - **Section Title & Intro:** "NTS 2026 AT A GLANCE" heading with clean, open unboxed lead narrative text.
  - **Declarative Accordion Usage:** Passes clean arrays of titles and bullet point strings to `<Accordion />` (1 single column centered within `max-w-4xl`, all closed by default on page load).
- Reusable **Card Component** created at `src/components/common/Card.tsx`:
  - PascalCase component with subtle hover lift and border transition.
- Reusable **Button Component** created at `src/components/common/Button.tsx`:
  - Polymorphic button supporting native `<button>` and Next.js `<Link>` / `<a>` via `href`.
  - Configurable variants (`primary`, `secondary`, `outline`, `frosted`, `ghost`) and sizes (`sm`, `md`, `lg`).
- Responsive **18 Years of Impactful Service Section Component** created at `src/components/home/ImpactMilestones.tsx` and mounted on `src/app/page.tsx`:
  - 2-column layout with left sticky narrative header highlighting 18 years of service, 200+ cities in India, and 20+ countries abroad.
  - Right column vertical milestone timeline featuring rounded icon badges and deep maroon year headings (2007, 2013, 2020, 2023, 2025).
- Responsive **Footer Component** created at `src/components/layout/footer.tsx` and mounted on `src/app/page.tsx`:
  - **Color & Theme:** Matches hero section deep maroon gradient (`from-[#610D17] via-[#520A13] to-[#3B070D]`) with a compact layout, ambient light glows, and semi-transparent frosted cards.
  - **Brand Section:** Clean typographic branding ("AMP NTS / National Talent Search") with organization summary (logo badge removed for sleekness).
  - **Get In Touch:** Compact clickable email (`info@ampindia.org`), operating hours (Mon-Fri 11:00 AM – 7:00 PM), and phone (`+91 7303116060`).
  - **Our Platforms:** Compact quick link cards powered by `<Button variant="frosted">` to IndiaZakat, AMPowerJobs, and AMP India with external link indicators.
  - **Connect With Us:** High-contrast social links powered by `<Button variant="frosted">` for LinkedIn, X (Twitter), and Facebook.
  - **Bottom Bar:** Clean, centered copyright notice.
- Responsive **About NTS Page** created at `src/app/(public)/About_NTS/page.tsx`:
  - **About AMP NTS 2026 Page Header:** Deep maroon gradient background with crisp white typography ("About AMP NTS 2026"), academic narrative, and 4 frosted metric cards (100 Questions, 5 Sections, 20 Qs/sec, Zero Negative Marking).
  - **3-Column Category Breakdown:**
    - **School Category (Classes 8, 9 & 10):** Modeled on NCERT NTSE with MAT (Mental Ability) and SAT (Scholastic), plus separate papers callout.
    - **Junior College (Classes 11th & 12th):** Pre-university aptitude foundation and national entrance readiness (CUET, etc.) with dedicated paper.
    - **Senior / Degree College (Undergraduate):** Career and postgraduate readiness benchmarked against UPSC CSAT, CAT, GRE, GMAT, GATE, SSC CGL, and campus placements.
  - **5-Section Exam Pattern & Syllabus Grid:** Detailed breakdown with numbers, 20 Qs badges, thematic SVG icons, and descriptions for Quantitative Analysis, Data Interpretation & Logical Reasoning, Vocabulary & Reading Comprehension, Current Affairs, and General Knowledge & Islamic Studies / Deeniyat.
  - **Exam Guidelines NTS 2026 Section:** Structured rule cards (No negative marking, Single attempt policy, Flexible registration), official announcement channel links, and guideline document download / helpdesk CTA banner (`nts@ampindia.org` & `www.tinyurl.com/AllNTSDocument`).
- Responsive **Contact Page** created at `src/app/Contact/page.tsx`:
  - **Hero Header:** Deep maroon gradient with clear contact narrative and status tags.
  - **Direct Student Helpline Numbers:** 3 dedicated category cards (School Students: `8657506907`, Junior College Students: `8657506909`, Undergraduate / Degree College: `8657003085`) with direct one-tap WhatsApp and phone call actions.
  - **Advisory Notice:** "Please WhatsApp before calling for quicker assistance" banner.
  - **Daily Helpline Meeting:** Live interactive doubt resolution card with schedule (Mon-Sat, 5:00 PM - 6:00 PM IST), join link (`https://tinyurl.com/HelplineAMPNTS`), and list of covered topics.
  - **Email Support & Resource Links:** Dedicated `nts@ampindia.org` email card with 24–48 hour turnaround SLA, plus quick navigation links to the syllabus guide and official guideline document.
- Responsive **Important Dates Page** created at `src/app/Important_Dates/page.tsx`:
  - **Hero Header:** Deep maroon gradient with key timeline milestones (Daily Sessions, Sep–Nov Registration Window, December 2026 Confirmed Exam, and January 2027 Results).
  - **Chronological Timeline Roadmap:** 6 milestone phases with custom status indicators (`Daily Live`, `Tentative`, `Confirmed`), stage badges, icon containers, and action links.
  - **Important Notes for Students:** Dedicated advisory cards for official update channels (`www.ampindia.org/national_talent_search` and AMP World Mobile App) and direct category helplines (`nts@ampindia.org` and daily Google Meet).
- Reusable **Dropdown Component** created at `src/components/common/Dropdown.tsx`:
  - Fully generic and reusable dropdown component (`DropdownProps<T>`) supporting custom options (`value`, `label`, `badge`, `description`, `icon`), outside-click handling, Escape key dismissal, accessibility attributes (`role="listbox"`, `aria-expanded`), and brand styling.
- Responsive **FAQs Page** created at `src/app/FAQs/page.tsx`:
  - **Comprehensive Dataset:** All 40 official FAQs organized into 7 structured categories (`src/components/faqs/FaqData.tsx`): General (5), Eligibility (7), Exam Format (5), Syllabus & Pattern (4), Scholarships & Rewards (7), Registration & Updates (5), and For Institutions, Partners & Volunteers (7).
  - **Clean Category Navigation:** Client-side component `src/components/faqs/FaqInteractive.tsx` powered by the generic `<Dropdown />` component to filter categories seamlessly.
  - **Accordion Integration:** Powered by the reusable `<Accordion />` component with single-column layout, formatted text, bullet points, cash prize grids, and direct links.
  - **Hero Header & Highlights:** Deep maroon gradient with 4 frosted highlight cards (Offline Mode Only, Zero Negative Marks, December 2026 Exam, ₹10 Cr+ Scholarships).
  - **Direct Support Banner:** Bottom CTA card with links to daily Google Meet (Mon–Sat 5–6 PM), direct category helplines, and `/Contact` page.
- TypeScript & Lint clean (`npx tsc --noEmit` & `npm run lint` = 0 errors).

### Pending / Next Steps for Public Website:
1. Build individual page content for the remaining route (`Student_Journey`).
2. Set up TanStack Query Client wrapper (`QueryProvider`) and centralized API client (`src/lib/api/client.ts`).
3. Implement Contact Form with React Hook Form + Zod.


