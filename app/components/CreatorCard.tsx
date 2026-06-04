"use client";

import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { CreatorDataType } from "../lib/constants/creatorData";
import { useEffect, useState } from "react";

type Props = {
  data: CreatorDataType;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const CreatorCard = ({
  data,
  i,
  progress,
  range,
  targetScale,
}: Props) => {
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
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
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
    <div
      className="sticky top-0 h-[780px] sm:h-[760px] md:h-[700px] lg:h-[500px]"
      style={{
        top: `${i * 20}px`,
      }}
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
          lg:p-15
          flex
          flex-col
          lg:flex-row
          items-center
          gap-8
          lg:gap-24
        `}
      >
        {/* Date Badge */}
        <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20 text-center text-white font-poppins w-16 h-16 md:w-20 md:h-20 lg:w-21.75 lg:h-21.75 flex flex-col items-center justify-center rounded-[10px] border border-dashed border-white">
          <h5 className="font-bold text-xl md:text-2xl lg:text-3xl">
            {data.date}
          </h5>

          <h6 className="text-xs md:text-sm lg:text-base font-normal uppercase">
            {data.month}
          </h6>
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
        <div className="w-full lg:w-1/4 relative flex justify-center">
          <Image
            src="/images/circle-dashed.png"
            width={444}
            height={444}
            alt=""
            className="absolute w-[220px] md:w-[280px] lg:w-full h-auto"
          />

          <div
            className={`${data.imageBgGradient} rounded-full p-3 md:p-4 m-3`}
          >
            <Image
              src={data.creatorImage}
              width={387}
              height={387}
              alt={data.creatorName}
              className="rounded-full w-[180px] md:w-[240px] lg:w-full h-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-3/4 text-center lg:text-left">
          <h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
            {data.creatorName}
          </h4>

          <h5 className="text-lg md:text-xl lg:text-2xl text-[#E7C268] font-bold font-playfair mb-4 md:mb-5 tracking-[1.2px]">
            {data.creatorTitle}
          </h5>

          <p className="text-white text-sm md:text-base lg:text-lg leading-6 lg:leading-6.75 mb-6 lg:mb-8">
            {data.creatorDesc}
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-full lg:max-w-114.5">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className="text-center text-white font-poppins h-20 md:h-24 lg:h-26.25 flex flex-col items-center justify-center border-2 border-[#6e77af] rounded-[10px]"
              >
                <h5 className="font-bold text-xl md:text-2xl lg:text-[28px]">
                  {String(item.value).padStart(2, "0")}
                </h5>

                <h6 className="text-xs md:text-sm lg:text-base font-normal">
                  {item.label}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreatorCard;