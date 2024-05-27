import * as styles from "./HomeImage.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import MainImage1 from "@assets/images/common/MainImage1.svg";
import MainImage2 from "@assets/images/common/MainImage2.svg";

const HomeImage = () => {
  return (
    <styles.ImageContainer>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1500}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MainImage1 />
        </SwiperSlide>
        <SwiperSlide>
          <MainImage2 />
        </SwiperSlide>
      </Swiper>
    </styles.ImageContainer>
  );
};

export default HomeImage;
