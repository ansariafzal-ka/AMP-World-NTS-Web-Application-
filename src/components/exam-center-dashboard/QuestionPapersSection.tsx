import React from "react";
import SectionCard from "./SectionCard";
import { DRIVE_DOWNLOAD_URL } from "./dashboardData";

export default function QuestionPapersSection() {
  const schoolClasses = ["8th", "IX", "X"];
  const languages = ["Urdu", "Hindi", "English", "Gujarati", "Bengali"];

  return (
    <SectionCard id="question-papers" title="QUESTION PAPERS">
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
                {schoolClasses.map((cls) => (
                  <tr key={cls} className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">
                      {cls}
                    </td>
                    {languages.map((lang, lIdx) => (
                      <td key={lang} className={`py-2.5 px-3 ${lIdx < 4 ? "border-r border-zinc-200" : ""}`}>
                        <a
                          href={DRIVE_DOWNLOAD_URL}
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
                      href={DRIVE_DOWNLOAD_URL}
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
                      href={DRIVE_DOWNLOAD_URL}
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
    </SectionCard>
  );
}
