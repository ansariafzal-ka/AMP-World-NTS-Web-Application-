import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Exam Centre | AMP NTS 2026",
  description:
    "Join hands with AMP as an Exam Centre for your block or Taluka and benefit your Institution as well as Students.",
};

export default function BecomeAnExamCentreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
