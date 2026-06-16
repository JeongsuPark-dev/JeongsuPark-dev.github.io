import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import { LangProvider } from "./i18n/context";

if (process.env.NODE_ENV === "production") {
  const title = "color: #111; font-size: 14px; font-weight: 600;";
  const body = "color: #555; font-size: 12px; line-height: 1.6;";
  const link = "color: #2563eb; font-size: 12px;";
  console.log(
    "%cHi there.%c\nThanks for checking the console. Source is on GitHub.%c\nhttps://github.com/JeongsuPark-dev/JeongsuPark-dev.github.io",
    title,
    body,
    link
  );
}

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
