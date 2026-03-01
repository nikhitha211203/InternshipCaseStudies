export type Currency = "USD" | "EUR" | "INR";

export interface IncomeEntry {
  id: string;
  description: string;
  amount: number;
  currency: Currency;
}

export interface ExpenseEntry {
  id: string;
  description: string;
  amount: number;
  currency: Currency;
}

export interface BudgetState {
  incomes: IncomeEntry[];
  expenses: ExpenseEntry[];
  selectedCurrency: Currency;
}

export type BudgetAction =
  | { type: "addIncome"; payload: IncomeEntry }
  | { type: "addExpense"; payload: ExpenseEntry }
  | { type: "changeCurrency"; payload: Currency };
