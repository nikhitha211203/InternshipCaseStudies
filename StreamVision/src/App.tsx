import React from "react";
import Dashboard from "./componennts/Dashboard";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>StreamVision Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;