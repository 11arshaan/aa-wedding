import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";

import Decorations from "./components/Decorations/Decorations";
import DecorationsMobile from "./components/Decorations/DecorationsMobile";
import { WindowContext } from "./utility/WindowContext";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Loading from "./components/Loading/Loading";




function App() {
  const { resize, setResize } = useContext(WindowContext);
  const [loaded, setLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setResize({ width: window.innerWidth, height: window.innerHeight});
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

  
  useEffect(() => {
    setRefresh(!refresh);
  }, [resize]);


  return (
    <div className="app">
      <Loading fade={loaded}  />
  
      {resize && resize.width > 768 ? <Navbar  /> : <NavbarMobile />}
      {resize && resize.width > 768 ? <Decorations /> : <DecorationsMobile />}


      <Outlet />
    </div>
  );
}

export default App;
