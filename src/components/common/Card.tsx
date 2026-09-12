import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "", hover = true }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 ${hover ? "hover:-translate-y-1 hover:border-[#610D17]/30 hover:shadow-md" : ""
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;