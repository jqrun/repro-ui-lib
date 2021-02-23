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

var _FancyProvider = require("./FancyProvider");

Object.keys(_FancyProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FancyProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FancyProvider[key];
    }
  });
});