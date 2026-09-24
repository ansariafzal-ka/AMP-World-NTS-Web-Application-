import React from "react";
import SectionCard from "./SectionCard";

export default function SeatingArrangementSection() {
  return (
    <SectionCard id="seating-arrangement" title="SEATING ARRANGMENT">
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
    </SectionCard>
  );
}
