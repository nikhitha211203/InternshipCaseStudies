import BudgetTracker from "./components/BudgetTracker";
import type { ConversionRates } from "./components/BudgetTracker";
import React from "react";

function App() {
  const conversionRates: ConversionRates = {
    USD: { USD: 1, INR: 83, EUR: 0.9 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011 },
    EUR: { USD: 1.1, INR: 92, EUR: 1 },
  };

  return (
    <div>
      <BudgetTracker conversionRates={conversionRates} />
    </div>
  );
}

export default App;
