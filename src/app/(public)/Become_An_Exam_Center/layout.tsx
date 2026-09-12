import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Exam Centre",
  description:
    "Partner with AMP to host the National Talent Search 2026 in your Block or Taluka and benefit your institution.",
};

export default function BecomeAnExamCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
