import React, { Suspense } from "react";
import type { Metadata } from "next";
import ExamCentreLoginContent from "./ExamCentreLoginContent";

export const metadata: Metadata = {
  title: "Exam Centre Sign In — AMP NTS 2026",
  description:
    "Sign in to your AMP National Talent Search Exam Centre Portal using your registered mobile number.",
};

export default function PortalLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
          <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm">
            <span className="h-5 w-5 rounded-full border-2 border-red-800/30 border-t-[#A32A29] animate-spin" />
            <span>Loading Sign In...</span>
          </div>
        </div>
      }
    >
      <ExamCentreLoginContent />
    </Suspense>
  );
}
