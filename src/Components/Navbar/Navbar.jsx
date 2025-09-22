import React from 'react'
import './Navbar.css'
import About from '../About/About'
import { Link } from 'react-router'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1 className="logo">55-Maktab Hayoti</h1>
      <ul className="navigation">
        <li><HashLink to="#about" smooth className='nav-link'>Biz Haqimizda</HashLink></li>
        <li><a className="nav-link" href="#">Maktabimiz G'ururi</a></li>
        <li><a className="nav-link" href="#">Kontaktlar</a></li>
        <li><a className="nav-link" href="#">Jurnal</a></li>
      </ul>
      <button className="login-btn">Kirish</button>
    </div>
  )
}
