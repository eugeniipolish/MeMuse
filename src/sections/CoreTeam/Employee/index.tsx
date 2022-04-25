import React, { FC } from "react";
import style from "./Employee.module.scss";

interface Image {
  alt: string;
  src: string;
}

interface EmployeeProps {
  name: string;
  position: string;
  img: Image;
  list: string[];
}

export const Employee: FC<EmployeeProps> = ({ name, position, list, img }) => {
  return (
    <div className={style.employee}>
      <img className={style.employee_img} src={img.src} alt={img.alt} />
      <div className={style.employee_info}>
        <h3 className={style.employee_info_name}>{name}</h3>
        <p className={style.employee_info_position}>{position}</p>
        <ul className={style.list}>
          {list.map((item) => (
            <li key={item} className={style.list_item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
