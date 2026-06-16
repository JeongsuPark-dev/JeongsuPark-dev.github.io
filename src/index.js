import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import { LangProvider } from "./i18n/context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <LangProvider>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
