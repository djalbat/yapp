"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentFromLanguage = documentFromLanguage;

var _javascript = _interopRequireDefault(require("./document/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function documentFromLanguage(language) {
  var Document; ///

  switch (language) {
    default:
      Document = _javascript["default"];
      break;
  }

  var document = Document.fromNothing();
  return document;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudEZyb21MYW5ndWFnZSIsImxhbmd1YWdlIiwiRG9jdW1lbnQiLCJKYXZhU2NyaXB0RG9jdW1lbnQiLCJkb2N1bWVudCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRU8sU0FBU0Esb0JBQVQsQ0FBOEJDLFFBQTlCLEVBQXdDO0FBQzdDLE1BQUlDLFFBQUosQ0FENkMsQ0FDOUI7O0FBRWYsVUFBUUQsUUFBUjtBQUNFO0FBQVVDLE1BQUFBLFFBQVEsR0FBR0Msc0JBQVg7QUFBK0I7QUFEM0M7O0FBSUEsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLFdBQVQsRUFBakI7QUFFQSxTQUFPRCxRQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEphdmFTY3JpcHREb2N1bWVudCBmcm9tIFwiLi9kb2N1bWVudC9qYXZhc2NyaXB0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudEZyb21MYW5ndWFnZShsYW5ndWFnZSkge1xuICBsZXQgRG9jdW1lbnQ7ICAvLy9cblxuICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgZGVmYXVsdCA6IERvY3VtZW50ID0gSmF2YVNjcmlwdERvY3VtZW50OyBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGRvY3VtZW50ID0gRG9jdW1lbnQuZnJvbU5vdGhpbmcoKTtcblxuICByZXR1cm4gZG9jdW1lbnQ7XG59XG4iXX0=