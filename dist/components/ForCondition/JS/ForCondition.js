"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.For = void 0;
const For = _ref => {
  let {
    of,
    children
  } = _ref;
  if (!of) return null;
  return of.map((item, index) => {
    return children({
      item,
      index
    });
  });
};

//make it in typescript
exports.For = For;