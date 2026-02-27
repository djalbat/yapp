"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSXTagNameToken;
    }
});
const _occamlexers = require("occam-lexers");
const _tokenTypes = require("../../../tokenTypes");
const type = _tokenTypes.JSX_TAG_NAME_TOKEN_TYPE; ///
class JSXTagNameToken extends _occamlexers.SignificantToken {
    static fromContent(content) {
        return _occamlexers.SignificantToken.fromContentAndType(JSXTagNameToken, content, type);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9qc3gvdGFnTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgSlNYX1RBR19OQU1FX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gSlNYX1RBR19OQU1FX1RPS0VOX1RZUEU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNYVGFnTmFtZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShKU1hUYWdOYW1lVG9rZW4sIGNvbnRlbnQsIHR5cGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSlNYVGFnTmFtZVRva2VuIiwidHlwZSIsIkpTWF9UQUdfTkFNRV9UT0tFTl9UWVBFIiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50IiwiY29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozs2QkFOWTs0QkFFTztBQUV4QyxNQUFNQyxPQUFPQyxtQ0FBdUIsRUFBRyxHQUFHO0FBRTNCLE1BQU1GLHdCQUF3QkcsNkJBQWdCO0lBQzNELE9BQU9DLFlBQVlDLE9BQU8sRUFBRTtRQUFFLE9BQU9GLDZCQUFnQixDQUFDRyxrQkFBa0IsQ0FBQ04saUJBQWlCSyxTQUFTSjtJQUFPO0FBQzVHIn0=