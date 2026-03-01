import React, { useReducer, useMemo, useState } from "react";

/* =========================
   TYPES
========================= */

// Supported currencies
export type Currency = "USD" | "INR" | "EUR";

// Income Entry Interface
export interface IncomeEntry {
  id: string;
  amount: number;
  currency: Currency;
  source: string;
}

// Expense Entry Interface
export interface ExpenseEntry {
  id: string;
  amount: number;
  currency: Currency;
  category: string;
}

// Type-safe conversion rate map
export type ConversionRates = {
  [base in Currency]: {
    [target in Currency]: number;
  };
};

// Component Props
interface BudgetTrackerProps {
  conversionRates: ConversionRates;
}

/* =========================
   REDUCER
========================= */

type State = {
  incomes: IncomeEntry[];
  expenses: ExpenseEntry[];
};

type Action =
  | { type: "addIncome"; payload: IncomeEntry }
  | { type: "addExpense"; payload: ExpenseEntry };

const initialState: State = {
  incomes: [],
  expenses: [],
};

function budgetReducer(state: State, action: Action): State {
  switch (action.type) {
    case "addIncome":
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };

    case "addExpense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
}

/* =========================
   COMPONENT
========================= */

const BudgetTracker: React.FC<BudgetTrackerProps> = ({
  conversionRates,
}) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const [selectedCurrency, setSelectedCurrency] =
    useState<Currency>("USD");

  /* =========================
     Currency Conversion
  ========================= */

  const convert = (
    amount: number,
    from: Currency,
    to: Currency
  ): number => {
    return amount * conversionRates[from][to];
  };

  /* =========================
     Calculations
  ========================= */

  const totalIncome = useMemo(() => {
    return state.incomes.reduce(
      (acc, income) =>
        acc + convert(income.amount, income.currency, selectedCurrency),
      0
    );
  }, [state.incomes, selectedCurrency]);

  const totalExpenses = useMemo(() => {
    return state.expenses.reduce(
      (acc, expense) =>
        acc + convert(expense.amount, expense.currency, selectedCurrency),
      0
    );
  }, [state.expenses, selectedCurrency]);

  const netBalance = totalIncome - totalExpenses;

  /* =========================
     Handlers
  ========================= */

  const addIncome = () => {
    const newIncome: IncomeEntry = {
      id: crypto.randomUUID(),
      amount: 100,
      currency: "USD",
      source: "Salary",
    };

    dispatch({ type: "addIncome", payload: newIncome });
  };

  const addExpense = () => {
    const expenseAmount = 50;

    // Prevent negative balance (type-safe check)
    if (expenseAmount > netBalance) {
      alert("Cannot add expense. Balance would become negative.");
      return;
    }

    const newExpense: ExpenseEntry = {
      id: crypto.randomUUID(),
      amount: expenseAmount,
      currency: "USD",
      category: "Food",
    };

    dispatch({ type: "addExpense", payload: newExpense });
  };

  /* =========================
     UI
  ========================= */

  return (
    <div style={{ padding: "20px" }}>
      <h2>Budget Tracker</h2>

      <div>
        <label>Select Currency: </label>
        <select
          value={selectedCurrency}
          onChange={(e) =>
            setSelectedCurrency(e.target.value as Currency)
          }
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <hr />

      <button onClick={addIncome}>Add Income</button>
      <button onClick={addExpense}>Add Expense</button>

      <hr />

      <h3>Summary ({selectedCurrency})</h3>
      <p>Total Income: {totalIncome.toFixed(2)}</p>
      <p>Total Expenses: {totalExpenses.toFixed(2)}</p>
      <p>
        <strong>Net Balance: {netBalance.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default BudgetTracker;


