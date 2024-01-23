import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faCoffee,
  faExternalLink,
  faCopyright,
  faBars,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCoffee,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faInstagram,
  faFacebook,
  faLinkedin,
  faExternalLink,
  faCopyright,
  faBars,
  faXmark
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // LÄGG TILL basename="/~jama0019/build"   vid deploy
  <BrowserRouter basename="/~jama0019/build">
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
