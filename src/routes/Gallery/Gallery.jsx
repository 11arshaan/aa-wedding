
import {useState, useContext, useEffect} from 'react';
import GalleryDesktop from './GalleryDesktop';
import GalleryMobile from './GalleryMobile';

import { WindowContext } from "../../utility/WindowContext";

export default function Gallery(){

  const { resize } = useContext(WindowContext);
  const [width, setWidth] = useState(resize.width);

  useEffect(() => {
    setWidth(resize.width);
  }, [resize]);

  return (
    <>
    {resize && width > 768 ? <GalleryDesktop /> : <GalleryMobile />}
    </>
  );
}
  
