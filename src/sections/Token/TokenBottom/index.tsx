import React, { FC } from "react";
import { ThemeButton } from "../../../components/ThemeButton";
import style from "./TokenBotton.module.scss";
import { TokenInfo } from "./TokenInfo";

const leftSideContent = [
  { label: "Liquidity", value: "5%" },
  { label: "Seed Round", value: "10%" },
  { label: "Public Sale", value: "6%" },
  { label: "Streaming & Mining", value: "30%" },
];

const rightSideContent = [
  { label: "Marketing", value: "4.5%" },
  { label: "Team", value: "15%" },
  { label: "Advisors", value: "4.5%" },
  { label: "Private Sale", value: "25%" },
];

export const TokenBottom: FC = () => {
  return (
    <div className={style.wrapper}>
      <img
        className={style.donut}
        src="/Landing-page/token/donut.png"
        alt="donut"
      />
      <div className="container">
        <div className={style.info}>
          <div className={style.left_side}>
            {leftSideContent.map(({ label, value }) => (
              <TokenInfo key={label} label={label} value={value} />
            ))}
          </div>
          <div className={style.right_side}>
            {rightSideContent.map(({ label, value }) => (
              <TokenInfo key={label} label={label} value={value} />
            ))}
          </div>
        </div>
        <div className="flex-center">
          <div className={style.button_wrapper}>
            <ThemeButton variant="secondary" fullWidth>
              Whitepaper
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
