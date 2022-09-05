import AccountDisplay from './AccountDisplay';
import TransactionList from './TransactionList';
import './AccountPage.css';
import {useState} from 'react';
const AccountPage = ({savingsArray}) => {
  const [checkingBalance, setCheckingBalance] = useState(0);
  const [savingsBalance, setSavingsBalance] = useState(0);
  return (
    <div className="fullAccounts">
      <div className="userAccount">
        <AccountDisplay balance={savingsBalance}  />
        <TransactionList setBalance={setSavingsBalance} type="savings" savingsArray={savingsArray}/>
      </div>
      <div className="userAccount">
        <AccountDisplay balance={checkingBalance}/>
        <TransactionList setBalance={setCheckingBalance} type="checking" savingsArray={savingsArray}/>
      </div>
    </div>
  );
};

export default AccountPage;
