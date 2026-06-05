import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src="/images/hero-banner-4.png"
          alt="LaunchPad Hero"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="hidden sm:block w-full h-auto"
        />
        <Image
          src="/images/mobile-banner.jpeg"
          alt="LaunchPad Hero"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="sm:hidden w-full h-auto"
        />
      </div>
    </section>
  );
}