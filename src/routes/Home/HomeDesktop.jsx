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
          '<p className="invite-header-text">with profound joy and gratitude,</p> <p className="invite-header-text">we invite you to celebrate</p> <p className="invite-header-text">the union of :</p>',
        ],
        typeSpeed: 20,
        showCursor: false,
        cursorChar: "|",
        contenType: "html",
      };
      var typed = new Typed(typedInfo.current, options);
    }
    function scrollCheck() {
      var element = document.querySelector(".arrow");
      var fadeStart = 100; // px, adjust to your needs

      if (window.scrollY > fadeStart) {
        element.style.opacity = "0";
      } else {
        element.style.opacity = "1";
      }
    }
    window.addEventListener("scroll", scrollCheck);

    return () => {
      typed && typed.destroy();
    };
  }, [loaded]);

  return (
    <div className="container">
      <div className="container-left fade-in">
        <div className="invite-header" ref={typedInfo}></div>

        <div className="names-box">
          <div className="names-box-groom">
            <h2 className="marrier-name">Amaritpal Singh Sidhu</h2>
            <p className="parent-names undl">Son of:</p>
            <p className="parent-names">Amrik Singh and Kulwinder Kaur Sidhu</p>
            <br />
            <p className="parent-names undl">Grandson of:</p>
            <p className="parent-names">
              Rattan Singh, Joginder Kaur & Asa Singh, Gurmeet Kaur
            </p>
          </div>

          <h2 className="ampersand">&</h2>

          <div className="names-box-bride">
            <h2 className="marrier-name">Arsheen Kour</h2>
            <p className="parent-names undl">Daughter of:</p>
            <p className="parent-names">Paramjeet Singh and Gurdeep Kour</p>
            <br />
            <p className="parent-names undl">Granddaughter of:</p>
            <p className="parent-names">
              Asa Singh, Satwant Kour & Santokh Singh, Jaswant Kour
            </p>
          </div>
        </div>

        {/* <div ref={typedInfo} className="event-info">
        </div> */}

        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* EVENT DETAILS BOX 1 */}
        <div className="event-details-container">
          <div className="event-details-box">
            <h1 className="boldinfo-title">Anand Karaj</h1>
            <h3 className="boldinfo-date">August 31, 2024</h3>

            <h4>Gurdwara Sikh Sangat Brampton</h4>
            <h5>32 Regan Rd, Brampton, ON</h5>

            <br />
            <p className="event-time">Milni: 9:45 AM</p>
            <p className="event-time">Anand Karaj: 11:00 AM</p>
            {/* <p className="event-time">
              followed by Guru ka langar (vegetarian lunch)
            </p> */}
          </div>

          {/* EVENT DETAILS BOX 2 */}
          <div className="event-details-box ebox2">
            <h1 className="boldinfo-title">Reception</h1>
            <h3 className="boldinfo-date">September 1, 2020</h3>

            <h4>Versailles Convention Centre</h4>
            <h5>6721 Edwards Blvd, Mississauga, ON</h5>

            <br />
            <p className="event-time">
              Reception festivities will begin at 7:45 PM
            </p>
          </div>
        </div>
      </div>

      <div className="container-right">
        <RightGraphic />
      </div>
    </div>
  );
}
