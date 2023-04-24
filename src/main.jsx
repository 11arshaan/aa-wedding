import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { WindowProvider } from "./utility/WindowContext";
import { LoadedProvider } from "./utility/LoadedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <WindowProvider>
  <LoadedProvider>
    <RouterProvider router={Router} />
    </LoadedProvider>
  </WindowProvider>

  // </React.StrictMode>,
);
