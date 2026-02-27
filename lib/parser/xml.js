"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLParser;
    }
});
const _occamparsers = require("occam-parsers");
const { rulesFromBNF, parserFromRules } = _occamparsers.parserUtilities;
const bnf = `

  xml             ::=  declaration? comment* ( simpleElement | complexElement ) comment* error*
  
                    |  error+
                               
                    ;


  declaration     ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;


  element         ::=  comment | simpleElement | complexElement ;
                               
                               
  comment         ::=  "<!--" text* "-->" ;


  simpleElement   ::=  completeTag ;


  complexElement  ::=  startTag ( element | text )* endTag ;


  completeTag     ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;


  startTag        ::=  "<"<NO_WHITESPACE>name attribute* ">" ;


  endTag          ::=  "</"<NO_WHITESPACE>name ">" ;
  

  attribute       ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


  text            ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;
  
  
  name            ::=  [identifier] ;


  error.          ::=  . ;

      `, rules = rulesFromBNF(bnf);
class XMLParser extends _occamparsers.CommonParser {
    static bnf = bnf;
    static fromNothing() {
        return parserFromRules(XMLParser, rules);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(XMLParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgeG1sICAgICAgICAgICAgIDo6PSAgZGVjbGFyYXRpb24/IGNvbW1lbnQqICggc2ltcGxlRWxlbWVudCB8IGNvbXBsZXhFbGVtZW50ICkgY29tbWVudCogZXJyb3IqXG4gIFxuICAgICAgICAgICAgICAgICAgICB8ICBlcnJvcitcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgZGVjbGFyYXRpb24gICAgIDo6PSAgXCI8P1wiPE5PX1dISVRFU1BBQ0U+XCJ4bWxcIiBhdHRyaWJ1dGUqIFwiPz5cIiA7XG5cblxuICBlbGVtZW50ICAgICAgICAgOjo9ICBjb21tZW50IHwgc2ltcGxlRWxlbWVudCB8IGNvbXBsZXhFbGVtZW50IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgY29tbWVudCAgICAgICAgIDo6PSAgXCI8IS0tXCIgdGV4dCogXCItLT5cIiA7XG5cblxuICBzaW1wbGVFbGVtZW50ICAgOjo9ICBjb21wbGV0ZVRhZyA7XG5cblxuICBjb21wbGV4RWxlbWVudCAgOjo9ICBzdGFydFRhZyAoIGVsZW1lbnQgfCB0ZXh0ICkqIGVuZFRhZyA7XG5cblxuICBjb21wbGV0ZVRhZyAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAgc3RhcnRUYWcgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCI+XCIgO1xuXG5cbiAgZW5kVGFnICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+bmFtZSBcIj5cIiA7XG4gIFxuXG4gIGF0dHJpYnV0ZSAgICAgICA6Oj0gIFtpZGVudGlmaWVyXTxOT19XSElURVNQQUNFPlwiPVwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSA7XG5cblxuICB0ZXh0ICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFtzdHJpbmctbGl0ZXJhbF18IFticm9rZW4tc3RyaW5nLWxpdGVyYWxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgXG4gIFxuICBuYW1lICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG5cbiAgZXJyb3IuICAgICAgICAgIDo6PSAgLiA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIHBhcnNlckZyb21SdWxlcyhYTUxQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoWE1MUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJYTUxQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJibmYiLCJydWxlcyIsIkNvbW1vblBhcnNlciIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzREE7OztlQUFxQkE7Ozs4QkFwRFE7QUFHN0IsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRSxHQUFHQyw2QkFBZTtBQUV6RCxNQUFNQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNENQLENBQUMsRUFDREMsUUFBUUosYUFBYUc7QUFFWixNQUFNSixrQkFBa0JNLDBCQUFZO0lBQ2pELE9BQU9GLE1BQU1BLElBQUk7SUFFakIsT0FBT0csY0FBYztRQUFFLE9BQU9MLGdCQUFnQkYsV0FBV0s7SUFBUTtJQUVqRSxPQUFPRyxVQUFVSCxLQUFLLEVBQUU7UUFBRSxPQUFPQywwQkFBWSxDQUFDRSxTQUFTLENBQUNSLFdBQVdLO0lBQVE7QUFDN0UifQ==