"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "stripPixels", {
    enumerable: true,
    get: function() {
        return stripPixels;
    }
});
const _necessary = require("necessary");
const { second } = _necessary.arrayUtilities;
function stripPixels(valueInPixels) {
    let value;
    if (!valueInPixels) {
        value = 0;
    } else {
        const matches = valueInPixels.match(/^(.+)px$/), secondMatch = second(matches);
        value = Number(secondMatch); ///
    }
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBQaXhlbHModmFsdWVJblBpeGVscykge1xuICBsZXQgdmFsdWU7XG5cbiAgaWYgKCF2YWx1ZUluUGl4ZWxzKSB7XG4gICAgdmFsdWUgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZUluUGl4ZWxzLm1hdGNoKC9eKC4rKXB4JC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdmFsdWUgPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAvLy9cbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdLCJuYW1lcyI6WyJzdHJpcFBpeGVscyIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwidmFsdWVJblBpeGVscyIsInZhbHVlIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1nQkE7OztlQUFBQTs7OzJCQUplO0FBRS9CLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRTFCLFNBQVNGLFlBQVlHLGFBQWE7SUFDdkMsSUFBSUM7SUFFSixJQUFJLENBQUNELGVBQWU7UUFDbEJDLFFBQVE7SUFDVixPQUFPO1FBQ0wsTUFBTUMsVUFBVUYsY0FBY0csS0FBSyxDQUFDLGFBQzlCQyxjQUFjTixPQUFPSTtRQUUzQkQsUUFBUUksT0FBT0QsY0FBYyxHQUFHO0lBQ2xDO0lBRUEsT0FBT0g7QUFDVCJ9