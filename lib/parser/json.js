"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONParser;
    }
});
const _occamparsers = require("occam-parsers");
const { rulesFromBNF, parserFromRules } = _occamparsers.parserUtilities;
const bnf = `

  json     ::=  element error* 
  
             |  error+ 
                               
             ;


  element  ::=  array | object | [string-literal] | [number] | "true" | "false" | "null" ;


  object   ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;

  
  array    ::=  "[" ( element ( "," element )* )? "]" ;


  error.   ::=  . ;

      `, rules = rulesFromBNF(bnf);
class JSONParser extends _occamparsers.CommonParser {
    static bnf = bnf;
    static fromNothing() {
        return parserFromRules(JSONParser, rules);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(JSONParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGpzb24gICAgIDo6PSAgZWxlbWVudCBlcnJvciogXG4gIFxuICAgICAgICAgICAgIHwgIGVycm9yKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA7XG5cblxuICBlbGVtZW50ICA6Oj0gIGFycmF5IHwgb2JqZWN0IHwgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIm51bGxcIiA7XG5cblxuICBvYmplY3QgICA6Oj0gIFwie1wiICggW3N0cmluZy1saXRlcmFsXSBcIjpcIiBlbGVtZW50ICggXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBlbGVtZW50ICkqICk/IFwifVwiIDtcblxuICBcbiAgYXJyYXkgICAgOjo9ICBcIltcIiAoIGVsZW1lbnQgKCBcIixcIiBlbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gIGVycm9yLiAgIDo6PSAgLiA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSlNPTlBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhKU09OUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUGFyc2VyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyRnJvbVJ1bGVzIiwicGFyc2VyVXRpbGl0aWVzIiwiYm5mIiwicnVsZXMiLCJDb21tb25QYXJzZXIiLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBcUJBOzs7OEJBNUJRO0FBRzdCLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MsNkJBQWU7QUFFekQsTUFBTUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW9CUCxDQUFDLEVBQ0RDLFFBQVFKLGFBQWFHO0FBRVosTUFBTUosbUJBQW1CTSwwQkFBWTtJQUNsRCxPQUFPRixNQUFNQSxJQUFJO0lBRWpCLE9BQU9HLGNBQWM7UUFBRSxPQUFPTCxnQkFBZ0JGLFlBQVlLO0lBQVE7SUFFbEUsT0FBT0csVUFBVUgsS0FBSyxFQUFFO1FBQUUsT0FBT0MsMEJBQVksQ0FBQ0UsU0FBUyxDQUFDUixZQUFZSztJQUFRO0FBQzlFIn0=