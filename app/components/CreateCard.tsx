import Image from "next/image";

type CreateCardProps = {
  image: string;
  date: string;
  month: string;
  name: string;
  title: string;
  bgColor?: string;
  contentBG?: string;
};

const CreateCard = ({
  image,
  date,
  month,
  name,
  title,
  bgColor = "from-black/0 to-black",
  contentBG,
}: CreateCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-[20px] group">
      {/* Image */}
      <div className="relative aspect-4/5">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date Badge */}
        <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-white/50 bg-white/10 backdrop-blur-sm text-white">
          <span className="text-3xl font-bold leading-none">{date}</span>
          <span className="text-xs font-semibold uppercase">{month}</span>
        </div>

        {/* Bottom Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-linear-to-t ${contentBG} p-5 text-center text-white`}
        >
          <div className="mb-2 text-lg">⌃</div>

          <h3 className="text-2xl font-bold">{name}</h3>

          <p className="mt-1 text-sm leading-relaxed text-white/90">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
