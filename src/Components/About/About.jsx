import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const token = import.meta.env.VITE_TELEGRAM_TOKEN;
  const chatIds = import.meta.env.VITE_TELEGRAM_CHAT_IDS
    ? import.meta.env.VITE_TELEGRAM_CHAT_IDS.split(",")
    : [];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const text = `📩 Yangi Xabar!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}`;

    try {
      for (const chatId of chatIds) {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId.trim(), text }),
        });
      }

      alert("Xabar yuborildi ✅");
      setFormData({ name: "", phone: "", message: "" });
      closeModal();
    } catch (error) {
      alert("Xabar yuborilmadi ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="about">
      <h1 className="title">Biz Haqimizda!</h1>
      <p className="description">
        55-maktab jamoasi har doim bilim olishga intiladi. O'quvchilarimiz yangi
        fanlarni o'rganish, yangi ko'nikmalarni rivojlantirish va o'z
        salohiyatlarini to'liq ochish uchun barcha imkoniyatlardan
        foydalanadilar. Bilim olish – bu eng katta boylikdir!
      </p>
      <div className="buttons">
        <button className="btn">Batafsil</button>
        <button className="btn" onClick={openModal}>
          Bog'lanish
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.form
              className="modal-form"
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSubmit}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="modal-title">Bog'lanish</h2>
              <input
                type="text"
                name="name"
                placeholder="Ismingiz"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefon raqamingiz"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Xabaringiz"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
