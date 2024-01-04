import RightGraphic from "../../components/Graphic/Graphic";
import "./Home.scss";
import Typed from "typed.js";
import { useEffect, useRef, useContext, useState } from "react";
import { LoadedContext } from "../../utility/LoadedContext";

export default function HomeDesktop() {
  const typedInfo = useRef(null);
  const { loaded } = useContext(LoadedContext);


  useEffect(() => {


    if (loaded.loaded) {
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
      <div className="container-left">
        <div className="invite-header">
          <p className="invite-header-text">with profound joy,</p>
          <p className="invite-header-text">we welcome your attendance to</p>
          <p className="invite-header-text">the ring and chunni ceremony of</p>
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
      </div>

      <div className="container-right">
        <RightGraphic />
      </div>
    </div>
  );
}
