"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLProcessor;
    }
});
const _occamquery = require("occam-query");
const _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
const _name = /*#__PURE__*/ _interop_require_default(require("../token/significant/name"));
const _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
const _comment = /*#__PURE__*/ _interop_require_default(require("../token/significant/comment"));
const _attribute = /*#__PURE__*/ _interop_require_default(require("../token/significant/attribute"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const nameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//name/@*"), errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*"), attributeTerminalNodeQuery = _occamquery.Query.fromExpressionString("//attribute/@identifier"), commentNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//comment");
class XMLProcessor extends _processor.default {
    process(tokens, node) {
        if (node === null) {
            return;
        }
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = _name.default;
            return token;
        }, nameTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = _error.default;
            return token;
        }, errorTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = _attribute.default;
            return token;
        }, attributeTerminalNodeQuery);
        this.replaceNonTerminalNodesSignificantTokens(tokens, node, (content)=>{
            const token = _comment.default;
            return token;
        }, commentNonTerminalNodeQuery);
    }
    static fromNothing() {
        return _processor.default.fromNothing(XMLProcessor);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBOYW1lVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L25hbWVcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IENvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudFwiO1xuaW1wb3J0IEF0dHJpYnV0ZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9hdHRyaWJ1dGVcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL25hbWUvQCpcIiksXG4gICAgICBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9lcnJvci9AKlwiKSxcbiAgICAgIGF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2F0dHJpYnV0ZS9AaWRlbnRpZmllclwiKSxcbiAgICAgIGNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9jb21tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBOYW1lVG9rZW47XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LCBuYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBFcnJvclRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IEF0dHJpYnV0ZVRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gQ29tbWVudFRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhYTUxQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiWE1MUHJvY2Vzc29yIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJhdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSIsImNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSIsIlByb2Nlc3NvciIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInRva2VuIiwiTmFtZVRva2VuIiwiRXJyb3JUb2tlbiIsIkF0dHJpYnV0ZVRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsIkNvbW1lbnRUb2tlbiIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQXFCQTs7OzRCQWJDO2tFQUVBOzZEQUNBOzhEQUNDO2dFQUNFO2tFQUNFOzs7Ozs7QUFFM0IsTUFBTUMsd0JBQXdCQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxjQUNuREMseUJBQXlCRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxnQkFDcERFLDZCQUE2QkgsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsNEJBQ3hERyw4QkFBOEJKLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRWhELE1BQU1ILHFCQUFxQk8sa0JBQVM7SUFDakRDLFFBQVFDLE1BQU0sRUFBRUMsSUFBSSxFQUFFO1FBQ3BCLElBQUlBLFNBQVMsTUFBTTtZQUNqQjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxDQUFDRTtZQUN2RCxNQUFNQyxRQUFRQyxhQUFTO1lBRXZCLE9BQU9EO1FBQ1QsR0FBR1o7UUFFSCxJQUFJLENBQUNVLG9DQUFvQyxDQUFDRixRQUFRQyxNQUFNLENBQUNFO1lBQ3ZELE1BQU1DLFFBQVFFLGNBQVU7WUFFeEIsT0FBT0Y7UUFDVCxHQUFHVDtRQUVILElBQUksQ0FBQ08sb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sQ0FBQ0U7WUFDdkQsTUFBTUMsUUFBUUcsa0JBQWM7WUFFNUIsT0FBT0g7UUFDVCxHQUFHUjtRQUVILElBQUksQ0FBQ1ksd0NBQXdDLENBQUNSLFFBQVFDLE1BQU0sQ0FBQ0U7WUFDM0QsTUFBTUMsUUFBUUssZ0JBQVk7WUFFMUIsT0FBT0w7UUFDVCxHQUFHUDtJQUNMO0lBRUEsT0FBT2EsY0FBYztRQUFFLE9BQU9aLGtCQUFTLENBQUNZLFdBQVcsQ0FBQ25CO0lBQWU7QUFDckUifQ==