// LoadingPage.jsx
import React from 'react';
import './Loading.scss';
import AALogo from "../../assets/AALogo.svg";
import {useRef, useState, useEffect} from 'react';

const Loading = ({fade, music}) => {

  const ref = useRef();
  useEffect(()=>{

    if (fade) {
      document.getElementById("load-button").addEventListener("click", () => {
        music.current.play();
        ref.current.classList.add("fade-out");
      });
    }
   
  }, [fade]);

  return (
    <div ref={ref} className={`loading-page`}>
      {/* Your loading page content */}
      <img className="loading-logo" src={AALogo} />
      {fade ? '' : <h1>Loading...</h1>}
      {fade ? <button type="button" id="load-button">Enter</button> : ''}
    </div>
  );
};

export default Loading;