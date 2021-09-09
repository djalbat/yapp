"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contentFromChildElements = contentFromChildElements;
exports.lineCountFromContent = lineCountFromContent;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsIkVNUFRZX1NUUklORyIsImZpcnN0IiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsImNvbnRlbnQiLCJjaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZEVsZW1lbnQiLCJmaXJzdENoaWxkRWxlbWVudFRleHQiLCJnZXRUZXh0IiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJsaW5lQ291bnQiLCJtYXRjaGVzIiwibWF0Y2giLCJtYXRjaGVzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBUUksd0JBQXdCLEdBQXhCLHdCQUF3QjtRQWV4QixvQkFBb0IsR0FBcEIsb0JBQW9CO0FBckJMLEdBQVcsQ0FBWCxVQUFXO0FBRWIsR0FBYyxDQUFkLFVBQWM7QUFFM0MsR0FBSyxDQUFHLEtBQUssR0FKa0IsVUFBVyxnQkFJbEMsS0FBSztTQUVHLHdCQUF3QixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZELEdBQUcsQ0FBQyxPQUFPLEdBTGdCLFVBQWM7SUFPekMsR0FBSyxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxNQUFNO0lBRWhELEVBQUUsRUFBRSxtQkFBbUIsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUM1QixHQUFLLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGFBQWEsR0FDdkMscUJBQXFCLEdBQUcsaUJBQWlCLENBQUMsT0FBTztRQUV2RCxPQUFPLEdBQUcscUJBQXFCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDO1NBRWUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVM7SUFFYixHQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLO0lBRTdCLEVBQUUsRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDckIsU0FBUyxHQUFHLENBQUM7SUFDZixDQUFDLE1BQU0sQ0FBQztRQUNOLEdBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU07UUFFcEMsU0FBUyxHQUFHLGFBQWEsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUztBQUNsQixDQUFDIn0=