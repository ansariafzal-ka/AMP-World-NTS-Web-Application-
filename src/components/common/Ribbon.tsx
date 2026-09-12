import React from "react";

export interface RibbonProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const DefaultCheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#610D17]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const Ribbon: React.FC<RibbonProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-[#610D17]/25 hover:shadow-sm transition-all duration-200 ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-[#FBF2F3] flex items-center justify-center shrink-0 mt-0.5">
        {icon ?? <DefaultCheckIcon />}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
          {title}
        </h4>
        {description && (
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Ribbon;
