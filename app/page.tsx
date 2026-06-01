import Hero from "./components/Hero";
import Explore from "./components/Explore";
import GetReady from "./components/GetReady";
import YourJourney from "./components/YourJourney";
import BiggestCreator from "./components/BiggestCreator";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <GetReady />
      <YourJourney />
      {/* 
      <BiggestCreator />
       */}
    </>
  );
}
