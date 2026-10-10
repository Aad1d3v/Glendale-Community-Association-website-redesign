import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Fonts first so the @font-face rules are not reordered by Tailwind's layers. */
import "@/styles/fonts.css";
import "@/index.css";

import { App } from "@/App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Could not find the #root element in index.html");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
