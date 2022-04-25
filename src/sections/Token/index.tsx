import React, { FC } from "react";
import style from "./Token.module.scss";
import { TokenBottom } from "./TokenBottom";
import { TokenTop } from "./TokenTop";

export const Token: FC = () => {
  return (
    <section className={style.token}>
      <TokenTop />
      <TokenBottom />
    </section>
  );
};
