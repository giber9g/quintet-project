import React from "react";
import logo_header from "../img/header/logo_header.png";
import phone_menu_img from "../img/header/header_phone_menu.jpg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="phone_menu_img" src={phone_menu_img} alt="Фон меню" />

        <img className="logo_header" src={logo_header} alt="Логотип Quintet" />
      </div>
      <div className="main_ul_header">
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
      </div>
      <div>
        <p>+7(927)450-11-21</p>
      </div>
      <div>
        <button>Связь</button>
      </div>
    </div>
  );
};
export default Header;
