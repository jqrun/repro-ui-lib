"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FancyButton = void 0;

var _core = require("@material-ui/core");

var FancyButton = function FancyButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(_core.Button, {
    sx: {
      background: 'red'
    }
  }, children);
};

exports.FancyButton = FancyButton;