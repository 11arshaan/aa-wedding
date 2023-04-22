// LoadingPage.jsx
import React from 'react';
import './Loading.scss';
import AALogo from "../../assets/AALogo.svg";

const Loading = ({fade}) => {
  return (
    <div className={`loading-page ${fade ? 'fade-out' : ''}`}>
      {/* Your loading page content */}
      <img className="loading-logo" src={AALogo} />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;