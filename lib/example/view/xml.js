"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLView;
    }
});
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
const _xml = /*#__PURE__*/ _interop_require_default(require("../../plugin/xml"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class XMLView extends _view.default {
    static Plugin = _xml.default;
    static firaCode = false;
    static initialContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Look to Windward by Iain M. Banks -->
<book>
  <name>
    Look to Windward
  </name>
  <author>
    Iain M. Banks
  </author>
  <language>
    English
  </language>
  <genre>
    Science fiction
  </genre>
</book>`;
    static defaultProperties = {
        className: "xml"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi8uLi9wbHVnaW4veG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIFBsdWdpbiA9IFhNTFBsdWdpbjtcblxuICBzdGF0aWMgZmlyYUNvZGUgPSBmYWxzZTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48IS0tIExvb2sgdG8gV2luZHdhcmQgYnkgSWFpbiBNLiBCYW5rcyAtLT5cbjxib29rPlxuICA8bmFtZT5cbiAgICBMb29rIHRvIFdpbmR3YXJkXG4gIDwvbmFtZT5cbiAgPGF1dGhvcj5cbiAgICBJYWluIE0uIEJhbmtzXG4gIDwvYXV0aG9yPlxuICA8bGFuZ3VhZ2U+XG4gICAgRW5nbGlzaFxuICA8L2xhbmd1YWdlPlxuICA8Z2VucmU+XG4gICAgU2NpZW5jZSBmaWN0aW9uXG4gIDwvZ2VucmU+XG48L2Jvb2s+YDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInhtbFwiXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlhNTFZpZXciLCJWaWV3IiwiUGx1Z2luIiwiWE1MUGx1Z2luIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZEQUpKOzREQUVLOzs7Ozs7QUFFUCxNQUFNQSxnQkFBZ0JDLGFBQUk7SUFDdkMsT0FBT0MsU0FBU0MsWUFBUyxDQUFDO0lBRTFCLE9BQU9DLFdBQVcsTUFBTTtJQUV4QixPQUFPQyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O09BZXBCLENBQUMsQ0FBQztJQUVQLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9