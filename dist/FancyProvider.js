"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FancyProvider = void 0;

var _core = require("@material-ui/core");

var FancyProvider = function FancyProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(_core.ThemeProvider, {
    theme: (0, _core.createMuiTheme)({})
  }, /*#__PURE__*/React.createElement(_core.Box, {
    sx: {
      width: '100%',
      height: '100%',
      background: 'gray'
    }
  }, children));
};

exports.FancyProvider = FancyProvider;