import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Decorations from "./components/Decorations/Decorations";
import DecorationsMobile from "./components/Decorations/DecorationsMobile";
import { WindowContext } from "./utility/WindowContext";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const { resize, setResize } = useContext(WindowContext);

  useEffect(() => {
    const handleResize = () => {
      setResize({width: window.innerWidth, height: window.innerHeight});
     
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(resize);
  }, [resize]);

  return (
    
    <div className="app">
    {resize && resize.width > 768 ? <Navbar /> : <Navbar />}
    {resize && resize.width > 768 ? <Decorations /> : <DecorationsMobile />}


      <Outlet />
    </div>
  );
}

export default App;
