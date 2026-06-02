const Explore = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/univsersity.webp')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#001732]/90 via-[#001261]/85 to-[#000D97]/90" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-6 py-10 lg:py-24">
        <div className="mx-auto max-w-5xl text-center text-white">
          {/* Heading */}
          <h1 className="font-bold leading-tight text-2xl md:text-5xl xl:text-7xl font-domine">
            KRMU'S <span className="text-[#FF9D00]">LAUNCHPAD 2026</span>
          </h1>

          {/* Divider */}
          <div className="mx-auto my-8 h-0.75 w-24 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0)1.44%,#FFFFFF_49.04%,rgba(255,255,255,0)100%)]" />

          {/* Content */}
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-lg md:text-[30px] leading-relaxed font-medium">
              Your first step into university life begins here.
            </p>

            <p className="text-lg md:text-[30px] leading-relaxed font-light">
              An exclusive online Pre-Enrollment Experience Programme designed
              to inspire, connect, and prepare you for an unforgettable journey
              at K.R. Mangalam University.
            </p>

            <p className="text-lg md:text-[30px] leading-relaxed font-light">
              Featuring inspiring sessions by industry leaders, creators,
              entertainers, and changemakers.
            </p>
          </div>

          {/* Bottom CTA Text */}
          <div className="mt-24 flex flex-col items-center">
            <div className="flex items-center gap-5">
              <span className="h-1.25 w-12 bg-[linear-gradient(270deg,#FFFFFF_0%,rgba(153,153,153,0)_79%)] rounded-full" />

              <h2 className="text-3xl md:text-[42px] font-semibold">
                Explore the Experience
              </h2>

              <span className="h-1.25 w-12 bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(153,153,153,0)100%)] rounded-full" />
            </div>

            <p className="mt-3 text-lg md:text-2xl font-light">
              Where Your Journey Takes Off
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
