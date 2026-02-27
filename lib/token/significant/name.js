"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NameToken;
    }
});
const _occamlexers = require("occam-lexers");
const _tokenTypes = require("../../tokenTypes");
const type = _tokenTypes.NAME_TOKEN_TYPE; ///
class NameToken extends _occamlexers.SignificantToken {
    static fromContent(content) {
        return _occamlexers.SignificantToken.fromContentAndType(NameToken, content, type);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBOQU1FX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gTkFNRV9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoTmFtZVRva2VuLCBjb250ZW50LCB0eXBlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5hbWVUb2tlbiIsInR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzZCQU5ZOzRCQUVEO0FBRWhDLE1BQU1DLE9BQU9DLDJCQUFlLEVBQUcsR0FBRztBQUVuQixNQUFNRixrQkFBa0JHLDZCQUFnQjtJQUNyRCxPQUFPQyxZQUFZQyxPQUFPLEVBQUU7UUFBRSxPQUFPRiw2QkFBZ0IsQ0FBQ0csa0JBQWtCLENBQUNOLFdBQVdLLFNBQVNKO0lBQU87QUFDdEcifQ==