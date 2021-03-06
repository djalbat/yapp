"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contentFromChildElements = contentFromChildElements;
exports.lineCountFromContent = lineCountFromContent;
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first;
function contentFromChildElements(childElements) {
    var content = "";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGNvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHNMZW5ndGggPSBjaGlsZEVsZW1lbnRzLmxlbmd0aDtcblxuICBpZiAoY2hpbGRFbGVtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpcnN0KGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRFbGVtZW50VGV4dCA9IGZpcnN0Q2hpbGRFbGVtZW50LmdldFRleHQoKTtcblxuICAgIGNvbnRlbnQgPSBmaXJzdENoaWxkRWxlbWVudFRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCkge1xuICBsZXQgbGluZUNvdW50O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9cXHJcXG58XFxyfFxcbi9nKTtcblxuICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgIGxpbmVDb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWF0Y2hlc0xlbmd0aCA9IG1hdGNoZXMubGVuZ3RoO1xuXG4gICAgbGluZUNvdW50ID0gbWF0Y2hlc0xlbmd0aCArIDE7XG4gIH1cblxuICByZXR1cm4gbGluZUNvdW50O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFNSSx3QkFBd0IsR0FBeEIsd0JBQXdCO1FBZXhCLG9CQUFvQixHQUFwQixvQkFBb0I7SUFuQkwsVUFBVztJQUVsQyxLQUFLLEdBRmtCLFVBQVcsZ0JBRWxDLEtBQUs7U0FFRyx3QkFBd0IsQ0FBQyxhQUFhO1FBQ2hELE9BQU87UUFFTCxtQkFBbUIsR0FBRyxhQUFhLENBQUMsTUFBTTtRQUU1QyxtQkFBbUIsR0FBRyxDQUFDO1lBQ25CLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxhQUFhLEdBQ3ZDLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDLE9BQU87UUFFdkQsT0FBTyxHQUFHLHFCQUFxQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7V0FHaEMsT0FBTzs7U0FHQSxvQkFBb0IsQ0FBQyxPQUFPO1FBQ3RDLFNBQVM7UUFFUCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFFekIsT0FBTyxLQUFLLElBQUk7UUFDbEIsU0FBUyxHQUFHLENBQUM7O1lBRVAsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNO1FBRXBDLFNBQVMsR0FBRyxhQUFhLEdBQUcsQ0FBQzs7V0FHeEIsU0FBUyJ9