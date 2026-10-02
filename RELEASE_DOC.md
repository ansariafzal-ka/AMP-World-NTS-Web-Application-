# AMP NTS Web Application — Release Document

**Release Name:** NTS 2026 Feature Updates  
**Release Version:** v0.3.0  
**Release Date:** October 2, 2026  

---

## Modules & File Paths

### 1. NTS Details — Exam Day Guidelines (Section 11)
* `[MODIFIED]` `src/components/nts-details/NTSDetailsContent.tsx`

### 2. Participating Institution Page
* `[ADDED]` `src/app/(public)/Participating_Institution/page.tsx`
* `[ADDED]` `src/app/(public)/Participating_Institution/layout.tsx`

### 3. Student Registration Guide Page
* `[ADDED]` `src/app/(public)/Student_Registration_Guide/page.tsx`
* `[ADDED]` `src/app/(public)/Student_Registration_Guide/layout.tsx`

### 4. Become An Exam Centre / Center
* `[ADDED]` `src/app/(public)/Become_An_Exam_Centre/page.tsx`
* `[ADDED]` `src/app/(public)/Become_An_Exam_Centre/layout.tsx`
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

### 9. Routing Configuration
* `[MODIFIED]` `next.config.ts`

---

## Consolidated File List for Merging (29 Files)

### Added Files (11)
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
src/components/ui/ParticipateInNTS.tsx
src/components/ui/TrainingPartnersSection.tsx
```

### Modified Files (18)
```text
next.config.ts
src/app/(public)/AMP_World_App/page.tsx
src/app/(public)/Become_An_Exam_Center/page.tsx
src/app/page.tsx
src/components/common/Ribbon.tsx
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
