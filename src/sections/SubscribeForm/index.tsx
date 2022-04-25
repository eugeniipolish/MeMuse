import classNames from "classnames";
import React, { FC } from "react";
import { PictureLink } from "../../components/PictureLink";
import { ThemeButton } from "../../components/ThemeButton";
import { ThemeInput } from "../../components/ThemeInput";
import { useInput } from "../../hooks/useInput";
import style from "./SubscribeForm.module.scss";

const socials = [
  {
    link: "https://twitter.com/memusic_news",
    src: "/Landing-page/socials/twitter.svg",
    alt: "twitter",
  },
  {
    link: "https://t.me/memusic_official",
    src: "/Landing-page/socials/telegram.svg",
    alt: "telegram",
  },
  {
    link: "https://google.com",
    src: "/Landing-page/socials/medium.svg",
    alt: "medium",
  },
  {
    link: "https://www.linkedin.com/company/memusic/",
    src: "/Landing-page/socials/linkedIn.svg",
    alt: "linkedIn",
  },
];

export const SubscribeForm: FC = () => {
  const [email, changeEmail] = useInput("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return email;
  };

  return (
    <section className={style.subscribe}>
      <div className={classNames("container", style.wrapper)}>
        <div className={style.left_side}>
          <form onSubmit={onSubmit}>
            <h2>Stay Tuned</h2>
            <p className={style.text}>
              Subscribe to our newsletter and never miss our updates.
            </p>
            <p className={classNames(style.text, style.subtitle)}>
              Only one mail a month
            </p>
            <div className={classNames("flex-wrapper", style.email_wrapper)}>
              <div className={style.email_wrapper_input}>
                <ThemeInput
                  fullWidth
                  onChange={changeEmail}
                  placeholder="Your email"
                  value={email}
                />
              </div>
              <div className={style.email_wrapper_btn}>
                <ThemeButton type="submit" fullWidth>
                  Subscribe
                </ThemeButton>
              </div>
            </div>
            <div className={style.socials}>
              <p className={style.socials_label}>Or follow us on socials:</p>
              <ul className={classNames("flex-wrapper", style.socials_list)}>
                {socials.map(({ alt, link, src }) => (
                  <li key={link}>
                    <PictureLink alt={alt} link={link} src={src} />
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
        <div className={style.right_side}>
          <img
            className={style.right_side_img}
            src="/Landing-page/right-section.png"
            alt="right-section"
          />
        </div>
      </div>
    </section>
  );
};
