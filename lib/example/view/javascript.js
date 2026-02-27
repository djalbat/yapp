"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptView;
    }
});
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
const _javascript = /*#__PURE__*/ _interop_require_default(require("../../plugin/javascript"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JavaScriptView extends _view.default {
    static Plugin = _javascript.default;
    static firaCode = true;
    static initialContent = `"use strict";

import "juxtapose";

import withStyle from "easy-with-style"; ///

import { Body } from "easy";

function simpleApplication(selector) {
  const body = new Body(selector);

  body.mount(

    <p>
      A simple application.
    </p>

  );
}

export default withStyle(simpleApplication)\`

  color: #333;

\`;`;
    static defaultProperties = {
        className: "javascript"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEphdmFTY3JpcHRQbHVnaW4gZnJvbSBcIi4uLy4uL3BsdWdpbi9qYXZhc2NyaXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luO1xuXG4gIHN0YXRpYyBmaXJhQ29kZSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7IC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuZnVuY3Rpb24gc2ltcGxlQXBwbGljYXRpb24oc2VsZWN0b3IpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KHNlbGVjdG9yKTtcblxuICBib2R5Lm1vdW50KFxuXG4gICAgPHA+XG4gICAgICBBIHNpbXBsZSBhcHBsaWNhdGlvbi5cbiAgICA8L3A+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKHNpbXBsZUFwcGxpY2F0aW9uKVxcYFxuXG4gIGNvbG9yOiAjMzMzO1xuXG5cXGA7YDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImphdmFzY3JpcHRcIlxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0VmlldyIsIlZpZXciLCJQbHVnaW4iLCJKYXZhU2NyaXB0UGx1Z2luIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZEQUpKO21FQUVZOzs7Ozs7QUFFZCxNQUFNQSx1QkFBdUJDLGFBQUk7SUFDOUMsT0FBT0MsU0FBU0MsbUJBQWdCLENBQUM7SUFFakMsT0FBT0MsV0FBVyxLQUFLO0lBRXZCLE9BQU9DLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QnhCLENBQUMsQ0FBQztJQUVILE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9