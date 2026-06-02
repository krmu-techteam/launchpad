import { CircleArrowRight } from "lucide-react";
import CreateCard from "./CreateCard";
import FullWidthCreatorCard from "./FullWidthCreatorCard";
import Image from "next/image";

const BiggestCreator = () => {
  return (
    <section className="py-12.5">
      <div className="max-w-416 mx-auto flex relative overflow-hidden">
        <div className="absolute">
        <Image
          src="/images/creator-bg.webp"
          width={1210}
          height={1210}
          alt=""
        />
      </div>
        <div className="w-[60%] relative overflow-hidden z-10">
        
          <h4 className="text-4xl text-center">
            Learn From India’s Biggest Creators
          </h4>
          <p className="text-center">Featured Sessions at the Launchpad</p>
          <div className="h-225 overflow-y-auto scrollbar-none">
            <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
              <CreateCard
                image="/images/creators/ankur.png"
                date="09"
                month="JUNE"
                name="Ankur Warikoo"
                title="Professional Branding & Networking"
                contentBG="bg-[linear-gradient(180deg,#4C4648_0%,#060606_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/ashish.png"
                date="12"
                month="JUNE"
                name="Ashish Chanchalani"
                title="Navigating the College Journey"
                contentBG="bg-[linear-gradient(180deg,#864B23_0%,#201208_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/rj-naved.png"
                date="24"
                month="JUNE"
                name="RJ Naved"
                title="Digital Creativity & Personal Branding"
                contentBG="bg-[linear-gradient(180deg,#005C60_0%,#151515_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/sameeksha.png"
                date="01"
                month="JULY"
                name="Sameeksha Sud"
                title="Wellness, Fitness & Balanced Living"
                contentBG="bg-[linear-gradient(180deg,#1F2643_0%,#141414_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/rj-nitin.png"
                date="08"
                month="JULY"
                name="RJ Nitin"
                title="Emotional Well-Being & Mindset"
                contentBG="bg-[linear-gradient(180deg,#1A4E5E_0%,#171717_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/sonal.png"
                date="15"
                month="JULY"
                name="Sonal Kaushal"
                title="Creative Communication & Expression"
                contentBG="bg-[linear-gradient(180deg,#A92E0C_0%,#240800_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/ayushman.png"
                date="22"
                month="JULY"
                name="Ayushman Pandita"
                title="Exploring Artificial Intelligence"
                contentBG="bg-[linear-gradient(180deg,#B86212_0%,#522C08_100%)]"
                infoContent="max-w-[220px]"
              />
              <CreateCard
                image="/images/creators/malvika.png"
                date="22"
                month="JULY"
                name="Malvika Vishwakarma"
                title="Personality Development & Styling"
                contentBG="bg-[linear-gradient(180deg,#001732_0%,#000F20_100%)]"
                infoContent="max-w-[250px]"
              />
              <div className="col-span-2">
                <FullWidthCreatorCard />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] z-10">
          <div className="bg-[#f8f8f8] p-5 rounded-2xl max-w-162.5 mx-auto">
            <h4 className="text-3xl font-semibold">
              What is KRMU’s Launchpad?
            </h4>
            <p>
              KRMU’s Launchpad is a specially curated pre-enrollment engagement
              programme designed to inspire, empower, and prepare students for
              the journey ahead
            </p>
            <p>
              Through enriching sessions on career readiness, personal growth,
              creator economy trends, networking, motivation, communication, and
              student life skills, KRMU’s Launchpad helps students become
              future-ready before they even begin their academic journey.
            </p>
            <p>
              More than just a series of sessions, it is a platform to learn,
              connect, grow, and step confidently into the future.
            </p>
            <p>It’s your launch into the future</p>
            <p>
              Learn From India’s Biggest Creators Featured Sessions at the
              Launchpad
            </p>
          </div>
          <div className="max-w-162.5 mx-auto flex justify-around">
            <Image src="/images/thread.png" width={46} height={34} alt="Thread" />
            <Image src="/images/thread.png" width={46} height={34} alt="Thread" />
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-2xl max-w-162.5 mx-auto">
            <h4 className="text-3xl font-semibold">
              Why Attend KRMU’s Launchpad?
            </h4>
            <p>
              Because your university journey should begin with inspiration and
              preparation.
            </p>
            <p>
              <strong>
                At KRMU's Launchpad, students get the opportunity to:
              </strong>
            </p>
            <ul className="pl-5 space-y-2.5">
              <li className="flex items-center gap-2.5">
                <CircleArrowRight />{" "}
                <span>
                  Engage in inspiring sessions with creators, mentors, and
                  industry experts
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CircleArrowRight />{" "}
                <span>
                  Develop essential life skills and future-ready perspectives
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CircleArrowRight />{" "}
                <span>
                  Build confidence for their academic and personal journey
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CircleArrowRight />{" "}
                <span>
                  Connect with fellow students before stepping onto campus
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CircleArrowRight />{" "}
                <span>
                  Experience the spirit of growth, learning, and community from
                  Day One
                </span>
              </li>
            </ul>
            <p>
              KRMU’s Launchpad is designed to help students begin their
              university journey with confidence, clarity, and motivation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiggestCreator;
