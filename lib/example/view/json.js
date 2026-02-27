"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONView;
    }
});
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
const _json = /*#__PURE__*/ _interop_require_default(require("../../plugin/json"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JSONView extends _view.default {
    static Plugin = _json.default;
    static firaCode = true;
    static initialContent = `{  
  "type": "book",
  "title": "Look to Windward",
  "author": "Look to Windward",
  "stores" : [{
    "identifier": 123
  }],
  "details" : {
    "in-print": true,
    "stock-count": 123
  }
}`;
    static defaultProperties = {
        className: "json"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEpTT05QbHVnaW4gZnJvbSBcIi4uLy4uL3BsdWdpbi9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05WaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBQbHVnaW4gPSBKU09OUGx1Z2luO1xuXG4gIHN0YXRpYyBmaXJhQ29kZSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYHsgIFxuICBcInR5cGVcIjogXCJib29rXCIsXG4gIFwidGl0bGVcIjogXCJMb29rIHRvIFdpbmR3YXJkXCIsXG4gIFwiYXV0aG9yXCI6IFwiTG9vayB0byBXaW5kd2FyZFwiLFxuICBcInN0b3Jlc1wiIDogW3tcbiAgICBcImlkZW50aWZpZXJcIjogMTIzXG4gIH1dLFxuICBcImRldGFpbHNcIiA6IHtcbiAgICBcImluLXByaW50XCI6IHRydWUsXG4gICAgXCJzdG9jay1jb3VudFwiOiAxMjNcbiAgfVxufWA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJqc29uXCJcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSlNPTlZpZXciLCJWaWV3IiwiUGx1Z2luIiwiSlNPTlBsdWdpbiIsImZpcmFDb2RlIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2REFKSjs2REFFTTs7Ozs7O0FBRVIsTUFBTUEsaUJBQWlCQyxhQUFJO0lBQ3hDLE9BQU9DLFNBQVNDLGFBQVUsQ0FBQztJQUUzQixPQUFPQyxXQUFXLEtBQUs7SUFFdkIsT0FBT0MsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7O0NBVzFCLENBQUMsQ0FBQztJQUVELE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9