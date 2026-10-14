export const categories = [
  { id: 1, name: 'Groceries', color: '#10b981', icon: '🛒' },
  { id: 2, name: 'Dining', color: '#f59e0b', icon: '🍽️' },
  { id: 3, name: 'Transportation', color: '#3b82f6', icon: '🚗' },
  { id: 4, name: 'Entertainment', color: '#8b5cf6', icon: '🎮' },
  { id: 5, name: 'Shopping', color: '#ec4899', icon: '🛍️' },
  { id: 6, name: 'Bills', color: '#ef4444', icon: '📄' },
  { id: 7, name: 'Other', color: '#6b7280', icon: '📦' },
];

export const transactions = [
  {
    id: 1,
    date: '2026-10-14',
    merchant: 'Publix Supermarket',
    amount: -87.43,
    categoryId: 1,
  },
  {
    id: 2,
    date: '2026-10-13',
    merchant: 'Shell Gas Station',
    amount: -45.20,
    categoryId: 3,
  },
  {
    id: 3,
    date: '2026-10-13',
    merchant: 'Netflix',
    amount: -15.99,
    categoryId: 4,
  },
  {
    id: 4,
    date: '2026-10-12',
    merchant: 'Chipotle',
    amount: -12.85,
    categoryId: 2,
  },
  {
    id: 5,
    date: '2026-10-12',
    merchant: 'Amazon',
    amount: -67.99,
    categoryId: 5,
  },
  {
    id: 6,
    date: '2026-10-11',
    merchant: 'Regions Bank',
    amount: -35.00,
    categoryId: 6,
  },
  {
    id: 7,
    date: '2026-10-11',
    merchant: 'Kroger',
    amount: -54.32,
    categoryId: 1,
  },
  {
    id: 8,
    date: '2026-10-10',
    merchant: 'Starbucks',
    amount: -6.75,
    categoryId: 2,
  },
  {
    id: 9,
    date: '2026-10-10',
    merchant: 'Target',
    amount: -123.45,
    categoryId: 5,
  },
  {
    id: 10,
    date: '2026-10-09',
    merchant: 'Electric Company',
    amount: -142.50,
    categoryId: 6,
  },
];

export const budgets = [
  { categoryId: 1, limit: 400, spent: 141.75 },
  { categoryId: 2, limit: 200, spent: 19.60 },
  { categoryId: 3, limit: 150, spent: 45.20 },
  { categoryId: 4, limit: 100, spent: 15.99 },
  { categoryId: 5, limit: 300, spent: 191.44 },
  { categoryId: 6, limit: 500, spent: 177.50 },
  { categoryId: 7, limit: 100, spent: 0 },
];
