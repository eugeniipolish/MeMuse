import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

const menuItems = [
  { label: "About", link: "/" },
  { label: "Features", link: "/" },
  { label: "Token", link: "/" },
  { label: "Team", link: "/" },
  { label: "Blog", link: "/" },
];

export const Menu = () => {
  return (
    <nav>
      <ul className="flex-wrapper">
        {menuItems.map((menuItem) => (
          <li className={style.list_item} key={menuItem.label}>
            <Link className={style.link} to={menuItem.link}>
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
