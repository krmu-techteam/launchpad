import Image from "next/image";
import Link from "next/link";

interface Props {
  url: string;
  imgUrl: string;
  alt: string;
}

const SocialCard = ({ url, imgUrl, alt }: Props) => {
  return (
    <li>
      <Link href={url} target="_blank">
        <Image src={imgUrl} width={44} height={44} alt={alt} />
      </Link>
    </li>
  );
};

export default SocialCard;
