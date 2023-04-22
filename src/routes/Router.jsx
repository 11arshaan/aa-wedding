import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import Home from "./Home/Home";
import RSVP from "./RSVP/RSVP";
import Gallery from "./Gallery";
import Admin from "./Admin/Admin";

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
  { path: "/admin", element: <Admin />},
]);

export default Router;
