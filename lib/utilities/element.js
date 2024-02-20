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
    var element = yapp, yappDOMElement = yapp.getDOMElement();
    domElement.appendChild(yappDOMElement);
    mountElement(element);
}
function unmountYapp(yapp) {
    var element = yapp, yappDOMElement = yapp.getDOMElement();
    unmountElement(element);
    yappDOMElement.remove();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHRpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudE1peGlucyB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudE1peGlucztcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50WWFwcCh5YXBwLCBkb21FbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSB5YXBwLCAvLy9cbiAgICAgICAgeWFwcERPTUVsZW1lbnQgPSB5YXBwLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHlhcHBET01FbGVtZW50KTtcblxuICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50WWFwcCh5YXBwKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSB5YXBwLCAvLy9cbiAgICAgICAgeWFwcERPTUVsZW1lbnQgPSB5YXBwLmdldERPTUVsZW1lbnQoKTtcblxuICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICB5YXBwRE9NRWxlbWVudC5yZW1vdmUoKTtcbn1cbiJdLCJuYW1lcyI6WyJtb3VudFlhcHAiLCJ1bm1vdW50WWFwcCIsIm1vdW50RWxlbWVudCIsImVsZW1lbnRNaXhpbnMiLCJ1bm1vdW50RWxlbWVudCIsInlhcHAiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsInlhcHBET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0lBTWdCQSxTQUFTO2VBQVRBOztJQVNBQyxXQUFXO2VBQVhBOzs7b0JBYmM7QUFFOUIsSUFBUUMsZUFBaUNDLG1CQUFhLENBQTlDRCxjQUFjRSxpQkFBbUJELG1CQUFhLENBQWhDQztBQUVmLFNBQVNKLFVBQVVLLElBQUksRUFBRUMsVUFBVTtJQUN4QyxJQUFNQyxVQUFVRixNQUNWRyxpQkFBaUJILEtBQUtJLGFBQWE7SUFFekNILFdBQVdJLFdBQVcsQ0FBQ0Y7SUFFdkJOLGFBQWFLO0FBQ2Y7QUFFTyxTQUFTTixZQUFZSSxJQUFJO0lBQzlCLElBQU1FLFVBQVVGLE1BQ1ZHLGlCQUFpQkgsS0FBS0ksYUFBYTtJQUV6Q0wsZUFBZUc7SUFFZkMsZUFBZUcsTUFBTTtBQUN2QiJ9