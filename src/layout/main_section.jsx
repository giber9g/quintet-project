import React from "react";
import img1 from "../img/main_section/img_1.jpg";
import img2 from "../img/main_section/img_2.jpg";
import img3 from "../img/main_section/img_3.jpg";
import img4 from "../img/main_section/img_4.jpg";

const Main_section = () => {
  return (
    <div className="main_section">
      <div>
        <h1>
          Создайте сайт за пару <span>кликов</span>
        </h1>
        <p>
          Мы предложим оригинальный дизайн и продуманную структуру, которые
          помогут вам <span>выделиться среди конкурентов</span> и привлечь
          внимание вашей аудитории!
        </p>
        <button>Создать</button>
      </div>
      <div className="img_main_section">
        <div>
          <img src={img1} alt="img" />
        </div>
        <div>
          <img src={img2} alt="img" />
        </div>
        <div>
          <img src={img3} alt="img" />
        </div>
        <div>
          <img src={img4} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Main_section;
