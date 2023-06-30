import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom';
// import { Provider } from "react-redux";

import "./styles/index.css";

// import { store } from "./features/store";

import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  
    <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  
  </React.StrictMode>
);
