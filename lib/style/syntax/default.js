"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _colours = require("../../colours");
var _default = require("../../scheme/syntax/default");
var defaultSyntaxStyle = "\n\n  .syntax * { \n    font-size: inherit;\n    line-height: inherit;\n    font-family: inherit;\n    text-rendering: inherit;\n    font-feature-settings: inherit;\n  }\n  \n  .syntax, \n  .syntax > * { \n    color: ".concat(_default.colour, "; \n  }\n    \n  .syntax > .keyword { color: ").concat(_default.keywordColour, "; }\n  \n  .syntax > .comment { color: ").concat(_default.commentColour, "; }\n  \n  .syntax > .string-literal { color: ").concat(_default.stringLiteralColour, "; } \n  \n  .syntax > .error {\n    background-repeat: repeat-x;\n    background-position: bottom;\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_colours.pomegranate, ";\n  } \n\n");
var _default1 = defaultSyntaxStyle;
exports.default = _default1;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvZGVmYXVsdC5qcyJdLCJuYW1lcyI6WyJwb21lZ3JhbmF0ZSIsImNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJjb21tZW50Q29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsImRlZmF1bHRTeW50YXhTdHlsZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBZSxDQUFmLFFBQWU7QUFDK0IsR0FBNkIsQ0FBN0IsUUFBNkI7QUFFdkcsR0FBSyxDQUFDLGtCQUFrQixJQUFJLHlOQVlqQixFQUdxQixNQUFhLENBakI2QixRQUE2QixVQWNuRiw2Q0FHVSxHQUVFLE1BQWEsQ0FuQjZCLFFBQTZCLGlCQWlCekQsdUNBRWhCLEdBRVMsTUFBbUIsQ0FyQmdCLFFBQTZCLGlCQW1CekQsOENBRVQsR0FNUixNQUFXLENBM0JrQyxRQUE2Qix1QkFxQjVDLHFLQU1oQyxHQUFjLE1BR3pDLENBL0I0QixRQUFlLGVBNEJGLFdBR3pDO2dCQUVlLGtCQUFrQiJ9