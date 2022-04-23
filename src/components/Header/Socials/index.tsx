import React from "react";
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

export const Socials = () => {
  return (
    <ul className="flex-wrapper">
      {socials.map(({ link, src, alt }) => (
        <li className={style.social} key={link}>
          <a
            className={style.social_link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.social_img} src={src} alt={alt} />
          </a>
        </li>
      ))}
    </ul>
  );
};
