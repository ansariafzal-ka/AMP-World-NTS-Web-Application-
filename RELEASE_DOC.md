# AMP NTS Web Application — Release Document

**Release Name:** NTS 2026 Feature Updates  
**Release Version:** v0.3.2  
**Release Date:** October 5, 2026  

---

## Summary of Key Updates

1. **Student's Instructions & Exam Day Guidelines:**
   - Standalone `ExamDayGuidelines.tsx` component mounted on Home Page (`/#exam-day-instructions`) with title **Student's Instructions** and subtitle **Exam Day Guidelines**.
   - Added **Student's Instructions** tab badge in `HomeQuickNav` directly after "Sponsorship & Partnership" with smooth anchor scrolling.
2. **Scholarships List Link Integration:**
   - Added direct coaching partners & scholarships list link `www.tinyurl.com/ampntsscholarshipslist` (`https://www.tinyurl.com/ampntsscholarshipslist`) in the bottom footer of both the Home page "Scholarships" card (`ScholarshipsRewards.tsx`) and the NTS Details "Higher Education Coaching Scholarships" card (`NTSDetailsContent.tsx`).
3. **Be a Part of AMP NTS & Role Coordination:**
   - Redesigned and streamlined `ParticipateInNTS.tsx` with a compact "Be a Part of the AMP National Talent Search" contact desk banner for Volunteers, Observers, Interns, AMP Team Members, Trainers, and Invigilators.
   - Added direct coordination contacts for **Ms. Nasim Ma'am** and **Ms. Zainab Batool**.
   - Removed redundant contact details from individual Volunteer and Trainer cards.
4. **Navigation & Helpline Alignment:**
   - Repositioned the Helpline redirection in the top navbar (`navbar.tsx`) directly next to "Institute Registration".
5. **Contact Page Layout Optimization:**
   - Reordered sections on `/Contact` to bring the **Daily Helpline Meeting** section directly above **Helpline Numbers**.
6. **Mobilization Partner & Registration Workflows:**
   - Added `MobilizationPartnerSection.tsx` to Home Page.
   - Updated guidelines and flows in `/Become_An_Exam_Centre` and `/Participating_Institution`.
7. **Exam Center Dashboard — Single Point of Contact & Map Option:**
   - Renamed label from "Point of contact:" to **"Single Point of Contact:"** in `CentreDetailsSection.tsx`.
   - Added an optional **Map** row underneath Pincode. If a map URL (`GoogleMapLink` / `mapUrl`) is provided, displays a clickable **"View on Google Maps"** link opening securely in a new tab; otherwise remains empty.
   - Updated SQL Server stored procedure `EXAMCENTRE.GetExamCentreDashboardDetails` and schema to include `GoogleMapLink NVARCHAR(500) NULL` in `EXAMCENTRE.ExamCentre`.
   - Updated Express API service (`API/src/services/examCenter.service.js`) and frontend dashboard data fallback (`dashboardData.ts`) to return and map `GoogleMapLink`.
8. **Global Login Navigation & Portal Redirection:**
   - Updated desktop and mobile header **Login** buttons in `src/components/layout/navbar.tsx` to link to `/portal`.
   - Added route redirect in `next.config.ts` mapping `/login` to `/portal` (`permanent: false`).

---

## Modules & File Paths

### 1. NTS Details — Coaching Scholarships List & Guidelines
* `[MODIFIED]` `src/components/nts-details/NTSDetailsContent.tsx`

### 2. Participating Institution Page
* `[ADDED]` `src/app/(public)/Participating_Institution/layout.tsx`
* `[ADDED]` `src/app/(public)/Participating_Institution/page.tsx`

### 3. Student Registration Guide Page
* `[ADDED]` `src/app/(public)/Student_Registration_Guide/layout.tsx`
* `[ADDED]` `src/app/(public)/Student_Registration_Guide/page.tsx`

### 4. Become An Exam Centre / Center
* `[ADDED]` `src/app/(public)/Become_An_Exam_Centre/layout.tsx`
* `[ADDED]` `src/app/(public)/Become_An_Exam_Centre/page.tsx`
* `[MODIFIED]` `src/app/(public)/Become_An_Exam_Center/page.tsx`

### 5. Sponsorship & Partnership Page
* `[ADDED]` `src/app/(public)/Sponsorship_And_Partnership/page.tsx`
* `[ADDED]` `src/app/(public)/Sponsors_And_Partners/page.tsx`
* `[ADDED]` `src/app/(public)/sponsors-and-partners/page.tsx`
* `[ADDED]` `src/components/ui/TrainingPartnersSection.tsx`

