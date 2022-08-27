import "./App.css";
import React, { useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [nextPage, setNextPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNextPage(true);
    }, 5000);
  }, []);
  return (
    <div className="App flex-cent-col">
      <div className="logo-display">
        <h1>WBOAT</h1>
      </div>
      <div className="content-box flex-cent">
        {!nextPage && <WelcomePage />}
        {nextPage && (
          <Login
            setCurrentUser={setCurrentUser}
            setUserBalance={setUserBalance}
          />
        )}
      </div>
    </div>
  );
}

export default App;
