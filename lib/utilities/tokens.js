"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lineCountFromTokens = lineCountFromTokens;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sIm5hbWVzIjpbImxpbmVDb3VudEZyb21Ub2tlbnMiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJmb3JFYWNoIiwidG9rZW4iLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLG1CQUFtQixHQUFuQixtQkFBbUI7U0FBbkIsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO1FBQ3pCLEdBQUssQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCO1FBRWxELEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLFNBQVM7UUFDWCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTO0FBQ2xCLENBQUMifQ==