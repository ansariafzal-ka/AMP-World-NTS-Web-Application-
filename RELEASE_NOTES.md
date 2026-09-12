# AMP National Talent Search (NTS) Web Application
## Release Notes — Version 0.1.0

---

### 📌 Overview
**AMP NTS Web Application (v0.1.0)** is the official web portal built for the **Association of Muslim Professionals (AMP)** National Talent Search examination. It delivers a fast, responsive, and accessible experience for students across India (from Class 8 through Undergraduate degrees), educators, and institutional partners to discover exam syllabi, guidelines, important dates, and direct support channels.

---

### 🚀 Key Features & Implemented Pages

> **Route Architecture:** Publicly accessible pages without login requirements are organized cleanly under the `src/app/(public)/` Next.js route group, preserving canonical URL paths (`/About_NTS`, `/Contact`, `/Important_Dates`, `/FAQs`, etc.) while keeping them decoupled from authenticated routes (`src/app/(auth)/`).

#### 1. Landing & Home Page (`/`)
* **Hero Banner Section:** Engaging hero section highlighting the NTS mission, primary call-to-action buttons for student registration, and examination highlights.
* **NTS at a Glance:** Categorized overview of participating student tiers (School, Junior College, Senior/Degree College) highlighting key metrics (100 MCQs, 5 sections, zero negative marking).
* **Impact & Milestones:** Visual statistical counters showcasing national reach, scholarship impact, participating institutions, and student community empowerment.

#### 2. About NTS & Syllabus Guide (`/About_NTS`)
* **5 Structured Exam Sections:** Detailed breakdown of the 100-question exam syllabus:
  1. Quantitative Analysis (20 Qs)
  2. Data Interpretation & Logical Reasoning (20 Qs)
  3. Vocabulary & Reading Comprehension (20 Qs)
  4. Current Affairs (20 Qs)
  5. General Knowledge & Islamic Studies / Deeniyat (20 Qs)
* **Tier-Specific Academic Alignment:**
  * *School (Classes 8, 9, 10):* NCERT NTSE aligned (MAT & SAT).
  * *Junior College (Classes 11 & 12):* CUET (UG) and national entrance examination benchmarks.
  * *Senior College (Undergraduate):* UPSC (CSAT), CAT, GRE/GMAT, and corporate campus placement standards.
* **Official Guidelines:** Exam rules, single-attempt policy, marking schemes, and external links to the full official guidelines document.

#### 3. Contact & Student Helpdesk (`/Contact`)
* **Direct Category Helplines:**
  * *School Students (8th–10th):* Dedicated helpline with instant WhatsApp support.
  * *Junior College Students (11th–12th):* Dedicated helpline with instant WhatsApp support.
  * *Undergraduate Students:* Dedicated helpline with instant WhatsApp support.
* **Live Daily Doubt Resolution Session:** Schedule and direct link for daily Google Meet sessions (Monday to Saturday, 5:00 PM – 6:00 PM IST).
* **Official Email Support:** Direct channel to `nts@ampindia.org` with advisory response SLA.

#### 4. Important Dates & Examination Schedule (`/Important_Dates`)
* **Key Milestones Hero:** High-contrast highlight banners summarizing the daily info sessions, registration window (Sep–Nov 2026), confirmed examination date (December 2026), and merit list release (January 2027).
* **Chronological Roadmap (Phases 01–06):** Step-by-step visual cards with status indicators (`Daily Live`, `Tentative`, `Confirmed`), interactive links to the daily Google Meet and syllabus guide, and category-level instructions.
* **Important Notes for Students:** Actionable advisories for monitoring official announcements via [www.ampindia.org/national_talent_search](https://www.ampindia.org/national_talent_search) and the AMP World Mobile App, plus category helpline details.

#### 5. Frequently Asked Questions (FAQs) (`/FAQs`)
* **Hero Overview & Quick Metrics:** Highlights offline examination format, zero negative marking, December 2026 timeline, and ₹10 Cr+ scholarship pool.
* **40 Curated Questions Across 7 Categories:**
  1. *General Questions:* Background, reach across 400+ districts, timeline, and participation scale.
  2. *Eligibility & Categories:* Coverage for Schools (8th–10th), Junior Colleges (11th–12th), Undergraduates, NIOS, Madarsa, and boards (CBSE/ICSE/State).
  3. *Exam Mode & Format:* Clarification on offline physical OMR format, centre allocation, and exam day requirements.
  4. *Syllabus & Marking Scheme:* Breakdown of 5 sections, 100 MCQs, zero negative marking, and preparation resources.
  5. *Scholarships, Cash Prizes & Rewards:* Details on ₹10 Cr+ higher education scholarships, cash awards, certificates, and coaching fee waivers.
  6. *Registration, App & Helpdesk:* Step-by-step guidance on AMP World App, individual vs. institutional registration, and live daily support sessions.
  7. *Institutions & Exam Centres:* Process for schools and colleges to register as official NTS exam venues.
* **Interactive Category Filter & Dropdown:** Filter by specific topic using the custom `Dropdown` selector with smooth category navigation and expandable `Accordion` answers.

#### 6. Authentication Skeletons (`/login`, `/forget-password`)
* Clean foundation pages for student/partner sign-in and password recovery flows, ready for backend auth integration.

#### 7. Layout & Design System Components
* **Global Navigation Bar (`Navbar.tsx`):**
  * Sticky, responsive header with brand logo.
  * Desktop menu with active route indicators and prominent primary **Login** button.
  * Mobile drawer menu with touch-friendly navigation and dedicated full-width **Login** action.
* **Universal Footer (`Footer.tsx`):** Multi-column footer featuring quick links, AMP organizational details, social media connections, and copyright notices.
* **Reusable UI Component Suite (`src/components/common`):**
  * `Dropdown.tsx`: Accessible custom dropdown selector with keyboard support (Escape key), click-outside detection, option descriptions, and badges.
  * `Button.tsx`: Highly configurable button supporting 5 color variants (`primary`, `secondary`, `outline`, `frosted`, `ghost`), 3 sizes, external/internal link handling, and disabled states.
  * `Accordion.tsx`: Accessible collapsible accordion component with smooth animations and multi-item or single-item expand modes.
  * `Card.tsx`: Consistent container card wrapper.

---

### 🛠️ Technology Stack
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript 5
* **Core Library:** React 19
* **Styling:** Tailwind CSS v4 (with custom maroon brand identity `#610D17`)
* **Optimization:** Next.js Image optimization and dynamic font rendering

---

### 📦 Setup & Installation Instructions

#### Prerequisites
* Node.js (version 18.18.0 or higher recommended)
* npm, pnpm, or yarn

#### Quick Start
1. **Unzip the project files** into your desired directory.
2. Open terminal in the project root:
   ```bash
   cd amp-nts-web-application
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run development server:**
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Building for Production
```bash
npm run build
npm run start
```

---

### 📋 File Packaging Notice
When distributing this release via ZIP, the following build artifacts, dependencies, and temporary directories should be omitted:
* `node_modules/` (re-installable via `npm install`)
* `.next/` (build output)
* `.git/` (git history)

---
*Maintained by AMP Web Development Team.*