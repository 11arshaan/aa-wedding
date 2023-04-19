import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <div className={styles.navbar__link}>
          <Link to="/home" id="navbar-home">
            Home
          </Link>
        </div>
        <div className={styles.navbar__link}>
          <Link to="/rsvp" id="navbar-rsvp">
            RSVP
          </Link>
        </div>
        <div className={styles.navbar__link}>
          <Link to="/gallery" id="navbar-gallery">
            Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
