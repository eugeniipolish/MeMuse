import classNames from "classnames";
import React from "react";
import style from "./ThemeInput.module.scss";

interface ThemeInputProps {
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export const ThemeInput = React.memo(
  ({ fullWidth = false, ...props }: ThemeInputProps) => {
    return (
      <input
        className={classNames({ [style.full_width]: fullWidth }, style.input)}
        {...props}
      />
    );
  }
);
