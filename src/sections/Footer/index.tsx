import classNames from "classnames";
import React, { FC } from "react";
import { Languages } from "../../components/Languages";
import { ThemeButton } from "../../components/ThemeButton";
import style from "./Footer.module.scss";

const list = ["© 2021 MeMusic", "Terms & Conditions", "Privacy policy"];

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={classNames("flex-wrapper", style.top)}>
          <img className={style.img} src="/logo-horizontal.png" alt="logo" />
          <div className={style.buttons}>
            <div className={style.btn_wrapper}>
              <ThemeButton variant="secondary" fullWidth>
                Whitepaper
              </ThemeButton>
            </div>
            <div className={style.btn_wrapper}>
              <ThemeButton variant="secondary" fullWidth>
                Pitch Deck
              </ThemeButton>
            </div>
          </div>
        </div>
        <div className={classNames("flex-wrapper", style.bottom)}>
          <ul className={style.list}>
            {list.map((item) => (
              <li key={item} className={style.item}>
                {item}
              </li>
            ))}
          </ul>
          <Languages />
        </div>
      </div>
    </footer>
  );
};
