import { Mail, Phone } from "lucide-react";
import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";
import ScrollToTop from "./form/scrollToTop";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import SocialCard from "./SocialCard";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00234d] pt-10 pb-15 lg:py-10 px-6 sm:px-8 lg:px-10 xl:px-16">
        <div className="max-w-397 mx-auto w-full flex items-center justify-between gap-2.5 flex-col lg:flex-row">
          <ul className="flex gap-1.5 lg:hidden">
            <SocialCard
              url="https://www.facebook.com/krmuniv/"
              imgUrl="/images/facebook.png"
              alt="Facebook"
            />
            <SocialCard
              url="https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA"
              imgUrl="/images/youtube.png"
              alt="Youtube"
            />
            <SocialCard
              url="https://www.instagram.com/krmuniv/"
              imgUrl="/images/insta.png"
              alt="Instagram"
            />
            <SocialCard
              url="https://in.linkedin.com/school/krmuniv/"
              imgUrl="/images/white-linkedinbg.png"
              alt="Linkedin"
            />
          </ul>
          <ul className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-5 text-white">
            <li>
              <Link
                href="mailto:launchpad@krmangalam.edu.in"
                className="flex items-center gap-2"
              >
                <Mail color="#fff" />{" "}
                <span className="text-base">launchpad@krmangalam.edu.in</span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+918192888444"
                className="flex items-center gap-2"
              >
                <Phone color="#fff" />{" "}
                <span className="text-base">+91-8192888444</span>
              </Link>
            </li>
          </ul>

          <p className="mb-0 text-base text-white text-center sm:text-left">
            &copy; Copyright 2026 K.R. Mangalam University
          </p>
        </div>
      </footer>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] flex shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
        <NpfPopup
          formId={`a6a4305c7514b2facc46528871e79634`}
          btnClass={`font-poppins flex-1 bg-[#cb000d] text-white py-3.5 md:px-2 text-center text-xs md:text-[14px] font-medium capitalize tracking-wide border-r border-white/50 active:bg-[#c4020f]  npfWidget-a6a4305c7514b2facc46528871e79634`}
          btnText={`Register Now`}
          showIcon={false}
        />

        <CommonLeadPopup
          buttonText={"Download Brochure"}
          buttonClassName="font-poppins flex-1 bg-white text-black p-2 md:py-3.5 md:px-2 text-center text-xs md:text-[14px] font-medium capitalize tracking-wide active:bg-[#c4020f]"
          redirectUrl={
            "https://launchpad.krmangalam.edu.in/launchpad2026-brochure.pdf"
          }
          form_name="Download Brochure"
        />
      </div>
      <ScrollToTop />
      <SocialIcons />
      <div className="fixed bottom-[6%] lg:bottom-[10px] left -5 z-40 w-[140px] h-[140px] md:w-[150px] md:h-[150px] flex items-center justify-center text-center p-5 font-semibold">
        <Image src="/images/star-2.png" fill alt="" className="rotate-star" />
        <p className="text-xs text-black z-50 mb-0 font-bold leading-[1.3] font-poppins">
          Exclusively for newly admitted KRMU students
        </p>
      </div>
    </>
  );
};

export default Footer;
