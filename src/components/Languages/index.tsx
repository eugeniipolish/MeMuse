import React, { FC } from "react";
import { Language } from "./Language";

const languages = ["EN", "KR", "CH"];

export const Languages: FC = () => {
  return (
    <ul className="flex-wrapper">
      {languages.map((language) => (
        <Language key={language} language={language} />
      ))}
    </ul>
  );
};
