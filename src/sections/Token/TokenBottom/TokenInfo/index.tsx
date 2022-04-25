import React, { FC } from "react";
import style from "./TokenInfo.module.scss";

interface TokenInfoProps {
  label: string;
  value: string;
}

export const TokenInfo: FC<TokenInfoProps> = ({ label, value }) => {
  return (
    <div key={label} className={style.item}>
      <p className={style.label}>{label}</p>
      <h3 className={style.value}>{value}</h3>
    </div>
  );
};
