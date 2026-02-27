"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptProcessor;
    }
});
const _occamquery = require("occam-query");
const _necessary = require("necessary");
const _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
const _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
const _string = /*#__PURE__*/ _interop_require_default(require("../token/significant/string"));
const _variable = /*#__PURE__*/ _interop_require_default(require("../token/significant/variable"));
const _argument = /*#__PURE__*/ _interop_require_default(require("../token/significant/argument"));
const _tagName = /*#__PURE__*/ _interop_require_default(require("../token/significant/jsx/tagName"));
const _attributeName = /*#__PURE__*/ _interop_require_default(require("../token/significant/jsx/attributeName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*"), jsxNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsx"), variableTerminalNodeQuery = _occamquery.Query.fromExpressionString("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//functionBody|arrowFunction"), argumentVariableTerminalNodeQuery = _occamquery.Query.fromExpressionString("//argument/variable/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamquery.Query.fromExpressionString("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamquery.Query.fromExpressionString("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamquery.Query.fromExpressionString("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamquery.Query.fromExpressionString("//const/destructure/variable/@*");
const { BACKTICK_CHARACTER } = _necessary.characters;
class JavaScriptProcessor extends _processor.default {
    process(tokens, node) {
        if (node === null) {
            return;
        }
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = _error.default;
            return token;
        }, errorTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = _string.default;
            return token;
        }, templateLiteralStringTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, (content)=>{
            const token = content === BACKTICK_CHARACTER ? _string.default : null;
            return token;
        }, templateLiteralDelimiterTerminalNodeQuery);
        const jsxNonTerminalNodes = jsxNonTerminalNodeQuery.execute(node), functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
        jsxNonTerminalNodes.forEach((jsxNonTerminalNode)=>{
            this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, (content)=>{
                const token = _tagName.default;
                return token;
            }, jsxTagNameTerminalNodeQuery);
            this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, (content)=>{
                const token = _attributeName.default;
                return token;
            }, jsxTagAttributeNameTerminalNodeQuery);
        });
        functionNonTerminalNodes.forEach((functionNonTerminalNode)=>{
            const argumentNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content)=>{
                const token = _argument.default; ///
                return token;
            }, argumentVariableTerminalNodeQuery), variableNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content)=>{
                const token = _variable.default;
                return token;
            }, variableDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);
            this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content)=>{
                let Token = null;
                const variableName = content, variableNamesIncludesVariableName = variableNames.includes(variableName), argumentNamesIncludesVariableName = argumentNames.includes(variableName);
                if (false) {
                ///
                } else if (variableNamesIncludesVariableName) {
                    Token = _variable.default;
                } else if (argumentNamesIncludesVariableName) {
                    Token = _argument.default;
                }
                return Token;
            }, variableTerminalNodeQuery);
        });
    }
    static fromNothing() {
        return _processor.default.fromNothing(JavaScriptProcessor);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcbmltcG9ydCBUYWdOYW1lSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeC90YWdOYW1lXCI7XG5pbXBvcnQgQXR0cmlidXRlTmFtZUpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3gvYXR0cmlidXRlTmFtZVwiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2pzeFwiKSxcbiAgICAgIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL25hbWUvQCpcIiksXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Z1bmN0aW9uQm9keXxhcnJvd0Z1bmN0aW9uXCIpLFxuICAgICAgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2FyZ3VtZW50L3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmNvbnN0IHsgQkFDS1RJQ0tfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gRXJyb3JUb2tlbjtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBTdHJpbmdUb2tlbjtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gKGNvbnRlbnQgPT09IEJBQ0tUSUNLX0NIQVJBQ1RFUikgP1xuICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1Rva2VuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBqc3hOb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGpzeE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBqc3hOb25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gVGFnTmFtZUpTWFRva2VuO1xuXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH0sIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IEF0dHJpYnV0ZU5hbWVKU1hUb2tlbjtcblxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9LCBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBBcmd1bWVudFRva2VuOyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSwgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IFZhcmlhYmxlVG9rZW47XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSwgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LCBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICBsZXQgVG9rZW4gPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGFyZ3VtZW50TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgVG9rZW4gPSBBcmd1bWVudFRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgfSwgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0UHJvY2Vzc29yIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkJBQ0tUSUNLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0b2tlbiIsIkVycm9yVG9rZW4iLCJTdHJpbmdUb2tlbiIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwiZm9yRWFjaCIsImpzeE5vblRlcm1pbmFsTm9kZSIsIlRhZ05hbWVKU1hUb2tlbiIsIkF0dHJpYnV0ZU5hbWVKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkJBOzs7ZUFBcUJBOzs7NEJBekJDOzJCQUNLO2tFQUVMOzhEQUNDOytEQUNDO2lFQUNFO2lFQUNBO2dFQUNFO3NFQUNNOzs7Ozs7QUFFbEMsTUFBTUMseUJBQXlCQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxnQkFDcERDLDBCQUEwQkYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsVUFDckRFLDRCQUE0QkgsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsa0JBQ3ZERyw4QkFBOEJKLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLG1EQUN6REksK0JBQStCTCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxpQ0FDMURLLG9DQUFvQ04saUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsMkJBQy9ETSx1Q0FBdUNQLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLDJCQUNsRU8sdUNBQXVDUixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxnQ0FDbEVRLHlDQUF5Q1QsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsZ0NBQ3BFUyw0Q0FBNENWLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGlDQUN2RVUsZ0RBQWdEWCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVqRixNQUFNLEVBQUVXLGtCQUFrQixFQUFFLEdBQUdDLHFCQUFVO0FBRTFCLE1BQU1mLDRCQUE0QmdCLGtCQUFTO0lBQ3hEQyxRQUFRQyxNQUFNLEVBQUVDLElBQUksRUFBRTtRQUNwQixJQUFJQSxTQUFTLE1BQU07WUFDakI7UUFDRjtRQUVBLElBQUksQ0FBQ0Msb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sQ0FBQ0U7WUFDdkQsTUFBTUMsUUFBUUMsY0FBVTtZQUV4QixPQUFPRDtRQUNULEdBQUdyQjtRQUVILElBQUksQ0FBQ21CLG9DQUFvQyxDQUFDRixRQUFRQyxNQUFNLENBQUNFO1lBQ3ZELE1BQU1DLFFBQVFFLGVBQVc7WUFFekIsT0FBT0Y7UUFDVCxHQUFHWDtRQUVILElBQUksQ0FBQ1Msb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sQ0FBQ0U7WUFDdkQsTUFBTUMsUUFBUSxBQUFDRCxZQUFZUCxxQkFDWFUsZUFBVyxHQUNUO1lBRWxCLE9BQU9GO1FBQ1QsR0FBR1Y7UUFFSCxNQUFNYSxzQkFBc0JyQix3QkFBd0JzQixPQUFPLENBQUNQLE9BQ3REUSwyQkFBMkJwQiw2QkFBNkJtQixPQUFPLENBQUNQO1FBRXRFTSxvQkFBb0JHLE9BQU8sQ0FBQyxDQUFDQztZQUMzQixJQUFJLENBQUNULG9DQUFvQyxDQUFDRixRQUFRVyxvQkFBb0IsQ0FBQ1I7Z0JBQ3JFLE1BQU1DLFFBQVFRLGdCQUFlO2dCQUU3QixPQUFPUjtZQUNULEdBQUdoQjtZQUVILElBQUksQ0FBQ2Msb0NBQW9DLENBQUNGLFFBQVFXLG9CQUFvQixDQUFDUjtnQkFDckUsTUFBTUMsUUFBUVMsc0JBQXFCO2dCQUVuQyxPQUFPVDtZQUNULEdBQUdiO1FBQ0w7UUFFQWtCLHlCQUF5QkMsT0FBTyxDQUFDLENBQUNJO1lBQ2hDLE1BQU1DLGdCQUFnQixJQUFJLENBQUNiLG9DQUFvQyxDQUFDRixRQUFRYyx5QkFBeUIsQ0FBQ1g7Z0JBQzFGLE1BQU1DLFFBQVFZLGlCQUFhLEVBQUcsR0FBRztnQkFFakMsT0FBT1o7WUFDVCxHQUFHZCxvQ0FDSDJCLGdCQUFnQixJQUFJLENBQUNmLG9DQUFvQyxDQUFDRixRQUFRYyx5QkFBeUIsQ0FBQ1g7Z0JBQzFGLE1BQU1DLFFBQVFjLGlCQUFhO2dCQUUzQixPQUFPZDtZQUNULEdBQUdaLHNDQUFzQ0c7WUFFL0MsSUFBSSxDQUFDTyxvQ0FBb0MsQ0FBQ0YsUUFBUWMseUJBQXlCLENBQUNYO2dCQUMxRSxJQUFJZ0IsUUFBUTtnQkFFWixNQUFNQyxlQUFlakIsU0FDZmtCLG9DQUFvQ0osY0FBY0ssUUFBUSxDQUFDRixlQUMzREcsb0NBQW9DUixjQUFjTyxRQUFRLENBQUNGO2dCQUVqRSxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUlDLG1DQUFtQztvQkFDNUNGLFFBQVFELGlCQUFhO2dCQUN2QixPQUFPLElBQUlLLG1DQUFtQztvQkFDNUNKLFFBQVFILGlCQUFhO2dCQUN2QjtnQkFFQSxPQUFPRztZQUNULEdBQUdoQztRQUNMO0lBQ0Y7SUFFQSxPQUFPcUMsY0FBYztRQUFFLE9BQU8xQixrQkFBUyxDQUFDMEIsV0FBVyxDQUFDMUM7SUFBc0I7QUFDNUUifQ==