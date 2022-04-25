import classNames from "classnames";
import React, { FC } from "react";
import style from "./PictureLink.module.scss";

interface ClassName {
  link?: string;
  img?: string;
}

interface PictureLinkProps {
  alt: string;
  link: string;
  src: string;
  cName?: ClassName | null;
}

export const PictureLink: FC<PictureLinkProps> = ({
  alt,
  link,
  src,
  cName,
}) => {
  return (
    <a
      className={classNames(style.link, {
        [cName?.link as string]: cName?.link,
      })}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={classNames(style.img, {
          [cName?.img as string]: cName?.img,
        })}
        src={src}
        alt={alt}
      />
    </a>
  );
};

PictureLink.defaultProps = {
  cName: null,
};
