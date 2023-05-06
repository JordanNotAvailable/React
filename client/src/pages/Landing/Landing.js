import React from "react";
import InfoContainer from "../../componets/Info/InfoContainer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="home">
      <div className="animation-background">
        <div className="blob purple"></div>
        <div className="blob yellow"></div>
        <div className="blob pink"></div>
        <div className="m-8 relative space-y-4"></div>
      </div>
      <div className="content">
        <div className="animation-container rounded-lg m-3">
          <div className="games-container">
            <InfoContainer />
          </div>
          <div className="animations-container">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;


