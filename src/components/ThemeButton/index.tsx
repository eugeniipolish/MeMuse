import classNames from "classnames";
import React, { ReactNode } from "react";
import style from "./ThemeButton.module.scss";

interface ThemeButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export const ThemeButton = React.memo(
  ({
    disabled = false,
    children,
    fullWidth = false,
    onClick = () => 1,
    type = "button",
    variant = "primary",
  }: ThemeButtonProps) => {
    return (
      <button
        type={type}
        className={classNames("btn_without_styles", style.btn, {
          [style.secondary]: variant === "secondary",
          [style.primary]: variant === "primary",
          [style.full_width]: fullWidth,
        })}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
