import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Decorations from "./components/Decorations/Decorations";
import DecorationsMobile from "./components/Decorations/DecorationsMobile";
import { WindowContext } from "./utility/WindowContext";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";

function App() {
  const { resize, setResize } = useContext(WindowContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResize({width: window.innerWidth, height: window.innerHeight});
     
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    setLoaded(true);
  }, [loaded]);

  useEffect(() => {
    console.log(resize);
  }, [resize]);

  return (
    
    <div className="app">
    {resize && resize.width > 768 ? <Navbar /> : <NavbarMobile />}
    {resize && resize.width > 768 ? <Decorations /> : <DecorationsMobile />}


      <Outlet />
    </div>
  );
}

export default App;
