import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import pajara2 from "/pajara2.jpg"; 
import pajara1 from "/pajara1.jpg";
import dylan from "/dylan.jpg";
import pajara3 from "/pajara3.jpg";
import alice from "/alice.jpg";
import trev from "/trev.jpg";
import profile from "/profile.jpg";
import facebook from "/facebook.svg";
import instagram from "/instagram.svg";
import github from "/github.svg";
import shutterDark from "/cameraShutterDark.svg";
import shutterLight from "/cameraShutterLight.svg";

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
    github,
    shutterDark,
    shutterLight
    /** other exports */
  };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
