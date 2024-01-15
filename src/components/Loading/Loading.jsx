// LoadingPage.jsx
import React from 'react';
import './Loading.scss';
import AALogo from "../../assets/Ek_onkar.svg";
import {useRef, useContext, useEffect} from 'react';
import { LoadedContext } from '../../utility/LoadedContext';

const Loading = ({loaded}) => {

  const fadeOut = loaded ? "fade-out" : "";

  const ref = useRef(); 

  return (
    <div ref={ref} className={`loading-page ${fadeOut}`}>
      {/* Your loading page content */}
      <img className="loading-logo" src={AALogo} />
      {loaded ? '' : <h1>Loading...</h1>}
    </div>
  );
};

export default Loading;