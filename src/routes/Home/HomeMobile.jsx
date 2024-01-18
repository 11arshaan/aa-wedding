import Graphic from "../../components/Graphic/Graphic";
import "./Home.scss";
import RSVPForm from "../../components/RSVPForm/RSVPForm";
import DownArrow from "../../components/DownArrow/DownArrow";
import WindLeavesWebm from "../../assets/leaves_slow_2_alpha.webm";
import WindLeavesMov from "../../assets/leaves_slow_2_alpha.mov";
import LeftPlantMov from "../../assets/left_plant.mov";
import LeftPlantWebm from "../../assets/left_plant.webm";
import "../../components/Decorations/Decorations.scss";


export default function HomeMobile() {
  return (
    <>
      <div className="container-mobile home-mobile-height">
        <div className="home-container-mobile">
          <div className="invite-header">
            <p className="invite-header-text">
              with profound joy and gratitude,
            </p>
            <p className="invite-header-text">
              we invite you to the celebrate the engagement of
            </p>
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

          {/* <div className="event-info">
            <p className="event-info-text">7:00 p.m. August 19th, 2023</p>
            <p className="event-info-text">5246 Beech Grove Side Rd</p>
            <p className="event-info-text">Caledon, ON L7K DM6</p>
          </div> */}
        </div>

        <div className="mobile-graphic-container">
        <Graphic />
        </div>
      </div>
      <DownArrow />
      {/* <RSVPForm /> */}

       {/* EVENT DETAILS BOX 1 */}
       <div className="event-details-container mobile-z">
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
        <div className="plants-container-mobile-2">
      <video autoPlay loop muted playsInline className="left-plant-mobile-2">
        <source src={LeftPlantWebm} />
        <source src={LeftPlantMov} />
      </video>
      </div>
     
    </>
  );
}
