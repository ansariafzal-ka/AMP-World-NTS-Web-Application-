import React from "react";
import Image from "next/image";
import Button from "./Button";

export interface ImageCardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
  onButtonClick,
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-white rounded-[24px] sm:rounded-[28px] px-3.5 sm:px-5 lg:px-3.5 xl:px-5 pt-5 sm:pt-6 pb-6 sm:pb-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-zinc-100/80 transition-all duration-300 w-full max-w-[360px] mx-auto flex flex-col items-center ${className}`}
    >
      {/* Title */}
      <h3 className="text-base sm:text-lg lg:text-[17px] xl:text-[19px] font-bold text-[#9B2C2C] text-center tracking-tight mb-5 whitespace-nowrap w-full">
        {title}
      </h3>

      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-zinc-100">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      {/* Floating Pill Action Button */}
      <div className="relative -mt-5 sm:-mt-6 z-10 flex justify-center">
        <Button
          variant="primary"
          href={buttonHref}
          onClick={onButtonClick}
          className="!rounded-full px-8 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md shadow-[#9B2C2C]/25 hover:shadow-lg hover:shadow-[#9B2C2C]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ImageCard;