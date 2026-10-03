"use client";

import React, { useState, useMemo } from "react";

interface TrainingPartner {
  id: number;
  name: string;
  location: string;
  tag?: string;
  fullText: string;
}

const trainingPartnersData: TrainingPartner[] = [
  { id: 1, name: "ZIA Academy", location: "Bangalore, Karnataka", fullText: "ZIA Academy, Bangalore, Karnataka" },
  { id: 2, name: "Grace Residential Academy", location: "Lucknow, UP", fullText: "Grace Residential Academy, Lucknow, UP" },
  { id: 3, name: "Bearys Group of Institutions", location: "Mangalore, Karnataka", fullText: "Bearys Group of Institutions, Mangalore, Karnataka" },
  { id: 4, name: "Anfar40", location: "Hojai, Assam", fullText: "Anfar40, Hojai, Assam" },
  { id: 5, name: "Ajmal Super 40", location: "Hojai, Assam", fullText: "Ajmal Super 40, Hojai, Assam" },
  { id: 6, name: "Anees Defence Career Institute", location: "Pune, Maharashtra", fullText: "Anees Defence Career Institute, Pune, Maharashtra" },
  { id: 7, name: "Arastu Junior College", location: "Hyderabad, Telangana", fullText: "Arastu Junior College, Hyderabad, Telangana" },
  { id: 8, name: "Bano IAS", location: "New Delhi", fullText: "Bano IAS, New Delhi" },
  { id: 9, name: "Beacon IAS Academy", location: "Kalaburagi, Karnataka", fullText: "Beacon IAS Academy, Kalaburagi, Karnataka" },
  { id: 10, name: "Brainy & Bright Academy", location: "Lucknow, Uttar Pradesh", fullText: "Brainy & Bright Academy, Lucknow, Uttar Pradesh" },
  { id: 11, name: "City IAS Academy", location: "Aligarh, Uttar Pradesh", fullText: "City IAS Academy, Aligarh, Uttar Pradesh" },
  { id: 12, name: "Dars 40", location: "Patna, Bihar", fullText: "Dars 40, Patna, Bihar" },
  { id: 13, name: "Dawatul Haq Coaching Centre", location: "Ajmer, Rajasthan", fullText: "Dawatul Haq Coaching Centre, Ajmer, Rajasthan" },
  { id: 14, name: "Delta Classes", location: "Bareilly, Uttar Pradesh", fullText: "Delta Classes, Bareilly, Uttar Pradesh" },
  { id: 15, name: "Dhaanish Ahmed College of Engineering", location: "Chennai, Tamil Nadu", fullText: "Dhaanish Ahmed College of Engineering, Chennai, Tamil Nadu" },
  { id: 16, name: "DIO Group, Durrani Classes", location: "Bhopal, MP", fullText: "DIO Group, Durrani Classes, Bhopal, MP" },
  { id: 17, name: "Faizan Scholar Institute", location: "Ahmedabad, Gujarat", fullText: "Faizan Scholar Institute, Ahmedabad, Gujarat" },
  { id: 18, name: "Falcon Group of Institutions", location: "Bangalore, Karnataka", tag: "pan-India", fullText: "Falcon Group of Institutions, Bangalore, Karnataka (pan-India)" },
  { id: 19, name: "Full Stack Academy", location: "Hyderabad, Telangana", fullText: "Full Stack Academy, Hyderabad, Telangana" },
  { id: 20, name: "Gravity +", location: "Mumbai, Maharashtra", fullText: "Gravity +, Mumbai, Maharashtra" },
  { id: 21, name: "Gravity Classes", location: "Lucknow, UP", fullText: "Gravity Classes, Lucknow, UP" },
  { id: 22, name: "Gurucool", location: "New Delhi", fullText: "Gurucool, New Delhi" },
  { id: 23, name: "Gyan Shikhar Academy", location: "Bhopal, MP", fullText: "Gyan Shikhar Academy, Bhopal, MP" },
  { id: 24, name: "Hera Public School", location: "Azamgarh, UP", fullText: "Hera Public School, Azamgarh, UP" },
  { id: 25, name: "HighQ Professional Academy", location: "Chennai, Tamil Nadu", fullText: "HighQ Professional Academy, Chennai, Tamil Nadu" },
  { id: 26, name: "IKLAS IAS Academy", location: "Chennai, Tamil Nadu", tag: "pan-Tamil Nadu", fullText: "IKLAS IAS Academy, Chennai, Tamil Nadu (pan- Tamil Nadu)" },
  { id: 27, name: "Innovative Coaching Center", location: "Bangalore, Karnataka", fullText: "Innovative Coaching Center, Bangalore, Karnataka" },
  { id: 28, name: "Islamic Mission School (IMS)", location: "Aligarh, UP", fullText: "Islamic Mission School (IMS), Aligarh, UP" },
  { id: 29, name: "Justice M.S.A.Foundation", location: "Jabalpur, MP", fullText: "Justice M.S.A.Foundation, Jabalpur, MP" },
  { id: 30, name: "Kawish Foundation", location: "Aurangabad, Maharashtra", fullText: "Kawish Foundation, Aurangabad, Maharashtra" },
  { id: 31, name: "Lukmaan IAS", location: "New Delhi", fullText: "Lukmaan IAS, New Delhi" },
  { id: 32, name: "Maulana Azad University", location: "Jodhpur, Rajasthan", fullText: "Maulana Azad University, Jodhpur, Rajasthan" },
  { id: 33, name: "Minority Career Dream Trust", location: "Roorkee, Uttarakhand", fullText: "Minority Career Dream Trust, Roorkee, Uttarakhand" },
  { id: 34, name: "Modulus Academy", location: "Alwar, Rajasthan", fullText: "Modulus Academy, Alwar, Rajasthan" },
  { id: 35, name: "Olive Mission", location: "Lucknow, UP", fullText: "Olive Mission, Lucknow, UP" },
  { id: 36, name: "Rahman Education Foundation", location: "Ramanagra, Karnataka", fullText: "Rahman Education Foundation, Ramanagra, Karnataka" },
  { id: 37, name: "Rahmani30", location: "", tag: "Pan-India", fullText: "Rahmani30 (Pan-India)" },
  { id: 38, name: "Rajasthan Institute", location: "Alwar, Rajasthan", fullText: "Rajasthan Institute, Alwar, Rajasthan" },
  { id: 39, name: "SCANIK", location: "Mahesana, Gujarat", fullText: "SCANIK, Mahesana, Gujarat" },
  { id: 40, name: "Sethu Institute of Technology", location: "Virudhunagar, Tamil Nadu", fullText: "Sethu Institute of Technology, Virudhunagar, Tamil Nadu" },
  { id: 41, name: "Shaheen Group of Institutions", location: "", tag: "pan-India", fullText: "Shaheen Group of Institutions (pan-India)" },
  { id: 42, name: "Shakeel Institute", location: "Jaunpur, Uttar Pradesh", fullText: "Shakeel Institute, Jaunpur, Uttar Pradesh" },
  { id: 43, name: "Superb30", location: "Jammu, JK", fullText: "Superb30, Jammu, JK" },
  { id: 44, name: "Synetic Business School", location: "Ludhiana, Punjab", fullText: "Synetic Business School, Ludhiana, Punjab" },
  { id: 45, name: "Talent Zone Academy", location: "New Delhi", fullText: "Talent Zone Academy, New Delhi" },
  { id: 46, name: "The Hind Guru Academy", location: "New Delhi", fullText: "The Hind Guru Academy, New Delhi" },
  { id: 47, name: "Zaitoon International School", location: "Malappuram, Kerala", fullText: "Zaitoon International School, Malappuram, Kerala" },
  { id: 48, name: "ZFI's Sir Syed Coaching & Guidance Center", location: "Lucknow, UP", fullText: "ZFI's Sir Syed Coaching & Guidance Center, Lucknow, UP" },
];

