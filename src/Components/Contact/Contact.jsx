import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <form className="contact-form">
        <h2>Kontakt</h2>
        <input type="text" placeholder="Ismingiz" required />
        <input type="email" placeholder="Elektron Pochtangiz" required />
        <textarea placeholder="Xabaringiz" required></textarea>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  )
}
