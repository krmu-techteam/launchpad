"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

type CreateCardProps = {
  image: string;
  date: string;
  month: string;
  name: string;
  title: string;
  bgColor?: string;
  contentBG?: string;
  infoContent?: string;
  creatorInfo?: string;
  overlayBG?: string;
};

const CreateCard = ({
  image,
  date,
  month,
  name,
  title,
  contentBG,
  infoContent,
  creatorInfo,
  overlayBG,
}: CreateCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-t-[20px] group w-full">
      {/* Full Overlay (Open State) */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center text-white transition-all duration-500 ${
          isOpen
            ? `opacity-100 visible ${overlayBG} backdrop-blur-[2px]`
            : "opacity-0 invisible"
        }`}
      >
        <h3 className="text-sm sm:text-[22px] font-bold leading-tight">
          {name}
        </h3>

        <p className="mt-1 text-xs sm:text-lg leading-snug text-white/90">
          {title}
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-white">
          {creatorInfo}
        </p>

        <button onClick={() => setIsOpen(false)} className="cursor-pointer">
          <ChevronUp className="rotate-180" />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/5]">
        <Image
          src={image}
          alt={name}
          width={344}
          height={344}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date Badge */}
        <div className="absolute left-4 top-4 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-white/50 bg-transparent text-white">
          <span className="text-2xl font-bold leading-none">{date}</span>
          <span className="text-base font-semibold uppercase">{month}</span>
        </div>

        {/* Bottom Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 z-10 pt-2 ${contentBG} px-5 text-center text-white`}
        >
          <div
            className={`${infoContent} flex flex-col items-center justify-center mx-auto`}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="animate-bounce cursor-pointer"
            >
              <ChevronUp />
            </button>

            <h3 className="text-sm sm:text-[22px] font-bold leading-tight">
              {name}
            </h3>

            <p className="mt-1 text-xs sm:text-lg leading-snug text-white/90">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
