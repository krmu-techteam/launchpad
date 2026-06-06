import SocialCard from "./SocialCard";

const SocialIcons = () => {
  return (
    <div className="hidden lg:block fixed top-[30%] right-0  p-1 bg-[linear-gradient(180deg,#001732_2.88%,#2343F5_54.81%,#001732_100%)] rounded-l-[5px]">
      <ul className="flex flex-col gap-1.5">
        <SocialCard
          url="https://www.facebook.com/krmuniv/"
          imgUrl="/images/facebook.png"
          alt="Facebook"
        />
        <SocialCard
          url="https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA"
          imgUrl="/images/youtube.png"
          alt="Youtube"
        />
        <SocialCard
          url="https://www.instagram.com/krmuniv/"
          imgUrl="/images/insta.png"
          alt="Instagram"
        />
        <SocialCard
          url="https://in.linkedin.com/school/krmuniv/"
          imgUrl="/images/white-linkedinbg.png"
          alt="Linkedin"
        />
      </ul>
    </div>
  );
};

export default SocialIcons;
