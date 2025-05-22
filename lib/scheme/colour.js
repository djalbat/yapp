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
    get backgroundColour () {
        return backgroundColour;
    },
    get borderColour () {
        return borderColour;
    },
    get caretColour () {
        return caretColour;
    },
    get colour () {
        return colour;
    },
    get default () {
        return _default;
    },
    get scrollbarColour () {
        return scrollbarColour;
    },
    get selectionBackgroundColour () {
        return selectionBackgroundColour;
    },
    get selectionColour () {
        return selectionColour;
    }
});
var _colours = require("../colours");
var colour = _colours.stormDust;
var caretColour = _colours.bonjour;
var borderColour = _colours.stormDust;
var scrollbarColour = _colours.hurricane;
var selectionColour = _colours.bonjour;
var backgroundColour = _colours.hunterGreen;
var selectionBackgroundColour = _colours.havelockBlue;
var _default = {
    colour: colour,
    caretColour: caretColour,
    borderColour: borderColour,
    scrollbarColour: scrollbarColour,
    selectionColour: selectionColour,
    backgroundColour: backgroundColour,
    selectionBackgroundColour: selectionBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBib25qb3VyLCBodXJyaWNhbmUsIGh1bnRlckdyZWVuLCBoYXZlbG9ja0JsdWUsIHN0b3JtRHVzdCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjYXJldENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJDb2xvdXIgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25Db2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IGh1bnRlckdyZWVuO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGhhdmVsb2NrQmx1ZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb2xvdXIsXG4gIGNhcmV0Q29sb3VyLFxuICBib3JkZXJDb2xvdXIsXG4gIHNjcm9sbGJhckNvbG91cixcbiAgc2VsZWN0aW9uQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJjYXJldENvbG91ciIsImNvbG91ciIsInNjcm9sbGJhckNvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25Db2xvdXIiLCJzdG9ybUR1c3QiLCJib25qb3VyIiwiaHVycmljYW5lIiwiaHVudGVyR3JlZW4iLCJoYXZlbG9ja0JsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWNhQTtlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBRkFDO2VBQUFBOztRQUZBQztlQUFBQTs7UUFjYjtlQUFBOztRQVJhQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOzs7dUJBVjREO0FBRWxFLElBQU1ILFNBQVNJLGtCQUFTO0FBRXhCLElBQU1MLGNBQWNNLGdCQUFPO0FBRTNCLElBQU1QLGVBQWVNLGtCQUFTO0FBRTlCLElBQU1ILGtCQUFrQkssa0JBQVM7QUFFakMsSUFBTUgsa0JBQWtCRSxnQkFBTztBQUUvQixJQUFNUixtQkFBbUJVLG9CQUFXO0FBRXBDLElBQU1MLDRCQUE0Qk0scUJBQVk7SUFFckQsV0FBZTtJQUNiUixRQUFBQTtJQUNBRCxhQUFBQTtJQUNBRCxjQUFBQTtJQUNBRyxpQkFBQUE7SUFDQUUsaUJBQUFBO0lBQ0FOLGtCQUFBQTtJQUNBSywyQkFBQUE7QUFDRiJ9