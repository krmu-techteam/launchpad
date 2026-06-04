import Hero from "./components/Hero";
import Explore from "./components/Explore";
import BiggestCreator from "./components/BiggestCreator";
import ExploreExperience from "./components/ExploreExperience";
import WhatIsLaunchpad from "./components/WhatIsLaunchpad";
import GetReady from "./components/GetReady";
import YourJourney from "./components/YourJourney";
import WhyAttend from "./components/WhyAttend";


export default function Home() {
  return (
    <>
      {/* 
      */}
      <Hero />
      {/* <WhatIsLaunchpad />  */}
      <Explore />
      <ExploreExperience />
      <BiggestCreator />
      <WhyAttend />
      <GetReady />
      <YourJourney /> 
    </>
  );
}
