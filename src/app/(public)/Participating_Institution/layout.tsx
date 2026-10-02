import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participating Institution & Partner | AMP NTS 2026",
  description:
    "Partner with AMP National Talent Search (NTS) 2026. Official registration process for Schools, Junior Colleges, and Higher Education Institutes, benefits, and MoUs.",
};

export default function ParticipatingInstitutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
