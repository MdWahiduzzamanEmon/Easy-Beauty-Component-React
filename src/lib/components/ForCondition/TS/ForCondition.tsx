// Path: src/lib/components/ForCondition/ForCondition.tsx

import React from "react";

interface ForProps {
  of: any[];
  children: (props: { item: any; index: number }) => React.ReactNode;
}

export const For = ({ of, children }: ForProps) => {
  if (!of) return null;
  return of.map((item, index) => children({ item, index }));
};

