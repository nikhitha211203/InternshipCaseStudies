import React from "react";

interface WidgetListProps {
  widgets: string[];
  onSelect: (item: string) => void;
}

const WidgetList: React.FC<WidgetListProps> = React.memo(({ widgets, onSelect }) => {
  return (
    <ul>
      {widgets.map((w, i) => (
        <li key={i} onClick={() => onSelect(w)}>
          {w}
        </li>
      ))}
    </ul>
  );
});

export default WidgetList;