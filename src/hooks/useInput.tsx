import React, { useState } from "react";

export const useInput = (
  initValue = ""
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(initValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};
