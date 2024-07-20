import React from "react";
// import сюда надо scss подключить, как понял main надо

const Header = () => {
  return (
    <div className="header">
      <div>logo</div>
      <div>
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