export default function TrainingPartnersSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPartners = useMemo(() => {
    if (!searchQuery.trim()) return trainingPartnersData;
    const q = searchQuery.toLowerCase().trim();
    return trainingPartnersData.filter(
      (p) =>
        p.fullText.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        (p.tag && p.tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  // Preserve the exact 2-column split (1-24 and 25-48)
  const leftColumn = useMemo(() => trainingPartnersData.slice(0, 24), []);
  const rightColumn = useMemo(() => trainingPartnersData.slice(24), []);

  return (
    <section
      id="training-partners"
      className="py-12 sm:py-16 bg-zinc-50/70 border-b border-zinc-200/80 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Cohesive Directory Document Board */}
        <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Header */}
          <div className="text-center pb-7 border-b border-zinc-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#610D17] font-serif">
              Training Partners
            </h2>

            <div className="w-16 h-1 bg-[#C89D4B] rounded-full mx-auto mt-3 mb-3.5" />

            <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto">
              Distinguished network of 48 institutions, coaching academies, and educational foundations across India collaborating with AMP.
            </p>

            {/* Quick Search */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="relative w-full sm:max-w-sm">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by institute, city, or state..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl border border-zinc-200 bg-zinc-50/70 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#610D17] focus:bg-white focus:ring-2 focus:ring-[#610D17]/10 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5 rounded-md"
                    aria-label="Clear filter"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {isSearching && (
                <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200">
                  {filteredPartners.length} of {trainingPartnersData.length} Partners
                </span>
              )}
            </div>
          </div>

          {/* Directory Content: Clean 2-Column Numbered List */}
          <div className="pt-7 sm:pt-9">
            {isSearching ? (
              /* Filtered View */
              filteredPartners.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1.5">
                  {filteredPartners.map((partner) => (
                    <PartnerListItem key={partner.id} partner={partner} />
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                    No partners found matching &quot;{searchQuery}&quot;
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mt-2 text-xs font-bold text-[#610D17] hover:underline"
                  >
                    Clear search and view all
                  </button>
                </div>
              )
            ) : (
              /* Default 2-Column Poster View */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-1">
                {/* Column 1 (1 to 24) */}
                <div className="flex flex-col">
                  {leftColumn.map((partner) => (
                    <PartnerListItem key={partner.id} partner={partner} />
                  ))}
                </div>

                {/* Column 2 (25 to 48) */}
                <div className="flex flex-col pt-1 lg:pt-0">
                  {rightColumn.map((partner) => (
                    <PartnerListItem key={partner.id} partner={partner} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerListItem({ partner }: { partner: TrainingPartner }) {
  return (
    <div className="flex items-baseline gap-2.5 py-1.5 px-2 rounded-lg hover:bg-[#FDF8F8] transition-colors group">
      <span className="text-xs sm:text-sm font-bold text-[#610D17] w-6 shrink-0 text-right font-mono select-none">
        {partner.id}.
      </span>
      <p className="text-xs sm:text-[13.5px] text-zinc-800 leading-snug flex-1">
        <span className="font-semibold text-zinc-900 group-hover:text-[#610D17] transition-colors">
          {partner.name}
        </span>
        {partner.location && (
          <span className="text-zinc-600">, {partner.location}</span>
        )}
        {partner.tag && (
          <span className="ml-1.5 inline-flex items-center rounded bg-amber-50 border border-amber-200/80 px-1.5 py-0.2 text-[10px] font-bold text-[#8a6828]">
            {partner.tag}
          </span>
        )}
      </p>
    </div>
  );
}
