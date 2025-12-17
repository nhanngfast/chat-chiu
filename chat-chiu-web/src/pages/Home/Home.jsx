import HeroBanner from "../../components/hero-banner/HeroBanner";
import ScrollingText from "../../components/scrolling-text/ScrollingText";
import SubBanner from "../../components/sub-banner/SubBanner";
import "./Home.css";

const Home = () => {
  return <div className="home-container">
    <HeroBanner />
    <ScrollingText />
    <SubBanner />
  </div>;
};

export default Home;
