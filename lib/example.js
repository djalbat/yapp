"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _index = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

///
///
var yapp = _index["default"].fromContent("\"use strict\";\n\nimport \"juxtapose\";\n\nimport { Body } from \"easy\";\n\nfunction simpleApp(selector) {\n  const body = new Body(selector);\n\n  body.mount(\n\n    <p>\n      A simple application.\n    </p>\n\n  );\n}\n\nexport default withStyle(simpleApp)`\n\n  color: #333;\n\n`;\n");

var body = document.querySelector("body");
(0, _index.renderStyles)();
body.appendChild(yapp.domElement);
yapp.didMount();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsieWFwcCIsIllhcHAiLCJmcm9tQ29udGVudCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJkaWRNb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQTs7Ozs7O0FBQTRCO0FBRVk7QUFFeEMsSUFBTUEsSUFBSSxHQUFHQyxrQkFBS0MsV0FBTCxvU0FBYjs7QUF5QkEsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUVBO0FBRUFGLElBQUksQ0FBQ0csV0FBTCxDQUFpQk4sSUFBSSxDQUFDTyxVQUF0QjtBQUVBUCxJQUFJLENBQUNRLFFBQUwiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IHJlbmRlclN0eWxlcyB9IGZyb20gXCIuL2luZGV4XCI7IC8vL1xuXG5jb25zdCB5YXBwID0gWWFwcC5mcm9tQ29udGVudChgXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuZnVuY3Rpb24gc2ltcGxlQXBwKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keShzZWxlY3Rvcik7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShzaW1wbGVBcHApXFxgXG5cbiAgY29sb3I6ICMzMzM7XG5cblxcYDtcbmApO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHlhcHAuZG9tRWxlbWVudCk7XG5cbnlhcHAuZGlkTW91bnQoKTtcbiJdfQ==