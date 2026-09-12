"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

export interface DropdownOption<T extends string = string> {
  value: T;
  label: string;
  badge?: string | number;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface DropdownProps<T extends string = string> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  id?: string;
}

export default function Dropdown<T extends string = string>({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  buttonClassName = "",
  menuClassName = "",
  id,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Close on Escape key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  const handleSelect = (option: DropdownOption<T>) => {
    if (option.disabled) return;
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative inline-block w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5"
        >
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left shadow-xs transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#610D17]/15 ${
          isOpen
            ? "border-[#610D17] ring-2 ring-[#610D17]/10"
            : "border-zinc-200 hover:border-[#610D17]/40 hover:bg-zinc-50/50"
        } ${buttonClassName}`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {selectedOption?.icon && (
            <span className="shrink-0 text-zinc-500">{selectedOption.icon}</span>
          )}
          <span className={`text-sm sm:text-base font-semibold truncate ${selectedOption ? "text-zinc-900" : "text-zinc-400"}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedOption?.badge !== undefined && (
            <span className="rounded-full bg-[#FBF2F3] border border-[#610D17]/15 px-2 py-0.5 text-xs font-bold text-[#610D17]">
              {selectedOption.badge}
            </span>
          )}
          <svg
            className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#610D17]" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute left-0 z-30 mt-1.5 max-h-72 w-full overflow-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg animate-in fade-in-50 zoom-in-95 duration-150 focus:outline-none ${menuClassName}`}
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                disabled={option.disabled}
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  option.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : isSelected
                    ? "bg-[#FBF2F3] text-[#610D17] font-semibold cursor-pointer"
                    : "text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {option.icon && (
                    <span className={`shrink-0 ${isSelected ? "text-[#610D17]" : "text-zinc-500"}`}>
                      {option.icon}
                    </span>
                  )}
                  <div className="truncate">
                    <div className="truncate font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-xs text-zinc-500 truncate mt-0.5">
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {option.badge !== undefined && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        isSelected
                          ? "bg-[#610D17] text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {option.badge}
                    </span>
                  )}
                  {isSelected && (
                    <svg
                      className="h-4 w-4 text-[#610D17]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
