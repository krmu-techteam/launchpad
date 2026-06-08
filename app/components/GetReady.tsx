"use client";

import Image from "next/image";

const images = [
  "/images/krmu-band.webp",
  // "/images/jasmine.webp",
  "/images/parmish.webp",
  "/images/events/event-1.jpg",
  // "/images/events/event-2.jpg",
  "/images/events/event-3.jpg",
  "/images/events/event-4.jpg",
  "/images/events/event-5.jpg",
  "/images/events/event-7.jpg",
  "/images/events/event-9.jpg",
  "/images/events/event-10.jpg",
  "/images/events/event-11.jpg",
  "/images/events/event-12.jpg",
];

export default function GetReady() {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="px-6 sm:px-8 lg:px-10 xl:px-16 pt-20 overflow-hidden">
      <div className="font-poppins">
        <h4 className="text-center text-white text-3xl md:text-4xl lg:text-[51px] font-domine mb-8 md:mb-10">
          A Campus That Never Stops Inspiring
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
                  h-[240px]
                  sm:w-[350px]
                  sm:h-[450px]
                  md:w-[450px]
                  md:h-[450px]
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