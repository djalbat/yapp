"use sttict";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get mountYapp () {
        return mountYapp;
    },
    get unmountYapp () {
        return unmountYapp;
    }
});
const _easy = require("easy");
const { mountElement, unmountElement } = _easy.elementUtilities;
function mountYapp(yapp, domElement) {
    const element = yapp, yappDOMElement = yapp.getDOMElement();
    domElement.appendChild(yappDOMElement);
    mountElement(element);
}
function unmountYapp(yapp) {
    const element = yapp, yappDOMElement = yapp.getDOMElement();
    unmountElement(element);
    yappDOMElement.remove();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHRpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50WWFwcCh5YXBwLCBkb21FbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSB5YXBwLCAvLy9cbiAgICAgICAgeWFwcERPTUVsZW1lbnQgPSB5YXBwLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHlhcHBET01FbGVtZW50KTtcblxuICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50WWFwcCh5YXBwKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSB5YXBwLCAvLy9cbiAgICAgICAgeWFwcERPTUVsZW1lbnQgPSB5YXBwLmdldERPTUVsZW1lbnQoKTtcblxuICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICB5YXBwRE9NRWxlbWVudC5yZW1vdmUoKTtcbn1cbiJdLCJuYW1lcyI6WyJtb3VudFlhcHAiLCJ1bm1vdW50WWFwcCIsIm1vdW50RWxlbWVudCIsInVubW91bnRFbGVtZW50IiwiZWxlbWVudFV0aWxpdGllcyIsInlhcHAiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsInlhcHBET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O1FBTWdCQTtlQUFBQTs7UUFTQUM7ZUFBQUE7OztzQkFiaUI7QUFFakMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRSxHQUFHQyxzQkFBZ0I7QUFFbEQsU0FBU0osVUFBVUssSUFBSSxFQUFFQyxVQUFVO0lBQ3hDLE1BQU1DLFVBQVVGLE1BQ1ZHLGlCQUFpQkgsS0FBS0ksYUFBYTtJQUV6Q0gsV0FBV0ksV0FBVyxDQUFDRjtJQUV2Qk4sYUFBYUs7QUFDZjtBQUVPLFNBQVNOLFlBQVlJLElBQUk7SUFDOUIsTUFBTUUsVUFBVUYsTUFDVkcsaUJBQWlCSCxLQUFLSSxhQUFhO0lBRXpDTixlQUFlSTtJQUVmQyxlQUFlRyxNQUFNO0FBQ3ZCIn0=