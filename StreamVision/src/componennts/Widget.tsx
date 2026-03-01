import React, { useMemo } from "react";

interface WidgetProps {
  items: string[];
  filter: string;
}

const Widget: React.FC<WidgetProps> = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return (
    <div>
      {filteredItems.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default React.memo(Widget);