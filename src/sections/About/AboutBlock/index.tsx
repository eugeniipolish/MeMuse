import classNames from "classnames";
import React, { FC } from "react";
import style from "./AboutBlock.module.scss";

interface AboutBlockProps {
  alt: string;
  direction: string;
  src: string;
  text: string;
}

export const AboutBlock: FC<AboutBlockProps> = ({
  alt,
  direction,
  src,
  text,
}) => {
  return (
    <div
      className={classNames({
        [style.wrapper]: true,
        [style.row]: direction === "row",
        [style.reverse]: direction === "row-reverse",
      })}
    >
      <p className={classNames("body1", style.text)}>{text}</p>
      <img className={style.img} src={src} alt={alt} />
    </div>
  );
};
