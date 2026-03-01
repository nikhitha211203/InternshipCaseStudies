import React, { useState, useCallback } from "react";
import Widget from "./Widget";
import WidgetList from "./WidgetList";

const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState("");
  const items = ["React", "Memoization", "Performance"];

  const handleSelect = useCallback((item: string) => {
    console.log("Selected:", item);
  }, []);

  return (
    <>
      <input
        placeholder="Filter widgets"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <Widget items={items} filter={filter} />
      <WidgetList widgets={items} onSelect={handleSelect} />
    </>
  );
};

export default Dashboard;