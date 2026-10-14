import { useState } from 'react';
import './App.css';
import { transactions, categories, budgets } from './mockData';
import TransactionList from './components/TransactionList';
import BudgetOverview from './components/BudgetOverview';
import SpendingChart from './components/SpendingChart';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>💰 Budget Planner</h1>
        <p className="subtitle">Track your spending with Regions Bank</p>
      </header>

      <main className="main-content">
        <section className="section">
          <h2>📊 Budget Overview</h2>
          <BudgetOverview budgets={budgets} categories={categories} />
        </section>

        <section className="section">
          <h2>📈 Spending by Category</h2>
          <SpendingChart budgets={budgets} categories={categories} />
        </section>

        <section className="section">
          <h2>💳 Recent Transactions</h2>
          <TransactionList 
            transactions={transactions} 
            categories={categories} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;
