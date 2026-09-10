import { useState, useEffect } from "react";

const mockExpenses = [
  { id: 1, title: "Groceries", amount: 45.5, category: "Food" },
  { id: 2, title: "Bus Pass", amount: 30, category: "Transport" },
  { id: 3, title: "Netflix", amount: 15.99, category: "Entertainment" },
  { id: 4, title: "Electric Bill", amount: 72.4, category: "Bills" },
];

const fetchMockExpenses = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.05) {
        reject(new Error("Failed to load expenses. Please try again."));
      } else {
        resolve(mockExpenses);
      }
    }, 1000);
  });

const useMockExpenses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetchMockExpenses()
      .then((res) => { if (isMounted) { setData(res); setLoading(false); } })
      .catch((err) => { if (isMounted) { setError(err.message); setLoading(false); } });
    return () => { isMounted = false; };
  }, []);

  return { data, loading, error };
};

export default useMockExpenses;
