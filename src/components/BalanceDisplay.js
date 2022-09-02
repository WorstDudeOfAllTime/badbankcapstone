import React, {useEffect, useState} from 'react'

const BalanceDisplay = ({setUserBalance, userBalance, name, email}) => {
  const [savingsBalance, setSavingsBalance] = useState(null)
  const [savingsArray, setSavingsArray] = useState([])
  useEffect(()=>{
     const getMoney = async () => {
      const response = await fetch(
        `http://localhost:5000/getBalance`
      );
      const theBalance = await response.json();
        setSavingsArray(theBalance)
    }
    getMoney();
  }, [setUserBalance, userBalance])
  return(
    <div>
      {savingsArray.map(item => {
        return <div style={{backgroundColor: 'white'}}><h1>{item.amount}</h1>
        </div>
      })}
    </div>
)
}

export default BalanceDisplay;