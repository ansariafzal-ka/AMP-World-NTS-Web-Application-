import { NextRequest, NextResponse } from "next/server";

// Seeded exam centre phone numbers for fallback/development
const SEEDED_CENTRES = [
  {
    centreCode: "AMPNTS25TG0644",
    centreName: "Titan School",
    contactPerson: "Afsari Begum",
    phone: "9390638371",
    role: "ExamCenter",
  },
  {
    centreCode: "AMPNTS25MH0122",
    centreName: "Anjuman-I-Islam High School",
    contactPerson: "Farhan Qureshi",
    phone: "9820123456",
    role: "ExamCenter",
  },
  {
    centreCode: "AMPNTS25KA0405",
    centreName: "Al-Ameen Pre-University College",
    contactPerson: "Prof. Mohammed Farooq",
    phone: "9845112233",
    role: "ExamCenter",
  },
  {
    centreCode: "AMPNTS25TG0644",
    centreName: "Titan School",
    contactPerson: "Asifa Begum",
    phone: "8309940165",
    role: "Observer",
  },
  {
    centreCode: "AMPNTS25TG0644",
    centreName: "Titan School",
    contactPerson: "Mohammed Basid",
    phone: "9700707764",
    role: "Observer",
  },
  {
    centreCode: "AMPNTS25TG0644",
    centreName: "Titan School",
    contactPerson: "Kouser Sultana",
    phone: "9989347226",
    role: "Observer",
  },
  {
    centreCode: "AMPNTS25TG0644",
    centreName: "Titan School",
    contactPerson: "Demo Coordinator",
    phone: "9876543210",
    role: "ExamCenter",
  },
  {
    centreCode: "AMPNTS25TG0644",
    centreName: "Titan School",
    contactPerson: "Exam Centre Admin",
    phone: "9967132722",
    role: "ExamCenter",
  },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const mobile = String(body.mobile || "").replace(/\D/g, "").slice(-10);

    if (!mobile || mobile.length !== 10) {
      return NextResponse.json(
        { success: false, message: "Valid 10-digit mobile number is required" },
        { status: 400 }
      );
    }

    // Attempt to check Express backend first
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    try {
      const backendRes = await fetch(`${apiUrl}/api/web/exam-center/check-mobile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
        cache: "no-store",
      });

      if (backendRes.ok) {
        const json = await backendRes.json();
        return NextResponse.json(json);
      }
    } catch {
      // Backend not reachable, fall through to seeded check
    }

    // Seeded check
    const matched = SEEDED_CENTRES.find(
      (c) => c.phone === mobile || c.phone.endsWith(mobile)
    );

    if (matched) {
      return NextResponse.json({
        statusCode: 200,
        success: true,
        message: "Mobile number verified successfully.",
        data: {
          exists: true,
          ...matched,
        },
      });
    }

    return NextResponse.json({
      statusCode: 200,
      success: true,
      message: "Mobile number not registered with any Exam Centre.",
      data: { exists: false },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json(
      { success: false, message: errorMsg },
      { status: 500 }
    );
  }
}
