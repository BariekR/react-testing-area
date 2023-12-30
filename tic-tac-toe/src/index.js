import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import ProductApp from "./ProductApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
/*root.render(
  <StrictMode>
    <ProductApp />
  </StrictMode>
);*/