import React from "react";

interface showComponentProps {
  when: boolean;
  //children must be an array with only one element
  children: any[];
  FallBack?: React.ReactNode;
}

const Show = ({ when, children, FallBack }: showComponentProps) => {
  //when is not boolean
  if (typeof when !== "boolean")
    return console.error('Show component "when" prop must be a boolean');
  //not children
  if (!children) return console.error("children is required");

  //when false
  if (!when) {
    console.warn("Children is not rendered because when is false");
    if (FallBack) return FallBack;
    return null;
  }
  //when true return children and clean console
  if (when) {
    console.clear();
    return children;
  }
};

export default Show;
