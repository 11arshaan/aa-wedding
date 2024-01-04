// LoadingPage.jsx
import React from 'react';
import './Loading.scss';
import AALogo from "../../assets/Ek_onkar.svg";
import {useRef, useContext, useEffect} from 'react';
import { LoadedContext } from '../../utility/LoadedContext';

const Loading = ({fade}) => {
  const { setLoaded } = useContext(LoadedContext);

  const ref = useRef();
  useEffect(()=>{

    if (fade) {
      document.getElementById("load-button").addEventListener("click", () => {
       
        ref.current.classList.add("fade-out");
        setLoaded({loaded: true});
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