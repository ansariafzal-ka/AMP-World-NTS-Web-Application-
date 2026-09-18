"use client";

import React, { useState, useMemo } from "react";
import Accordion from "@/components/common/Accordion";
import Dropdown, { DropdownOption } from "@/components/common/Dropdown";
import { FAQ_CATEGORIES } from "./FaqData";

export default function FaqInteractive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const dropdownOptions: DropdownOption[] = useMemo(
    () => [
      {
        value: "all",
        label: "All Categories",
        description: "Browse all 25 questions across all categories",
      },
      ...FAQ_CATEGORIES.map((cat) => ({
        value: cat.id,
        label: cat.name,
        description: cat.description,
      })),
    ],
    []
  );

  const displayedCategories = useMemo(() => {
    if (selectedCategory === "all") {
      return FAQ_CATEGORIES;
    }
    return FAQ_CATEGORIES.filter((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full">
      {/* Category Dropdown Filter */}
      <div className="mx-auto max-w-md sm:max-w-lg mb-10 sm:mb-14">
        <Dropdown
          label="Filter by Topic / Category"
          options={dropdownOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
          placeholder="Select a category"
        />
      </div>

      {/* FAQs Sections by Category */}
      <div className="mx-auto max-w-4xl space-y-12 sm:space-y-16">
        {displayedCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            {/* Category Header */}
            <div className="mb-4 sm:mb-6 flex items-center gap-2.5 border-b border-zinc-200/80 pb-3">
              <span className="h-2 w-2 rounded-full bg-[#610D17]" />
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900">
                {category.name}
              </h2>
            </div>

            {/* Category Accordion */}
            <Accordion
              items={category.items}
              columns={1}
              allowMultiple={true}
              defaultOpenIds={
                selectedCategory !== "all"
                  ? [category.items[0].id]
                  : category.id === "overview"
                    ? ["faq-1"]
                    : []
              }
            />
          </section>
        ))}
      </div>
    </div>
  );
}
