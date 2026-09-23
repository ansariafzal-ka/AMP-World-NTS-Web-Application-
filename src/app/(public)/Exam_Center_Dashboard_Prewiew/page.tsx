"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";

interface CentreData {
  code: string;
  name: string;
  pocName: string;
  pocPhone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  capacityAllocated: number;
  capacityTotal: number;
  observers: {
    id: number;
    name: string;
    phone: string;
    type: string;
    designation: string;
  }[];
}

const SAMPLE_CENTRES: Record<string, CentreData> = {
  AMPNTS25TG0644: {
    code: "AMPNTS25TG0644",
    name: "Titan School",
    pocName: "Afsari Begum",
    pocPhone: "9390638371",
    address: "H.No. 8-3-167/60/11&11A, Indira Nagar, Borabanda",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500005",
    capacityAllocated: 183,
    capacityTotal: 200,
    observers: [
      {
        id: 1,
        name: "Asifa Begum",
        phone: "8309940165",
        type: "AMP Observer",
        designation: "Senior Academic Coordinator",
      },
      {
        id: 2,
        name: "Mohammed Basid",
        phone: "9700707764",
        type: "Exam Centre Observer",
        designation: "Vice Principal",
      },
      {
        id: 3,
        name: "Kouser Sultana",
        phone: "9989347226",
        type: "AMP Observer",
        designation: "District Chapter Lead",
      },
    ],
  },
  AMPNTS25MH0122: {
    code: "AMPNTS25MH0122",
    name: "Anjuman-I-Islam High School",
    pocName: "Farhan Qureshi",
    pocPhone: "9820123456",
    address: "92, Dr. D.N. Road, Opp. CST Railway Station",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    capacityAllocated: 245,
    capacityTotal: 300,
    observers: [
      {
        id: 1,
        name: "Dr. Rizwan Khan",
        phone: "9820554433",
        type: "AMP Observer",
        designation: "State Coordinator",
      },
      {
        id: 2,
        name: "Shabana Siddiqui",
        phone: "9867112233",
        type: "Exam Centre Observer",
        designation: "Exam Superintendent",
      },
    ],
  },
  AMPNTS25DL0301: {
    code: "AMPNTS25DL0301",
    name: "Crescent Public Senior Secondary School",
    pocName: "Syed Tariq",
    pocPhone: "9811223344",
    address: "Near Jama Masjid Gate 3, Daryaganj",
    city: "Central Delhi",
    state: "Delhi",
    pincode: "110006",
    capacityAllocated: 150,
    capacityTotal: 200,
    observers: [
      {
        id: 1,
        name: "Prof. Akhtar Hussain",
        phone: "9810998877",
        type: "AMP Observer",
        designation: "Central Observer",
      },
      {
        id: 2,
        name: "Zeenat Parveen",
        phone: "9811776655",
        type: "Exam Centre Observer",
        designation: "Senior Educator",
      },
    ],
  },
};

