import Image from "next/image";

const Header = () => {
  return (
    <header className="px-5 pt-5">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="/images/krm-logo.png"
            width={450}
            height={70}
            alt="KRMU Logo"
          />
        </div>
        <div className="flex space-x-5">
          <Image
            src="/images/cloud-1.png"
            width={250}
            height={80}
            alt="CLoud 1"
          />
          <Image
            src="/images/cloud-2.png"
            width={250}
            height={80}
            alt="CLoud 2"
          />
          <Image
            src="/images/cloud-3.png"
            width={250}
            height={80}
            alt="CLoud 3"
          />
        </div>
        <div>
          <button
            className="text-white bg-[linear-gradient(90deg,#E21F21_0%,#7C1112_100%)] px-8 py-3 font-semibold 
         rounded-full"
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
