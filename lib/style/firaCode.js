"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _defaults = require("../defaults");
const firaCodeStyle = (host = _defaults.DEFAULT_HOST)=>`

  @font-face {
    src: url("${host}/css/woff2/FiraCode-Regular.woff2");
    font-family: "Fira Code";
    font-weight: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/FiraCode-Bold.woff2");
    font-family: "Fira Code";
    font-weight: bold;
  }

`;
const _default = firaCodeStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9maXJhQ29kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9IT1NUIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IGZpcmFDb2RlU3R5bGUgPSAoaG9zdCA9IERFRkFVTFRfSE9TVCkgPT4gYFxuXG4gIEBmb250LWZhY2Uge1xuICAgIHNyYzogdXJsKFwiJHtob3N0fS9jc3Mvd29mZjIvRmlyYUNvZGUtUmVndWxhci53b2ZmMlwiKTtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICBAZm9udC1mYWNlIHtcbiAgICBzcmM6IHVybChcIiR7aG9zdH0vY3NzL3dvZmYyL0ZpcmFDb2RlLUJvbGQud29mZjJcIik7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZmlyYUNvZGVTdHlsZTtcbiJdLCJuYW1lcyI6WyJmaXJhQ29kZVN0eWxlIiwiaG9zdCIsIkRFRkFVTFRfSE9TVCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0JBOzs7ZUFBQTs7OzBCQWxCNkI7QUFFN0IsTUFBTUEsZ0JBQWdCLENBQUNDLE9BQU9DLHNCQUFZLEdBQUssQ0FBQzs7O2NBR2xDLEVBQUVELEtBQUs7Ozs7OztjQU1QLEVBQUVBLEtBQUs7Ozs7O0FBS3JCLENBQUM7TUFFRCxXQUFlRCJ9