import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import Loader from "./Loader";
import useMockExpenses from "../hooks/useMockExpenses";
import "../styles/ExpenseTracker.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const { data, loading, error } = useMockExpenses();
  const titleInputRef = useRef(null);

  useEffect(() => { if (data) setExpenses(data); }, [data]);
  useEffect(() => { titleInputRef.current?.focus(); }, []);

  const addExpense = useCallback((expense) => {
    setExpenses((prev) => [{ id: Date.now(), ...expense }, ...prev]);
    titleInputRef.current?.focus();
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  }, []);

  const total = useMemo(
    () => expenses.reduce((sum, exp) => sum + exp.amount, 0),
    [expenses]
  );

  const categoryTotals = useMemo(
    () => expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {}),
    [expenses]
  );

  return (
    <div className="tracker-container">
      <header className="tracker-header">
        <h1>ðŸ’° Expense Tracker</h1>
        <p className="subtitle">Track your daily spending with ease</p>
      </header>

      <ExpenseForm onAdd={addExpense} titleInputRef={titleInputRef} />

      {loading && <Loader />}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <>
          <ExpenseSummary total={total} categoryTotals={categoryTotals} />
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </>
      )}
    </div>
  );
};

export default ExpenseTracker;
