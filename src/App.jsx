import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { LoadedContext } from './utility/LoadedContext';
import { WindowContext } from "./utility/WindowContext";

import Decorations from "./components/Decorations/Decorations";
import DecorationsMobile from "./components/Decorations/DecorationsMobile";


import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Loading from "./components/Loading/Loading";

function App() {
  const { resize, setResize } = useContext(WindowContext);
  const { loaded, setLoaded } = useContext(LoadedContext);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

      // Check if the page was already loaded before
      const alreadyLoaded = sessionStorage.getItem("alreadyLoaded") === "true";

      if (alreadyLoaded) {
        setLoaded(true);
      } else {
        const handleLoad = () => {
          setLoaded(true);
          sessionStorage.setItem("alreadyLoaded", "true");
        };
  
        window.onload = handleLoad;
      }

    return () => {
      // Clean up event listeners
      window.removeEventListener("resize", handleResize);
      window.onload = null;
    };
  }, []);

  useEffect(() => {
    setRefresh(!refresh);
  }, [resize]);

  return (
    <div className="app">
     
      {resize && resize.width > 768 ?  <Loading loaded={loaded} /> : ""}
      {resize && resize.width > 768 ? <Navbar /> : <NavbarMobile />}
      {resize && resize.width > 768 ? <Decorations /> : <DecorationsMobile />}

      <Outlet />
    </div>
  );
}

export default App;
