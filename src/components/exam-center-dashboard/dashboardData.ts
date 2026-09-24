export interface Observer {
  id: number;
  name: string;
  phone: string;
  type: string;
  designation: string;
}

export interface CentreData {
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
  observers: Observer[];
}

export interface AllocationRow {
  classLabel: string;
  urdu: string | number;
  hindi: string | number;
  english: string | number;
  gujarati: string | number;
  bengali: string | number;
  total: number;
}

export interface AttendanceSummaryRow {
  class: string;
  allocated: number;
  present: string;
  absent: string;
}

export const SAMPLE_CENTRES: Record<string, CentreData> = {
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

export const DEFAULT_ALLOCATION_ROWS: AllocationRow[] = [
  { classLabel: "8", urdu: 0, hindi: 3, english: 24, gujarati: 0, bengali: 0, total: 27 },
  { classLabel: "9", urdu: 0, hindi: 0, english: 56, gujarati: 0, bengali: 0, total: 56 },
  { classLabel: "10", urdu: 0, hindi: 0, english: 48, gujarati: 0, bengali: 0, total: 48 },
  { classLabel: "XI & XII", urdu: 0, hindi: 0, english: 49, gujarati: 0, bengali: 0, total: 49 },
  { classLabel: "Senior College", urdu: 0, hindi: "-", english: 3, gujarati: "-", bengali: "-", total: 3 },
];

export const INITIAL_SUMMARY_DATA: AttendanceSummaryRow[] = [
  { class: "8", allocated: 27, present: "19", absent: "8" },
  { class: "9", allocated: 56, present: "37", absent: "19" },
  { class: "10", allocated: 48, present: "25", absent: "23" },
  { class: "JR", allocated: 49, present: "34", absent: "15" },
  { class: "SR", allocated: 3, present: "2", absent: "1" },
];

export const DRIVE_DOWNLOAD_URL = "https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ";
export const VIDEO_ORIENTATION_URL = "https://tinyurl.com/HelplineAMPNTS";

export const HEAD_OFFICE_DETAILS = {
  organization: "Association of Muslim Professionals",
  recipient: "AMP Head Office",
  addressLine1: "Room 8, 1st Floor, Halima Manzil,",
  addressLine2: "Mirza Ghalib Marg, Clare Road, Opposite Petrol Pump, Nagpada, Mumbai – 400008",
  contactPhone: "9987025079",
  fullText: `To,\nAMP Head Office\nAssociation of Muslim Professionals\nRoom 8, 1st Floor, Halima Manzil,\nMirza Ghalib Marg, Clare Road, Opposite Petrol Pump, Nagpada, Mumbai – 400008\nContact No. 9987025079`,
};

export interface StudentAttendanceItem {
  id: number;
  rollNumber: string;
  studentName: string;
  gender: string;
  medium: string;
  isPresent: boolean;
  markedAt?: string;
  markedBy?: string;
}

export const SAMPLE_STUDENT_ROSTERS: Record<string, StudentAttendanceItem[]> = {
  "8": [
    { id: 1, rollNumber: "AMP26-TG0644-0801", studentName: "Ayaan Mohammed Khan", gender: "Male", medium: "English", isPresent: true },
    { id: 2, rollNumber: "AMP26-TG0644-0802", studentName: "Fatima Zahra", gender: "Female", medium: "English", isPresent: true },
    { id: 3, rollNumber: "AMP26-TG0644-0803", studentName: "Zaid Abdullah", gender: "Male", medium: "Hindi", isPresent: true },
    { id: 4, rollNumber: "AMP26-TG0644-0804", studentName: "Mariam Siddiqui", gender: "Female", medium: "English", isPresent: false },
    { id: 5, rollNumber: "AMP26-TG0644-0805", studentName: "Syed Umar Farooq", gender: "Male", medium: "English", isPresent: true },
    { id: 6, rollNumber: "AMP26-TG0644-0806", studentName: "Ayesha Nooreen", gender: "Female", medium: "Hindi", isPresent: true },
    { id: 7, rollNumber: "AMP26-TG0644-0807", studentName: "Bilal Ahmed", gender: "Male", medium: "English", isPresent: true },
    { id: 8, rollNumber: "AMP26-TG0644-0808", studentName: "Sana Begum", gender: "Female", medium: "English", isPresent: true },
    { id: 9, rollNumber: "AMP26-TG0644-0809", studentName: "Hamza Qureshi", gender: "Male", medium: "Hindi", isPresent: false },
    { id: 10, rollNumber: "AMP26-TG0644-0810", studentName: "Zainab Parveen", gender: "Female", medium: "English", isPresent: true },
  ],
  "9": [
    { id: 11, rollNumber: "AMP26-TG0644-0901", studentName: "Adnan Syed", gender: "Male", medium: "English", isPresent: true },
    { id: 12, rollNumber: "AMP26-TG0644-0902", studentName: "Alina Shireen", gender: "Female", medium: "English", isPresent: true },
    { id: 13, rollNumber: "AMP26-TG0644-0903", studentName: "Arham Khan", gender: "Male", medium: "English", isPresent: false },
    { id: 14, rollNumber: "AMP26-TG0644-0904", studentName: "Sumayya Banu", gender: "Female", medium: "English", isPresent: true },
    { id: 15, rollNumber: "AMP26-TG0644-0905", studentName: "Taha Mohiuddin", gender: "Male", medium: "English", isPresent: true },
  ],
  "10": [
    { id: 21, rollNumber: "AMP26-TG0644-1001", studentName: "Rayan Ahmed", gender: "Male", medium: "English", isPresent: true },
    { id: 22, rollNumber: "AMP26-TG0644-1002", studentName: "Safiya Fatima", gender: "Female", medium: "English", isPresent: true },
    { id: 23, rollNumber: "AMP26-TG0644-1003", studentName: "Farhan Alam", gender: "Male", medium: "English", isPresent: true },
    { id: 24, rollNumber: "AMP26-TG0644-1004", studentName: "Huda Tabassum", gender: "Female", medium: "English", isPresent: false },
  ],
  "XI & XII": [
    { id: 31, rollNumber: "AMP26-TG0644-JR01", studentName: "Omer Farooq", gender: "Male", medium: "English", isPresent: true },
    { id: 32, rollNumber: "AMP26-TG0644-JR02", studentName: "Afreen Sultana", gender: "Female", medium: "English", isPresent: true },
    { id: 33, rollNumber: "AMP26-TG0644-JR03", studentName: "Mustafa Hussain", gender: "Male", medium: "English", isPresent: true },
  ],
  "Senior College": [
    { id: 41, rollNumber: "AMP26-TG0644-SR01", studentName: "Khalid Saifullah", gender: "Male", medium: "English", isPresent: true },
    { id: 42, rollNumber: "AMP26-TG0644-SR02", studentName: "Mehvish Jahan", gender: "Female", medium: "English", isPresent: true },
    { id: 43, rollNumber: "AMP26-TG0644-SR03", studentName: "Abdul Rahman", gender: "Male", medium: "English", isPresent: false },
  ],
};
