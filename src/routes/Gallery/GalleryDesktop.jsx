import {useEffect, useState} from "react";
import GalleryModal from "./GalleryModal";

import RightGraphic from "../../components/Graphic/Graphic";
import img1 from "../../assets/gallery_images/IMG_G_1.jpg";
import img2 from "../../assets/gallery_images/IMG_G_2.jpg";
import img3 from "../../assets/gallery_images/IMG_G_3.jpg";
import img4 from "../../assets/gallery_images/IMG_G_4.jpg";
import img5 from "../../assets/gallery_images/IMG_G_5.jpg";
import img6 from "../../assets/gallery_images/IMG_G_6.jpg";
import img7 from "../../assets/gallery_images/IMG_G_7.jpg";
import img8 from "../../assets/gallery_images/IMG_G_8.jpg";
import img9 from "../../assets/gallery_images/IMG_G_9.jpg";
import img10 from "../../assets/gallery_images/IMG_G_10.jpg";
import img11 from "../../assets/gallery_images/IMG_G_11.jpg";
import img12 from "../../assets/gallery_images/IMG_G_12.jpg";
import img13 from "../../assets/gallery_images/IMG_G_13.jpg";
import img14 from "../../assets/gallery_images/IMG_G_14.jpg";
import img15 from "../../assets/gallery_images/IMG_G_15.jpg";
import img16 from "../../assets/gallery_images/IMG_G_16.jpg";


import "./Gallery.scss";



export default function GalleryDesktop() {
const [modalOpen, setModalOpen] = useState(false);
const [currentImg, setCurrentImg] = useState('');
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const handleImageClick = (src) => {
  setCurrentImg(src);
  setModalOpen(true);
};



  return (
    <div className="container">
      <div className="container-left">
        <div className="gallery-grid">
          
          {images.map((imgSrc, index) => {
            return(
             <div key={index} className="gallery-img-container">
             <img
               className="gallery-image"
               src={imgSrc}
               onClick={() => handleImageClick(imgSrc)}
               alt={`Gallery item ${index + 1}`}
             />
           </div>);
          }) }


          {/* <div className="gallery-img-container"><img className="gallery-image" src={img1}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img2}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img3}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img4}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img5}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img6}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img7}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img8}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img9}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img10}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img11}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img12}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img13}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img14}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img15}></img></div>
          <div className="gallery-img-container"><img className="gallery-image" src={img16}></img></div> */}
        </div>

        {modalOpen && <GalleryModal src={currentImg} onClose={() => setModalOpen(false)} />}
      </div>
      <div className="container-right">
        <RightGraphic />
      </div>
    </div>
  );
}
