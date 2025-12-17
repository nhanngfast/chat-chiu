import "./SubBanner.css";
import frame_1 from "../../assets/images/sub-banner/frame-1.webp";
import frame_2 from "../../assets/images/sub-banner/frame-2.webp";
import frame_3 from "../../assets/images/sub-banner/frame-3.webp";
import frame_4 from "../../assets/images/sub-banner/frame-4.webp";

const SubBanner = () => {
  return (
    <div className="sub-banner-container">
      <h1 className="sub-banner__top-title">Vẻ đẹp</h1>
      <div className="sub-banner__img">
        <img src={frame_1} alt="frame_1" className="frame frame-1" />
        <img src={frame_2} alt="frame_2" className="frame frame-2" />
        <img src={frame_3} alt="frame_3" className="frame frame-3" />
        <img src={frame_4} alt="frame_4" className="frame frame-4" />
      </div>
      <div className="sub-banner__modal">
        <p className="banner-modal__desc">
          Cùng Chắt Chiu đồng hành trên hành trình gìn giữ vẻ đẹp nguyên bản –
          nâng niu làn da theo cách tự nhiên nhất.
        </p>
        <button className="banner-modal__button">TÌM HIỂU THÊM</button>
      </div>
      <h1 className="sub-banner__bottom-title">Nguyên bản</h1>
    </div>
  );
};

export default SubBanner;
