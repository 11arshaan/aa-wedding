import RightGraphic from "../components/RightGraphic/RightGraphic";
import RSVPForm from "../components/RSVPForm/RSVPForm";

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
