import "./DownArrow.scss";
import { useState, useEffect } from "react";

export default function DownArrow() {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArrow(true);
    }, 4000);

    // Clean up the timer when the component is unmounted or re-rendered
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {arrow && <div class="down-arrow"></div> }
      
    </>
  );
}
