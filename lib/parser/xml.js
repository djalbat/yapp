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


  text            ::=  ( [identifier] | [string-literal] | [unassigned] )+ ;
  
  
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgeG1sICAgICAgICAgICAgIDo6PSAgZGVjbGFyYXRpb24/IGNvbW1lbnQqICggc2ltcGxlRWxlbWVudCB8IGNvbXBsZXhFbGVtZW50ICkgY29tbWVudCogZXJyb3IqXG4gIFxuICAgICAgICAgICAgICAgICAgICB8ICBlcnJvcitcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgZGVjbGFyYXRpb24gICAgIDo6PSAgXCI8P1wiPE5PX1dISVRFU1BBQ0U+XCJ4bWxcIiBhdHRyaWJ1dGUqIFwiPz5cIiA7XG5cblxuICBlbGVtZW50ICAgICAgICAgOjo9ICBjb21tZW50IHwgc2ltcGxlRWxlbWVudCB8IGNvbXBsZXhFbGVtZW50IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgY29tbWVudCAgICAgICAgIDo6PSAgXCI8IS0tXCIgdGV4dCogXCItLT5cIiA7XG5cblxuICBzaW1wbGVFbGVtZW50ICAgOjo9ICBjb21wbGV0ZVRhZyA7XG5cblxuICBjb21wbGV4RWxlbWVudCAgOjo9ICBzdGFydFRhZyAoIGVsZW1lbnQgfCB0ZXh0ICkqIGVuZFRhZyA7XG5cblxuICBjb21wbGV0ZVRhZyAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAgc3RhcnRUYWcgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCI+XCIgO1xuXG5cbiAgZW5kVGFnICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+bmFtZSBcIj5cIiA7XG4gIFxuXG4gIGF0dHJpYnV0ZSAgICAgICA6Oj0gIFtpZGVudGlmaWVyXTxOT19XSElURVNQQUNFPlwiPVwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSA7XG5cblxuICB0ZXh0ICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFtzdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuICBcbiAgXG4gIG5hbWUgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cblxuICBlcnJvci4gICAgICAgICAgOjo9ICAuIDtcblxuICAgICAgYCxcbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gcGFyc2VyRnJvbVJ1bGVzKFhNTFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhYTUxQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlhNTFBhcnNlciIsInJ1bGVzRnJvbUJORiIsInBhcnNlckZyb21SdWxlcyIsInBhcnNlclV0aWxpdGllcyIsImJuZiIsInJ1bGVzIiwiQ29tbW9uUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQXFCQTs7OzhCQXBEUTtBQUc3QixNQUFNLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFLEdBQUdDLDZCQUFlO0FBRXpELE1BQU1DLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE0Q1AsQ0FBQyxFQUNEQyxRQUFRSixhQUFhRztBQUVaLE1BQU1KLGtCQUFrQk0sMEJBQVk7SUFDakQsT0FBT0YsTUFBTUEsSUFBSTtJQUVqQixPQUFPRyxjQUFjO1FBQUUsT0FBT0wsZ0JBQWdCRixXQUFXSztJQUFRO0lBRWpFLE9BQU9HLFVBQVVILEtBQUssRUFBRTtRQUFFLE9BQU9DLDBCQUFZLENBQUNFLFNBQVMsQ0FBQ1IsV0FBV0s7SUFBUTtBQUM3RSJ9