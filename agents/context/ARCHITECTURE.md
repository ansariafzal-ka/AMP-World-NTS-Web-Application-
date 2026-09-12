# AMP NTS — Web Application Architecture Context

> Full context for coding agents on architecture, stack, and conventions.
> Follow exactly for consistency across developers.

## 1. System Overview
Web (Next.js) ─┐
                ├─→ Backend API (Node.js + Express) ─→ DB (SQL Server)
Mobile (Flutter)┘

- Web: Next.js (TS + Tailwind) — public site + dashboards
- Mobile: Flutter — student/institution/exam-centre app
- Backend: Express — single API, serves `/api/web/*` and `/api/mobile/*`
- DB: SQL Server — accessed ONLY via stored procedures, ONLY from backend

**Rule:** Neither Next.js nor Flutter ever talks to the DB directly. All data via backend REST API.

## 2. My Scope: Public Website Module
Unauthenticated, public-facing pages: Home, About NTS, Student Journey,
Important Dates, Contact/Helpdesk, FAQs. Contact form + FAQs may hit the API;
rest is static/informational. Other modules (Auth, Student/Institution/Exam
Centre Interfaces, Admin, Ops, Training Partner) are out of scope but must
share these same conventions.

## 3. Backend (Node.js + Express)
Stack: Express + SQL Server via **stored procedures only** (no raw inline SQL).

API/src/
├── config/ (database.js, env.js)
├── routes/web/.routes.js, routes/mobile/.routes.js, routes/index.js
├── controllers/ # request/response
├── services/ # business logic, calls SPs
├── middleware/ # auth, validation, error handling, rate limit, logging
├── validators/
├── utils/
├── app.js, server.js


Flow: `Request → Router → Controller → Service → Stored Procedure → JSON Response`

Middleware: JWT auth, role-based authz, request validation, global error handler,
Winston/Morgan logging, Express rate limit.

Infra: `.env` config, `mssql` driver, CORS, Helmet, Swagger docs, `/health` check.

DB naming: `SP_<Entity>_<Action>` e.g. `SP_Auth_Login`, `SP_Contact_Create`.

Optional integrations: SMTP email, Firebase push, cloud file storage, 3rd-party APIs.

## 4. Web App (Next.js)
Stack: Next.js (App Router) + TypeScript + Tailwind. API via centralized
`fetch` client — **no direct DB access**. Server state → TanStack Query.
Global/UI state → Zustand. Forms → React Hook Form + Zod.

web/src/
├── app/ (layout.tsx, page.tsx, globals.css, (auth)/, dashboard/, users/, ...)
├── components/ (ui/, common/, layout/)
├── lib/api/ (client.ts, endpoints.ts), lib/auth/, lib/utils/
├── store/ (auth.store.ts, ui.store.ts)
├── types/common.ts


My module's routes:

src/app/
├── page.tsx # Home
├── about-nts/page.tsx
├── student-journey/page.tsx
├── important-dates/page.tsx
├── contact/page.tsx # Contact/Helpdesk
├── faqs/page.tsx


## 5. Example Data Flow

/contact form submit → lib/api/client.ts → POST /api/web/contact
→ contact.routes.js → contact.controller.js → contact.service.js
→ SP_Contact_Create → JSON response → TanStack Query mutation → UI state


## 6. Non-Negotiable Conventions
1. Next.js never queries DB directly — always via backend API.
2. Backend never writes raw inline SQL for business data — always stored procedures.
3. Follow folder structure exactly — no ad hoc folders.
4. All frontend API calls go through `lib/api/client.ts` only.
5. Server data → TanStack Query. UI state → Zustand. Never duplicate.
6. Forms → React Hook Form + Zod, colocated with page or in `lib/utils/validation`.
7. Public Website module has no auth — don't wrap in auth guards.
8. Deliverables: SQL scripts, complete source files, Release Notes.

## 7. Reference Files
- `AMP-NTS-PROJECT-ARCHITECTURE-2026.pdf` — architecture diagrams (source of truth)
- `AMP_NTS_-_Web_Application_Modules_List.xlsx` — full module/feature breakdown