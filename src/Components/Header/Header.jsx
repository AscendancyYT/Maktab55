import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import "./Header.css";
import SlideOneImage from "/header-slide-one.png"

export default function Header() {
  return (
    <div className="header">
      <Swiper pagination={true} modules={[Pagination]} className="header-swiper">
        <SwiperSlide className="header-slide-1">
          <div className="left">
            <img src={SlideOneImage} alt="" />
          </div>
          <div className="right">
            <h1 className="title">Yangi o'quv yili muborak!</h1>
            <p className="description">55-maktab jamoasi joriy yil 2-sentabr kuni boshlanadigan yangi o'quv yilini barcha o'quvchilar, ota-onalar va o'qituvchilar bilan birga nishonlaydi. Yangi bilimlar, yangi do'stlar va yangi yutuqlar bilan to'la bo'lishini tilaymiz!</p>
            <button className="more-btn">Batafsil</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