### 6. Important Dates & Timeline
* `[MODIFIED]` `src/components/ui/DatesHero.tsx`
* `[MODIFIED]` `src/components/ui/DatesTimeline.tsx`
* `[MODIFIED]` `src/components/ui/DatesCTA.tsx`

### 7. FAQs Data
* `[MODIFIED]` `src/components/faqs/FaqData.tsx`

### 8. Home Page & Navigation Components
* `[ADDED]` `src/components/ui/ExamDayGuidelines.tsx`
* `[ADDED]` `src/components/ui/MobilizationPartnerSection.tsx`
* `[ADDED]` `src/components/ui/ParticipateInNTS.tsx`
* `[MODIFIED]` `src/app/page.tsx`
* `[MODIFIED]` `src/components/common/Ribbon.tsx`
* `[MODIFIED]` `src/components/layout/navbar.tsx`
* `[MODIFIED]` `src/components/layout/footer.tsx`
* `[MODIFIED]` `src/components/ui/ScholarshipsRewards.tsx`
* `[MODIFIED]` `src/components/ui/hero-section.tsx`
* `[MODIFIED]` `src/components/ui/HowToParticipate.tsx`
* `[MODIFIED]` `src/components/ui/HomeQuickNav.tsx`
* `[MODIFIED]` `src/components/ui/HomeVideoSection.tsx`
* `[MODIFIED]` `src/components/ui/NTSAtAGlance.tsx`
* `[MODIFIED]` `src/app/(public)/AMP_World_App/page.tsx`

### 9. Contact Page
* `[MODIFIED]` `src/app/(public)/Contact/page.tsx`

### 10. Routing Configuration & Dynamic Slugs
* `[MODIFIED]` `next.config.ts`
* `[MODIFIED]` `src/app/[slug]/page.tsx`

### 11. Exam Center Dashboard & Backend Services
* `[MODIFIED]` `API/src/services/examCenter.service.js`
* `[MODIFIED]` `database/exam_center_dashboard_schema.sql`
* `[MODIFIED]` `src/components/exam-center-dashboard/CentreDetailsSection.tsx`
* `[MODIFIED]` `src/components/exam-center-dashboard/dashboardData.ts`

---

## Consolidated File List for Merging (37 Files)

### Added Files (13)
```text
src/app/(public)/Become_An_Exam_Centre/layout.tsx
src/app/(public)/Become_An_Exam_Centre/page.tsx
src/app/(public)/Participating_Institution/layout.tsx
src/app/(public)/Participating_Institution/page.tsx
src/app/(public)/Sponsors_And_Partners/page.tsx
src/app/(public)/Sponsorship_And_Partnership/page.tsx
src/app/(public)/Student_Registration_Guide/layout.tsx
src/app/(public)/Student_Registration_Guide/page.tsx
src/app/(public)/sponsors-and-partners/page.tsx
src/components/ui/ExamDayGuidelines.tsx
src/components/ui/MobilizationPartnerSection.tsx
src/components/ui/ParticipateInNTS.tsx
src/components/ui/TrainingPartnersSection.tsx
```

### Modified Files (24)
```text
API/src/services/examCenter.service.js
database/exam_center_dashboard_schema.sql
next.config.ts
src/app/(public)/AMP_World_App/page.tsx
src/app/(public)/Become_An_Exam_Center/page.tsx
src/app/(public)/Contact/page.tsx
src/app/[slug]/page.tsx
src/app/page.tsx
src/components/common/Ribbon.tsx
src/components/exam-center-dashboard/CentreDetailsSection.tsx
src/components/exam-center-dashboard/dashboardData.ts
src/components/faqs/FaqData.tsx
src/components/layout/footer.tsx
src/components/layout/navbar.tsx
src/components/nts-details/NTSDetailsContent.tsx
src/components/ui/DatesCTA.tsx
src/components/ui/DatesHero.tsx
src/components/ui/DatesTimeline.tsx
src/components/ui/HomeQuickNav.tsx
src/components/ui/HomeVideoSection.tsx
src/components/ui/HowToParticipate.tsx
src/components/ui/NTSAtAGlance.tsx
src/components/ui/ScholarshipsRewards.tsx
src/components/ui/hero-section.tsx
```
