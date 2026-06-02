import Image from "next/image";
import Link from "next/link";
import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";

const YourJourney = () => {
  return (
    <section className="relative px-4 py-12 md:px-6 lg:py-16">
      <div className="relative mx-auto max-w-[1664px]">
        {/* Decorative Clouds */}
        <Image
          src="/images/cloud-4.png"
          alt=""
          width={200}
          height={100}
          className="absolute bottom-full left-8 hidden sm:block"
        />

        <Image
          src="/images/cloud-4.png"
          alt=""
          width={200}
          height={100}
          className="absolute bottom-full right-8 block"
        />

        {/* Card */}
        <div
          className="
            rounded-[24px]
            bg-[url(/images/youjourney-bg.webp)]
            bg-cover
            bg-center bg-no-repeat
            overflow-hidden
            px-6
            py-10
            md:px-10
            md:py-14
            text-center
            text-white
          "
        >
          {/* Heading */}
          <h2
            className="
              font-domine
              font-bold
              text-2xl
              sm:text-3xl
              md:text-[40px]
              leading-tight
            "
          >
            Your University Journey Starts Here
          </h2>

          {/* Subtitle */}
          <p
            className="
              mt-3
              text-base
              sm:text-lg
              md:text-[24px]
            "
          >
            Begin Beyond Boundaries...
          </p>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-white/90
            "
          >
            Join KRMU's Launchpad and begin your journey with inspiration,
            creativity, connections, and unforgettable experiences.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            {/* <Link
              href="#"
              className="
              
              "
            >
              Register Now
            </Link> */}

            <NpfPopup
              formId={`bc75880ade367265cef841c19ef47621`}
              btnClass={`
          w-full
                sm:w-auto
                min-w-[220px]
                rounded-full
                bg-[#E21F21]
                px-8
                py-4
                text-center
                font-semibold
                text-white
                transition
                hover:opacity-90
          sm:text-base npfWidget-bc75880ade367265cef841c19ef47621`}
              btnText={`Register Now`}
              showIcon={false}
            />

            {/* <Link
              href="#"
              className="
                w-full
                sm:w-auto
                min-w-[220px]
                rounded-full
                bg-white
                px-8
                py-4
                text-center
                font-semibold
                text-black
                transition
                hover:bg-gray-100
              "
            >
              Download Brochure
            </Link> */}

            <CommonLeadPopup
              buttonText={"Download Brochure"}
              buttonClassName="w-full
                sm:w-auto
                min-w-[220px]
                rounded-full
                bg-white
                px-8
                py-4
                text-center
                font-semibold
                text-black
                transition
                hover:bg-gray-100"
              redirectUrl={"https:google.com"}
              form_name="Download Brochure"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
