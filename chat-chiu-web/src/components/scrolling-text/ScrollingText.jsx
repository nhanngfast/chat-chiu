import "./ScrollingText.css";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <div className="scrolling-text-container">
      <Marquee speed={100} gradient={false}>
        <h1>Mỹ phẩm sạch từ Nông sản Việt!</h1>
        <h1>Mỹ phẩm sạch từ Nông sản Việt!</h1>
      </Marquee>
    </div>
  );
};

export default ScrollingText;
