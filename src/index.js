import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
