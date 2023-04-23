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
    sanitiseContent: function() {
        return sanitiseContent;
    },
    lineCountFromContent: function() {
        return lineCountFromContent;
    },
    contentFromChildElements: function() {
        return contentFromChildElements;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var first = _necessary.arrayUtilities.first, LESS_THAN_CHARACTER = _necessary.characters.LESS_THAN_CHARACTER, AMPERSAND_CHARACTER = _necessary.characters.AMPERSAND_CHARACTER, GREATER_THAN_CHARACTER = _necessary.characters.GREATER_THAN_CHARACTER;
function sanitiseContent(content) {
    var sanitisedContent = content.replace(/&/g, AMPERSAND_CHARACTER).replace(/</g, LESS_THAN_CHARACTER).replace(/>/g, GREATER_THAN_CHARACTER);
    return sanitisedContent;
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
function contentFromChildElements(childElements) {
    var content = _constants.EMPTY_STRING;
    var childElementsLength = childElements.length;
    if (childElementsLength > 0) {
        var firstChildElement = first(childElements), firstChildElementText = firstChildElement.getText();
        content = firstChildElementText; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IExFU1NfVEhBTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIsIEdSRUFURVJfVEhBTl9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mL2csIEFNUEVSU0FORF9DSEFSQUNURVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgTEVTU19USEFOX0NIQVJBQ1RFUilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCBHUkVBVEVSX1RIQU5fQ0hBUkFDVEVSKTtcblxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgbGV0IGxpbmVDb3VudDtcblxuICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXFxyXFxufFxccnxcXG4vZyk7XG5cbiAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICBsaW5lQ291bnQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZXNMZW5ndGggPSBtYXRjaGVzLmxlbmd0aDtcblxuICAgIGxpbmVDb3VudCA9IG1hdGNoZXNMZW5ndGggKyAxO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVDb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHNMZW5ndGggPSBjaGlsZEVsZW1lbnRzLmxlbmd0aDtcblxuICBpZiAoY2hpbGRFbGVtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpcnN0KGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRFbGVtZW50VGV4dCA9IGZpcnN0Q2hpbGRFbGVtZW50LmdldFRleHQoKTtcblxuICAgIGNvbnRlbnQgPSBmaXJzdENoaWxkRWxlbWVudFRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbInNhbml0aXNlQ29udGVudCIsImxpbmVDb3VudEZyb21Db250ZW50IiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkxFU1NfVEhBTl9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiQU1QRVJTQU5EX0NIQVJBQ1RFUiIsIkdSRUFURVJfVEhBTl9DSEFSQUNURVIiLCJjb250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInJlcGxhY2UiLCJsaW5lQ291bnQiLCJtYXRjaGVzIiwibWF0Y2giLCJtYXRjaGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGRFbGVtZW50cyIsIkVNUFRZX1NUUklORyIsImNoaWxkRWxlbWVudHNMZW5ndGgiLCJmaXJzdENoaWxkRWxlbWVudCIsImZpcnN0Q2hpbGRFbGVtZW50VGV4dCIsImdldFRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVNnQkEsZUFBZTtlQUFmQTs7SUFTQUMsb0JBQW9CO2VBQXBCQTs7SUFnQkFDLHdCQUF3QjtlQUF4QkE7Ozt5QkFoQzJCO3lCQUVkO0FBRTdCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLHNCQUFxRUMscUJBQVUsQ0FBL0VELHFCQUFxQkUsc0JBQWdERCxxQkFBVSxDQUExREMscUJBQXFCQyx5QkFBMkJGLHFCQUFVLENBQXJDRTtBQUUzQyxTQUFTUixnQkFBZ0JTLE9BQU8sRUFBRTtJQUN2QyxJQUFNQyxtQkFBbUJELFFBQ0VFLE9BQU8sQ0FBQyxNQUFNSixxQkFDZEksT0FBTyxDQUFDLE1BQU1OLHFCQUNkTSxPQUFPLENBQUMsTUFBTUg7SUFFekMsT0FBT0U7QUFDVDtBQUVPLFNBQVNULHFCQUFxQlEsT0FBTyxFQUFFO0lBQzVDLElBQUlHO0lBRUosSUFBTUMsVUFBVUosUUFBUUssS0FBSyxDQUFDO0lBRTlCLElBQUlELFlBQVksSUFBSSxFQUFFO1FBQ3BCRCxZQUFZO0lBQ2QsT0FBTztRQUNMLElBQU1HLGdCQUFnQkYsUUFBUUcsTUFBTTtRQUVwQ0osWUFBWUcsZ0JBQWdCO0lBQzlCLENBQUM7SUFFRCxPQUFPSDtBQUNUO0FBRU8sU0FBU1YseUJBQXlCZSxhQUFhLEVBQUU7SUFDdEQsSUFBSVIsVUFBVVMsdUJBQVk7SUFFMUIsSUFBTUMsc0JBQXNCRixjQUFjRCxNQUFNO0lBRWhELElBQUlHLHNCQUFzQixHQUFHO1FBQzNCLElBQU1DLG9CQUFvQmpCLE1BQU1jLGdCQUMxQkksd0JBQXdCRCxrQkFBa0JFLE9BQU87UUFFdkRiLFVBQVVZLHVCQUF3QixHQUFHO0lBQ3ZDLENBQUM7SUFFRCxPQUFPWjtBQUNUIn0=