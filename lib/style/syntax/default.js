"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return _default1;
    },
    enumerable: true
});
var _colours = require("../../colours");
var _default = require("../../scheme/syntax/default");
var defaultSyntaxStyle = "\n\n  .syntax * { \n    font-size: inherit;\n    line-height: inherit;\n    font-family: inherit;\n    text-rendering: inherit;\n    font-feature-settings: inherit;\n  }\n  \n  .syntax, \n  .syntax > * { \n    color: ".concat(_default.colour, "; \n  }\n    \n  .syntax > .keyword { color: ").concat(_default.keywordColour, "; }\n  \n  .syntax > .comment { color: ").concat(_default.commentColour, "; }\n  \n  .syntax > .string-literal { color: ").concat(_default.stringLiteralColour, "; } \n  \n  .syntax > .error {\n    background-repeat: repeat-x;\n    background-position: bottom;\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_colours.pomegranate, ";\n  } \n\n");
var _default1 = defaultSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcG9tZWdyYW5hdGUgfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuaW1wb3J0IHsgY29sb3VyLCBrZXl3b3JkQ29sb3VyLCBjb21tZW50Q29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBkZWZhdWx0U3ludGF4U3R5bGUgPSBgXG5cbiAgLnN5bnRheCAqIHsgXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnN5bnRheCwgXG4gIC5zeW50YXggPiAqIHsgXG4gICAgY29sb3I6ICR7Y29sb3VyfTsgXG4gIH1cbiAgICBcbiAgLnN5bnRheCA+IC5rZXl3b3JkIHsgY29sb3I6ICR7a2V5d29yZENvbG91cn07IH1cbiAgXG4gIC5zeW50YXggPiAuY29tbWVudCB7IGNvbG9yOiAke2NvbW1lbnRDb2xvdXJ9OyB9XG4gIFxuICAuc3ludGF4ID4gLnN0cmluZy1saXRlcmFsIHsgY29sb3I6ICR7c3RyaW5nTGl0ZXJhbENvbG91cn07IH0gXG4gIFxuICAuc3ludGF4ID4gLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke3BvbWVncmFuYXRlfTtcbiAgfSBcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRTeW50YXhTdHlsZSIsImtleXdvcmRDb2xvdXIiLCJjb2xvdXIiLCJjb21tZW50Q29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsInBvbWVncmFuYXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7dUJBRWUsZUFBZTt1QkFDK0IsNkJBQTZCO0FBRXZHLElBQU1BLGtCQUFrQixHQUFHLEFBQUMsMk5BWWpCLENBR3FCQyxNQUFhLENBSGhDQyxRQUFNLE9BQUEsRUFBQywrQ0FHVSxDQUFnQixDQUVkQyxNQUFhLENBRmJGLFFBQWEsY0FBQSxFQUFDLHlDQUVoQixDQUFnQixDQUVQRyxNQUFtQixDQUYxQkQsUUFBYSxjQUFBLEVBQUMsZ0RBRVQsQ0FBc0IsQ0FNOUJFLE1BQVcsQ0FOREQsUUFBbUIsb0JBQUEsRUFBQyx1S0FNaEMsQ0FBYyxDQUFBLE1BR3pDLENBSDZCQyxRQUFXLFlBQUEsRUFBQyxhQUd6QyxDQUFDLEFBQUM7Z0JBRWFMLGtCQUFrQiJ9