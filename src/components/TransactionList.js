import './TransactionList.css';
import Transaction from './Transaction';
import {useState, useEffect} from 'react'
const TransactionList = ({setBalance, type}) => {
  const [transactionArray, setTransactionArray] = useState([])
  useEffect(()=>{
    console.log('fired');
    const getMoney = async () => {
     const response = await fetch(
       `http://localhost:5000/getBalance/${type}`
     );
     console.log('made it')
     const transactionInfo = await response.json();
       setTransactionArray(transactionInfo)
   }
   getMoney();
 }, [])
  let balance = 0;
  return(
    <div className="fullTransactions">
      {transactionArray.map(trans => {
        balance = balance += trans.amount
        return (<Transaction amount={`$${trans.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} date={trans.date}/>)
      })}
      {setBalance(balance)}
    </div>
  )
}

export default TransactionList;