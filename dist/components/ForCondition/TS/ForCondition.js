"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Path: src/lib/components/ForCondition/ForCondition.tsx

const For = _ref => {
  let {
    of,
    children
  } = _ref;
  if (!of) return console.error("ForCondition: of is required");
  if (!children) return console.error("ForCondition: children is required");
  if (!Array.isArray(of)) return console.error("ForCondition: of must be an array");
  return of.map((item, index) => children({
    item,
    index
  }));
};
var _default = For;
exports.default = _default;