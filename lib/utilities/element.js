"use sttict";
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
    mountYapp: function() {
        return mountYapp;
    },
    unmountYapp: function() {
        return unmountYapp;
    }
});
var _easy = require("easy");
var mountElement = _easy.elementUtilties.mountElement, unmountElement = _easy.elementUtilties.unmountElement;
function mountYapp(yapp, domElement) {
    var element = yapp, yappDOMElement = yapp.getDOMElement();
    domElement.appendChild(yappDOMElement);
    mountElement(element);
}
function unmountYapp(yapp) {
    var element = yapp, yappDOMElement = yapp.getDOMElement();
    unmountElement(element);
    yappDOMElement.remove();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHRpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudFV0aWx0aWVzIH0gZnJvbSBcImVhc3lcIjtcblxuY29uc3QgeyBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gPSBlbGVtZW50VXRpbHRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFlhcHAoeWFwcCwgZG9tRWxlbWVudCkge1xuICBjb25zdCBlbGVtZW50ID0geWFwcCwgLy8vXG4gICAgICAgIHlhcHBET01FbGVtZW50ID0geWFwcC5nZXRET01FbGVtZW50KCk7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh5YXBwRE9NRWxlbWVudCk7XG5cbiAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFlhcHAoeWFwcCkge1xuICBjb25zdCBlbGVtZW50ID0geWFwcCwgLy8vXG4gICAgICAgIHlhcHBET01FbGVtZW50ID0geWFwcC5nZXRET01FbGVtZW50KCk7XG5cbiAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgeWFwcERPTUVsZW1lbnQucmVtb3ZlKCk7XG59XG4iXSwibmFtZXMiOlsibW91bnRZYXBwIiwidW5tb3VudFlhcHAiLCJtb3VudEVsZW1lbnQiLCJlbGVtZW50VXRpbHRpZXMiLCJ1bm1vdW50RWxlbWVudCIsInlhcHAiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsInlhcHBET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0lBTWdCQSxTQUFTO2VBQVRBOztJQVNBQyxXQUFXO2VBQVhBOzs7b0JBYmdCO0FBRWhDLElBQVFDLGVBQWlDQyxxQkFBZSxDQUFoREQsY0FBY0UsaUJBQW1CRCxxQkFBZSxDQUFsQ0M7QUFFZixTQUFTSixVQUFVSyxJQUFJLEVBQUVDLFVBQVU7SUFDeEMsSUFBTUMsVUFBVUYsTUFDVkcsaUJBQWlCSCxLQUFLSSxhQUFhO0lBRXpDSCxXQUFXSSxXQUFXLENBQUNGO0lBRXZCTixhQUFhSztBQUNmO0FBRU8sU0FBU04sWUFBWUksSUFBSTtJQUM5QixJQUFNRSxVQUFVRixNQUNWRyxpQkFBaUJILEtBQUtJLGFBQWE7SUFFekNMLGVBQWVHO0lBRWZDLGVBQWVHLE1BQU07QUFDdkIifQ==