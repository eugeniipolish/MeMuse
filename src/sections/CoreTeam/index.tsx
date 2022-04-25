import React, { FC } from "react";
import style from "./CoreTeam.module.scss";
import { Employee } from "./Employee";

const coreTeamInfo = [
  {
    name: "Youngsung Chong",
    position: "CEO",
    list: [
      "CEO of Blockchain Design & Development Firm.",
      "Former consultant to 10+ blockchain companies.",
    ],
    img: {
      src: "/Landing-page/core-team/Youngsung_Chong.png",
      alt: "Youngsung Chong",
    },
  },
  {
    name: "Erica Forster",
    position: "COO",
    list: [
      "20+ years of experience in music industry",
      "Former VP of Collab & DanceOn",
    ],
    img: {
      src: "/Landing-page/core-team/Erica_Forster.png",
      alt: "Erica Forster",
    },
  },
  {
    name: "Andrew Danilov",
    position: "CDO",
    list: [
      "7+ years of experience in Fintech & Blockchain Companies.",
      "Designed the National Bank of Ukraine coin store.",
    ],
    img: {
      src: "/Landing-page/core-team/Andrew_Danilov.png",
      alt: "Andrew Danilov",
    },
  },
  {
    name: "----------",
    position: "Head of Partnerships",
    list: ["-----------------"],
    img: {
      src: "/Landing-page/core-team/none.png",
      alt: "none",
    },
  },
];

export const CoreTeam: FC = () => {
  return (
    <section className={style.core_team}>
      <div className="container">
        <h2 className={style.header}>Core Team</h2>
        <div className={style.team}>
          {coreTeamInfo.map(({ name, position, list, img }) => (
            <Employee
              key={img.src}
              name={name}
              position={position}
              img={img}
              list={list}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
