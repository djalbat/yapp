"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONLexer;
    }
});
const _occamlexers = require("occam-lexers");
const entries = [
    {
        "special": "^(?:,|:|\\{|\\}|\\[|\\])"
    },
    {
        "number": "^-?[1-9][0-9]*(\\.[0-9]+)?"
    },
    {
        "keyword": "^(?:null|true|false)"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
class JSONLexer extends _occamlexers.CommonLexer {
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
        return _occamlexers.CommonLexer.fromNothing(JSONLexer);
    }
    static fromEntries(entries) {
        return _occamlexers.CommonLexer.fromEntries(JSONLexer, entries);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw6fFxcXFx7fFxcXFx9fFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl4tP1sxLTldWzAtOV0qKFxcXFwuWzAtOV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/Om51bGx8dHJ1ZXxmYWxzZSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoSlNPTkxleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoSlNPTkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJKU09OTGV4ZXIiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBcUJBOzs7NkJBakJzRjtBQUUzRyxNQUFNQyxVQUFVO0lBQ2Q7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7QUFFYyxNQUFNRCxrQkFBa0JFLHdCQUFXO0lBQ2hELE9BQU9ELFVBQVVBLFFBQVE7SUFFekIsT0FBT0UsaUJBQWlCQyx5Q0FBNEIsQ0FBQztJQUVyRCxPQUFPQyxrQkFBa0JBLDRCQUFlLENBQUM7SUFFekMsT0FBT0Msd0JBQXdCLEtBQUs7SUFFcEMsT0FBT0MseUJBQXlCLEtBQUs7SUFFckMsT0FBT0MseUJBQXlCLEtBQUs7SUFFckMsT0FBT0MsNkJBQTZCLEtBQUs7SUFFekMsT0FBT0MsK0JBQStCLEtBQUs7SUFFM0MsT0FBT0MsZ0NBQWdDLEtBQUs7SUFFNUMsT0FBT0MsaUNBQWlDLEtBQUs7SUFFN0MsT0FBT0MsaUNBQWlDQSwyQ0FBOEIsQ0FBQztJQUV2RSxPQUFPQyxjQUFjO1FBQUUsT0FBT1osd0JBQVcsQ0FBQ1ksV0FBVyxDQUFDZDtJQUFZO0lBRWxFLE9BQU9lLFlBQVlkLE9BQU8sRUFBRTtRQUFFLE9BQU9DLHdCQUFXLENBQUNhLFdBQVcsQ0FBQ2YsV0FBV0M7SUFBVTtBQUNwRiJ9