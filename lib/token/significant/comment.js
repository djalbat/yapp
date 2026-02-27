"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommentToken;
    }
});
const _occamlexers = require("occam-lexers");
const _tokenTypes = require("../../tokenTypes");
const type = _tokenTypes.COMMENT_TOKEN_TYPE; ///
class CommentToken extends _occamlexers.SignificantToken {
    static fromContent(content) {
        return _occamlexers.SignificantToken.fromContentAndType(CommentToken, content, type);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9jb21tZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBDT01NRU5UX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gQ09NTUVOVF9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoQ29tbWVudFRva2VuLCBjb250ZW50LCB0eXBlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbiIsInR5cGUiLCJDT01NRU5UX1RPS0VOX1RZUEUiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzZCQU5ZOzRCQUVFO0FBRW5DLE1BQU1DLE9BQU9DLDhCQUFrQixFQUFHLEdBQUc7QUFFdEIsTUFBTUYscUJBQXFCRyw2QkFBZ0I7SUFDeEQsT0FBT0MsWUFBWUMsT0FBTyxFQUFFO1FBQUUsT0FBT0YsNkJBQWdCLENBQUNHLGtCQUFrQixDQUFDTixjQUFjSyxTQUFTSjtJQUFPO0FBQ3pHIn0=