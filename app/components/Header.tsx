"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NpfPopup from "./form/NpfPopup";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <header className="bg-[#001732] p-4 md:p-5 font-poppins">
      <div className="max-w-441.5 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-auto">
            <Image
              src="/images/krm-logo.png"
              width={447}
              height={68}
              alt="KRMU Logo"
              className="w-[180px] sm:w-[250px] lg:w-[447px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-11">
            <ul className="text-white flex gap-10 items-center">
              <li>
                <button
                  onClick={() => handleScroll("biggest-creator")}
                  className="text-lg leading-8.25 cursor-pointer hover:text-[#E7C268] transition-colors"
                >
                  Biggest Creators
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("about-launchpad")}
                  className="text-lg leading-8.25 cursor-pointer hover:text-[#E7C268] transition-colors"
                >
                  About LAUNCHPAD
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("why-attend")}
                  className="text-lg leading-8.25 cursor-pointer hover:text-[#E7C268] transition-colors"
                >
                  Why Attend?
                </button>
              </li>
            </ul>

            <NpfPopup
              formId="a6a4305c7514b2facc46528871e79634"
              btnClass="bg-[#CB000D] py-1.5 px-6.5 text-lg leading-8.25 text-white rounded-[10px] npfWidget-a6a4305c7514b2facc46528871e79634"
              btnText="Register Now"
              showIcon={false}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 border-t border-white/10 pt-6">
            <ul className="flex flex-col gap-5 text-white text-lg">
              <li>
                <button
                  onClick={() => handleScroll("biggest-creator")}
                  className="w-full text-left"
                >
                  Biggest Creators
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("about-launchpad")}
                  className="w-full text-left"
                >
                  About LAUNCHPAD
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("why-attend")}
                  className="w-full text-left"
                >
                  Why Attend?
                </button>
              </li>
            </ul>

            <NpfPopup
              formId="a6a4305c7514b2facc46528871e79634"
              btnClass="mt-6 w-full bg-[#CB000D] py-3 px-6 text-white rounded-[10px] text-lg font-medium npfWidget-a6a4305c7514b2facc46528871e79634"
              btnText="Register Now"
              showIcon={false}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;