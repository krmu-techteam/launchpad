"use client";

import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { CreatorDataType } from "../lib/constants/creatorData";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  data: CreatorDataType;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const CreatorCard = ({ data, i, progress, range, targetScale }: Props) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference =
        new Date(data.eventDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [data.eventDate]);

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs.", value: timeLeft.hours },
    { label: "Min.", value: timeLeft.minutes },
    { label: "Sec.", value: timeLeft.seconds },
  ];

  return (
    // <div
    //   className={`sticky top-0 sm:h-162.5 md:h-175 lg:h-125`}
    //   style={{
    //     top: `${i * 5}px`,
    //   }}

    // >
    <div
      className="sticky top-0 creator-card sm:h-162.5 md:h-175 lg:h-125"
      style={
        {
          "--sticky-top": `${i * 5}px`,
        } as React.CSSProperties
      }
    >
      <motion.div
        // style={{ scale }}
        className={`
          ${data.cardBg}
          w-full
          rounded-[26px]
          relative
          overflow-hidden
          p-5
          md:p-8
          lg:p-10
          flex
          flex-col
          lg:flex-row
          items-center
          gap-2.5
          sm:gap-5
          lg:gap-8
          h-auto
          sm:h-[730px]
          lg:h-[500px]
          xl:h-[450px]
          2xl:h-auto
        `}
      >
        {/* Date Badge */}
        <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20 text-center text-white font-poppins w-16 h-16 md:w-18 md:h-18 2xl:w-[115px] 2xl:h-[109px] p-1 flex flex-col items-center justify-center rounded-[10px] border border-dashed border-white">
          <h5 className="font-bold text-xl md:text-2xl 2xl:text-[45px] leading-none">
            {data.date}
          </h5>

          <h6 className="text-xs md:text-sm lg:text-[22px] font-normal uppercase">
            {data.month}
          </h6>
        </div>
        <div className="hidden lg:block z-40">
          {data.qrImg && (
            <Link
              href={data.qrUrl || "#"}
              target="_blank"
              className="absolute bottom-6 right-4"
            >
              <Image
                src={data.qrImg}
                width={150}
                height={150}
                alt=""
                className="object-contain w-[100px] h-[100px]  xl:w-[140px] xl:h-[150px] 2xl:w-[150px] 2xl:h-[150px]"
              />
            </Link>
          )}
        </div>

        {/* Background Graphics */}
        <Image
          src="/images/graphic-bg.png"
          width={414}
          height={554}
          alt=""
          className="absolute -right-14 top-0 opacity-50"
        />

        <Image
          src="/images/shape.png"
          width={57}
          height={59}
          alt=""
          className="absolute left-0 bottom-0"
        />

        {/* Creator Image */}
        <div className="w-full lg:w-[35%] xl:w-1/4 relative flex justify-center">
          <Image
            src="/images/circle-dashed.png"
            width={444}
            height={444}
            alt=""
            className="absolute  sm:w-[230px]  lg:w-full h-auto hidden sm:block"
          />
          <div
            className={`${data.imageBgGradient} rounded-full p-3 md:p-4 m-3`}
          >
            <Image
              src={data.creatorImage}
              width={387}
              height={387}
              alt={data.creatorName}
              className="rounded-full w-45 lg:w-75 xl:w-100 h-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-[65%] xl:w-3/4 text-center lg:text-left">
          <h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-white mb-2.5">
            {data.creatorName}
          </h4>
          <p className="text-sm md:text-lg font-poppins mb-2.5 text-white">
            {data.creatorInfo}
          </p>
          <div className="flex lg:block flex-col items-center justify-center">
            <Image
              src="/images/dot-border.png"
              width={484}
              height={2}
              alt="Dot Border"
            />
            <h5 className="text-sm md:text-xl lg:text-2xl text-[#E7C268] font-bold font-playfair max-w-[580px] xl:max-w-[850px] mt-3 mb-4 md:mb-5 tracking-[1.2px]">
              <span className="font-extrabold text-white">Session Topic:</span>{" "}
              {data.creatorTitle}
            </h5>
          </div>
          <p className="text-white text-sm md:text-base lg:text-lg leading-snug text-justify sm:text-left sm:leading-6 lg:leading-6.75 mb-2.5 lg:mb-8 max-w-[917px] w-full hyphens-auto ">
            {data.creatorDesc}
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-3 max-w-full w-auto lg:max-w-[360px]">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className="text-center text-white w-auto font-poppins w-[80px] h-[80px] flex flex-col items-center justify-center md:border-2 border-white/20 rounded-[10px]"
              >
                <h5 className="font-bold text-xl md:text-2xl lg:text-[27px]">
                  {String(item.value).padStart(2, "0")}
                </h5>

                <h6 className="text-xs md:text-sm lg:text-base font-normal">
                  {item.label}
                </h6>
              </div>
            ))}
          </div>
          {data.qrUrl && (
            <Link
              href={data.qrUrl}
              target="_blank"
              className="border border-white py-2 px-5 rounded-[10px] text-white my-3 inline-block cursor-pointer lg:hidden"
            >
              Click Here
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CreatorCard;
