
import { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../utility/WindowContext";

import StoryDesktop from "./StoryDesktop";
import StoryMobile from "./StoryMobile";


import "./Story.scss";

export default function Story() {
  const { resize } = useContext(WindowContext);
  const [width, setWidth] = useState(resize.width);

  useEffect(() => {
    setWidth(resize.width);
  }, [resize]);

    
  return (<>
    {resize && width > 768 ? <StoryDesktop /> : <StoryMobile />}
    </>
  );
}
