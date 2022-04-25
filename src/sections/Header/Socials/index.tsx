import React, { FC } from "react";
import { PictureLink } from "../../../components/PictureLink";
import style from "./Socials.module.scss";

const socials = [
  {
    link: "https://twitter.com/memusic_news",
    src: "/Landing-page/socials/twitter.svg",
    alt: "twitter",
  },
  {
    link: "https://t.me/memusic_official",
    src: "/Landing-page/socials/telegram.svg",
    alt: "telegram",
  },
  {
    link: "https://www.linkedin.com/company/memusic/",
    src: "/Landing-page/socials/linkedIn.svg",
    alt: "linkedIn",
  },
];

export const Socials: FC = () => {
  return (
    <ul className="flex-wrapper">
      {socials.map(({ link, src, alt }) => (
        <li className={style.social} key={link}>
          <PictureLink
            alt={alt}
            link={link}
            src={src}
            cName={{ link: style.social_link, img: style.img }}
          />
        </li>
      ))}
    </ul>
  );
};
