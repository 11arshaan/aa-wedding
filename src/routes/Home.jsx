import RightGraphic from "../components/RightGraphic/RightGraphic";


export default function Home() {
  return (
    <div className="container">
      <div className="container-left">
        <div className="invite-header">
          <p className="invite-header-text">with profound joy and gratitude,</p>
          <p className="invite-header-text">
            we invite you to the celebrate the engagement of
          </p>
        </div>

        <div className="names-box">
          <div className="names-box-groom">
            <h2 className="marrier-name">Amaritpal Singh Sidhu</h2>
            <p className="parent-names">Son of Amrik Singh and Kulwinder Kaur Sidhu</p>
          </div>

          <h2 className="ampersand">&</h2>

          <div className="names-box-bride">
            <h2 className="marrier-name">Arsheen Kour</h2>
            <p className="parent-names">Daughter of Paramjeet Singh and Gurdeep Kour</p>
          </div>

        </div>

        <div className="event-info">
          <p className="event-info-text">7:00 p.m. August 19th, 2023</p>
          <p className="event-info-text">5246 Beech Grove Side Rd</p>
          <p className="event-info-text">Caledon, ON L7K DM6</p>
        </div>
      </div>

      <div className="container-right">
        <RightGraphic />
      </div>
    </div>
  );
}
