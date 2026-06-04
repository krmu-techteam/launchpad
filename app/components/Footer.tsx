import { Mail, Phone } from "lucide-react";
import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";
import Link from "next/link";

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
                <span className="text-lg">launchpad@krmangalam.edu.in</span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+918192888444"
                className="flex items-center gap-2"
              >
                <Phone color="#fff" />{" "}
                <span className="text-lg">+91-8192888444</span>
              </Link>
            </li>
          </ul>

          <p className="mb-0 text-lg text-white">
            &copy; Copyright 2026 K.R. Mangalam University
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
