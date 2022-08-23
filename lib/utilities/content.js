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
function contentFromChildElements(childElements) {
    var content = _constants.EMPTY_STRING;
    var childElementsLength = childElements.length;
    if (childElementsLength > 0) {
        var firstChildElement = first(childElements), firstChildElementText = firstChildElement.getText();
        content = firstChildElementText; ///
    }
    return content;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzTGVuZ3RoID0gY2hpbGRFbGVtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGNoaWxkRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZEVsZW1lbnQgPSBmaXJzdChjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBmaXJzdENoaWxkRWxlbWVudFRleHQgPSBmaXJzdENoaWxkRWxlbWVudC5nZXRUZXh0KCk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RDaGlsZEVsZW1lbnRUZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgbGV0IGxpbmVDb3VudDtcblxuICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXFxyXFxufFxccnxcXG4vZyk7XG5cbiAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICBsaW5lQ291bnQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZXNMZW5ndGggPSBtYXRjaGVzLmxlbmd0aDtcblxuICAgIGxpbmVDb3VudCA9IG1hdGNoZXNMZW5ndGggKyAxO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVDb3VudDtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiY29udGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkRWxlbWVudCIsImZpcnN0Q2hpbGRFbGVtZW50VGV4dCIsImdldFRleHQiLCJsaW5lQ291bnQiLCJtYXRjaGVzIiwibWF0Y2giLCJtYXRjaGVzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBUUdBLHdCQUF3QjtlQUF4QkEsd0JBQXdCOztJQWV4QkMsb0JBQW9CO2VBQXBCQSxvQkFBb0I7Ozt5QkFyQkwsV0FBVzt5QkFFYixjQUFjO0FBRTNDLElBQU0sQUFBRUMsS0FBSyxHQUFLQyxVQUFjLGVBQUEsQ0FBeEJELEtBQUssQUFBbUIsQUFBQztBQUUxQixTQUFTRix3QkFBd0IsQ0FBQ0ksYUFBYSxFQUFFO0lBQ3RELElBQUlDLE9BQU8sR0FBR0MsVUFBWSxhQUFBLEFBQUM7SUFFM0IsSUFBTUMsbUJBQW1CLEdBQUdILGFBQWEsQ0FBQ0ksTUFBTSxBQUFDO0lBRWpELElBQUlELG1CQUFtQixHQUFHLENBQUMsRUFBRTtRQUMzQixJQUFNRSxpQkFBaUIsR0FBR1AsS0FBSyxDQUFDRSxhQUFhLENBQUMsRUFDeENNLHFCQUFxQixHQUFHRCxpQkFBaUIsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFMUROLE9BQU8sR0FBR0sscUJBQXFCLENBQUMsQ0FBRSxHQUFHO0lBQ3ZDLENBQUM7SUFFRCxPQUFPTCxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVNLFNBQVNKLG9CQUFvQixDQUFDSSxPQUFPLEVBQUU7SUFDNUMsSUFBSU8sU0FBUyxBQUFDO0lBRWQsSUFBTUMsT0FBTyxHQUFHUixPQUFPLENBQUNTLEtBQUssZUFBZSxBQUFDO0lBRTdDLElBQUlELE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEJELFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTztRQUNMLElBQU1HLGFBQWEsR0FBR0YsT0FBTyxDQUFDTCxNQUFNLEFBQUM7UUFFckNJLFNBQVMsR0FBR0csYUFBYSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBT0gsU0FBUyxDQUFDO0FBQ25CLENBQUMifQ==