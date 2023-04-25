
import { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../utility/WindowContext";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

export default function Home() {
  const { resize } = useContext(WindowContext);
  const [width, setWidth] = useState(resize.width);

  useEffect(() => {
    setWidth(resize.width);
  }, [resize]);

  return (
    
    <>
    {resize && width > 768 ? <HomeDesktop /> : <HomeMobile />}
    </>
  );
}
