import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";

import Decorations from "./components/Decorations/Decorations";
import DecorationsMobile from "./components/Decorations/DecorationsMobile";
import { WindowContext } from "./utility/WindowContext";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Loading from "./components/Loading/Loading";
import music from "./assets/AAvibe.mp3";
import ToggleAudio from "./components/ToggleAudio/ToggleAudio";


function App() {
  const { resize, setResize } = useContext(WindowContext);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setResize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); // Adjust the timeout duration as needed

    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="app">
      <Loading fade={loaded} music={audioRef} />
      <audio ref={audioRef} src={music} loop />
      {resize && resize.width > 768 ? <Navbar music={audioRef} /> : ''}
      {resize && resize.width > 768 ? <Decorations /> : <DecorationsMobile />}
      {resize && resize.width < 768 && <ToggleAudio  music={audioRef} />}

      <Outlet />
    </div>
  );
}

export default App;
