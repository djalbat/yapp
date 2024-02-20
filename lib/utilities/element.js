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
function mountYapp(yapp) {
    var element = yapp; ///
    mountElement(element);
}
function unmountYapp(yapp) {
    var element = yapp; ///
    unmountElement(element);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHRpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudE1peGlucyB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudE1peGlucztcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50WWFwcCh5YXBwKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSB5YXBwOyAvLy9cblxuICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50WWFwcCh5YXBwKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSB5YXBwOyAvLy9cblxuICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcbn1cbiJdLCJuYW1lcyI6WyJtb3VudFlhcHAiLCJ1bm1vdW50WWFwcCIsIm1vdW50RWxlbWVudCIsImVsZW1lbnRNaXhpbnMiLCJ1bm1vdW50RWxlbWVudCIsInlhcHAiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0lBTWdCQSxTQUFTO2VBQVRBOztJQU1BQyxXQUFXO2VBQVhBOzs7b0JBVmM7QUFFOUIsSUFBUUMsZUFBaUNDLG1CQUFhLENBQTlDRCxjQUFjRSxpQkFBbUJELG1CQUFhLENBQWhDQztBQUVmLFNBQVNKLFVBQVVLLElBQUk7SUFDNUIsSUFBTUMsVUFBVUQsTUFBTSxHQUFHO0lBRXpCSCxhQUFhSTtBQUNmO0FBRU8sU0FBU0wsWUFBWUksSUFBSTtJQUM5QixJQUFNQyxVQUFVRCxNQUFNLEdBQUc7SUFFekJELGVBQWVFO0FBQ2pCIn0=