import Image from "next/image";

const FullWidthCreatorCard = () => {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden rounded-[24px] bg-[#12002b] shadow-xl">
      <div className="grid md:grid-cols-2">
        {/* Left Image Section */}
        <div className="relative">
          <Image
            src="/images/creators/abhishek-upmanyu.png"
            alt="Abhishek Upmanyu"
            width={600}
            height={600}
            className="h-full w-full"
          />

          {/* Date Badge */}
          <div className="absolute top-6 left-6 flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-white/40 bg-black/20 backdrop-blur-sm">
            <span className="text-4xl font-bold text-white leading-none">
              30
            </span>
            <span className="mt-1 text-sm font-medium uppercase tracking-wide text-white">
              June
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center text-center text-white py-10 px-5">
          <div className="max-w-[256px] mx-auto">
            <h3 className="text-2xl font-bold">Abhishek Upmanyu</h3>

            <p className="text-lg font-light">
              Personality Development & Styling
            </p>
          </div>

          <p className="text-lg leading-relaxed text-white/90">
            Experience the energy of stand-up comedy while building confidence
            in public speaking and self-expression. Learn how humor and stage
            presence can help you connect with people and communicate
            fearlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullWidthCreatorCard;
