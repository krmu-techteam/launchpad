import Image from "next/image";
import Link from "next/link";

const YourJourney = () => {
  return (
    <section>
      <div className="bg-[#002653] p-15 rounded-4xl max-w-396 mx-auto text-center text-white relative">
        <div className="absolute"><Image src="/images/footer-cloud-2.webp" width={150} height={80} alt="" /></div>
        <h4 className="text-5xl">Your University Journey Starts Here</h4>
        <p className="text-2xl my-2.5">Begin Beyond Boundaries…</p>
        <p className="text-xl">
          Join KRMU’s Launchpad and begin your journey with inspiration,
          creativity, connections, and unforgettable experiences.
        </p>
        <div className="flex items-center justify-center gap-5 my-5">
          <Link
            href="#"
            className="bg-[#e21f21] text-white text-xl rounded-full text-center px-12 py-4.5 max-w-77.5 w-full"
          >
            Register Now
          </Link>
          <Link
            href="#"
            className="bg-white text-black text-xl rounded-full text-center px-12 py-4.5 max-w-77.5 w-full"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
