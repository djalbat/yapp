"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextView;
    }
});
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../../plugin/plainText"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextView extends _view.default {
    static Plugin = _plainText.default;
    static firaCode = true;
    static initialContent = `Some plain text...`;
    static defaultProperties = {
        className: "plain-text"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgUGxhaW5UZXh0UGx1Z2luIGZyb20gXCIuLi8uLi9wbHVnaW4vcGxhaW5UZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIFBsdWdpbiA9IFBsYWluVGV4dFBsdWdpbjtcblxuICBzdGF0aWMgZmlyYUNvZGUgPSB0cnVlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBTb21lIHBsYWluIHRleHQuLi5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGxhaW4tdGV4dFwiXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlBsYWluVGV4dFZpZXciLCJWaWV3IiwiUGx1Z2luIiwiUGxhaW5UZXh0UGx1Z2luIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZEQUpKO2tFQUVXOzs7Ozs7QUFFYixNQUFNQSxzQkFBc0JDLGFBQUk7SUFDN0MsT0FBT0MsU0FBU0Msa0JBQWUsQ0FBQztJQUVoQyxPQUFPQyxXQUFXLEtBQUs7SUFFdkIsT0FBT0MsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUU3QyxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==