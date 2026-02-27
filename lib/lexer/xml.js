"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLLexer;
    }
});
const _occamlexers = require("occam-lexers");
const entries = [
    {
        "delimiter": "^(?:=|<\\?|\\?>|<\\/|\\/>|<!--|-->|<|>)"
    },
    {
        "identifier": "^[a-zA-Z]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
class XMLLexer extends _occamlexers.CommonLexer {
    static entries = entries;
    static EndOfLineToken = _occamlexers.EndOfLineNonSignificantToken;
    static WhitespaceToken = _occamlexers.WhitespaceToken;
    static EndOfLineCommentToken = null;
    static SingleLineCommentToken = null;
    static RegularExpressionToken = null;
    static EndOfMultiLineCommentToken = null;
    static StartOfMultiLineCommentToken = null;
    static MiddleOfMultiLineCommentToken = null;
    static SinglyQuotedStringLiteralToken = null;
    static DoublyQuotedStringLiteralToken = _occamlexers.DoublyQuotedStringLiteralToken;
    static fromNothing() {
        return _occamlexers.CommonLexer.fromNothing(XMLLexer);
    }
    static fromEntries(entries) {
        return _occamlexers.CommonLexer.fromEntries(XMLLexer, entries);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci94bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/Oj18PFxcXFw/fFxcXFw/Pnw8XFxcXC98XFxcXC8+fDwhLS18LS0+fDx8PilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXlthLXpBLVpdK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKFhNTExleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoWE1MTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlhNTExleGVyIiwiZW50cmllcyIsIkNvbW1vbkxleGVyIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXFCQTs7OzZCQWRzRjtBQUUzRyxNQUFNQyxVQUFVO0lBQ2Q7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLGNBQWM7SUFDaEI7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtBQUVjLE1BQU1ELGlCQUFpQkUsd0JBQVc7SUFDL0MsT0FBT0QsVUFBVUEsUUFBUTtJQUV6QixPQUFPRSxpQkFBaUJDLHlDQUE0QixDQUFDO0lBRXJELE9BQU9DLGtCQUFrQkEsNEJBQWUsQ0FBQztJQUV6QyxPQUFPQyx3QkFBd0IsS0FBSztJQUVwQyxPQUFPQyx5QkFBeUIsS0FBSztJQUVyQyxPQUFPQyx5QkFBeUIsS0FBSztJQUVyQyxPQUFPQyw2QkFBNkIsS0FBSztJQUV6QyxPQUFPQywrQkFBK0IsS0FBSztJQUUzQyxPQUFPQyxnQ0FBZ0MsS0FBSztJQUU1QyxPQUFPQyxpQ0FBaUMsS0FBSztJQUU3QyxPQUFPQyxpQ0FBaUNBLDJDQUE4QixDQUFDO0lBRXZFLE9BQU9DLGNBQWM7UUFBRSxPQUFPWix3QkFBVyxDQUFDWSxXQUFXLENBQUNkO0lBQVc7SUFFakUsT0FBT2UsWUFBWWQsT0FBTyxFQUFFO1FBQUUsT0FBT0Msd0JBQVcsQ0FBQ2EsV0FBVyxDQUFDZixVQUFVQztJQUFVO0FBQ25GIn0=