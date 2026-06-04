import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";

const ExploreExperience = () => {
  return (
    <section className="pt-5 sm:pt-10 px-6 sm:px-8 lg:px-10 xl:px-16">
      <div className="max-w-396.25 mx-auto flex flex-col xl:flex-row items-center 2xl:items-stretch gap-5 md:gap-10 bg-[#001a3c] p-5 md:p-10 rounded-[20px] font-poppins border border-white/20">
        <div className="w-full xl:w-[55%]">
          <h4 className="font-domine text-[24px] md:text-4xl 2xl:text-[44px] font-bold leading-tight text-white mb-4">
            What is KRMU’s LAUNCHPAD?
          </h4>

          <p className="text-white text-sm md:text-base mb-5">
            KRMU’s LAUNCHPAD is a specially curated pre-enrollment engagement
            programme designed to inspire, empower, and prepare students for the
            journey ahead
          </p>
          <p className="text-white text-sm md:text-base mb-5">
            Through enriching sessions on career readiness, personal growth,
            creator economy trends, networking, motivation, communication, and
            student life skills, KRMU’s LAUNCHPAD helps students become
            future-ready before they even begin their academic journey.
          </p>
          <p className="text-white text-sm md:text-base mb-5">
            More than just a series of sessions, it is a platform to learn,
            connect, grow, and step confidently into the future.
          </p>
          <p className="text-white text-sm md:text-base mb-0">
            It’s your launch into the future.
          </p>
        </div>
        <div className="w-full xl:w-[45%] bg-[linear-gradient(90.72deg,#002755_0.15%,rgba(41,122,206,0.6)36.97%,#001732_100%)] p-5 md:p-10 rounded-[20px] border-2 border-[#431b77] flex flex-col justify-start">
         
            <h4 className="text-3xl sm:text-4xl 2xl:text-[42px] leading-tight 2xl:leading-15.75 text-white font-medium font-poppins mb-1.5 text-center sm:text-left">Explore the Experience</h4>
            <p className="text-lg md:text-[21px] font-normal mb-5 lg:mb-8 text-white text-center sm:text-left">Get Inspired. Get Connected. Get Future-Ready.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <NpfPopup
                formId={`a6a4305c7514b2facc46528871e79634`}
                btnClass={`bg-[#CB000D] rounded-[10px] text-white font-medium  p-4 lg:p-5  npfWidget-a6a4305c7514b2facc46528871e79634`}
                btnText={`Register Now`}
                showIcon={false}
              />

              <CommonLeadPopup
                buttonText={"Download Brochure"}
                buttonClassName="bg-white inline-block rounded-[10px] text-black font-medium w-full p-4 lg:p-5"
                redirectUrl={
                  "https://launchpad.krmangalam.edu.in/launchpad2026-brochure.pdf"
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
