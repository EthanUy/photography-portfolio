import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import pajara2 from "../public/pajara2.jpg"; 
import pajara1 from "../public/pajara1.jpg";
import dylan from "../public/dylan.jpg";
import pajara3 from "../public/pajara3.jpg";
import alice from "../public/alice.jpg";
import trev from "../public/trev.jpg";
import profile from "../public/profile.jpg";
import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import github from "../public/github.svg";

export {
    pajara2,
    pajara1,
    dylan,
    pajara3,
    alice,
    trev,
    profile,
    facebook,
    instagram,
    github
    /** other exports */
  };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
