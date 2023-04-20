import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { WindowProvider } from "./utility/WindowContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <WindowProvider>
    <RouterProvider router={Router} />
  </WindowProvider>

  // </React.StrictMode>,
);
