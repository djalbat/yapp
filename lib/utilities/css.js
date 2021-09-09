"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stripPixels = stripPixels;
var _necessary = require("necessary");
var second = _necessary.arrayUtilities.second;
function stripPixels(valueInPixels) {
    var value;
    if (!valueInPixels) {
        value = 0;
    } else {
        var matches = valueInPixels.match(/^(\d+(?:\.\d+)?)px$/), secondMatch = second(matches);
        value = Number(secondMatch); ///
    }
    return value;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3NzLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwic3RyaXBQaXhlbHMiLCJ2YWx1ZUluUGl4ZWxzIiwidmFsdWUiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsIk51bWJlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLFdBQVcsR0FBWCxXQUFXO0FBSkksR0FBVyxDQUFYLFVBQVc7QUFFMUMsR0FBSyxDQUFHLE1BQU0sR0FGaUIsVUFBVyxnQkFFbEMsTUFBTTtTQUVFLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxHQUFHLENBQUMsS0FBSztJQUVULEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQixLQUFLLEdBQUcsQ0FBQztJQUNYLENBQUMsTUFBTSxDQUFDO1FBQ04sR0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsS0FBSyx5QkFDN0IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1FBRWxDLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDIn0=