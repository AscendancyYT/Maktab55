import './Navbar.css'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1 className="logo">55-Maktab Hayoti</h1>
      <ul className="navigation">
        <li><HashLink to="#about" smooth className='nav-link'>Biz Haqimizda</HashLink></li>
        <li><HashLink to="#pride" smooth className='nav-link'>Maktabimiz G'ururi</HashLink></li>
        <li><HashLink className="nav-link" to="#contact" smooth>Kontaktlar</HashLink></li>
        <li><a className="nav-link" href="#">Jurnal</a></li>
      </ul>
      <button className="login-btn">Kirish</button>
    </div>
  )
}
