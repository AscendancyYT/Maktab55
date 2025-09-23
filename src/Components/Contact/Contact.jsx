import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_IDS;
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const text = `
📩 Yangi xabar!
👤 Ism: ${name}
📱 Telefon Raqam: ${number}
💬 Xabar: ${message}
    `;

    try {
      const res = await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (res.ok) {
        setStatus("Xabar yuborildi ✅");
        setName("");
        setNumber("");
        setMessage("");
      } else {
        setStatus("Xatolik yuz berdi ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Tarmoq xatosi ❌");
    }
  };

  return (
    <div className="contact" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Kontakt</h2>
        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Telefon Raqamingiz"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <textarea
          placeholder="Xabaringiz"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Yuborish</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}
