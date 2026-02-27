"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextParser;
    }
});
const _occamparsers = require("occam-parsers");
const { rulesFromBNF, parserFromRules } = _occamparsers.parserUtilities;
const bnf = `

  plainText  ::=  .+ ;

      `, rules = rulesFromBNF(bnf);
class PlainTextParser extends _occamparsers.CommonParser {
    static bnf = bnf;
    static fromNothing() {
        return parserFromRules(PlainTextParser, rules);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(PlainTextParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgcGxhaW5UZXh0ICA6Oj0gIC4rIDtcblxuICAgICAgYCxcbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gcGFyc2VyRnJvbVJ1bGVzKFBsYWluVGV4dFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhQbGFpblRleHRQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlBsYWluVGV4dFBhcnNlciIsInJ1bGVzRnJvbUJORiIsInBhcnNlckZyb21SdWxlcyIsInBhcnNlclV0aWxpdGllcyIsImJuZiIsInJ1bGVzIiwiQ29tbW9uUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBcUJBOzs7OEJBWlE7QUFHN0IsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRSxHQUFHQyw2QkFBZTtBQUV6RCxNQUFNQyxNQUFNLENBQUM7Ozs7TUFJUCxDQUFDLEVBQ0RDLFFBQVFKLGFBQWFHO0FBRVosTUFBTUosd0JBQXdCTSwwQkFBWTtJQUN2RCxPQUFPRixNQUFNQSxJQUFJO0lBRWpCLE9BQU9HLGNBQWM7UUFBRSxPQUFPTCxnQkFBZ0JGLGlCQUFpQks7SUFBUTtJQUV2RSxPQUFPRyxVQUFVSCxLQUFLLEVBQUU7UUFBRSxPQUFPQywwQkFBWSxDQUFDRSxTQUFTLENBQUNSLGlCQUFpQks7SUFBUTtBQUNuRiJ9