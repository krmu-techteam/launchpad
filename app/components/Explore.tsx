const Explore = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/univsersity.webp')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#001732]/90 via-[#001261]/85 to-[#000D97]/90" />

      {/* Content */}
      <div className="relative z-10 flex min-h-200 items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-5xl text-center text-white">
          {/* Heading */}
          <h1 className="font-bold leading-tight text-[42px] md:text-[60px] xl:text-[78px] domine-family">
            KRMU'S <span className="text-[#FF9D00]">LAUNCHPAD 2026</span>
          </h1>

          {/* Divider */}
          <div className="mx-auto my-8 h-0.75 w-24 rounded-full bg-linear-to-r from-transparent via-white to-transparent" />

          {/* Content */}
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-xl md:text-2xl font-medium">
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
              <span className="h-0.5 w-16 bg-linear-to-r from-transparent to-white" />

              <h2 className="text-3xl md:text-[42px] font-semibold">
                Explore the Experience
              </h2>

              <span className="h-0.5 w-16 bg-linear-to-l from-transparent to-white" />
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
