"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptLexer;
    }
});
const _occamlexers = require("occam-lexers");
const entries = [
    {
        "delimiter": "^(?:`|\\$\\{|<\\/|\\/>)"
    },
    {
        "number": "^-?[1-9][0-9]*(\\.[0-9]+)?"
    },
    {
        "special": "^(?:;|:|,|=>|\\?|\\{|\\}|\\[|\\]|\\(|\\)|\\\\`)"
    },
    {
        "operator": "^(?:&=|>>>=|>>=|<<=|-=|\\.\\.\\.|\\.|\\*\\*=|\\*=|\\+=|\\/=|\\^=|\\|===|==|=|!==|%=|>=|<=|>>>|>>|<<|>|<|=|%|&&|&|~|!|--|-|\\^|\\|\\||\\||\\+\\+|\\*\\*|\\+|\\*|\\/)"
    },
    {
        "keyword": "^(?:import|export|default|var|let|const|function|class|extends|constructor|static|break|return|continue|if|else|switch|case|throw|try|catch|finally|instanceof|typeof|async|await|do|while|for|in|of|as|new|this|super|delete|undefined|null|true|false|void|meta|debugger)\\b"
    },
    {
        "identifier": "^[a-zA-Z_]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
class JavaScriptLexer extends _occamlexers.CommonLexer {
    static entries = entries;
    static EndOfLineToken = _occamlexers.EndOfLineNonSignificantToken;
    static WhitespaceToken = _occamlexers.WhitespaceToken;
    static RegularExpressionToken = null;
    static EndOfLineCommentToken = _occamlexers.EndOfLineCommentNonSignificantToken;
    static SingleLineCommentToken = _occamlexers.CStyleSingleLineCommentToken;
    static EndOfMultiLineCommentToken = _occamlexers.CStyleEndOfMultiLineCommentToken;
    static StartOfMultiLineCommentToken = _occamlexers.CStyleStartOfMultiLineCommentToken;
    static MiddleOfMultiLineCommentToken = _occamlexers.CStyleMiddleOfMultiLineCommentToken;
    static SinglyQuotedStringLiteralToken = _occamlexers.SinglyQuotedStringLiteralToken;
    static DoublyQuotedStringLiteralToken = _occamlexers.DoublyQuotedStringLiteralToken;
    static fromNothing() {
        return _occamlexers.CommonLexer.fromNothing(JavaScriptLexer);
    }
    static fromEntries(entries) {
        return _occamlexers.CommonLexer.fromEntries(JavaScriptLexer, entries);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsXHJcbiAgICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/OmB8XFxcXCRcXFxce3w8XFxcXC98XFxcXC8+KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl4tP1sxLTldWzAtOV0qKFxcXFwuWzAtOV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Ojt8OnwsfD0+fFxcXFw/fFxcXFx7fFxcXFx9fFxcXFxbfFxcXFxdfFxcXFwofFxcXFwpfFxcXFxcXFxcYClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl4oPzomPXw+Pj49fD4+PXw8PD18LT18XFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFwqXFxcXCo9fFxcXFwqPXxcXFxcKz18XFxcXC89fFxcXFxePXxcXFxcfD09PXw9PXw9fCE9PXwlPXw+PXw8PXw+Pj58Pj58PDx8Pnw8fD18JXwmJnwmfH58IXwtLXwtfFxcXFxefFxcXFx8XFxcXHx8XFxcXHx8XFxcXCtcXFxcK3xcXFxcKlxcXFwqfFxcXFwrfFxcXFwqfFxcXFwvKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCJeKD86aW1wb3J0fGV4cG9ydHxkZWZhdWx0fHZhcnxsZXR8Y29uc3R8ZnVuY3Rpb258Y2xhc3N8ZXh0ZW5kc3xjb25zdHJ1Y3RvcnxzdGF0aWN8YnJlYWt8cmV0dXJufGNvbnRpbnVlfGlmfGVsc2V8c3dpdGNofGNhc2V8dGhyb3d8dHJ5fGNhdGNofGZpbmFsbHl8aW5zdGFuY2VvZnx0eXBlb2Z8YXN5bmN8YXdhaXR8ZG98d2hpbGV8Zm9yfGlufG9mfGFzfG5ld3x0aGlzfHN1cGVyfGRlbGV0ZXx1bmRlZmluZWR8bnVsbHx0cnVlfGZhbHNlfHZvaWR8bWV0YXxkZWJ1Z2dlcilcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJeW2EtekEtWl9dK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0TGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdExleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoSmF2YVNjcmlwdExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0TGV4ZXIiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJmcm9tTm90aGluZyIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFxQkE7Ozs2QkExQitCO0FBRXBELE1BQU1DLFVBQVU7SUFDZDtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFlBQVk7SUFDZDtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7QUFFYyxNQUFNRCx3QkFBd0JFLHdCQUFXO0lBQ3RELE9BQU9ELFVBQVVBLFFBQVE7SUFFekIsT0FBT0UsaUJBQWlCQyx5Q0FBNEIsQ0FBQztJQUVyRCxPQUFPQyxrQkFBa0JBLDRCQUFlLENBQUM7SUFFekMsT0FBT0MseUJBQXlCLEtBQUs7SUFFckMsT0FBT0Msd0JBQXdCQyxnREFBbUMsQ0FBQztJQUVuRSxPQUFPQyx5QkFBeUJDLHlDQUE0QixDQUFDO0lBRTdELE9BQU9DLDZCQUE2QkMsNkNBQWdDLENBQUM7SUFFckUsT0FBT0MsK0JBQStCQywrQ0FBa0MsQ0FBQztJQUV6RSxPQUFPQyxnQ0FBZ0NDLGdEQUFtQyxDQUFDO0lBRTNFLE9BQU9DLGlDQUFpQ0EsMkNBQThCLENBQUM7SUFFdkUsT0FBT0MsaUNBQWlDQSwyQ0FBOEIsQ0FBQztJQUV2RSxPQUFPQyxjQUFjO1FBQUUsT0FBT2pCLHdCQUFXLENBQUNpQixXQUFXLENBQUNuQjtJQUFrQjtJQUV4RSxPQUFPb0IsWUFBWW5CLE9BQU8sRUFBRTtRQUFFLE9BQU9DLHdCQUFXLENBQUNrQixXQUFXLENBQUNwQixpQkFBaUJDO0lBQVU7QUFDMUYifQ==