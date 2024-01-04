import RightGraphic from "../../components/Graphic/Graphic";
import RSVPForm from "../../components/RSVPForm/RSVPForm";
import "./RSVP.scss";


export default function RSVP() {

  return (
    <div className="container">
      <div className="container-left-rsvp">
      
      <RSVPForm />


      </div>

      <div className="container-right">
        <RightGraphic />
      </div>
    </div>
  );
}
