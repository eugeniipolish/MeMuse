import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoute } from "../../router";

export const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoute.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
