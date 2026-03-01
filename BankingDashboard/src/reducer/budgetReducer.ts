import type{ BudgetState, BudgetAction } from "../types/budgetTypes";

export function budgetReducer(
  state: BudgetState,
  action: BudgetAction
): BudgetState {
  switch (action.type) {
    case "addIncome":
      return { ...state, incomes: [...state.incomes, action.payload] };

    case "addExpense":
      const totalIncome = state.incomes.reduce((s, i) => s + i.amount, 0);
      const totalExpense = state.expenses.reduce((s, e) => s + e.amount, 0);

      if (totalExpense + action.payload.amount > totalIncome) {
        alert("Insufficient balance");
        return state;
      }

      return { ...state, expenses: [...state.expenses, action.payload] };

    case "changeCurrency":
      return { ...state, selectedCurrency: action.payload };

    default:
      return state;
  }
}
