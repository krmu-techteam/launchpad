import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

const WhatIsLaunchpad = () => {
  return (
    <section
      className="py-10 md:py-16 lg:pb-20 lg:pt-0 px-6 sm:px-8 lg:px-10 xl:px-16 scroll-mt-24 mt-10 sm:mt-0"
      id="why-attend"
    >
      <div className="max-w-397 mx-auto w-full flex flex-col xl:flex-row gap-6 lg:gap-10 items-stretch font-poppins">
        {/* Left Card */}
        <div className="w-full xl:w-1/2 bg-[linear-gradient(139.05deg,#032A66_61.83%,#1D54A6_95.65%)] px-5 md:px-8 lg:px-12 xl:px-18 py-6 md:py-10 lg:py-15 relative rounded-[20px] overflow-hidden">
          <Image
            src="/images/graphic-bg-2.png"
            width={160}
            height={210}
            alt="Graphic"
            className="absolute bottom-0 right-0 w-24 md:w-32 lg:w-40"
          />

          <h4 className="font-domine text-[24px] md:text-[28px] lg:text-[32px] leading-tight text-white mb-4">
            What is KRMU’s LAUNCHPAD?
          </h4>

          <p className="text-white text-sm md:text-base mb-6 md:mb-8">
            KRMU’s LAUNCHPAD is a specially curated pre-enrollment engagement
            programme designed to inspire, empower, and prepare students for the
            journey ahead
          </p>
          <p className="text-white text-sm md:text-base mb-6 md:mb-8">
            Through enriching sessions on career readiness, personal growth,
            creator economy trends, networking, motivation, communication, and
            student life skills, KRMU’s LAUNCHPAD helps students become
            future-ready before they even begin their academic journey.
          </p>
          <p className="text-white text-sm md:text-base mb-6 md:mb-8">
            More than just a series of sessions, it is a platform to learn,
            connect, grow, and step confidently into the future.
          </p>
          <p className="text-white text-sm md:text-base mb-6 md:mb-8">
            It’s your launch into the future.
          </p>

          {/* <div className="w-full border border-white/20 mb-5"></div> */}

          {/* <p className="text-sm md:text-base font-semibold text-white mb-6">
        At KRMU's LAUNCHPAD, students get the opportunity to:
      </p> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
        <div className="bg-[#000F23] px-5 md:px-6 lg:px-8 py-4 md:py-5 rounded-[10px] flex items-center justify-center">
          <p className="text-white text-sm md:text-base leading-6 mb-0">
            Engage in inspiring sessions with creators, mentors, and industry
            experts
          </p>
        </div>

        <div className="bg-[#002317] px-5 md:px-6 lg:px-8 py-4 md:py-5 rounded-[10px] flex items-center justify-center">
          <p className="text-white text-sm md:text-base leading-6 mb-0">
            Develop essential life skills and future-ready perspectives
          </p>
        </div>

        <div className="bg-[#1D0023] px-5 md:px-6 lg:px-8 py-4 md:py-5 rounded-[10px] flex items-center justify-center">
          <p className="text-white text-sm md:text-base leading-6 mb-0">
            Build confidence for their academic and personal journey
          </p>
        </div>

        <div className="bg-[#231600] px-5 md:px-6 lg:px-8 py-4 md:py-5 rounded-[10px] flex items-center justify-center">
          <p className="text-white text-sm md:text-base leading-6 mb-0">
            Connect with fellow students before stepping onto campus
          </p>
        </div>

        <div className="bg-[#230000] px-5 md:px-6 lg:px-8 py-4 md:py-5 rounded-[10px] flex items-center justify-center sm:col-span-2">
          <p className="text-white text-sm md:text-base leading-6 mb-0">
            Experience the spirit of growth, learning, and community from Day
            One
          </p>
        </div>
      </div> */}

          {/* <p className="text-white text-sm md:text-base font-normal leading-6 mb-0">
        KRMU’s LAUNCHPAD is designed to help students begin their university
        journey with confidence, clarity, and motivation.
      </p> */}
        </div>

        {/* Right Card */}
        <div className="w-full xl:w-1/2 bg-[linear-gradient(320.09deg,#032A66_62.28%,#1D54A6_92.13%)] p-5 md:p-8 lg:p-11 rounded-[20px]">
          <h4 className="font-domine text-[24px] md:text-[28px] lg:text-[32px] leading-tight text-white mb-4">
            Why Attend KRMU’s LAUNCHPAD?
          </h4>

          <p className="text-white text-sm md:text-base mb-6 md:mb-5">
            Because your university journey should begin with inspiration and
            preparation.
          </p>

          <div className="w-full border border-white/20 mb-5"></div>

          <p className="text-sm md:text-base font-semibold text-white mb-6">
            At KRMU's LAUNCHPAD, students get the opportunity to:
          </p>

          <ul className="text-base md:text-lg text-white font-normal flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <CircleArrowRight color="#fff" className="min-w-5 mt-1" />
              <span>
                Engage in inspiring sessions with creators, mentors, and
                industry experts
              </span>
            </li>

            <li className="flex items-start gap-4">
              <CircleArrowRight color="#fff" className="min-w-5 mt-1" />
              <span>
                Develop essential life skills and future-ready perspectives
              </span>
            </li>

            <li className="flex items-start gap-4">
              <CircleArrowRight color="#fff" className="min-w-5 mt-1" />
              <span>
                Build confidence for their academic and personal journey
              </span>
            </li>

            <li className="flex items-start gap-4">
              <CircleArrowRight color="#fff" className="min-w-5 mt-1" />
              <span>
                Connect with fellow students before stepping onto campus
              </span>
            </li>

            <li className="flex items-start gap-4">
              <CircleArrowRight color="#fff" className="min-w-5 mt-1" />
              <span>
                Experience the spirit of growth, learning, and community from
                Day One
              </span>
            </li>
          </ul>

          <div className="w-full border border-white/20 mt-6 md:mt-7 mb-5"></div>

          <p className="text-white text-base md:text-lg text-center mb-0">
            KRMU’s LAUNCHPAD is designed to help students begin their university
            journey with confidence, clarity, and motivation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLaunchpad;
