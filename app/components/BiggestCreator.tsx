import { CircleArrowRight } from "lucide-react";
import CreateCard from "./CreateCard";

const BiggestCreator = () => {
  return (
    <section className="py-12.5">
      <div className="max-w-416 mx-auto flex gap-10">
        <div className="w-1/2">
          <h4 className="text-4xl text-center">
            Learn From India’s Biggest Creators
          </h4>
          <p className="text-center">Featured Sessions at the Launchpad</p>
        <div className="h-225 overflow-y-auto pr-3 scrollbar-none px-20">
              <div className="grid grid-cols-2 gap-5">
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
            <CreateCard
              image="/images/ankur.png"
              date="09"
              month="JUNE"
              name="Ankur Warikoo"
              title="Professional Branding & Networking"
              contentBG="bg-[#332f30]"
            />
          </div>
        </div>
        </div>
        <div className="w-1/2">
          <div className="bg-[#f8f8f8] p-5 rounded-2xl mb-5">
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
          <div className="bg-[#f8f8f8] p-5 rounded-2xl mb-5">
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
