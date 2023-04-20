
import { useContext } from "react";
import { WindowContext } from "../../utility/WindowContext";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

export default function Home() {
  const { resize } = useContext(WindowContext);

  return (
    
    <>
    {resize && resize.width > 768 ? <HomeDesktop /> : <HomeMobile />}
    </>
  );
}
