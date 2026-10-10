"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

// Primary vibrant red color matching the reference design
const THEME_RED = "#A32A29";

export default function ExamCentreLoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Portal type handling (defaults to exam-centre unless specified)
  const portalParam = searchParams.get("portal");
  const isInstitution = portalParam === "institution";
  const portalTitle = isInstitution ? "Institution" : "Exam Centre";

  // Flow states
  const [mobileNumber, setMobileNumber] = useState("");
  const [step, setStep] = useState<"MOBILE" | "OTP">("MOBILE");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(600);
  const [errorMessage, setErrorMessage] = useState("");

  // Timer countdown when on OTP step (600 seconds limit)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "OTP" && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  // Handle Mobile Number Change
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(val);
    if (errorMessage) setErrorMessage("");
  };

  // Submit Mobile -> Check DB -> Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/exam-center/check-mobile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobileNumber }),
      });

      const data = await res.json();
      const centreData = data?.data;

      if (!centreData?.exists) {
        setErrorMessage("Mobile number not registered with any Exam Centre.");
        setIsLoading(false);
        return;
      }

      // Store centre info for session / header
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "amp_exam_centre_session",
          JSON.stringify({
            mobile: mobileNumber,
            centreCode: centreData.centreCode || "AMPNTS25TG0644",
            centreName: centreData.centreName || "Exam Centre",
            contactPerson: centreData.contactPerson || "Exam Centre User",
            role: centreData.role || "ExamCenter",
          })
        );
      }

      setStep("OTP");
      setResendTimer(600);
      setOtp("");
    } catch (err) {
      console.error("Error verifying mobile:", err);
      setErrorMessage("Unable to verify mobile number. Please check connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OTP Input Change
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(val);
    if (errorMessage) setErrorMessage("");
  };

  // Verify OTP
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      setErrorMessage("Please enter the complete OTP");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/portal/exam-centre/dashboard");
    }, 500);
  };

  // Resend OTP (Reset back to 600 seconds)
  const handleResendOtp = () => {
    if (resendTimer > 0) return;
    setResendTimer(600);
    setErrorMessage("");
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-hidden select-none">
      {/* Background concentric ambient decorative rings */}
      <div
        className="pointer-events-none absolute -top-36 -left-36 w-[520px] h-[520px] rounded-full border border-[#A32A29]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full border border-[#A32A29]/[0.08]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-4 -left-4 w-[240px] h-[240px] rounded-full border border-[#A32A29]/[0.06]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
        {/* =========================================================
            LEFT COLUMN: PROMINENT LOGO & NTS 2026 BADGE
        ========================================================= */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-lg">
          {/* Main AMP Logo */}
          <Link href="/" className="inline-block transition-opacity hover:opacity-90 w-full max-w-sm sm:max-w-md">
            <Image
              src="/amp_Logo.png"
              alt="Association of Muslim Professionals"
              width={1740}
              height={254}
              className="w-full h-auto max-h-16 sm:max-h-20 object-contain mx-auto"
              priority
            />
          </Link>

          {/* National Talent Search 2026 Badge */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center">
            <Image
              src="/nts-logo.jpeg"
              alt="National Talent Search 2026"
              width={402}
              height={487}
              className="w-40 sm:w-48 md:w-52 h-auto object-contain mx-auto drop-shadow-sm"
              priority
            />

            {/* Red Underline Capsule Divider */}
            <div className="h-[3px] w-12 bg-[#A32A29] rounded-full mx-auto mt-6 mb-3" />

            {/* Signing in sub-label */}
            <p className="text-xs text-zinc-500 font-medium">
              Signing in to{" "}
              <span className="text-[#A32A29] font-semibold">
                {portalTitle} Portal
              </span>
            </p>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: SIGN IN CARD (MATCHING SCREENSHOT)
        ========================================================= */}
        <div className="flex items-center justify-center w-full max-w-[390px] sm:max-w-[410px]">
          <div className="w-full bg-white rounded-3xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.07),0_1px_4px_rgba(0,0,0,0.02)] border border-zinc-100/90">
            {/* Header Brand: AMP in Red, WORLD in Dark */}
            <div className="text-center">
              <span className="font-extrabold tracking-wide text-sm sm:text-[15px] uppercase block">
                <span className="text-[#A32A29]">AMP</span>{" "}
                <span className="text-zinc-900">WORLD</span>
              </span>

              {/* Thin Divider Line (Matching screenshot) */}
              <div className="w-12 h-[1px] bg-zinc-200 mx-auto mt-2.5 mb-3.5" />

              <h1 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
                {portalTitle} Sign In
              </h1>
              <p className="mt-1 text-xs text-zinc-500 font-normal">
                {step === "MOBILE"
                  ? "Enter your registered mobile number"
                  : `OTP sent to +91 ${mobileNumber || "9967132722"}`}
              </p>
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="mt-4 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-center">
                {errorMessage}
              </div>
            )}

            {/* =====================================================
                STEP 1: MOBILE NUMBER INPUT
            ===================================================== */}
            {step === "MOBILE" && (
              <form onSubmit={handleSendOtp} className="mt-6">
                {/* Input Container */}
                <div className="relative flex rounded-xl border border-zinc-300 focus-within:border-[#A32A29] focus-within:ring-2 focus-within:ring-[#A32A29]/15 transition-all overflow-hidden bg-white h-11 sm:h-12">
                  {/* Phone Icon Box (Red) */}
                  <div className="flex items-center justify-center w-11 sm:w-12 bg-[#A32A29] text-white shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>

                  {/* Input Field */}
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoFocus
                    placeholder="10-digit mobile number"
                    value={mobileNumber}
                    onChange={handleMobileChange}
                    maxLength={10}
                    className="w-full px-3.5 text-xs sm:text-[13px] text-zinc-800 placeholder:text-zinc-400 font-normal bg-transparent outline-none tracking-normal"
                  />
                </div>

                {/* Send OTP Button (Always vibrant red with red glow shadow) */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-3.5 py-3 sm:py-3.5 px-4 rounded-xl bg-[#A32A29] hover:bg-[#8F2323] active:bg-[#7D1E1E] text-white font-medium text-xs sm:text-[13px] shadow-[0_8px_20px_-2px_rgba(163,42,41,0.45)] hover:shadow-[0_10px_24px_-2px_rgba(163,42,41,0.55)] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99]"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending OTP...
                    </span>
                  ) : (
                    <>
                      <span>Send OTP</span>
                      <span className="text-xs font-bold" aria-hidden="true">&gt;</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* =====================================================
                STEP 2: OTP VERIFICATION (MATCHING SCREENSHOT)
            ===================================================== */}
            {step === "OTP" && (
              <form onSubmit={handleVerifyOtp} className="mt-6">
                {/* OTP Input Container with Shield Checkmark Icon */}
                <div className="relative flex rounded-xl border border-zinc-300 focus-within:border-[#A32A29] focus-within:ring-2 focus-within:ring-[#A32A29]/15 transition-all overflow-hidden bg-white h-11 sm:h-12">
                  {/* Shield Checkmark Icon Box (Red) */}
                  <div className="flex items-center justify-center w-11 sm:w-12 bg-[#A32A29] text-white shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>

                  {/* Input Field */}
                  <input
                    type="text"
                    inputMode="numeric"
                    autoFocus
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    maxLength={6}
                    className="w-full px-3.5 text-xs sm:text-[13px] text-zinc-800 placeholder:text-zinc-400 font-normal bg-transparent outline-none tracking-normal"
                  />
                </div>

                {/* Verify & Sign In Button (Red with Red Glow Shadow) */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-3.5 py-3 sm:py-3.5 px-4 rounded-xl bg-[#A32A29] hover:bg-[#8F2323] active:bg-[#7D1E1E] text-white font-medium text-xs sm:text-[13px] shadow-[0_8px_20px_-2px_rgba(163,42,41,0.45)] hover:shadow-[0_10px_24px_-2px_rgba(163,42,41,0.55)] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99]"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Verifying...
                    </span>
                  ) : (
                    <>
                      <span>Verify &amp; Sign In</span>
                      <span className="text-xs font-bold" aria-hidden="true">&gt;</span>
                    </>
                  )}
                </button>

                {/* Resend OTP in 600s Countdown */}
                <div className="mt-4 text-center">
                  {resendTimer > 0 ? (
                    <span className="text-xs text-zinc-500 font-normal">
                      Resend OTP in {resendTimer}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-xs text-[#A32A29] font-medium hover:underline cursor-pointer"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* Back to Portal Selection */}
            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={() => {
                  if (step === "OTP") {
                    setStep("MOBILE");
                    setErrorMessage("");
                  } else {
                    router.push("/portal");
                  }
                }}
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-zinc-500 hover:text-zinc-800 font-normal transition-colors cursor-pointer"
              >
                <span aria-hidden="true">&lt;</span>
                <span>Back to portal selection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
