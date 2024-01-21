import WindLeavesWebm from "../../assets/leaves_slow_2_alpha.webm";
import WindLeavesMov from "../../assets/leaves_slow_2_alpha.mov";
import LeftPlantMov from "../../assets/left_plant.mov";
import LeftPlantWebm from "../../assets/left_plant.webm";
import FloralBG from "../../assets/floralbackground2_mobile.jpg";
import "./Decorations.scss";


export default function DecorationsMobile() {
  return (
    <>
      <video autoPlay loop muted playsInline className="wind-leaves-mobile">
        <source src={WindLeavesWebm} />
        <source src={WindLeavesMov} />
      </video>
      
      {/* <div className="plants-container-mobile">
      <video autoPlay loop muted playsInline className="left-plant-mobile">
        <source src={LeftPlantWebm} />
        <source src={LeftPlantMov} />
      </video>
      </div> */}

      {/* <div className="plants-container-mobile-2">
      <video autoPlay loop muted playsInline className="left-plant-mobile-2">
        <source src={LeftPlantWebm} />
        <source src={LeftPlantMov} />
      </video>
      </div> */}
    </>
  );
}
