import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
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
          <Link
            to="/story"
            id="navbar-story"
            className={
              location.pathname === "/story" ? styles.activeLink : ""
            }
          >
            Our Story
          </Link>
        </div>

        <div className={styles.navbar__link}>
        
        </div>
      </div>
    </div>
  );
}
