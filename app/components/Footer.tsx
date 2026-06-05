import { Mail, Phone } from "lucide-react";
import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";
import Link from "next/link";
import ScrollToTop from "./form/scrollToTop";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00234d] p-5 lg:py-10 px-6 sm:px-8 lg:px-10 xl:px-16">
        <div className="max-w-397 mx-auto w-full flex items-center justify-between gap-2.5 flex-col lg:flex-row">
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

          <p className="mb-0 text-base text-white">
            &copy; Copyright 2026 K.R. Mangalam University
          </p>
        </div>
      </footer>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] flex shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
        <NpfPopup
          formId={`a6a4305c7514b2facc46528871e79634`}
          btnClass={`font-poppins flex-1 bg-[#cb000d] text-white py-3.5 px-2 text-center text-[14px] font-medium capitalize tracking-wide border-r border-white/50 active:bg-[#c4020f]  npfWidget-a6a4305c7514b2facc46528871e79634`}
          btnText={`Register Now`}
          showIcon={false}
        />

        <CommonLeadPopup
          buttonText={"Download Brochure"}
          buttonClassName="font-poppins flex-1 bg-white text-black py-3.5 px-2 text-center text-[14px] font-medium capitalize tracking-wide active:bg-[#c4020f]"
          redirectUrl={
            "https://launchpad.krmangalam.edu.in/launchpad2026-brochure.pdf"
          }
          form_name="Download Brochure"
        />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Footer;
