import classNames from "classnames";
import React, { FC } from "react";
import style from "./NFTSection.module.scss";

export const NFTSection: FC = () => {
  return (
    <section className={style.NFT}>
      <div className={classNames("container", style.wrapper)}>
        <div className={style.title_section}>
          <img
            className={style.NTF_img}
            src="/Landing-page/NFT/NFT.png"
            alt="NFT"
          />
          <h2>
            MeMusic enables music as an investment class through using NFTs
          </h2>
        </div>
        <img
          className={style.img}
          src="/Landing-page/table/NFT-table.png"
          alt="NFT-table"
        />
      </div>
    </section>
  );
};
