import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import ToggleAudio from "../ToggleAudio/ToggleAudio";

export default function Navbar({music}) {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <div className={styles.navbar__link}>
          <Link
            to="/"
            id="navbar-home"
            className={location.pathname === "/" ? styles.activeLink : ""}
          >
            Home
          </Link>
        </div>
        <div className={styles.navbar__link}>
          <Link
            to="/rsvp"
            id="navbar-rsvp"
            className={location.pathname === "/rsvp" ? styles.activeLink : ""}
          >
            RSVP
          </Link>
        </div>
        <div className={styles.navbar__link}>
          <Link
            to="/gallery"
            id="navbar-gallery"
            className={
              location.pathname === "/gallery" ? styles.activeLink : ""
            }
          >
            Gallery
          </Link>
        </div>

        <div className={styles.navbar__link}>
        <ToggleAudio  music={music} />
        </div>
      </div>
    </div>
  );
}
