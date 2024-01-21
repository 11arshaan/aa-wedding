import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { LoadedContext } from './utility/LoadedContext';
import { WindowContext } from "./utility/WindowContext";

import Decorations from "./components/Decorations/Decorations";
import DecorationsMobile from "./components/Decorations/DecorationsMobile";
import SaiyyanMP3 from "./assets/Saiyyan.mp3";

import ScrollToTop from "./utility/ScrollTop";


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

    function handleLoad() {
      setLoaded(true);
    }
    
    window.onload = handleLoad;

    return () => {
      // Clean up event listeners
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("onload", handleLoad);
    };
  }, []);

  useEffect(() => {
    setRefresh(!refresh);
  }, [resize]);

  return (
    <div className="app">
       <ScrollToTop />
      <audio controls="false" src={SaiyyanMP3}></audio>
       <Loading loaded={loaded} />
      {resize && resize.width > 768 ? <Navbar /> : <NavbarMobile />}
      {resize && resize.width > 768 ? <Decorations /> : <DecorationsMobile />}

      <Outlet />
    </div>
  );
}

export default App;
