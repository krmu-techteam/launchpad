import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4 py-4 md:px-6 md:py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/images/krm-logo.png"
            width={450}
            height={70}
            alt="KRMU Logo"
            className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[420px] h-auto"
          />
        </div>

        {/* Clouds */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
          <Image
            src="/images/cloud-1.png"
            width={250}
            height={80}
            alt="Biggest Creators"
            className="w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto"
          />

          <Image
            src="/images/cloud-2.png"
            width={250}
            height={80}
            alt="About LaunchPad"
            className="w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto"
          />

          <Image
            src="/images/cloud-3.png"
            width={250}
            height={80}
            alt="Why Attend"
            className="w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-end">
          <button
            className="
          rounded-full
          bg-[linear-gradient(90deg,#E21F21_0%,#7C1112_100%)]
          text-white
          font-semibold
          px-5 py-2
          sm:px-6 sm:py-3
          md:px-8 md:py-3
          whitespace-nowrap
        "
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
