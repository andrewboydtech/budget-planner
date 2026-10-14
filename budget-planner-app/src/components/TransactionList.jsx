import './TransactionList.css';

function TransactionList({ transactions, categories }) {
  const getCategoryById = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatAmount = (amount) => {
    return Math.abs(amount).toFixed(2);
  };

  return (
    <div className="transaction-list">
      {transactions.map(transaction => {
        const category = getCategoryById(transaction.categoryId);
        return (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-left">
              <span className="transaction-icon">{category?.icon}</span>
              <div className="transaction-info">
                <div className="merchant-name">{transaction.merchant}</div>
                <div className="transaction-date">{formatDate(transaction.date)}</div>
              </div>
            </div>
            <div className="transaction-right">
              <div className="transaction-amount">
                ${formatAmount(transaction.amount)}
              </div>
              <span 
                className="category-badge" 
                style={{ backgroundColor: category?.color }}
              >
                {category?.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionList;
