import "./App.scss";
import { Outlet } from "react-router-dom";
import WindLeavesWebm from "./assets/leaves_slow_2_alpha.webm";
import WindLeavesMov from "./assets/leaves_slow_2_alpha.mov";
import LeftPlantMov from "./assets/left_plant.mov";
import LeftPlantWebm from "./assets/left_plant.webm";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
    <Navbar />
    
    {/* <img className="left-tree" src={leftTree} /> */}
  


    <video autoPlay loop muted className="wind-leaves">
    <source src={WindLeavesWebm} />
    <source src={WindLeavesMov} />
    </video>

    <video autoPlay loop muted className="left-plant">
    <source src={LeftPlantWebm} />
    <source src={LeftPlantMov} />
    </video>

  
    <Outlet />
    </div>
  );
}

export default App;
 