"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StringToken;
    }
});
const _occamlexers = require("occam-lexers");
const { stringLiteralType } = _occamlexers.types;
const type = stringLiteralType; ///
class StringToken extends _occamlexers.SignificantToken {
    static fromContent(content) {
        return _occamlexers.SignificantToken.fromContentAndType(StringToken, content, type);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNpZ25pZmljYW50VG9rZW4sIHR5cGVzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5jb25zdCB7IHN0cmluZ0xpdGVyYWxUeXBlIH0gPSB0eXBlcztcblxuY29uc3QgdHlwZSA9IHN0cmluZ0xpdGVyYWxUeXBlOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKFN0cmluZ1Rva2VuLCBjb250ZW50LCB0eXBlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0cmluZ1Rva2VuIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJ0eXBlcyIsInR5cGUiLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzZCQU5tQjtBQUV4QyxNQUFNLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdDLGtCQUFLO0FBRW5DLE1BQU1DLE9BQU9GLG1CQUFtQixHQUFHO0FBRXBCLE1BQU1ELG9CQUFvQkksNkJBQWdCO0lBQ3ZELE9BQU9DLFlBQVlDLE9BQU8sRUFBRTtRQUFFLE9BQU9GLDZCQUFnQixDQUFDRyxrQkFBa0IsQ0FBQ1AsYUFBYU0sU0FBU0g7SUFBTztBQUN4RyJ9