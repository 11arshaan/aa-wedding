// LoadingPage.jsx
import React from 'react';
import './Loading.scss';
import AALogo from "../../assets/Ek_onkar.svg";
import {useRef, useContext, useEffect} from 'react';
import { LoadedContext } from '../../utility/LoadedContext';

const Loading = ({loaded}) => {


  function fadeOut() {
    document.querySelector('.loading-page').classList.add("fade-out");
    document.querySelector('audio').play();

  }

  const ref = useRef(); 

  return (
    <div ref={ref} className={`loading-page ${fadeOut}`}>
      {/* Your loading page content */}
      <img className="loading-logo" src={AALogo} />
      {/* <h1 className={loaded ? "hideText" : ""}>Loading...</h1> */}
      
      <button className="enter-button" onClick={fadeOut} >Enter </button>
    </div>
  );
};

export default Loading;