export default function ExamCenterDashboardPreviewPage() {
  const [selectedCentreCode] = useState<string>("AMPNTS25TG0644");
  const centre = SAMPLE_CENTRES[selectedCentreCode] || SAMPLE_CENTRES["AMPNTS25TG0644"];
  const [copiedAddress, setCopiedAddress] = useState(false);

  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [summaryData, setSummaryData] = useState([
    { class: "8", allocated: 27, present: "19", absent: "8" },
    { class: "9", allocated: 56, present: "37", absent: "19" },
    { class: "10", allocated: 48, present: "25", absent: "23" },
    { class: "JR", allocated: 49, present: "34", absent: "15" },
    { class: "SR", allocated: 3, present: "2", absent: "1" },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAttendanceChange = (index: number, field: "present" | "absent", value: string) => {
    setSummaryData((prev) => {
      const next = [...prev];
      const item = { ...next[index], [field]: value };
      if (field === "present") {
        const p = parseInt(value, 10);
        if (!isNaN(p)) {
          item.absent = String(Math.max(0, item.allocated - p));
        }
      }
      next[index] = item;
      return next;
    });
  };

  const handleSubmitSummary = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSummaryModalOpen(false);
    }, 1500);
  };

  const handleCopyAddress = () => {
    const addr = `To,\nAMP Head Office\nAssociation of Muslim Professionals\nRoom 8, 1st Floor, Halima Manzil,\nMirza Ghalib Marg, Clare Road, Opposite Petrol Pump, Nagpada, Mumbai – 400008\nContact No. 9987025079`;
    navigator.clipboard.writeText(addr);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] font-sans text-zinc-900">
      <main className="flex-1 py-6 sm:py-8 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">

          {/* =========================================================
              TOP HEADER (Simple: AMP logo left, NTS logo right, Title)
          ========================================================= */}
          <div className="space-y-4 pt-1 pb-2">
            <div className="flex items-center justify-between gap-4">
              <Image
                src="/amp_Logo.png"
                alt="Association of Muslim Professionals"
                width={260}
                height={48}
                className="h-9 sm:h-12 w-auto object-contain"
                priority
              />
              <Image
                src="/nts-logo-2026.jpg"
                alt="National Talent Search 2026"
                width={120}
                height={120}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded-md"
                priority
              />
            </div>

            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-[#3D0C13] tracking-tight uppercase">
              AMP NTS 2026 EXAM CENTRE DASHBOARD
            </h1>
          </div>

          {/* =========================================================
              SECTION 1: CENTER DETAILS
          ========================================================= */}
          <section aria-labelledby="section-centre-details" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-centre-details" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                CENTER DETAILS
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-2.5 font-medium leading-relaxed">
              <div className="flex flex-wrap items-center gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">Centre Number:</strong>
                <span className="font-mono font-bold text-xs bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200">
                  {centre.code}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">Centre Name:</strong>
                <span className="font-bold text-[#3D0C13] text-sm sm:text-base">{centre.name}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">Point of Contact:</strong>
                <span className="text-zinc-900">{centre.pocName}</span>
                <span className="text-zinc-500 font-mono text-xs">(Phone: {centre.pocPhone})</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">Centre Address:</strong>
                <span className="text-zinc-700">{centre.address}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">City:</strong>
                <span className="text-zinc-700">{centre.city}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">State:</strong>
                <span className="text-zinc-700">{centre.state}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <strong className="text-zinc-900 font-semibold min-w-36">Pincode:</strong>
                <span className="text-zinc-700 font-mono">{centre.pincode}</span>
              </div>
            </div>
          </section>

          {/* =========================================================
              SECTION 2: Observer Details
          ========================================================= */}
          <section aria-labelledby="section-observer-details" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-observer-details" className="text-xs sm:text-sm font-bold tracking-wider">
                Observer Details:
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-800 border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    <th scope="col" className="py-3 px-4 w-12 text-center">#</th>
                    <th scope="col" className="py-3 px-4">Observer Name</th>
                    <th scope="col" className="py-3 px-4">Observer Phone Number</th>
                    <th scope="col" className="py-3 px-4">Observer Type</th>
                    <th scope="col" className="py-3 px-4">Observer Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {centre.observers.map((obs) => (
                    <tr key={obs.id} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="py-3 px-4 text-center font-semibold text-zinc-400">{obs.id}</td>
                      <td className="py-3 px-4 font-bold text-[#3D0C13]">{obs.name}</td>
                      <td className="py-3 px-4">
                        <a
                          href={`tel:${obs.phone}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono text-xs font-semibold border border-zinc-200 shadow-2xs transition-colors"
                          title={`Call ${obs.name}`}
                        >
                          <svg className="w-3 h-3 text-[#3D0C13]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                          <span>{obs.phone}</span>
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          obs.type.includes("AMP")
                            ? "bg-rose-50 text-[#3D0C13] border border-rose-200/60"
                            : "bg-[#FEF7EC] text-[#9A6218] border border-[#FDE6C8]"
                        }`}>
                          {obs.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-zinc-600">{obs.designation || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* =========================================================
              SECTION 3: EXAM GUIDELINES
          ========================================================= */}
          <section aria-labelledby="section-exam-guidelines" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-exam-guidelines" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                EXAM GUIDELINES
              </h2>
            </div>
            <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm font-semibold text-zinc-900">
              <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 border-b border-zinc-100">
                <span>Exam Centre Instruction</span>
                <a
                  href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Click Here</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 border-b border-zinc-100">
                <span>Students Instruction</span>
                <a
                  href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Click Here</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 border-b border-zinc-100">
                <span>Orientation Video</span>
                <a
                  href="https://tinyurl.com/HelplineAMPNTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
                  </svg>
                  <span>Watch Video</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 py-1.5">
                <span>Invigilator Instruction</span>
                <a
                  href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Click Here</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* =========================================================
              SECTION 4: STUDENT ALLOCATION DETAILS
          ========================================================= */}
          <section aria-labelledby="section-student-allocation" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-student-allocation" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                STUDENT ALLOCATION DETAILS
              </h2>
            </div>
            <div className="p-4 sm:p-5">
              <div className="mb-3 text-xs sm:text-sm font-semibold text-zinc-800">
                Capacity:{" "}
                <span className="text-[#3D0C13] font-extrabold">{centre.capacityAllocated}</span>
                <span className="text-zinc-500"> / {centre.capacityTotal}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs sm:text-sm text-zinc-800 border border-zinc-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                      <th scope="col" className="py-2.5 px-4 text-left border-r border-zinc-200">Class</th>
                      <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Urdu</th>
                      <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Hindi</th>
                      <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">English</th>
                      <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Gujarati</th>
                      <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Bengali</th>
                      <th scope="col" className="py-2.5 px-4 font-black text-zinc-900">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 font-medium">
                    <tr className="hover:bg-zinc-50/60">
                      <td className="py-2 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">8</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-700 font-semibold">3</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-700 font-semibold">24</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-4 font-bold text-zinc-900">27</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/60">
                      <td className="py-2 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">9</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-700 font-semibold">56</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-4 font-bold text-zinc-900">56</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/60">
                      <td className="py-2 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">10</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-700 font-semibold">48</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-4 font-bold text-zinc-900">48</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/60">
                      <td className="py-2 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">XI &amp; XII</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-700 font-semibold">49</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-4 font-bold text-zinc-900">49</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/60">
                      <td className="py-2 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">Senior College</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">0</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-700 font-semibold">3</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                      <td className="py-2 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                      <td className="py-2 px-4 font-bold text-zinc-900">3</td>
                    </tr>
                    <tr className="bg-zinc-100/90 font-black text-zinc-900 border-t-2 border-zinc-300">
                      <td className="py-2.5 px-4 text-left border-r border-zinc-200 font-bold uppercase tracking-wide">Total</td>
                      <td className="py-2.5 px-3 border-r border-zinc-200">0</td>
                      <td className="py-2.5 px-3 border-r border-zinc-200">3</td>
                      <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-[#3D0C13]">180</td>
                      <td className="py-2.5 px-3 border-r border-zinc-200">0</td>
                      <td className="py-2.5 px-3 border-r border-zinc-200">0</td>
                      <td className="py-2.5 px-4 font-extrabold text-[#3D0C13] text-sm">183</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* =========================================================
              SECTION 5: QUESTION PAPERS
          ========================================================= */}
          <section aria-labelledby="section-question-papers" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-question-papers" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                QUESTION PAPERS
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-amber-900">
                <p className="font-bold">
                  Note: Question papers will be made available 24 hours prior to the examination.
                </p>
                <p className="mt-1 font-semibold text-zinc-700">
                  The examination is scheduled for <span className="font-bold text-[#3D0C13]">Saturday, 5th December 2026</span>.
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-zinc-700 font-normal">
                  <li>The Question Papers for printing can be downloaded from below.</li>
                  <li>Please complete the printing and packaging on 4th December 2026.</li>
                  <li>Please Print at least 5 question papers of each category and class extra for the safer side.</li>
                  <li>The best way to manage this is to Print One Copy of Each Question Paper and do Photo Copy (xerox) for the rest.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-zinc-900 text-sm sm:text-base mb-3">
                  Link to Download the Question Papers:
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-center text-xs sm:text-sm text-zinc-800 border border-zinc-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                        <th scope="col" className="py-2.5 px-4 text-left border-r border-zinc-200">Class</th>
                        <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Urdu</th>
                        <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Hindi</th>
                        <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">English</th>
                        <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Gujarati</th>
                        <th scope="col" className="py-2.5 px-3">Bengali</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 font-medium">
                      {["8th", "IX", "X"].map((cls) => (
                        <tr key={cls} className="hover:bg-zinc-50/60">
                          <td className="py-2.5 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">{cls}</td>
                          {["Urdu", "Hindi", "English", "Gujarati", "Bengali"].map((lang, lIdx) => (
                            <td key={lang} className={`py-2.5 px-3 ${lIdx < 4 ? "border-r border-zinc-200" : ""}`}>
                              <a
                                href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#3D0C13] underline underline-offset-2"
                              >
                                Download
                              </a>
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="hover:bg-zinc-50/60">
                        <td className="py-2.5 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">XI &amp; XII</td>
                        <td className="py-2.5 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                        <td className="py-2.5 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                        <td className="py-2.5 px-3 border-r border-zinc-200">
                          <a
                            href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#3D0C13] underline underline-offset-2"
                          >
                            Download
                          </a>
                        </td>
                        <td className="py-2.5 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                        <td className="py-2.5 px-3 text-zinc-400">-</td>
                      </tr>
                      <tr className="hover:bg-zinc-50/60">
                        <td className="py-2.5 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">Senior College</td>
                        <td className="py-2.5 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                        <td className="py-2.5 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                        <td className="py-2.5 px-3 border-r border-zinc-200">
                          <a
                            href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#3D0C13] underline underline-offset-2"
                          >
                            Download
                          </a>
                        </td>
                        <td className="py-2.5 px-3 border-r border-zinc-200 text-zinc-400">-</td>
                        <td className="py-2.5 px-3 text-zinc-400">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              SECTION 6: OMR SHEET
          ========================================================= */}
          <section aria-labelledby="section-omr-sheet" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-omr-sheet" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                OMR SHEET
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4 leading-relaxed">
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                Total number of OMR Sheet required :{" "}
                <span className="text-[#3D0C13] font-extrabold">{centre.capacityAllocated}</span>
              </h3>

              <ol className="space-y-3 list-decimal list-inside text-zinc-700 font-medium">
                <li>
                  OMR Sheet will be sent to any One Exam Centre in District Headquarter of your District/City between 26th November to 5th December 2026.
                </li>
                <li>
                  You will be notified when it is available to collect it from Central Exam Centre at District Head Quarter.
                </li>
                <li className="flex flex-wrap items-center gap-2 py-1">
                  <span>Please see this image to understand how to use OMR Sheet (OMR Sample with Instructions):</span>
                  <a
                    href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Download Sample</span>
                  </a>
                </li>
                <li className="flex flex-wrap items-center gap-2 py-1">
                  <span>For any Extra Students, you will have to download this Actual OMR Sheet and do High Quality Printing on 100 GSM Paper:</span>
                  <a
                    href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Download OMR Sheet</span>
                  </a>
                </li>
                <li className="flex flex-wrap items-center gap-2 py-1">
                  <span>How to Use OMR Sheet:</span>
                  <a
                    href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Important Instructions</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </section>

          {/* =========================================================
              SECTION 7: SEATING ARRANGMENT
          ========================================================= */}
          <section aria-labelledby="section-seating-arrangement" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-seating-arrangement" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                SEATING ARRANGMENT
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-700 leading-relaxed">
              <ul className="space-y-2 list-disc list-inside font-medium">
                <li>
                  Plan and execute a seating arrangement well in advance. The candidates will sit in a sequence of attendance sheets, one behind the other.
                </li>
                <li>
                  The attendance sheet will contain the list of students in order of their registration, with respect to their Class and Category.
                </li>
                <li>
                  The gap between 2 seats should be maintained as needed.
                </li>
                <li>
                  The seating arrangement should be displayed on the board at least 1 day before the exam.
                </li>
              </ul>
            </div>
          </section>

          {/* =========================================================
              SECTION 8: ATTENDANCE SHEET
          ========================================================= */}
          <section aria-labelledby="section-attendance-sheet" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-attendance-sheet" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                ATTENDANCE SHEET
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-3 leading-relaxed">
              <div className="flex flex-wrap items-center gap-3 font-medium">
                <span>Download the attendance sheet:</span>
                <a
                  href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download Here</span>
                </a>
              </div>
              <p className="text-xs text-zinc-500 font-medium">
                <strong className="text-zinc-700">Note:</strong> Please access this data after Friday, 4th December 2026, at 12 Noon, after Hall Tickets are generated.
              </p>
            </div>
          </section>

          {/* =========================================================
              SECTION 9: Attendance Summary
          ========================================================= */}
          <section aria-labelledby="section-attendance-summary" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-attendance-summary" className="text-xs sm:text-sm font-bold tracking-wider">
                Attendance Summary
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4">
              <p className="font-medium leading-relaxed">
                <strong className="text-zinc-900 font-bold">Note:</strong> Please submit your Exam Centre Attendance Summary immediately after the examination. This is important and mandatory.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsSummaryModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#3D0C13] hover:bg-[#2B080D] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Submit Summary</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================
              SECTION 10: AMP OFFICE ADDRESS
          ========================================================= */}
          <section aria-labelledby="section-amp-address" className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white">
              <h2 id="section-amp-address" className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                AMP OFFICE ADDRESS
              </h2>
            </div>
            <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4">
              <div className="space-y-1 font-medium leading-relaxed">
                <div className="font-bold text-zinc-900">To,</div>
                <div className="font-bold text-[#3D0C13]">AMP Head Office</div>
                <div className="font-semibold text-zinc-900">Association of Muslim Professionals</div>
                <div>Room 8, 1st Floor, Halima Manzil,</div>
                <div>Mirza Ghalib Marg, Clare Road, Opposite Petrol Pump, Nagpada, Mumbai – 400008</div>
                <div className="flex items-center gap-2 pt-0.5">
                  <strong className="text-zinc-900">Contact No:</strong>{" "}
                  <a
                    href="tel:9987025079"
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono text-xs font-semibold border border-zinc-200 shadow-2xs transition-colors"
                  >
                    <svg className="w-3 h-3 text-[#3D0C13]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span>9987025079</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#3D0C13] hover:bg-[#2B080D] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>{copiedAddress ? "Address Copied!" : "Download Address Slip"}</span>
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Attendance Summary Modal */}
      {isSummaryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsSummaryModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200/90"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header (Matching Page Section Header Bar) */}
            <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 flex items-center justify-between text-white">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                Attendance Summary
              </h3>
              <button
                type="button"
                onClick={() => setIsSummaryModalOpen(false)}
                className="text-rose-200/80 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmitSummary} className="p-5 sm:p-7 space-y-6">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-zinc-900">Attendance Summary Submitted!</h4>
                  <p className="text-xs text-zinc-500">Your centre attendance records have been successfully saved.</p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto border border-zinc-200 rounded-xl">
                    <table className="w-full text-center text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                          <th className="py-3 px-4 border-r border-zinc-200 w-24">Class</th>
                          <th className="py-3 px-4 border-r border-zinc-200">Allocated Students</th>
                          <th className="py-3 px-4 border-r border-zinc-200">Present</th>
                          <th className="py-3 px-4">Absent</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 font-medium">
                        {summaryData.map((row, idx) => (
                          <tr key={row.class} className="hover:bg-zinc-50/60 transition-colors">
                            <td className="py-2.5 px-4 font-bold text-zinc-900 border-r border-zinc-200">
                              {row.class}
                            </td>
                            <td className="py-2 px-3 border-r border-zinc-200">
                              <input
                                type="text"
                                value={row.allocated}
                                readOnly
                                className="w-full max-w-[130px] mx-auto text-center rounded-lg border border-zinc-200 bg-zinc-100/80 px-2.5 py-1.5 text-xs sm:text-sm font-semibold font-mono text-zinc-800 focus:outline-none"
                              />
                            </td>
                            <td className="py-2 px-3 border-r border-zinc-200">
                              <input
                                type="number"
                                min={0}
                                max={row.allocated}
                                value={row.present}
                                onChange={(e) => handleAttendanceChange(idx, "present", e.target.value)}
                                className="w-full max-w-[130px] mx-auto text-center rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-2xs focus:border-[#3D0C13] focus:ring-1 focus:ring-[#3D0C13] focus:outline-none transition-colors"
                              />
                            </td>
                            <td className="py-2 px-3">
                              <input
                                type="number"
                                min={0}
                                value={row.absent}
                                onChange={(e) => handleAttendanceChange(idx, "absent", e.target.value)}
                                className="w-full max-w-[130px] mx-auto text-center rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-2xs focus:border-[#3D0C13] focus:ring-1 focus:ring-[#3D0C13] focus:outline-none transition-colors"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg bg-[#3D0C13] hover:bg-[#2B080D] text-white px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSummaryModalOpen(false)}
                      className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      <Footer hidePreFooter={true} />
    </div>
  );
}
