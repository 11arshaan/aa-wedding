import { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../utility/WindowContext";
import RightGraphic from "../../components/Graphic/Graphic";
import RSVPForm from "../../components/RSVPForm/RSVPForm";
import RSVPFormMobile from "../../components/RSVPForm/RSVPFormMobile";
import "./RSVP.scss";


export default function RSVP() {
  const { resize } = useContext(WindowContext);
  const [width, setWidth] = useState(resize.width);
  

  useEffect(() => {
    setWidth(resize.width);
   
  }, [resize]);
  
  
  return (
  
    <div className={resize && width > 768 ? "container" : "container-mobile"}>


      {resize && width > 768 ? <RSVPForm /> : <RSVPFormMobile /> }
      
    </div>
  );
}
