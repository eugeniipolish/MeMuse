import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Languages } from "../../components/Languages";
import style from "./Header.module.scss";
import { Menu } from "./Menu";
import { Socials } from "./Socials";

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className="flex-wrapper">
          <div className={style.left_side}>
            <Link className={classNames("logo", style.logo)} to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
            <Menu />
          </div>
          <div className={style.right_side}>
            <Socials />
            <Languages />
          </div>
        </div>
      </div>
    </header>
  );
};
