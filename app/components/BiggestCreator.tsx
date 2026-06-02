import { CircleArrowRight } from "lucide-react";
import CreateCard from "./CreateCard";
import FullWidthCreatorCard from "./FullWidthCreatorCard";
import Image from "next/image";

const BiggestCreator = () => {
  return (
    <section className="py-10 sm:py-12.5 px-4">
      <div className="max-w-416 mx-auto flex flex-col lg:flex-row gap-5 xl:gap-10 2xl:gap-0 relative overflow-hidden font-poppins">
        <div className="absolute">
          <Image
            src="/images/creator-bg.webp"
            width={1210}
            height={1210}
            alt=""
          />
        </div>
        <div className="w-full lg:w-[60%] relative overflow-hidden z-10 ">
          <h4 className="text-2xl sm:text-4xl text-center font-domine">
            Learn From India’s Biggest Creators
          </h4>
          <p className="text-center">Featured Sessions at the Launchpad</p>
          <div className="h-150 lg:h-300 xl:h-258.75 2xl:h-225 overflow-y-auto scrollbar-none">
            <div className="flex flex-col sm:grid grid-cols-2 gap-5 max-w-3xl mx-auto">
              <CreateCard
                image="/images/creators/ankur.png"
                date="09"
                month="JUNE"
                name="Ankur Warikoo"
                title="Professional Branding & Networking"
                contentBG="bg-[linear-gradient(180deg,#4C4648_0%,#060606_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#4f484a]/40"
                creatorInfo={`Build a strong professional presence even before your first semester begins. Learn how to create an impactful LinkedIn profile that showcases your skills, achievements, and aspirations while helping you build meaningful connections and future career opportunities from day one.`}
              />
             {/* <CreateCard
                image="/images/creators/rj-naved.png"
                date="18"
                month="JUNE"
                name="Aparshakti Khurana"
                title="Life lessons & power of perseverance"
                contentBG="bg-[linear-gradient(180deg,#005C60_0%,#151515_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#044e51]/50"
                creatorInfo={`A candid conversation on embracing challenges, staying resilient through setbacks, discovering one’s true potential, and navigating the journey from aspirations to achievements. Gain insights into personal growth, self-belief, and the mindset required to turn obstacles into opportunities.`}
              /> */}
              {/* <CreateCard
                image="/images/creators/ashish.png"
                date="12"
                month="JUNE"
                name="Ashish Chanchalani"
                title="Navigating the College Journey"
                contentBG="bg-[linear-gradient(180deg,#864B23_0%,#201208_100%)]"
                infoContent="max-w-[280px]"
                overlayBG="bg-[#74411e]/50"
              /> */}
              <CreateCard
                image="/images/creators/rj-naved.png"
                date="24"
                month="JUNE"
                name="RJ Naved"
                title="Digital Creativity & Personal Branding"
                contentBG="bg-[linear-gradient(180deg,#005C60_0%,#151515_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#044e51]/50"
                creatorInfo={`Discover the power of content creation and social media in building a strong personal brand and unlocking future career opportunities. Learn how creators and digital influencers turn ideas into impact through engaging content that connects, inspires, and influences audiences in today’s digital world.`}
              />
              <CreateCard
                image="/images/creators/sameeksha.png"
                date="01"
                month="JULY"
                name="Sameeksha Sud"
                title="Wellness, Fitness & Balanced Living"
                contentBG="bg-[linear-gradient(180deg,#1F2643_0%,#141414_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#1d233d]/50"
                creatorInfo={`Build healthy habits and a balanced lifestyle that empower you to stay energetic, focused, and confident throughout your university journey. Discover practical strategies for managing stress, maintaining physical wellness, and creating a positive mindset to thrive in today’s fast-paced academic environment.`}
              />
              <CreateCard
                image="/images/creators/rj-nitin.png"
                date="08"
                month="JULY"
                name="Khurafati Nitin"
                title="Emotional Well-Being & Mindset"
                contentBG="bg-[linear-gradient(180deg,#1A4E5E_0%,#171717_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#1a4857]/50"
                creatorInfo={`Learn how to deal with overthinking, social pressure, and the fear of missing out while staying mentally strong. Discover the importance of empathy, emotional resilience, and self-awareness in college life.`}
                
              />
              <CreateCard
                image="/images/creators/sonal.png"
                date="15"
                month="JULY"
                name="Sonal Kaushal"
                title="Creative Communication & Expression"
                contentBG="bg-[linear-gradient(180deg,#A92E0C_0%,#240800_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#852408]/50"
                creatorInfo={`Master the art of storytelling to express ideas with clarity, confidence, and creativity. Learn how effective communication skills can help you leave a lasting impression in every sphere of life.`}
              />
              <CreateCard
                image="/images/creators/ayushman.png"
                date="22"
                month="JULY"
                name="Ayushman Pandita"
                title="Exploring Artificial Intelligence"
                contentBG="bg-[linear-gradient(180deg,#B86212_0%,#522C08_100%)]"
                infoContent="max-w-[220px]"
                overlayBG="bg-[#a65910]/50"
                creatorInfo={`Step into the exciting world of Artificial Intelligence and explore powerful tools that are transforming the way we learn, create, communicate, and work. Discover how AI is reshaping industries, redefining careers, and becoming one of the most valuable future-ready skills for students in the digital age.`}
              />
              <CreateCard
                image="/images/creators/malvika.png"
                date="29"
                month="JULY"
                name="Malvika Vishwakarma"
                title="Personality Development & Styling"
                contentBG="bg-[linear-gradient(180deg,#001732_0%,#000F20_100%)]"
                infoContent="max-w-[280px]"
                overlayBG="bg-[#00142c]/50"
                creatorInfo={`Boost your confidence through self-grooming, styling, and effective first impressions. Learn how personality, appearance, and communication together contribute to personal and professional growth.`}
              />
                <CreateCard
                image="/images/creators/aman.webp"
                date="05"
                month="AUG"
                name="Aman Gupta"
                title="Think Like a Founder: Skills, Mindset & Opportunities for the AI Era"
                contentBG="bg-[radial-gradient(circle_at_center,#FFE98A_0%,#F5D35C_25%,#D89A2B_60%,#B87412_100%)]"
                infoContent=""
                overlayBG="bg-[#dfa939]/60"
                creatorInfo={`A dynamic session on thinking beyond conventional career paths, cultivating a founder's mindset, and preparing for the opportunities of tomorrow. Learn how to adapt to technological disruption, harness the power of AI, build problem-solving skills, and transform ideas into meaningful impact in an increasingly innovation-led world.`}
              />
              {/* <div className="col-span-2">
                <FullWidthCreatorCard />
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] z-10 relative">
          <div className="max-w-162.5 mx-auto flex justify-between bg-white px-5 -mb-2">
            <Image
              src="/images/cloud-4.png"
              alt=""
              width={200}
              height={100}
              className="-mb-1"
            />
            <Image
              src="/images/cloud-4.png"
              alt=""
              width={200}
              height={100}
              className=""
            />
          </div>

          <div className="bg-[#f8f8f8] p-5 rounded-2xl max-w-162.5 mx-auto z-20 relative border-2 border-[#cacaca]">
            <h4 className="text-xl sm:text-3xl font-semibold font-domine mb-5">
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
            <Image
              src="/images/thread.png"
              width={46}
              height={34}
              alt="Thread"
            />
            <Image
              src="/images/thread.png"
              width={46}
              height={34}
              alt="Thread"
            />
          </div>
          <div className="bg-[#f8f8f8] p-5 rounded-2xl max-w-162.5 mx-auto border-2 border-[#cacaca]">
            <h4 className="text-xl sm:text-3xl font-semibold mb-5 font-domine">
              Why Attend KRMU’s Launchpad?
            </h4>
            <p className="mb-2.5">
              Because your university journey should begin with inspiration and
              preparation.
            </p>
            <p className="mb-2.5">
              <strong>
                At KRMU's Launchpad, students get the opportunity to:
              </strong>
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <div>
                  <CircleArrowRight size={22} />{" "}
                </div>
                <span>
                  Engage in inspiring sessions with creators, mentors, and
                  industry experts
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CircleArrowRight size={22} />{" "}
                </div>
                <span>
                  Develop essential life skills and future-ready perspectives
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CircleArrowRight size={22} />{" "}
                </div>
                <span>
                  Build confidence for their academic and personal journey
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CircleArrowRight size={22} />{" "}
                </div>
                <span>
                  Connect with fellow students before stepping onto campus
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CircleArrowRight size={22} />{" "}
                </div>
                <span>
                  Experience the spirit of growth, learning, and community from
                  Day One
                </span>
              </li>
            </ul>
            <p className="mt-2.5">
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
