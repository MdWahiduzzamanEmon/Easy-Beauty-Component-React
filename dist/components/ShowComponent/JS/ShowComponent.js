"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Show = _ref => {
  let {
    when,
    children
  } = _ref;
  if (!when) return console.error('Show component requires a boolean prop "when"');
  return when ? children : null;
};
var _default = Show;
exports.default = _default;