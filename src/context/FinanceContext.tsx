import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: string;
  vat: string;
  paymentMethod: string;
  iconType: 'food' | 'transport' | 'shopping' | 'income';
  type: 'income' | 'expense';
}

export interface Goal {
  id: string;
  title: string;
  current: string;
  total: string;
  progress: number;
  icon: 'car' | 'smartphone' | 'home';
}

export interface Reminder {
  id: string;
  title: string;
  date: string;
  amount: string;
  dueDate: string;
}

interface FinanceContextType {
  transactions: Transaction[];
  goals: Goal[];
  reminders: Reminder[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  addGoal: (goal: Omit<Goal, 'id'>) => void;
  addReminder: (reminder: Omit<Reminder, 'id'>) => void;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      title: 'Food',
      date: '20 Feb 2024',
      amount: '$20',
      vat: '0.5%',
      paymentMethod: 'Google Pay',
      iconType: 'food',
      type: 'expense',
    },
    {
      id: '2',
      title: 'Uber',
      date: '13 Mar 2024',
      amount: '$18',
      vat: '0.8%',
      paymentMethod: 'Cash',
      iconType: 'transport',
      type: 'expense',
    },
    {
      id: '3',
      title: 'Shopping',
      date: '11 Mar 2024',
      amount: '$400',
      vat: '0.12%',
      paymentMethod: 'Paytm',
      iconType: 'shopping',
      type: 'expense',
    },
  ]);

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'New Bike',
      current: '$300',
      total: '$600',
      progress: 0.5,
      icon: 'car',
    },
    {
      id: '2',
      title: 'Iphone 15 Pro',
      current: '$700',
      total: '$1,000',
      progress: 0.7,
      icon: 'smartphone',
    },
  ]);

  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      title: 'Bill Payment',
      date: '26 May 2024',
      amount: '$200',
      dueDate: '3 Jun 2024',
    },
    {
      id: '2',
      title: 'Car Loan',
      date: '26 May 2024',
      amount: '$600',
      dueDate: '11 July 2024',
    },
  ]);

  const addTransaction = (t: Omit<Transaction, 'id'>) => {
    const newTransaction = { ...t, id: Math.random().toString(36).substr(2, 9) };
    setTransactions([newTransaction, ...transactions]);
  };

  const addGoal = (g: Omit<Goal, 'id'>) => {
    const newGoal = { ...g, id: Math.random().toString(36).substr(2, 9) };
    setGoals([newGoal, ...goals]);
  };

  const addReminder = (r: Omit<Reminder, 'id'>) => {
    const newReminder = { ...r, id: Math.random().toString(36).substr(2, 9) };
    setReminders([newReminder, ...reminders]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, goals, reminders, addTransaction, addGoal, addReminder }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
