"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modelFromLanguage = modelFromLanguage;

var _javascript = _interopRequireDefault(require("./model/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function modelFromLanguage(language) {
  var Model; ///

  switch (language) {
    default:
      Model = _javascript["default"];
      break;
  }

  var model = Model.fromNothing();
  return model;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy5qcyJdLCJuYW1lcyI6WyJtb2RlbEZyb21MYW5ndWFnZSIsImxhbmd1YWdlIiwiTW9kZWwiLCJKYXZhU2NyaXB0TW9kZWwiLCJtb2RlbCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7O0FBRU8sU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDO0FBQzFDLE1BQUlDLEtBQUosQ0FEMEMsQ0FDOUI7O0FBRVosVUFBUUQsUUFBUjtBQUNFO0FBQVVDLE1BQUFBLEtBQUssR0FBR0Msc0JBQVI7QUFBeUI7QUFEckM7O0FBSUEsTUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFBZDtBQUVBLFNBQU9ELEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSmF2YVNjcmlwdE1vZGVsIGZyb20gXCIuL21vZGVsL2phdmFzY3JpcHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGVsRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gIGxldCBNb2RlbDsgIC8vL1xuXG4gIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICBkZWZhdWx0IDogTW9kZWwgPSBKYXZhU2NyaXB0TW9kZWw7IGJyZWFrO1xuICB9XG5cbiAgY29uc3QgbW9kZWwgPSBNb2RlbC5mcm9tTm90aGluZygpO1xuXG4gIHJldHVybiBtb2RlbDtcbn1cbiJdfQ==