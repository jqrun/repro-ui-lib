"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FancyButton = void 0;

var _react = require("@emotion/react");

var _core = require("@material-ui/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "7ass1o",
  styles: "background:red"
} : {
  name: "19t9l3n-FancyButton",
  styles: "background:red;label:FancyButton;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GYW5jeUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWlCIiwiZmlsZSI6Ii4uL3NyYy9GYW5jeUJ1dHRvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRmFuY3lCdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPEJ1dHRvbiBjc3M9e3sgYmFja2dyb3VuZDogJ3JlZCcgfX0+e2NoaWxkcmVufTwvQnV0dG9uPjtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var FancyButton = function FancyButton(_ref) {
  var children = _ref.children;
  return (0, _react.jsx)(_core.Button, {
    css: _ref2
  }, children);
};

exports.FancyButton = FancyButton;