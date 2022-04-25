import React, { FC } from "react";
import style from "./Adviser.module.scss";

interface AdviserProps {
  alt: string;
  name: string;
  src: string;
  surname: string;
}

export const Adviser: FC<AdviserProps> = ({ alt, src, name, surname }) => {
  return (
    <div className={style.adviser}>
      <img className={style.img} src={src} alt={alt} />
      <h3 className={style.name}>{name}</h3>
      <h3 className={style.name}>{surname}</h3>
    </div>
  );
};
