import React, { FC } from "react";
import style from "./Language.module.scss";

interface LanguageProps {
  language: string;
}

export const Language: FC<LanguageProps> = ({ language }) => {
  return (
    <li className={style.language} key={language}>
      <button className="btn_without_styles" type="button">
        {language}
      </button>
    </li>
  );
};
