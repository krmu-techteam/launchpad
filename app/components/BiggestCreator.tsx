"use client";

import { creatorData } from "../lib/constants/creatorData";
import CreatorCard from "./CreatorCard";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const BiggestCreator = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 scroll-mt-24" id="biggest-creator">
      <div className="max-w-247.75 mx-auto w-full font-poppins text-white text-center">
        <h4 className="font-domine text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight lg:leading-16 mb-2.5">
          Learn From India’s Biggest Creators
        </h4>

        <p className="text-lg md:text-xl lg:text-2xl leading-normal lg:leading-8 mb-8">
          Featured Sessions at the Launchpad
        </p>
      </div>

      <div
        ref={container}
        className="max-w-396.75 mx-auto w-full relative"
      >
        {creatorData?.map((item, index) => {
          const targetScale =
            1 - (creatorData.length - index) * 0.03;

          return (
            <CreatorCard
              key={index}
              data={item}
              i={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BiggestCreator;