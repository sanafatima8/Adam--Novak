import AboutMe from "../AboutMe";
import Adam from "../Adam";
import AudioSection from "../AudioSection";
import Excerpts from "../Excerpts";
import Footer from "../Footer";
import FountainSection from "../FountainSection";
import HeroSection from "../HeroSection";
import IndustrySection from "../IndustrySection";
import Podcast from "../Podcast";
import Shirt from "../Shirt";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <FountainSection />
      <IndustrySection/>
      <AudioSection/>
      <Excerpts/>
      <Podcast/>
      <Shirt />
      <Adam />     
    </>
  );
}
