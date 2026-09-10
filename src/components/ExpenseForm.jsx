import { useState } from "react";
import "../styles/ExpenseForm.css";

const CATEGORIES = ["Food", "Transport", "Entertainment", "Bills", "Other"];

const ExpenseForm = ({ onAdd, titleInputRef }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount || isNaN(amount) || Number(amount) <= 0) return;
    onAdd({ title: title.trim(), amount: parseFloat(amount), category });
    setTitle(""); setAmount(""); setCategory("Food");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input ref={titleInputRef} type="text" placeholder="Expense title" value={title} onChange={(e) => setTitle(e.target.value)} aria-label="Expense title" required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} step="0.01" min="0" aria-label="Amount" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category">
        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
