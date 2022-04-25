import React, { FC } from "react";
import { Card } from "./Card";
import style from "./Roadmap.module.scss";

const roadmapOptions = [
  {
    caption: "2019",
    list: ["Market research", "Project ideation"],
    checked: true,
  },
  { caption: "2020", list: ["Product research"], checked: true },
  { caption: "Q4. 2020 - Q3. 2021", list: ["UX design"], checked: true },
  {
    caption: `Q4. 2021`,
    list: [
      "UI Design & Development",
      "Outlier Ventures Accelerator",
      "NFT Marketplace Research",
    ],
    checked: true,
  },
  {
    caption: "Q1. 2022",
    list: ["NFT Marketplace", "Alpha Token Fundraiser"],
    checked: false,
  },
  {
    caption: "Q2 2022",
    list: [
      "MeMusician Initial Launch",
      "MeMusic Token Launch",
      "IP Acquisition",
    ],
    checked: false,
  },
  {
    caption: "Q3. 2022",
    list: ["Streaming App MVP", "MeMusic Investments"],
    checked: false,
  },
  {
    caption: "Q4. 2022",
    list: [`Streaming App Release`],
    checked: false,
  },
];

export const Roadmap: FC = () => {
  return (
    <section className={style.roadmap}>
      <div className="container">
        <h2 className={style.header}>Roadmap</h2>
        <div className={style.cards}>
          {roadmapOptions.map(({ caption, list, checked }) => (
            <Card
              key={caption}
              caption={caption}
              checked={checked}
              list={list}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
