import "normalize.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./pages/AppRouter";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import "./stylesheets/global.scss";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
