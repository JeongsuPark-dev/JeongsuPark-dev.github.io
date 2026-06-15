import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
