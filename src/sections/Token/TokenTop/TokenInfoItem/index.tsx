import React, { FC } from "react";
import style from "./TokenInfoItem.module.scss";

interface TokenInfoItemProps {
  alt: string;
  header: string;
  src: string;
  text: string;
}

export const TokenInfoItem: FC<TokenInfoItemProps> = ({
  alt,
  header,
  src,
  text,
}) => {
  return (
    <div className={style.item}>
      <img className={style.img} src={src} alt={alt} />
      <div className={style.item_right}>
        <h3 className={style.header}>{header}</h3>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};
