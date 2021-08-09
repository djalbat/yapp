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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZUNvdW50RnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgbGV0IGxpbmVDb3VudCA9IDE7ICAvLy9cblxuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIGxpbmVDb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmVDb3VudDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksbUJBQW1CLEdBQW5CLG1CQUFtQjtTQUFuQixtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFdkIsTUFBTSxDQUFDLE9BQU8sVUFBRSxLQUFLLEVBQUssQ0FBQztRQUN6QixHQUFLLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLGdCQUFnQjtRQUVsRCxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztZQUN4QixTQUFTO1FBQ1gsQ0FBQztJQUNILENBQUM7V0FFTSxTQUFTO0FBQ2xCLENBQUMifQ==