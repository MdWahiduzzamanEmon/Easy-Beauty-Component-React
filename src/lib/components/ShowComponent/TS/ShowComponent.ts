import React from "react";

interface showComponentProps {
  when: boolean;
  //children must be an array with only one element
  children: any[];
  FallBack?: React.ReactNode;
}

const Show = ({ when, children, FallBack }: showComponentProps) => {
  let child = children;
  if (!children) {
    return console.error('Show component must have a "children" prop');
  } else {
    child = [children] as any;
  }
  //when not boolean
  if (typeof when !== "boolean")
    return console.error('Show component "when" prop must be a boolean');
  //children not array
  if (!Array.isArray(child))
    return console.error('Show component "children" prop must be an array');
  //children array empty
  if (child.length === 0)
    return console.error('Show component "children" prop must not be empty');

  //children array with more than one element
  if (child.length > 1)
    return console.error(
      'Show component "children" prop must have only one element'
    );

  //when true
  if (when) return child[0];

  //when false
  if (!when) {
    if (FallBack) return FallBack;
    return null;
  }
};

export default Show;
