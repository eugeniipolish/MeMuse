import React, { FC } from "react";
import Home from "../pages/Home";

export type RoutesTypes = Array<RoutesObjTypes>;
export type RoutesObjTypes = {
  path: string;
  element: FC;
};

export const publicRoute = [{ path: "/", element: <Home /> }];
