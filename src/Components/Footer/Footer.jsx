import React from "react";
import "./Footer.css";
import "boxicons";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="top">
        <h1 className="footer-title">55-Maktab Hayoti</h1>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="left">
          <div className="icons">
            <box-icon
              type="logo"
              name="telegram"
              color="#fff1f1"
              className="telegram-icon icon"
            ></box-icon>
            <box-icon
              name="youtube"
              type="logo"
              color="#fff1f1"
              className="youtube-icon icon"
            ></box-icon>
            <box-icon
              name="facebook-circle"
              type="logo"
              color="#fff1f1"
              className="facebook-icon icon"
            ></box-icon>
          </div>
          <a href="tel:+998333840843" className="phone-number">+998 (33) 384-08-43</a>
          <a href="tel:+" className="phone-number">+998 (33) 384-08-43</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
