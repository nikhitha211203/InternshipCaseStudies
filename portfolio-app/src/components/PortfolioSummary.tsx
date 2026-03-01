export interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

import React from "react";


type PortfolioSummaryProps = {
  assets: Asset[];
};

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ assets }) => {

  const totalValue = assets.reduce((sum, asset) => {
    return sum + asset.value;
  }, 0);

  const averageChange =
    assets.length > 0
      ? assets.reduce((sum, asset) => sum + asset.change, 0) / assets.length
      : 0;

  return (
    <div style={styles.container}>
      <h2>Portfolio Summary</h2>

      <div style={styles.card}>
        <h3>Total Portfolio Value</h3>
        <p>₹ {totalValue.toFixed(2)}</p>
      </div>

      <div style={styles.card}>
        <h3>Average Percentage Change</h3>
        <p
          style={{
            color: averageChange >= 0 ? "green" : "red",
            fontWeight: "bold"
          }}
        >
          {averageChange.toFixed(2)}%
        </p>
      </div>

      {assets.length === 0 && <p>No assets added yet.</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    marginTop: "20px",
    maxWidth: "400px"
  },
  card: {
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "6px"
  }
};

export default PortfolioSummary;
