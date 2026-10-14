import './SpendingChart.css';

function SpendingChart({ budgets, categories }) {
  const getCategoryById = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  const maxSpent = Math.max(...budgets.map(b => b.spent));
  
  const getBarHeight = (spent) => {
    if (maxSpent === 0) return 0;
    return (spent / maxSpent) * 100;
  };

  return (
    <div className="spending-chart">
      <div className="chart-bars">
        {budgets.map(budget => {
          const category = getCategoryById(budget.categoryId);
          const height = getBarHeight(budget.spent);
          
          return (
            <div key={budget.categoryId} className="bar-container">
              <div className="bar-wrapper">
                <div className="bar-amount">${budget.spent.toFixed(0)}</div>
                <div 
                  className="bar"
                  style={{ 
                    height: `${height}%`,
                    backgroundColor: category?.color 
                  }}
                />
              </div>
              <div className="bar-label">
                <span className="bar-icon">{category?.icon}</span>
                <span className="bar-name">{category?.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpendingChart;
