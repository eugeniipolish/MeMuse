import React, { FC } from "react";
import { Adviser } from "./Adviser";
import style from "./Advisors.module.scss";

const advisors = [
  {
    name: "Eric",
    surname: "Su",
    src: "/Landing-page/advisors/Eric_Su.png",
    alt: "Eric Su",
  },
  {
    name: "Yuen",
    surname: "Wong",
    src: "/Landing-page/advisors/Yuen_Wong.png",
    alt: "Yuen Wong",
  },
  {
    name: "Cristian",
    surname: "Esposito",
    src: "/Landing-page/advisors/Cristian_Esposito.png",
    alt: "Cristian Esposito",
  },
  {
    name: "Sundeep",
    surname: "Sirpurapu",
    src: "/Landing-page/advisors/Sundeep_Sirpurapu.png",
    alt: "Sundeep Sirpurapu",
  },
  {
    name: "Thuy",
    surname: "Pham",
    src: "/Landing-page/advisors/Thuy_Pham.png",
    alt: "Thuy Pham",
  },
];

export const Advisors: FC = () => {
  return (
    <section className={style.advisors}>
      <div className="container">
        <h2 className={style.header}>Advisors</h2>
        <div className="flex-wrapper">
          {advisors.map(({ alt, src, name, surname }) => (
            <Adviser
              key={name + surname}
              alt={alt}
              name={name}
              src={src}
              surname={surname}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
