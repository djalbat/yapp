"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "lineCountFromTokens", {
    enumerable: true,
    get: function() {
        return lineCountFromTokens;
    }
});
function lineCountFromTokens(tokens) {
    var lineCount = 1; ///
    tokens.forEach(function(token) {
        var tokenEndOfLineToken = token.isEndOfLineToken();
        if (tokenEndOfLineToken) {
            lineCount++;
        }
    });
    return lineCount;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZUNvdW50RnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgbGV0IGxpbmVDb3VudCA9IDE7ICAvLy9cblxuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIGxpbmVDb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmVDb3VudDtcbn1cbiJdLCJuYW1lcyI6WyJsaW5lQ291bnRGcm9tVG9rZW5zIiwidG9rZW5zIiwibGluZUNvdW50IiwiZm9yRWFjaCIsInRva2VuIiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0Esb0JBQW9CQyxNQUFNO0lBQ3hDLElBQUlDLFlBQVksR0FBSSxHQUFHO0lBRXZCRCxPQUFPRSxPQUFPLENBQUMsU0FBQ0M7UUFDZCxJQUFNQyxzQkFBc0JELE1BQU1FLGdCQUFnQjtRQUVsRCxJQUFJRCxxQkFBcUI7WUFDdkJIO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==