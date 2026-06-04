import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

const WhyAttend = () => {
  return (
    <section className="px-6 sm:px-8 lg:px-10 xl:px-16">
      <div className="max-w-396.75 mx-auto w-full flex flex-col xl:flex-row bg-[linear-gradient(320.09deg,#032A66_62.28%,#1D54A6_92.13%)] rounded-[20px]">
        <div className="xl:w-1/2 p-5 md:p-10">
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

          <p className="text-white text-base md:text-lg mb-0">
            KRMU’s LAUNCHPAD is designed to help students begin their university
            journey with confidence, clarity, and motivation.
          </p>
        </div>
        <div className="xl:w-1/2 flex justify-center items-end">
            <Image src="/images/launchpad-girl.png" width={705} height={575} alt="" className="object-contain  w-full" />
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
