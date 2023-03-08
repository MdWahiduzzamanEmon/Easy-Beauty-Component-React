"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Show = _ref => {
  let {
    when,
    children,
    FallBack
  } = _ref;
  //when is not boolean
  if (typeof when !== "boolean") return console.error('Show component "when" prop must be a boolean');
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
var _default = Show;
exports.default = _default;