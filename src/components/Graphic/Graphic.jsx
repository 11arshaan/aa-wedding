import styles from "./Graphic.module.scss";
import AAGraphic from "../../assets/amritarsheenpaint.png";
import AALogo from "../../assets/AALogo.svg";
import { WindowContext } from "../../utility/WindowContext";
import { useContext, useEffect, useState } from "react";

export default function RightGraphic() {
  const { resize, setResize } = useContext(WindowContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded, resize]);



  return (
    <>
      {resize && resize.width > 768 && (
        <div className={styles.rightContainer}>
          <div className={styles.AALogoContainer}>
            <img className={styles.AALogo} src={AALogo} />
          </div>
          <div className={styles.AAGraphicContainer}>
            <img className={styles.AAGraphic} src={AAGraphic} />
          </div>
        </div>
      )}

      {resize && resize.width <= 768 && (
        <>
          <div className={styles.AALogoContainerMobile}>
            <img className={styles.AALogoMobile} src={AALogo} />
          </div>
          <div className={styles.AAGraphicContainerMobile}>
            <img className={styles.AAGraphicMobile} src={AAGraphic} />
          </div>
          
        </>
      )}
    </>
  );
}
