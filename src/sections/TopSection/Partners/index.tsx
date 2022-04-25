import React, { FC } from "react";
import style from "./Partners.module.scss";

const partnersImages = [
  { src: "/Landing-page/top-section/partners/yg-plus.svg", alt: "yg-plus" },
  { src: "/Landing-page/top-section/partners/weblock.svg", alt: "weblock" },
  {
    src: "/Landing-page/top-section/partners/crypto-differ.svg",
    alt: "crypto-differ",
  },
  {
    src: "/Landing-page/top-section/partners/vision-game.png",
    alt: "vision-game",
  },
  {
    src: "/Landing-page/top-section/partners/pixel-verse.svg",
    alt: "pixel-verse",
  },
];

export const Partners: FC = () => {
  return (
    <div className={style.partners}>
      <div className="flex-wrapper">
        <p className={style.text}>In partnership with</p>
        {partnersImages.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};
