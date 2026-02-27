"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AttributeToken;
    }
});
const _occamlexers = require("occam-lexers");
const _tokenTypes = require("../../tokenTypes");
const type = _tokenTypes.ATTRIBUTE_TOKEN_TYPE; ///
class AttributeToken extends _occamlexers.SignificantToken {
    static fromContent(content) {
        return _occamlexers.SignificantToken.fromContentAndType(AttributeToken, content, type);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9hdHRyaWJ1dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCB7IEFUVFJJQlVURV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuY29uc3QgdHlwZSA9IEFUVFJJQlVURV9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShBdHRyaWJ1dGVUb2tlbiwgY29udGVudCwgdHlwZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJBdHRyaWJ1dGVUb2tlbiIsInR5cGUiLCJBVFRSSUJVVEVfVE9LRU5fVFlQRSIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudCIsImNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7NkJBTlk7NEJBRUk7QUFFckMsTUFBTUMsT0FBT0MsZ0NBQW9CLEVBQUcsR0FBRztBQUV4QixNQUFNRix1QkFBdUJHLDZCQUFnQjtJQUMxRCxPQUFPQyxZQUFZQyxPQUFPLEVBQUU7UUFBRSxPQUFPRiw2QkFBZ0IsQ0FBQ0csa0JBQWtCLENBQUNOLGdCQUFnQkssU0FBU0o7SUFBTztBQUMzRyJ9