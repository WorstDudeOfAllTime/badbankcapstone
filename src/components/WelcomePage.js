import "./WelcomePage.css";
import React, { useEffect, useState } from "react";

import Login from "./Login";
import BalanceDisplay from "./BalanceDisplay";


const WelcomePage = ({setUserBalance, setCurrentUser, setName, loggedIn, setLoggedIn, userBalance}) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="container flex-cent"> 
    {!loggedIn ? <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} setUserBalance={setUserBalance} setName={setName}/> : <BalanceDisplay setUserBalance={setUserBalance} userBalance={userBalance} />}
    </div>
  );
};

export default WelcomePage;



/*<div id="first-pic" className="row-pic flex-cent">
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
</div>*/