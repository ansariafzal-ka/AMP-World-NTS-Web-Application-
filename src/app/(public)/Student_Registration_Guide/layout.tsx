import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Details & Guide | AMP NTS 2026",
  description:
    "Official guidelines and step-by-step instructions for Individual Student, Mobile App, and Institutional Bulk Registrations for AMP NTS 2026.",
};

export default function StudentRegistrationGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
