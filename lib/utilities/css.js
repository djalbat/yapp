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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBQaXhlbHModmFsdWVJblBpeGVscykge1xuICBsZXQgdmFsdWU7XG5cbiAgaWYgKCF2YWx1ZUluUGl4ZWxzKSB7XG4gICAgdmFsdWUgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZUluUGl4ZWxzLm1hdGNoKC9eKFxcZCsoPzpcXC5cXGQrKT8pcHgkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB2YWx1ZSA9IE51bWJlcihzZWNvbmRNYXRjaCk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFNSSxXQUFXLEdBQVgsV0FBVztJQUpJLFVBQVc7SUFFbEMsTUFBTSxHQUZpQixVQUFXLGdCQUVsQyxNQUFNO1NBRUUsV0FBVyxDQUFDLGFBQWE7UUFDbkMsS0FBSztTQUVKLGFBQWE7UUFDaEIsS0FBSyxHQUFHLENBQUM7O1lBRUgsT0FBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLHlCQUM3QixXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFFbEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztXQUczQixLQUFLIn0=