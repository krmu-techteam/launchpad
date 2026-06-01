import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative   xl:h-screen">
        <Image
          src="/images/hero-img-1.webp"
          alt="The Launchpad Event"
          fill
          priority
          className="object-cover w-full object-center"
          sizes="100vw"
        />

        {/* Optional Overlay */}
        {/* <div className="absolute inset-0 bg-black/10" /> */}
      </div>
    </section>
  );
};

export default Hero;