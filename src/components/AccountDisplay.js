import {useState} from 'react';
import './AccountDisplay.css'
const AccountDisplay = ({balance}) => {
  return(
    <div className="accountContainer">
      <div style={{background:'whitesmoke'}} className="balanceDisplay">
        <h1>Balance: ${balance.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        <h2>Checking</h2>
      </div>
          <div style={{background:'whitesmoke'}}>
            <h2>Account Number: 1074376268</h2>
            <h2>Debit Card: xxxx xxxx xxxx xxxx</h2>
          </div>
    </div>
  )
}

export default AccountDisplay;