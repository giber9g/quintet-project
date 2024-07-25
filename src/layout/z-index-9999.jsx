import React from "react";
import line_main_section from "../img/main_section/line.jpg";
import blure_1 from "../img/header/blure_1.jpg";

const Z_index = () => {
  return (
    <div className="z_index">
      <div className="line_main_section_1">
        <img src={line_main_section} alt="smoke" />
      </div>
      <div className="line_main_section_2">
        <img src={line_main_section} alt="smoke" />
      </div>
      <div className="blure_1">
        <img src={blure_1} alt="blure" />
      </div>
    </div>
  );
};
export default Z_index;
