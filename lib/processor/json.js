"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONProcessor;
    }
});
const _occamquery = require("occam-query");
const _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
const _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*");
class JSONProcessor extends _processor.default {
    process(tokens, node) {
        if (node === null) {
            return;
        }
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = _error.default;
            return token;
        }, errorTerminalNodeQuery);
    }
    static fromNothing() {
        return _processor.default.fromNothing(JSONProcessor);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLyovZXJyb3IvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05Qcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBFcnJvclRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSlNPTlByb2Nlc3Nvcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUHJvY2Vzc29yIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0b2tlbiIsIkVycm9yVG9rZW4iLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs0QkFQQztrRUFFQTs4REFDQzs7Ozs7O0FBRXZCLE1BQU1DLHlCQUF5QkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUM7QUFFM0MsTUFBTUgsc0JBQXNCSSxrQkFBUztJQUNsREMsUUFBUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUU7UUFDcEIsSUFBSUEsU0FBUyxNQUFNO1lBQ2pCO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLG9DQUFvQyxDQUFDRixRQUFRQyxNQUFNLENBQUNFO1lBQ3ZELE1BQU1DLFFBQVFDLGNBQVU7WUFFeEIsT0FBT0Q7UUFDVCxHQUFHVDtJQUNMO0lBRUEsT0FBT1csY0FBYztRQUFFLE9BQU9SLGtCQUFTLENBQUNRLFdBQVcsQ0FBQ1o7SUFBZ0I7QUFDdEUifQ==