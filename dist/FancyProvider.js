"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FancyProvider = void 0;

var _react = require("@emotion/react");

var _core = require("@material-ui/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "17fn8hb",
  styles: "width:100%;height:100%;background:gray"
} : {
  name: "mtbivx-FancyProvider",
  styles: "width:100%;height:100%;background:gray;label:FancyProvider;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GYW5jeVByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTUSIsImZpbGUiOiIuLi9zcmMvRmFuY3lQcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBGYW5jeVByb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17Y3JlYXRlTXVpVGhlbWUoe30pfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnZ3JheScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var FancyProvider = function FancyProvider(_ref) {
  var children = _ref.children;
  return (0, _react.jsx)(_core.ThemeProvider, {
    theme: (0, _core.createMuiTheme)({})
  }, (0, _react.jsx)("div", {
    css: _ref2
  }, children));
};

exports.FancyProvider = FancyProvider;