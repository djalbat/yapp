"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default1;
    }
});
const _colours = require("../../colours");
const _default = require("../../scheme/syntax/default");
const defaultSyntaxStyle = `

  .syntax * { 
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    text-rendering: inherit;
    font-feature-settings: inherit;
  }
  
  .syntax, 
  .syntax > * { 
    color: ${_default.colour}; 
  }
    
  .syntax > .keyword { color: ${_default.keywordColour}; }
  
  .syntax > .comment { color: ${_default.commentColour}; }
  
  .syntax > .string-literal { color: ${_default.stringLiteralColour}; } 
  
  .syntax > .error {
    background-repeat: repeat-x;
    background-position: bottom;
    text-decoration-line: underline;
    text-decoration-color: ${_colours.pomegranate};
  } 

`;
const _default1 = defaultSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcG9tZWdyYW5hdGUgfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuaW1wb3J0IHsgY29sb3VyLCBrZXl3b3JkQ29sb3VyLCBjb21tZW50Q29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBkZWZhdWx0U3ludGF4U3R5bGUgPSBgXG5cbiAgLnN5bnRheCAqIHsgXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnN5bnRheCwgXG4gIC5zeW50YXggPiAqIHsgXG4gICAgY29sb3I6ICR7Y29sb3VyfTsgXG4gIH1cbiAgICBcbiAgLnN5bnRheCA+IC5rZXl3b3JkIHsgY29sb3I6ICR7a2V5d29yZENvbG91cn07IH1cbiAgXG4gIC5zeW50YXggPiAuY29tbWVudCB7IGNvbG9yOiAke2NvbW1lbnRDb2xvdXJ9OyB9XG4gIFxuICAuc3ludGF4ID4gLnN0cmluZy1saXRlcmFsIHsgY29sb3I6ICR7c3RyaW5nTGl0ZXJhbENvbG91cn07IH0gXG4gIFxuICAuc3ludGF4ID4gLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke3BvbWVncmFuYXRlfTtcbiAgfSBcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRTeW50YXhTdHlsZSIsImNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJjb21tZW50Q29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsInBvbWVncmFuYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQ0E7OztlQUFBOzs7eUJBakM0Qjt5QkFDOEM7QUFFMUUsTUFBTUEscUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztXQVlqQixFQUFFQyxlQUFNLENBQUM7Ozs4QkFHVSxFQUFFQyxzQkFBYSxDQUFDOzs4QkFFaEIsRUFBRUMsc0JBQWEsQ0FBQzs7cUNBRVQsRUFBRUMsNEJBQW1CLENBQUM7Ozs7OzsyQkFNaEMsRUFBRUMsb0JBQVcsQ0FBQzs7O0FBR3pDLENBQUM7TUFFRCxZQUFlTCJ9