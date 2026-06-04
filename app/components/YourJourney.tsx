import React from "react";
import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";

const YourJourney = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 sm:px-8 lg:px-10 xl:px-16">
      <div className="max-w-397 mx-auto border-2 border-[#396DAA] p-6 md:p-8 lg:p-10 rounded-[20px] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-3/5 font-poppins text-center lg:text-left">
          <h5 className="text-white text-[28px] md:text-[34px] lg:text-[40px] font-domine font-bold mb-4 lg:mb-5 leading-tight">
            Your University Journey Starts Here
          </h5>

          <h6 className="text-[20px] md:text-[22px] lg:text-[26px] text-white font-normal mb-4 lg:mb-5">
            Begin Beyond Boundaries…
          </h6>

          <p className="text-base lg:text-lg text-white mb-0">
            Join KRMU’s Launchpad and begin your journey with inspiration,
            creativity, connections, and unforgettable experiences.
          </p>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-end gap-3">
          <NpfPopup
            formId={`a6a4305c7514b2facc46528871e79634`}
            btnClass={`bg-[#CB000D] rounded-[10px] text-white font-medium w-full sm:max-w-58.75 p-4 lg:p-5  npfWidget-a6a4305c7514b2facc46528871e79634`}
            btnText={`Register Now`}
            showIcon={false}
          />

          <CommonLeadPopup
            buttonText={"Download Brochure"}
            buttonClassName="bg-white rounded-[10px] text-black font-medium w-full sm:max-w-58.75 p-4 lg:p-5"
            redirectUrl={
              "https://launchpad.krmangalam.edu.in/launchpad2026-brochure.pdf"
            }
            form_name="Download Brochure"
          />
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
