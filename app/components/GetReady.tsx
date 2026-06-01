import Image from "next/image";

const images = [
  "/images/krmu-band.webp",
  "/images/jasmine.webp",
  "/images/parmish.webp",
];

const GetReady = () => {
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl xl:max-w-full mx-auto">
        <h3 className="font-domine text-[56px] font-bold text-center text-[#061B3A] mb-12">
          Get Ready for the Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl aspect-[1/1.05] group"
            >
              <Image
                src={image}
                alt={`Experience ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetReady;