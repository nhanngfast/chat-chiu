import HomeButton from "../common/home-btn/HomeButton";
import "./HeroBanner.css";
import banner_img from "../../assets/images/home-hero-banner.webp";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <img
        src={banner_img}
        alt="banner_img"
        width="100%"
        height="200px"
        className="hero-banner__img"
      />
      <div className="hero-banner__content">
        <h1>Chắt Chiu - Trân quý giọt tinh túy từ Nông sản Việt</h1>
        <p className="hero-banner-container__desc">
          Tại Chắt Chiu, chúng tôi tin rằng làn da đẹp không chỉ đến từ việc
          chăm sóc bề ngoài mà còn từ sự nâng niu, trân trọng từng khoảnh khắc.
        </p>
        <HomeButton buttonContent="Xem thêm" />
      </div>
    </div>
  );
};

export default HeroBanner;
