import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";

const ExploreExperience = () => {
  return (
    <section className="pt-10 md:pt-16 lg:pt-25.5 px-6 sm:px-8 lg:px-10 xl:px-16 font-poppins">
      <div className="max-w-397 mx-auto border border-[#431b77] rounded-[20px] p-6 md:p-8 lg:p-10 bg-[linear-gradient(90.72deg,#002755_0.15%,#297ACE_34.88%,#001732_73.21%)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-tight lg:leading-15.75 mb-2">
              Explore the Experience
            </h3>

            <p className="text-base md:text-lg lg:text-xl">
              Where Your Journey Takes Off
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-3">
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
                "https://launchpad.krmangalam.edu.in/launchpad-brochure.pdf"
              }
              form_name="Download Brochure"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreExperience;
