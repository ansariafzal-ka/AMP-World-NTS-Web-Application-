"use client";

import React, { useState, useEffect } from "react";
import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import {
  CentreData,
  SAMPLE_CENTRES,
  CentreDetailsSection,
  ObserverDetailsSection,
  ExamGuidelinesSection,
  StudentAllocationSection,
  QuestionPapersSection,
  OmrSheetSection,
  SeatingArrangementSection,
  AttendanceSheetSection,
  AttendanceSummarySection,
  AmpOfficeAddressSection,
  AttendanceSummaryModal,
  WebAttendanceSheetModal,
} from "@/components/exam-center-dashboard";

export default function ExamCentreDashboardPage() {
  const [centre, setCentre] = useState<CentreData>(SAMPLE_CENTRES["AMPNTS25TG0644"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [isWebAttendanceOpen, setIsWebAttendanceOpen] = useState(false);
  const [selectedClassForAttendance, setSelectedClassForAttendance] = useState("8");

  useEffect(() => {
    let isMounted = true;

    async function loadCentreDashboard() {
      try {
        // Read logged-in session
        let targetCode = "AMPNTS25TG0644";
        if (typeof window !== "undefined") {
          try {
            const stored = localStorage.getItem("amp_exam_centre_session");
            if (stored) {
              const parsed = JSON.parse(stored);
              if (parsed.centreCode) {
                targetCode = parsed.centreCode;
              }
            }
          } catch {
            // Ignore parse errors
          }
        }

        // Set initial sample data matching targetCode if available
        if (SAMPLE_CENTRES[targetCode]) {
          setCentre(SAMPLE_CENTRES[targetCode]);
        }

        // Fetch live dashboard data from API for this specific exam centre
        const response = await apiClient.get<{
          statusCode: number;
          data: CentreData;
          message: string;
        }>(API_ENDPOINTS.EXAM_CENTER.DASHBOARD, {
          params: { centreCode: targetCode },
        });

        if (isMounted && response?.data) {
          setCentre(response.data);

          // Notify top bar to update centre name and contact person
          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("amp-centre-updated", {
                detail: {
                  centreCode: response.data.code,
                  centreName: response.data.name,
                  contactPerson: response.data.pocName,
                },
              })
            );
          }
        }
      } catch (err) {
        console.warn("Using sample data for logged-in centre:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadCentreDashboard();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOpenAttendanceSheet = (classLabel: string) => {
    setSelectedClassForAttendance(classLabel);
    setIsWebAttendanceOpen(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12">
      {isLoading ? (
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center text-xs sm:text-sm text-zinc-500 shadow-2xs animate-pulse">
          Loading Exam Centre Dashboard details...
        </div>
      ) : (
        <>
          {/* Centre Details Section */}
          <CentreDetailsSection centre={centre} />

          {/* Observer Details Section */}
          <ObserverDetailsSection observers={centre.observers || []} />

          {/* Exam Guidelines Section */}
          <ExamGuidelinesSection />

          {/* Student Allocation Details */}
          <StudentAllocationSection
            capacityAllocated={centre.capacityAllocated}
            capacityTotal={centre.capacityTotal}
            rows={centre.allocations}
          />

          {/* Question Papers Section */}
          <QuestionPapersSection />

          {/* OMR Sheet Collection & Verification */}
          <OmrSheetSection capacityAllocated={centre.capacityAllocated} />

          {/* Seating Arrangement Section */}
          <SeatingArrangementSection />

          {/* Attendance Sheet & Digital Roster Section */}
          <AttendanceSheetSection onOpenAttendanceSheet={handleOpenAttendanceSheet} />

          {/* Attendance Summary Submission Section */}
          <AttendanceSummarySection onOpenModal={() => setIsSummaryModalOpen(true)} />

          {/* AMP Office Central Contact Section */}
          <AmpOfficeAddressSection />
        </>
      )}

      {/* Attendance Summary Modal */}
      <AttendanceSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        centreCode={centre.code}
      />

      {/* Digital Web Attendance Modal */}
      <WebAttendanceSheetModal
        isOpen={isWebAttendanceOpen}
        onClose={() => setIsWebAttendanceOpen(false)}
        centreCode={centre.code}
        centreName={centre.name}
        initialClass={selectedClassForAttendance}
      />
    </div>
  );
}
