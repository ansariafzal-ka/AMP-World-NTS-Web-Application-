import React from "react";

export interface SimpleCardProps {
  badge?: string;
  title: string;
  description: string;
  className?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  badge,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs hover:-translate-y-1 hover:border-[#610D17]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {badge && (
          <span className="inline-block text-[11px] font-bold text-[#610D17] bg-[#FBF2F3] px-2.5 py-1 rounded-md mb-3">
            {badge}
          </span>
        )}

        <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SimpleCard;
