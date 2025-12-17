import HeroBanner from "../../components/hero-banner/HeroBanner";
import ScrollingText from "../../components/scrolling-text/ScrollingText";
import "./Home.css";

const Home = () => {
  return <div className="home-container">
    <HeroBanner />
    <ScrollingText />
  </div>;
};

export default Home;
