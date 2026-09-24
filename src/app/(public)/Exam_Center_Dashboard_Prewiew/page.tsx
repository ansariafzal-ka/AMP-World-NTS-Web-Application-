"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import {
  CentreData,
  SAMPLE_CENTRES,
  DashboardHeader,
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

export default function ExamCenterDashboardPreviewPage() {
  const [centre, setCentre] = useState<CentreData>(SAMPLE_CENTRES["AMPNTS25TG0644"]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [isWebAttendanceOpen, setIsWebAttendanceOpen] = useState(false);
  const [selectedClassForAttendance, setSelectedClassForAttendance] = useState("8");

  useEffect(() => {
    let isMounted = true;

    async function loadDashboardData() {
      try {
        const response = await apiClient.get<{
          statusCode: number;
          data: CentreData;
          message: string;
        }>(API_ENDPOINTS.EXAM_CENTER.DASHBOARD);

        if (isMounted && response?.data) {
          setCentre(response.data);
        }
      } catch (err) {
        // Fallback to static initial data if API server is not running or offline
        console.warn("Backend API not reachable or offline, using default sample centre:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOpenAttendanceSheet = (classLabel: string) => {
    setSelectedClassForAttendance(classLabel);
    setIsWebAttendanceOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] font-sans text-zinc-900">
      <main className="flex-1 py-6 sm:py-8 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          <DashboardHeader />

          {isLoading ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center text-xs sm:text-sm text-zinc-500 shadow-2xs animate-pulse">
              Loading Exam Centre Dashboard details...
            </div>
          ) : (
            <>
              <CentreDetailsSection centre={centre} />
              <ObserverDetailsSection observers={centre.observers || []} />
              <ExamGuidelinesSection />
              <StudentAllocationSection
                capacityAllocated={centre.capacityAllocated}
                capacityTotal={centre.capacityTotal}
              />
              <QuestionPapersSection />
              <OmrSheetSection capacityAllocated={centre.capacityAllocated} />
              <SeatingArrangementSection />
              <AttendanceSheetSection onOpenAttendanceSheet={handleOpenAttendanceSheet} />
              <AttendanceSummarySection onOpenModal={() => setIsSummaryModalOpen(true)} />
              <AmpOfficeAddressSection />
            </>
          )}
        </div>
      </main>

      {/* Attendance Summary Modal */}
      <AttendanceSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        centreCode={centre.code}
      />

      {/* Digital Web Attendance Form Modal */}
      <WebAttendanceSheetModal
        isOpen={isWebAttendanceOpen}
        onClose={() => setIsWebAttendanceOpen(false)}
        centreCode={centre.code}
        centreName={centre.name}
        initialClass={selectedClassForAttendance}
      />

      <Footer hidePreFooter={true} />
    </div>
  );
}
