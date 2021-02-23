"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FancyButton = require("./FancyButton");

Object.keys(_FancyButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FancyButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FancyButton[key];
    }
  });
});

var _test = require("./Test/test");

Object.keys(_test).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _test[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test[key];
    }
  });
});