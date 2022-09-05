import React, {useEffect, useState} from 'react'
import AccountPage from './AccountPage'

const BalanceDisplay = ({setUserBalance, userBalance, name, email}) => {
  const [savingsBalance, setSavingsBalance] = useState(null)
  const [savingsArray, setSavingsArray] = useState([])
  return(
    <div>
      <AccountPage/>
    </div>
)
}

export default BalanceDisplay;