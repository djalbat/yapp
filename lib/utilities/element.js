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
var mountElement = _easy.elementMixins.mountElement, unmountElement = _easy.elementMixins.unmountElement;
function mountYapp(yapp, domElement) {
    var yappDOMElement = yapp.getDOMElement();
    domElement.appendChild(yappDOMElement);
    var element = yapp; ///
    mountElement(element);
}
function unmountYapp(yapp) {
    var element = yapp; ///
    unmountElement(element);
    var yappDOMElement = yapp.getDOMElement();
    yappDOMElement.remove();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHRpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudE1peGlucyB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudE1peGlucztcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50WWFwcCh5YXBwLCBkb21FbGVtZW50KSB7XG4gIGNvbnN0IHlhcHBET01FbGVtZW50ID0geWFwcC5nZXRET01FbGVtZW50KCk7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh5YXBwRE9NRWxlbWVudCk7XG5cbiAgY29uc3QgZWxlbWVudCA9IHlhcHA7IC8vL1xuXG4gIG1vdW50RWxlbWVudChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRZYXBwKHlhcHApIHtcbiAgY29uc3QgZWxlbWVudCA9IHlhcHA7IC8vL1xuXG4gIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gIGNvbnN0IHlhcHBET01FbGVtZW50ID0geWFwcC5nZXRET01FbGVtZW50KCk7XG5cbiAgeWFwcERPTUVsZW1lbnQucmVtb3ZlKCk7XG59XG4iXSwibmFtZXMiOlsibW91bnRZYXBwIiwidW5tb3VudFlhcHAiLCJtb3VudEVsZW1lbnQiLCJlbGVtZW50TWl4aW5zIiwidW5tb3VudEVsZW1lbnQiLCJ5YXBwIiwiZG9tRWxlbWVudCIsInlhcHBET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztJQU1nQkEsU0FBUztlQUFUQTs7SUFVQUMsV0FBVztlQUFYQTs7O29CQWRjO0FBRTlCLElBQVFDLGVBQWlDQyxtQkFBYSxDQUE5Q0QsY0FBY0UsaUJBQW1CRCxtQkFBYSxDQUFoQ0M7QUFFZixTQUFTSixVQUFVSyxJQUFJLEVBQUVDLFVBQVU7SUFDeEMsSUFBTUMsaUJBQWlCRixLQUFLRyxhQUFhO0lBRXpDRixXQUFXRyxXQUFXLENBQUNGO0lBRXZCLElBQU1HLFVBQVVMLE1BQU0sR0FBRztJQUV6QkgsYUFBYVE7QUFDZjtBQUVPLFNBQVNULFlBQVlJLElBQUk7SUFDOUIsSUFBTUssVUFBVUwsTUFBTSxHQUFHO0lBRXpCRCxlQUFlTTtJQUVmLElBQU1ILGlCQUFpQkYsS0FBS0csYUFBYTtJQUV6Q0QsZUFBZUksTUFBTTtBQUN2QiJ9