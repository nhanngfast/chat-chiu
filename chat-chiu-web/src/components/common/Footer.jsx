import "./Footer.css";
import footer_logo from "../../assets/images/homepage-footer-logo.png";
import footer_location from "../../assets/icons/footer-location.svg";
import footer_call from "../../assets/icons/footer-call.svg";
import footer_message from "../../assets/icons/footer-message.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import youtube from "../../assets/icons/youtube.svg";
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import bo_cong_thuong from "../../assets/images/bo-cong-thuong.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__info">
        <div className="info__contact-info">
          <div className="contact-info__logo">
            <img src={footer_logo} alt="home-logo" width="120" height="auto" />
          </div>
          <div className="contact-info__text">
            <div className="text__contact">
              <p>Liên hệ</p>
              <div className="contact-info__info-with-icons">
                <img
                  src={footer_location}
                  alt="contact-icon"
                  className="footer-location"
                />
                <p>
                  4E Cư Xá Đồng Tiến, Phường 14,
                  <br /> Quận 10, TP.HCM
                </p>
              </div>
              <div className="contact-info__info-with-icons">
                <img src={footer_call} alt="contact-icon" />
                <p>0989.166.612</p>
              </div>
              <div className="contact-info__info-with-icons">
                <img src={footer_message} alt="contact-icon" />
                <p>giacongunila@gmail.com</p>
              </div>
            </div>
            <div className="text__info">
              <p>Thông tin</p>
              <Link to={"/"}>Giới thiệu</Link>
              <Link to={"/"}>Sản phẩm</Link>
              <Link to={"/"}>Tin tức</Link>
              <Link to={"/"}>Liên hệ</Link>
            </div>
            <div className="text__order">
              <p>Đặt hàng & Hỗ trợ</p>
              <Link to={"/"}>Hướng dẫn mua hàng</Link>
              <Link to={"/"}>Chính sách bán hàng</Link>
              <Link to={"/"}>Điều khoản bảo mật</Link>
              <Link to={"/"}>Điều kiện chung</Link>
            </div>
          </div>
        </div>
        <div className="info__contact-register">
            <h3>Đăng ký để nhận thêm <br /> thông tin về chúng tôi</h3>
            <form>
                <input type="text" placeholder="Nhập địa chỉ email của bạn"/>
                <button><EastIcon /></button>
            </form>
            <div className="contact-register__social-icons">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={tiktok} alt="tiktok" />
                <img src={youtube} alt="youtube" />
            </div>
            <img src={bo_cong_thuong} alt="bo_cong_thuong" width="151" height="57"/>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Chatchiu@2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
