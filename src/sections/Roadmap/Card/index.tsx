import classNames from "classnames";
import React, { FC } from "react";
import style from "./Card.module.scss";

interface CardProps {
  caption: string;
  checked: boolean;
  list: string[];
}

export const Card: FC<CardProps> = ({ caption, list, checked }) => {
  return (
    <div
      className={classNames(style.card, {
        [style.green]: checked,
        [style.blue]: !checked,
      })}
      key={caption}
    >
      <div className={style.wrapper}>
        <p className={style.caption}>{caption}</p>
        {checked && (
          <img src="/Landing-page/icons/dot-checked.svg" alt="checked" />
        )}
      </div>
      <ul className={style.list}>
        {list?.map((item, index) => (
          <li key={index} className={style.content}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
