import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import { LangProvider } from "./i18n/context";

if (import.meta.env.PROD) {
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

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <LangProvider>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
);
