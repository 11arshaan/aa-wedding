import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "./Home";
import RSVP from "./RSVP";
import Gallery from "./Gallery";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home />},
      { path: "rsvp", element: <RSVP />},
      { path: "gallery", element: <Gallery />},
    ]
  },
]);

export default Router;
