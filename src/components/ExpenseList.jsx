import { formatCurrency } from "../utils/formatCurrency";
import "../styles/ExpenseList.css";

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) return <p className="status">No expenses yet. Add one above! ðŸ‘†</p>;

  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <li key={exp.id} className="expense-item">
          <div className="expense-info">
            <strong>{exp.title}</strong>
            <span className="badge">{exp.category}</span>
          </div>
          <div className="expense-actions">
            <span className="amount">{formatCurrency(exp.amount)}</span>
            <button onClick={() => onDelete(exp.id)} aria-label={`Delete ${exp.title}`} title="Delete">âœ•</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
