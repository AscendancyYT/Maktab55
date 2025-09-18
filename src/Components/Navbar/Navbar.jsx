import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1 className="logo">55-Maktab Hayoti</h1>
      <ul className="navigation">
        <li><a className="nav-link" href="#">Biz Haqimizda</a></li>
        <li><a className="nav-link" href="#">Maktabimiz G'ururi</a></li>
        <li><a className="nav-link" href="#">Kontaktlar</a></li>
        <li><a className="nav-link" href="#">Jurnal</a></li>
      </ul>
      <button className="login-btn">Kirish</button>
    </div>
  )
}
