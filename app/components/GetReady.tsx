"use client";

import Image from "next/image";

const images = [
  "/images/krmu-band.webp",
  "/images/jasmine.webp",
  "/images/parmish.webp",
];

export default function GetReady() {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="px-4 md:px-5 overflow-hidden">
      <div className="font-poppins">
        <h4 className="text-center text-white text-3xl md:text-4xl lg:text-[51px] font-domine mb-8 md:mb-10">
          Get Ready for the Experience
        </h4>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="
                  relative
                  flex-shrink-0
                  w-[280px]
                  h-[180px]
                  sm:w-[350px]
                  sm:h-[220px]
                  md:w-[450px]
                  md:h-[280px]
                  lg:w-[500px]
                  lg:h-[450px]
                  overflow-hidden
                  rounded-2xl
                "
              >
                <Image
                  src={image}
                  fill
                  alt={`Experience ${index + 1}`}
                  className="object-cover"
                  sizes="(max-width:768px) 280px, 500px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}