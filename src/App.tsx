import "normalize.css";
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./pages/AppRouter";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import "./stylesheets/global.scss";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
