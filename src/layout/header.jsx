import React from "react";
import logo_header from "../img/header/logo_header.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo_header" src={logo_header} alt="Логотип Quintet" />
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Цены</a>
            </li>
            <li>
              <a href="#">Портфолио</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="info_header">
        <p className="info_header_time_work">Ежденевно с 10:00 до 22:00</p>
        <p className="info_header_number">+7(927)450-11-21</p>
      </div>
      <div>
        <button>Заполнить анкету</button>
      </div>
    </div>
  );
};
export default Header;
