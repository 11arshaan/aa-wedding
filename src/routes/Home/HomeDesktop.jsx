import RightGraphic from "../../components/Graphic/Graphic";
import "./Home.scss";
import Typed from "typed.js";
import { useEffect, useRef, useContext, useState } from "react";
import { LoadedContext } from "../../utility/LoadedContext";

export default function HomeDesktop() {
  const typedInfo = useRef(null);
  const { loaded } = useContext(LoadedContext);


  useEffect(() => {


    if (loaded) {
    var options = {
      strings: [
        '<span class="event-info-text">7:00 p.m. August 19th, 2023<br>5246 Beech Grove Side Rd<br>Caledon, ON L7K DM6</span>',
      ],
      typeSpeed: 40,
      showCursor: false,
      cursorChar: "|",
      contenType: "html",
    };
    var typed = new Typed(typedInfo.current, options);
;

    return () => {
      typed.destroy();
    };
  }
  }, [loaded]);

  return (
    <div className="container">
      <div className="container-left fade-in">
        <div className="invite-header">
          <p className="invite-header-text">with profound joy and gratitude,</p>
          <p className="invite-header-text">we request your attendance to the</p>
          <p className="invite-header-text">the Anand Karaj and Reception of :</p>
        </div>

        <div className="names-box">
          <div className="names-box-groom">
            <h2 className="marrier-name">Amaritpal Singh Sidhu</h2>
            <p className="parent-names">
              Son of Amrik Singh and Kulwinder Kaur Sidhu
            </p>
          </div>

          <h2 className="ampersand">&</h2>

          <div className="names-box-bride">
            <h2 className="marrier-name">Arsheen Kour</h2>
            <p className="parent-names">
              Daughter of Paramjeet Singh and Gurdeep Kour
            </p>
          </div>
        </div>


        <div ref={typedInfo} className="event-info">
          {/* { !firstType && <><p className="event-info-text">7:00 p.m. August 19th, 2023</p>
          <p className="event-info-text">5246 Beech Grove Side Rd</p>
          <p className="event-info-text">Caledon, ON L7K DM6</p></>} */}
        </div>

        

        {/* EVENT DETAILS BOX 1 */}
        <div className="event-details-box">
        <h2 className="boldinfo-date">August 31, 2024</h2>
        <h2 className="boldinfo-title">Anand Karaj</h2>

        <h4>Gurdwara Sikh Sangat Brampton</h4>
        <h5>32 Regan Rd</h5>
        <h5>Brampton, ON</h5>
        
        <p className="event-time">Milni: 9:45 AM</p>
        <p className="event-time">Anand Karaj: 11:00 AM</p>
        <p className="event-time">followed by Guru ka langar (vegetarian lunch)</p>
        </div>

        {/* EVENT DETAILS BOX 2 */}
        <div className="event-details-box">
        <h2 className="boldinfo-date">September 1, 2020</h2>
        <h2 className="boldinfo-title">Reception</h2>

        <h4>Versailles Convention Centre</h4>
        <h5>6721 Edwards Blvd</h5>
        <h5>Mississauga, ON</h5>
        
        <p className="event-time">Reception festivities will begin at 7:45 PM</p>
        </div>

       
      </div>

      <div className="container-right">
        <RightGraphic />
      </div>
    </div>
  );
}
