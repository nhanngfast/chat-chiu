import "./InternationalCertificates.css";
import international_certificates from "../../assets/images/international-certificates/international-certificates-banner.webp";

const InternationalCertificates = () => {
  return (
    <section className="international-certificates-container">
      <img src={international_certificates} alt="international_certificates" />
      <div className="international-certificates__desc">
        <div className="certificates-desc__upper">
          <h3>Tinh túy từ Thiên nhiên Dưỡng da Thuần Việt</h3>
          <p>
            Chắt Chiu ra đời từ sự trân quý thiên nhiên và sự cần mẫn của người
            nông dân Việt Nam. Mỗi sản phẩm là sự chắt lọc từ những vùng nguyên
            liệu sạch, không hóa chất độc hại. Với chứng nhận Vegan và định
            hướng <strong>tiêu chuẩn EWG,</strong> Chắt Chiu cam kết mang đến mỹ
            phẩm thuần khiết, không thử nghiệm trên động vật, an toàn cho làn da
            và thân thiện với môi trường
          </p>
          <div className="certificates-upper__images">
            <div className="upper-images__desc">
              <img
                src="https://www.chatchiuvietnam.com/wp-content/uploads/2025/04/Group.svg"
                alt="no-alcohol"
              />
              <p>Không cồn</p>
            </div>
            <div className="upper-images__desc">
              <img
                src="https://www.chatchiuvietnam.com/wp-content/uploads/2025/04/Frame-2.svg"
                alt="no-sulfate"
              />
              <p>Không Sulfate</p>
            </div>

            <div className="upper-images__desc">
              <img
                src="https://www.chatchiuvietnam.com/wp-content/uploads/2025/04/Frame-1.svg"
                alt="no-minerals"
              />
              <p>Không dầu khoáng</p>
            </div>

            <div className="upper-images__desc">
              <img
                src="https://www.chatchiuvietnam.com/wp-content/uploads/2025/04/Frame-3.svg"
                alt="no-paraben"
              />
              <p>Không Paraben</p>
            </div>

            <div className="upper-images__desc">
              <img
                src="https://www.chatchiuvietnam.com/wp-content/uploads/2025/04/Frame-2.svg"
                alt="no-silicone"
              />
              <p>Không Silicone</p>
            </div>
          </div>
        </div>
        <div className="certificates-desc__bottom">
          <h3>Chứng nhận Quốc tế</h3>
          <div className="desc-bottom__vegan">
            <img
              src="https://www.chatchiuvietnam.com/wp-content/uploads/2025/04/VeganTM-Palette1-LeafyGreen-removebg-preview-1-1.png.webp"
              alt="the-vegan-society"
            />
            <div className="vegan-cert__desc">
              <h4>The Vegan Society</h4>
              <p>
                Hiệp hội thành lập năm 1944 tại Anh, thúc đẩy và hỗ trợ lối sống
                thuần chay toàn cầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCertificates;
