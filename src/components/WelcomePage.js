import "./WelcomePage.css";
import React, { useEffect, useState } from "react";
const WelcomePage = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="container flex-cent">
      <div className="picture-row flex-cent">
        <div id="first-pic" className="row-pic flex-cent">
          <div className="black-bar flex-cent">
            <h1>Promise.</h1>
          </div>
        </div>
        <div id="second-pic" className="row-pic flex-cent">
          <div className="black-bar flex-cent">
            <h1>Dignity.</h1>
          </div>
        </div>
        <div id="third-pic" className="row-pic flex-cent">
          <div className="black-bar flex-cent">
            <h1>Elegance.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
