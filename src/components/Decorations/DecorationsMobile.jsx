import WindLeavesWebm from "../../assets/leaves_slow_2_alpha.webm";
import WindLeavesMov from "../../assets/leaves_slow_2_alpha.mov";
import LeftPlantMov from "../../assets/left_plant.mov";
import LeftPlantWebm from "../../assets/left_plant.webm";
import "./Decorations.scss";

export default function DecorationsMobile() {
  return (
    <>
      <video autoPlay loop muted className="wind-leaves-mobile">
        <source src={WindLeavesWebm} />
        <source src={WindLeavesMov} />
      </video>

      <video autoPlay loop muted className="left-plant-mobile">
        <source src={LeftPlantWebm} />
        <source src={LeftPlantMov} />
      </video>
    </>
  );
}
