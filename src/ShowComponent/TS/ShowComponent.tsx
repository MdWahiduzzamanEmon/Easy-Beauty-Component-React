// import React from "react";

import React, { ReactNode } from "react";

// interface ForProps<T> {
//   of: T[];
//   children: (item: T, index: number) => ReactNode;
// }
type ShowProps<T> = {
  when: boolean;
  FallBack?: ReactNode;
  children: ReactNode;
};

function Show<T>({ when, FallBack, children }: ShowProps<T>): ReactNode {
  //   //when is not boolean
  //   if (typeof when !== "boolean")
  //     return console.error('Show component "when" prop must be a boolean');
  //   //not children
  //   if (!children) return console.error("children is required");

  //   //when false
  //   if (!when) {
  //     console.warn("Children is not rendered because when is false");
  //     if (FallBack) return FallBack;
  //     return null;
  //   }
  //   //when true return children and clean console
  //   if (when) {
  //     console.clear();
  //     return children;
  //   }
  // };
  return (
    <React.Fragment>
      {!when && FallBack ? FallBack : null}
      {when && children}
    </React.Fragment>
  );
}

export default Show;
