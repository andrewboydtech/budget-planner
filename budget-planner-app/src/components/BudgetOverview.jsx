import './BudgetOverview.css';

function BudgetOverview({ budgets, categories }) {
  const getCategoryById = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  const getPercentage = (spent, limit) => {
    return Math.min((spent / limit) * 100, 100);
  };

  const isOverBudget = (spent, limit) => {
    return spent > limit;
  };

  return (
    <div className="budget-overview">
      {budgets.map(budget => {
        const category = getCategoryById(budget.categoryId);
        const percentage = getPercentage(budget.spent, budget.limit);
        const overBudget = isOverBudget(budget.spent, budget.limit);

        return (
          <div key={budget.categoryId} className="budget-card">
            <div className="budget-header">
              <span className="budget-icon">{category?.icon}</span>
              <span className="budget-category">{category?.name}</span>
            </div>
            
            <div className="budget-amounts">
              <span className={`spent ${overBudget ? 'over-budget' : ''}`}>
                ${budget.spent.toFixed(2)}
              </span>
              <span className="limit"> / ${budget.limit.toFixed(2)}</span>
            </div>

            <div className="progress-bar">
              <div 
                className={`progress-fill ${overBudget ? 'over-budget' : ''}`}
                style={{ 
                  width: `${percentage}%`,
                  backgroundColor: overBudget ? '#ef4444' : category?.color 
                }}
              />
            </div>

            <div className="budget-remaining">
              {overBudget ? (
                <span className="over-text">
                  ${(budget.spent - budget.limit).toFixed(2)} over budget
                </span>
              ) : (
                <span className="remaining-text">
                  ${(budget.limit - budget.spent).toFixed(2)} remaining
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BudgetOverview;
