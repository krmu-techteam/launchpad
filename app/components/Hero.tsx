import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src="/images/banner-image-2.webp"
          alt="LaunchPad Hero"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="block w-full h-auto"
        />
      </div>
    </section>
  );
}