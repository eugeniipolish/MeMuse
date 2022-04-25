import classNames from "classnames";
import React, { FC } from "react";
import { ThemeButton } from "../../components/ThemeButton";
import { Header } from "../Header";
import { Partners } from "./Partners";
import style from "./TopSection.module.scss";

export const TopSection: FC = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={classNames("container", style.bottom)}>
        <div className={style.box}>
          <div className={style.left_side}>
            <h1 className={style.header}>
              Personalized Music Experience Through MeMusic
            </h1>
            <p className={style.text}>
              Memusic is a blockchain-based platform to provide an inclusive
              ecosystem through a multitude of services
            </p>
            <div className={style.buttons}>
              <div className={style.button_wrapper}>
                <ThemeButton fullWidth>Whitepaper</ThemeButton>
              </div>
              <div className={style.button_wrapper}>
                <ThemeButton variant="secondary" fullWidth>
                  Learn More
                </ThemeButton>
              </div>
            </div>
          </div>
          <div className={style.right_side}>
            <img src="/Landing-page/right-section.png" alt="right-section" />
          </div>
        </div>
        <hr />
        <Partners />
        <hr />
      </div>
    </div>
  );
};
