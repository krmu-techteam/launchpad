import Image from "next/image";
import NpfPopup from "./form/NpfPopup";

const Header = () => {
  return (
    <header className="pb-4 xl:pb-0 px-2.5 sm:px-4 pt-4 md:px-6 md:pt-5">
      <div className="flex gap-4 flex-row items-center justify-between">
        {/* Logo */}
        <div className="w-2/3 sm:w-1/3 xl:w-[20%]">
          <Image
            src="/images/krm-logo.png"
            width={352}
            height={54}
            alt="KRMU Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Clouds */}
        <div className="xl:w-[60%] hidden xl:flex flex-wrap justify-center gap-3 lg:gap-5">
          <Image
            src="/images/cloud-1.png"
            width={250}
            height={80}
            alt="Biggest Creators"
            className="w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto -mb-1.5"
          />

          <Image
            src="/images/cloud-2.png"
            width={250}
            height={80}
            alt="About LaunchPad"
            className="w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto -mb-1.5"
          />

          <Image
            src="/images/cloud-3.png"
            width={250}
            height={80}
            alt="Why Attend"
            className="w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto -mb-1.5"
          />
        </div>

        {/* Button */}
        <div className="w-1/3 sm:w-2/3 xl:w-[20%] flex justify-end">
          {/* <button
            className="
          rounded-full
          bg-[linear-gradient(90deg,#E21F21_0%,#7C1112_100%)]
          text-white
          font-semibold
          px-2.5 py-1.5
          sm:px-6 sm:py-3
          md:px-8 md:py-3
          whitespace-
          text-sm
          sm:text-base
        "
          >
            Register Now
          </button> */}
          <NpfPopup
            formId={`bc75880ade367265cef841c19ef47621`}
            btnClass={`rounded-full
          bg-[linear-gradient(90deg,#E21F21_0%,#7C1112_100%)]
          text-white
          font-semibold
          px-2.5 py-1.5
          sm:px-6 sm:py-3
          md:px-8 md:py-3
          whitespace-
          text-sm
          sm:text-base npfWidget-bc75880ade367265cef841c19ef47621`}
            btnText={`Register Now`}
            showIcon={false}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
