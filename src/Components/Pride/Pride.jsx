import React from 'react'
import './Pride.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay } from 'swiper/modules'

export default function Pride() {
  const prideMembers = [
    {
      photo: "https://i.postimg.cc/ry08jz7W/tigr.jpg",
      name: "Azizbek Eshimov",
      reason: "Maktab Media Sardori, Olimpiada g'olibi, Fanlar bo'yicha chempion, IELTS Sertifikat egasi.",
      contact: "mailto:thedroxmc@gmail.com"
    },
    {
      photo: "https://i.postimg.cc/8CMRL1NV/0e27017e-189d-4148-8987-3a33d7e9ec04-removalai-preview.jpg",
      name: "Xasan Tursunov",
      reason: "Ingliz tili bo‘yicha xalqaro sertifikat egasi. ",
      contact: "mailto:dilnoza@example.com"
    },
    {
      photo: "https://i.postimg.cc/5yN8cLvx/portrait-muscular-handsome-bodybuilder-sportsw-ear-standing-with-crossed-arms-studio-isolated-gray-ba.jpg",
      name: "Sardor Rustamov",
      reason: "Sportda yutuqlari bilan maktabimiz sha'nini himoya qilmoqda.",
      contact: "mailto:sardor@example.com"
    },
    {
      photo: "https://i.postimg.cc/D0MJtDng/2147848634.jpg",
      name: "Madina Karimova",
      reason: "Matematika fanidan respublika olimpiadasi g‘olibasi.",
      contact: "mailto:madina@example.com"
    },
    {
      photo: "https://i.postimg.cc/wjK3LDv7/young-kid-playing-chess.jpg",
      name: "Javohir Abdurahmonov",
      reason: "Shaxmat bo‘yicha xalqaro musobaqalar g‘olibi.",
      contact: "mailto:javohir@example.com"
    },
  ]

  return (
    <div className='pride' id='pride'>
      <h1 className="title">Maktabimiz G'ururi!</h1>
      <p className="description">Bizning maktabimiz faxrlari bilan tanishing:</p>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={"3"}
        spaceBetween={30}
        loop={true}
        freeMode={true} 
        allowTouchMove={false} 
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
        speed={3500} 
        className="prideSwiper"
      >
        {prideMembers.map((member, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
            <div className="pride-card">
              <img src={member.photo} alt={member.name} className="pride-photo" />
              <h2 className="pride-name">{member.name}</h2>
              <p className="pride-reason">{member.reason}</p>
              <a href={member.contact} className="contact-btn">Kontakt</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
