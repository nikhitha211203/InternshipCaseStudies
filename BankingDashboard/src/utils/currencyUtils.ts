import type{ Currency } from "../types/budgetTypes";

export function convertAmount(
  amount: number,
  from: Currency,
  to: Currency,
  rates: Record<Currency, number>
): number {
  const baseValue = amount / rates[from];
  return baseValue * rates[to];
}
