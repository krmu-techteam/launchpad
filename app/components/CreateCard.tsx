import { ChevronUp } from "lucide-react";
import Image from "next/image";

type CreateCardProps = {
  image: string;
  date: string;
  month: string;
  name: string;
  title: string;
  bgColor?: string;
  contentBG?: string;
  infoContent?: string;
};

const CreateCard = ({
  image,
  date,
  month,
  name,
  title,
  bgColor = "from-black/0 to-black",
  contentBG,
  infoContent
}: CreateCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-t-[20px] group">
      {/* Image */}
      <div className="relative aspect-4/5">
        <Image
          src={image}
          alt={name}
          width={344}
          height={344}
          className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date Badge */}
        <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-white/50 bg-transparent text-white">
          <span className="text-2xl font-bold leading-none">{date}</span>
          <span className="text-base font-semibold uppercase">{month}</span>
        </div>

        {/* Bottom Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0  ${contentBG} px-5 text-center text-white `}
        >
          <div className={`${infoContent} flex flex-col items-center justify-center mx-auto`}>

          <div><ChevronUp /></div>

          <h3 className="text-[22px] font-bold leading-tight">{name}</h3>

          <p className="mt-1 text-lg leading-snug text-white/90">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
