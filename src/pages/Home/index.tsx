import classNames from "classnames";
import React, { FC } from "react";
import { About } from "../../sections/About";
import { Advisors } from "../../sections/Advisors";
import { CoreTeam } from "../../sections/CoreTeam";
import { Footer } from "../../sections/Footer";
import { Investors } from "../../sections/Investors";
import { NFTSection } from "../../sections/NFTSection";
import { Roadmap } from "../../sections/Roadmap";
import { SubscribeForm } from "../../sections/SubscribeForm";
import { Token } from "../../sections/Token";
import { TopSection } from "../../sections/TopSection";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style.wrapper}>
      <TopSection />
      <main className={style.main}>
        <About />
        <NFTSection />
        <Token />
        <CoreTeam />
        <Advisors />
        <Investors />
        <Roadmap />
        <SubscribeForm />
      </main>
      <div className={classNames(style.green_gradient, style.top)} />
      <div className={classNames(style.green_gradient, style.bottom)} />
      <div className={classNames(style.blue_gradient, style.top)} />
      <div className={classNames(style.blue_gradient, style.bottom)} />
      <Footer />
    </div>
  );
};

export default Home;
