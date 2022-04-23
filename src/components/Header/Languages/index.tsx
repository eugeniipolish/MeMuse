import React from "react";
import style from "./Languages.module.scss";

const languages = ["EN", "KR", "CH"];

export const Languages = () => {
  return (
    <ul className="flex-wrapper">
      {languages.map((language) => (
        <li className={style.language} key={language}>
          <button className="btn_without_styles" type="button">
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
};
