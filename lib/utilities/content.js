"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    contentFromChildElements: function() {
        return contentFromChildElements;
    },
    lineCountFromContent: function() {
        return lineCountFromContent;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var first = _necessary.arrayUtilities.first;
function lineCountFromContent(content) {
    var lineCount;
    var matches = content.match(/\r\n|\r|\n/g);
    if (matches === null) {
        lineCount = 1;
    } else {
        var matchesLength = matches.length;
        lineCount = matchesLength + 1;
    }
    return lineCount;
}
function contentFromChildElements(childElements) {
    var content = _constants.EMPTY_STRING;
    var childElementsLength = childElements.length;
    if (childElementsLength > 0) {
        var firstChildElement = first(childElements), firstChildElementText = firstChildElement.getText();
        content = firstChildElementText; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGxldCBsaW5lQ291bnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL1xcclxcbnxcXHJ8XFxuL2cpO1xuXG4gIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgbGluZUNvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXRjaGVzTGVuZ3RoID0gbWF0Y2hlcy5sZW5ndGg7XG5cbiAgICBsaW5lQ291bnQgPSBtYXRjaGVzTGVuZ3RoICsgMTtcbiAgfVxuXG4gIHJldHVybiBsaW5lQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzTGVuZ3RoID0gY2hpbGRFbGVtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGNoaWxkRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZEVsZW1lbnQgPSBmaXJzdChjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBmaXJzdENoaWxkRWxlbWVudFRleHQgPSBmaXJzdENoaWxkRWxlbWVudC5nZXRUZXh0KCk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RDaGlsZEVsZW1lbnRUZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZW50IiwibGluZUNvdW50IiwibWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkRWxlbWVudHMiLCJFTVBUWV9TVFJJTkciLCJjaGlsZEVsZW1lbnRzTGVuZ3RoIiwiZmlyc3RDaGlsZEVsZW1lbnQiLCJmaXJzdENoaWxkRWxlbWVudFRleHQiLCJnZXRUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF3QmdCQSx3QkFBd0I7ZUFBeEJBOztJQWhCQUMsb0JBQW9CO2VBQXBCQTs7O3lCQU5lO3lCQUVGO0FBRTdCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRUQsU0FBU0QscUJBQXFCRyxPQUFPO0lBQzFDLElBQUlDO0lBRUosSUFBTUMsVUFBVUYsUUFBUUcsS0FBSyxDQUFDO0lBRTlCLElBQUlELFlBQVksTUFBTTtRQUNwQkQsWUFBWTtJQUNkLE9BQU87UUFDTCxJQUFNRyxnQkFBZ0JGLFFBQVFHLE1BQU07UUFFcENKLFlBQVlHLGdCQUFnQjtJQUM5QjtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTTCx5QkFBeUJVLGFBQWE7SUFDcEQsSUFBSU4sVUFBVU8sdUJBQVk7SUFFMUIsSUFBTUMsc0JBQXNCRixjQUFjRCxNQUFNO0lBRWhELElBQUlHLHNCQUFzQixHQUFHO1FBQzNCLElBQU1DLG9CQUFvQlgsTUFBTVEsZ0JBQzFCSSx3QkFBd0JELGtCQUFrQkUsT0FBTztRQUV2RFgsVUFBVVUsdUJBQXdCLEdBQUc7SUFDdkM7SUFFQSxPQUFPVjtBQUNUIn0=