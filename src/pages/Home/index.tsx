import React, { FC } from "react";
import { Header } from "../../components/Header";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main>23</main>
    </div>
  );
};

export default Home;
