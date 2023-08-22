// Path: src/lib/components/ForCondition/ForCondition.tsx

// import React from "react";

type ForProps = {
  of: any[];
  children: ({ item, index }: { item: any; index: number }) => JSX.Element;
};

const For = ({ of, children }: ForProps) => {
  if (!of) return console.error("ForCondition: of is required");
  if (!children) return console.error("ForCondition: children is required");
  if (!Array.isArray(of))
    return console.error("ForCondition: of must be an array");
  return of?.map((item, index) => children({ item, index }));
};

export default For;
