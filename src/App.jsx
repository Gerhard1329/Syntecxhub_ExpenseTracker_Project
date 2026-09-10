import ExpenseTracker from "./components/ExpenseTracker";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ExpenseTracker />
      <footer className="app-footer">
        <p>
          Built with â¤ï¸ for the{" "}
          <a href="https://www.linkedin.com/company/syntecxhub/" target="_blank" rel="noopener noreferrer">
            @Syntecxhub
          </a>{" "}
          Web Development Internship
        </p>
      </footer>
    </div>
  );
}

export default App;
