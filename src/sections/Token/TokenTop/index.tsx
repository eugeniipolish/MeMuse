import classNames from "classnames";
import React, { FC } from "react";
import { TokenInfoItem } from "./TokenInfoItem";
import style from "./TokenTop.module.scss";

const content = [
  {
    header: `Governance`,
    text: `Using MeMusic tokens, users are able to participate in community governance. 
    MeMusic aims for a maximized community involvement within the platform. 
    Users can vote for the next cohort of MeMusicians, NFT airdrop, and more using the MeMusic token.`,
    src: "/Landing-page/token/frame_202.svg",
    alt: "Menu icon",
  },
  {
    header: `Streaming & Mining `,
    text: `Using MeMusic's streaming application, users can mine MeMusic tokens without special plugin or hardware. 
    By simply listening to music, users are able to mine for MeMusic tokens on any device.`,
    src: "/Landing-page/token/frame_203.svg",
    alt: "Menu icon",
  },
  {
    header: `Artist Tokens`,
    text: `On MeMusic, artists can tokenize their assets using artist tokens. From exclusive merchandise to 
    special music editions, artists can leverage the services provided by the platform to increase their revenue stream.`,
    src: "/Landing-page/token/frame_204.svg",
    alt: "Menu icon",
  },
  {
    header: `Commerce`,
    text: `On MeMusic, artists can tokenize their assets using artist tokens. From exclusive merchandise to special music
     editions, artists can leverage the services provided by the platform to increase their revenue stream.`,
    src: "/Landing-page/token/frame_205.svg",
    alt: "Menu icon",
  },
];

export const TokenTop: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <h2 className={style.section_header}>Token</h2>
        <div className={classNames("body1", style.section_text)}>
          MeMusic token powers the tokenized platform through various utilities.
        </div>
        <div className={classNames("body1", style.section_text)}>
          From minting creator tokens to purchasing NFTs, MeMu
        </div>
        <div className={style.table}>
          {content.map(({ alt, header, src, text }) => (
            <TokenInfoItem
              key={src}
              alt={alt}
              header={header}
              src={src}
              text={text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
