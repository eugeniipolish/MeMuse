import React, { FC } from "react";
import style from "./About.module.scss";
import { AboutBlock } from "./AboutBlock";

const content = [
  {
    text: `MeMusic provides a multitude of services including streaming, artist
    tokens, NFTs, and more. At the core of our services, user experience
    is the key factor in building the product.`,
    src: "/Landing-page/about/top-section.png",
    alt: "top",
    direction: "row",
  },
  {
    text: ` MeMusic utilizes a multi-chain approach to provide chain-agnostic
    services, and a hybrid data structure utilizing IPFS and CDNs. Our
    applications and services will be cross-compatible on various
    operating systems and platforms.`,
    src: "/Landing-page/about/phones.png",
    alt: "phones",
    direction: "row-reverse",
  },
  {
    text: `Artist tokens allow for artists to tokenize their
    various assets such as album art, limited edition, merchandise, and more.
    Artists can build a tailored, interactive experience with their fans.`,
    src: "/Landing-page/about/bottom-section.png",
    alt: "bottom",
    direction: "row",
  },
];

export const About: FC = () => {
  return (
    <section className={style.about}>
      <div className="container">
        {content.map(({ alt, direction, src, text }) => (
          <AboutBlock
            key={alt + direction}
            alt={alt}
            direction={direction}
            src={src}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};
