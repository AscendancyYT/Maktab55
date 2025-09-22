import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Header.css";
import SlideOneImage from "/header-slider-one.png";
import SlideTwoImage from "/header-slider-two.png";
import SlideThreeImage from "/header-slider-three.png";

export default function Header() {
  return (
    <div className="header">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="header-swiper"
      >
        <SwiperSlide className="header-slide-1">
          <div className="left">
            <img src={SlideOneImage} alt="" />
          </div>
          <div className="right">
            <h1 className="title">Yangi o'quv yili muborak!</h1>
            <p className="description">
              55-maktab jamoasi joriy yil 2-sentabr kuni boshlanadigan yangi
              o'quv yilini barcha o'quvchilar, ota-onalar va o'qituvchilar bilan
              birga nishonlaydi. Yangi bilimlar, yangi do'stlar va yangi
              yutuqlar bilan to'la bo'lishini tilaymiz!
            </p>
            <button className="more-btn">Batafsil</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="left">
            <img src={SlideTwoImage} alt="" />
          </div>
          <div className="right">
            <h1 className="title">Yutuqlarimiz bilan faxrlanamiz!</h1>
            <p className="description">
              55-maktab jamoasi joriy yil davomida ko'plab yutuqlarga erishdi.
              O'quvchilarimiz turli fan olimpiadalarida g'olib bo'lib, sport
              musobaqalarida yuqori natijalarni qo'lga kiritishdi. Barcha
              o'qituvchilarimiz va ota-onalarimizga minnatdorchilik
              bildiramiz!
            </p>
            <button className="more-btn">Batafsil</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="left">
            <img src={SlideThreeImage} alt="" />
          </div>
          <div className="right">
            <h1 className="title">Bilim – eng katta boylik!</h1>
            <p className="description">
              55-maktab jamoasi har doim bilim olishga intiladi. O'quvchilarimiz
              yangi fanlarni o'rganish, yangi ko'nikmalarni rivojlantirish va
              o'z salohiyatlarini to'liq ochish uchun barcha imkoniyatlardan
              foydalanadilar. Bilim olish – bu eng katta boylikdir!
            </p>
            <button className="more-btn">Batafsil</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
