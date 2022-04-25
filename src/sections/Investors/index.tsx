import React, { FC } from "react";
import style from "./Investors.module.scss";

const investors = [
  {
    src: "/Landing-page/investors/outlier-ventures.svg",
    alt: "outlier-ventures",
  },
  {
    src: "/Landing-page/investors/protocol-labs.svg",
    alt: "protocol-labs",
  },
  {
    src: "/Landing-page/investors/zbs-capital.svg",
    alt: "zbs-capital",
  },
  {
    src: "/Landing-page/investors/exnetwork-capital.svg",
    alt: "exnetwork-capital",
  },
  {
    src: "/Landing-page/investors/labs-group.svg",
    alt: "labs-group",
  },
  {
    src: "/Landing-page/investors/bitwell-exchange.svg",
    alt: "bitwell-exchange",
  },
  {
    src: "/Landing-page/investors/we-block.svg",
    alt: "we-block",
  },
  {
    src: "/Landing-page/investors/china-polka.svg",
    alt: "china-polka",
  },
  {
    src: "/Landing-page/investors/big-brain-holdings.svg",
    alt: "big-brain-holdings",
  },
  {
    src: "/Landing-page/investors/7-oclock-capital.svg",
    alt: "7-oclock-capital",
  },
  {
    src: "/Landing-page/investors/whitelist-ventures.svg",
    alt: "whitelist-ventures",
  },
  {
    src: "/Landing-page/investors/vesperine-capital.svg",
    alt: "vesperine-capital",
  },
  {
    src: "/Landing-page/investors/hash-verse.svg",
    alt: "hash-verse",
  },
  {
    src: "/Landing-page/investors/hafen-ventures.svg",
    alt: "hafen-ventures",
  },
  {
    src: "/Landing-page/investors/pack-capital.svg",
    alt: "pack-capital",
  },
];

export const Investors: FC = () => {
  return (
    <section className={style.investors}>
      <div className="container">
        <div className={style.table}>
          <h3 className={style.header}>Our Investors</h3>
          <div className={style.companies}>
            {investors.map(({ alt, src }) => (
              <img key={src} className={style.img} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
