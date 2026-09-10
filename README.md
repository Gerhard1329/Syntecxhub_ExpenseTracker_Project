# 💰 Expense Tracker — Syntecxhub Internship (Project 1)

A responsive **Expense Tracker** built with **React** as part of the
[Syntecxhub](https://www.linkedin.com/company/syntecxhub/) Web Development Internship Program.

---

## 🔗 Live Demo

> 👉 **[Add your Vercel / Netlify link here after deploying]**

---

## ✨ Features

- ➕ Add expenses with title, amount, and category
- 🗑️ Delete expenses instantly
- 💵 Auto-calculated total and per-category breakdown
- 🔄 Fetches initial data from a **mock API** with loading & error states
- 🎯 Auto-focus on the title input using `useRef`
- 📱 Fully responsive layout (desktop → mobile)
- ♿ Accessible labels and ARIA attributes

---

## 🧠 React Hooks Used

| Hook | Purpose |
|------|---------|
| `useState` | Manage form inputs and the expenses list |
| `useEffect` | Fetch mock API data on mount; focus input |
| `useRef` | Focus the title input field |
| `useMemo` | Memoize total & category breakdown computations |
| `useCallback` | Memoize `addExpense` and `deleteExpense` handlers |

---

## 🛠️ Tech Stack

- **React 18**
- **Vite** (build tool)
- **Vanilla CSS** (no framework — clean, lightweight)
- **Intl.NumberFormat** for currency formatting

---

## 📁 Folder Structure
