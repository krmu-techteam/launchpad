import Image from "next/image";

const images = [
  "/images/krmu-band.webp",
  "/images/jasmine.webp",
  "/images/parmish.webp",
];

export default function GetReady() {
  return (
    <section className="pb-10 pt-0 sm:py-12 md:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2
          className="
            mb-8 md:mb-12
            text-center
            font-domine
            font-bold
            text-[#061B3A]
            text-3xl
            sm:text-4xl
            lg:text-5xl
          "
        >
          Get Ready for the Experience
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                
                mobileGetReady
              "
            >
              <Image
                src={image}
                alt={`Experience ${index + 1}`}
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover
                  transition-transform
                  duration-500
                   w-full
                   h-full
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
