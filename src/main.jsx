import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Full_Logo_Black_CMYK from "/2024-spotify-full-logo/Full_Logo_Black_CMYK.svg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="logo">Jammming</h1>
    <App />
    <img src={Full_Logo_Black_CMYK} alt="Spotify" className="spotify" />
  </StrictMode>
);
