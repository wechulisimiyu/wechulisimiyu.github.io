import React from "react";

type FeatureItem = { label: string; type: "check" | "cross" };
type FeatureListProps = { items: FeatureItem[] };

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="list-feature">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={item.type === "check" ? "item-check" : "item-cross"}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
