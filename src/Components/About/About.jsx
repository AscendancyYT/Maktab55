import React from 'react'

import "./About.css"

export default function About() {
  return (
    <div className='about'>
      <h1 className="title">Biz Haqimizda!</h1>
      <p className="description">55-maktab jamoasi har doim bilim olishga intiladi. O'quvchilarimiz yangi fanlarni o'rganish, yangi ko'nikmalarni rivojlantirish va o'z salohiyatlarini to'liq ochish uchun barcha imkoniyatlardan foydalanadilar. Bilim olish – bu eng katta boylikdir!</p>
      <div className="buttons">
        <button className="btn">Batafsil</button>
        <button className="btn">Bog'lanish</button>
      </div>
    </div>
  )
}
