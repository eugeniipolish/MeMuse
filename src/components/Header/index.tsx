import React from "react";
import style from "./Header.module.scss";
import { Languages } from "./Languages";
import { Menu } from "./Menu";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className="flex-wrapper">
          <img className="logo" src="/logo.svg" alt="logo" />
          <Menu />
          <Socials />
          <Languages />
        </div>
      </div>
    </header>
  );
};
