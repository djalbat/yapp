"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ArgumentToken;
    }
});
const _occamlexers = require("occam-lexers");
const _tokenTypes = require("../../tokenTypes");
const type = _tokenTypes.ARGUMENT_TOKEN_TYPE; ///
class ArgumentToken extends _occamlexers.SignificantToken {
    static fromContent(content) {
        return _occamlexers.SignificantToken.fromContentAndType(ArgumentToken, content, type);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9hcmd1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgQVJHVU1FTlRfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmNvbnN0IHR5cGUgPSBBUkdVTUVOVF9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3VtZW50VG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKEFyZ3VtZW50VG9rZW4sIGNvbnRlbnQsIHR5cGUpOyB9XG59XG4iXSwibmFtZXMiOlsiQXJndW1lbnRUb2tlbiIsInR5cGUiLCJBUkdVTUVOVF9UT0tFTl9UWVBFIiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50IiwiY29udGVudCIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozs2QkFOWTs0QkFFRztBQUVwQyxNQUFNQyxPQUFPQywrQkFBbUIsRUFBRyxHQUFHO0FBRXZCLE1BQU1GLHNCQUFzQkcsNkJBQWdCO0lBQ3pELE9BQU9DLFlBQVlDLE9BQU8sRUFBRTtRQUFFLE9BQU9GLDZCQUFnQixDQUFDRyxrQkFBa0IsQ0FBQ04sZUFBZUssU0FBU0o7SUFBTztBQUMxRyJ9