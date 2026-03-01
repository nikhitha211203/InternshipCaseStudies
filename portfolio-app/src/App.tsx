import { useState } from "react";
import PortfolioSummary from "./components/PortfolioSummary";
import AssetEditor from "./components/AssetEditor";
import type{ Asset } from "./types/Asset";
import "./App.css";

function App() {
  const [assets, setAssets] = useState<Asset[]>([
    { name: "Stock A", symbol: "A", value: 10000, change: 2.5 },
    { name: "Stock B", symbol: "B", value: 15000, change: -1.2 },
    { name: "Crypto C", symbol: "C", value: 5000, change: 4.1 },
  ]);

  const handleUpdate = (newAsset: Asset) => {
    setAssets((prev) => [...prev, newAsset]);
  };

  return (
    <div>
      <h1>My Portfolio</h1>

      <AssetEditor onUpdate={handleUpdate} />

      <PortfolioSummary assets={assets} />
    </div>
  );
}

export default App;
