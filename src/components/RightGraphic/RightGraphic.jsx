import styles from "./RightGraphic.module.scss";
import AAGraphic from "../../assets/amritarsheenpaint.png";
import AALogo from "../../assets/AALogo.svg";

export default function RightGraphic() {

  return (<div className={styles.rightContainer}>
    <div className={styles.AALogoContainer}>
    <img className={styles.AALogo} src={AALogo} />
    </div>
    <div className={styles.AAGraphicContainer}>
      <img className={styles.AAGraphic} src={AAGraphic} />
    </div>
  </div>)
}