import { formatCurrency } from "../utils/formatCurrency";
import "../styles/ExpenseSummary.css";

const ExpenseSummary = ({ total, categoryTotals }) => {
  return (
    <div className="summary">
      <h2>Total: {formatCurrency(total)}</h2>
      {Object.keys(categoryTotals).length > 0 && (
        <ul className="summary-list">
          {Object.entries(categoryTotals).map(([cat, amt]) => (
            <li key={cat}><span>{cat}</span><span>{formatCurrency(amt)}</span></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseSummary;
