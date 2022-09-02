import './App.css';
import React, { useEffect, useState } from 'react';
import WelcomePage from './components/WelcomePage';
import Layout from './components/Layout';
function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [userBalance, setUserBalance] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [nextPage, setNextPage] = useState(false);
  /*useEffect(() => {
    setTimeout(() => {
      setNextPage(true);
    }, 5000);
  }, []);*/
  return (
    <div className="App flex-cent-col">
        <div className="logo-display">
          <h1>WBAT</h1>
        </div>
      <div className="content-box flex-cent">
      <WelcomePage setUserBalance={setUserBalance} userBalance={userBalance} setLoggedIn={setLoggedIn} loggedIn={loggedIn} setCurrentUser={setCurrentUser} setName={setName}/>
      </div>
    </div>
  );
}

export default App;
