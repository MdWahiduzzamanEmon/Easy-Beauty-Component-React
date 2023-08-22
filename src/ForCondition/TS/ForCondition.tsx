import React, { ReactNode } from "react";

interface ForProps<T> {
  of: T[];
  children: (item: T, index: number) => ReactNode;
}

function For<T>({ of, children }: ForProps<T>): ReactNode {
  return (
    <React.Fragment>
      {of.map((item, index) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default For;
