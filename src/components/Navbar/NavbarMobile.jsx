import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (<>
    <div className={styles.mobilenavbar}>
      <div className={styles.mobilenavbar__links}>
        <div className={styles.mobilenavbar__link}>
          <Link to="/" id="navbar-home">
            Home
          </Link>
        </div>
        <div className={styles.mobilenavbar__link}>
          <Link to="/rsvp" id="navbar-rsvp">
            RSVP
          </Link>
        </div>
        <div className={styles.mobilenavbar__link}>
          <Link to="/gallery" id="navbar-gallery">
            Gallery
          </Link>        
        </div>
        <div className={styles.mobilenavbar__link}>
          <Link to="/story" id="navbar-story">
            Story
          </Link>        
        </div>
      </div>
    </div>
    </>
  );
}
