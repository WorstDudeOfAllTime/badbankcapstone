import './Transaction.css';
const Transaction = ({ amount, date }) => {
  return (
    <div className="transactionContainer">
      <h2>Amount: {amount}</h2>
      <h2>Date: {date}</h2>
    </div>
  );
};

export default Transaction;
