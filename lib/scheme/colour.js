"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        get: all[name],
        enumerable: true
    });
}
_export(exports, {
    backgroundColour: function() {
        return backgroundColour;
    },
    borderColour: function() {
        return borderColour;
    },
    caretColour: function() {
        return caretColour;
    },
    colour: function() {
        return colour;
    },
    default: function() {
        return _default;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
    },
    scrollbarThumbBoxShadowColour: function() {
        return scrollbarThumbBoxShadowColour;
    },
    selectionBackgroundColour: function() {
        return selectionBackgroundColour;
    },
    selectionColour: function() {
        return selectionColour;
    }
});
var _colours = require("../colours");
var colour = _colours.stormDust;
var caretColour = _colours.bonjour;
var borderColour = _colours.stormDust;
var selectionColour = _colours.bonjour;
var backgroundColour = _colours.hunterGreen;
var selectionBackgroundColour = _colours.havelockBlue;
var scrollbarThumbBoxShadowColour = _colours.stormDust;
var scrollbarThumbBackgroundColour = _colours.hurricane;
var _default = {
    colour: colour,
    caretColour: caretColour,
    borderColour: borderColour,
    selectionColour: selectionColour,
    backgroundColour: backgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBoxShadowColour: scrollbarThumbBoxShadowColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBib25qb3VyLCBodXJyaWNhbmUsIGh1bnRlckdyZWVuLCBoYXZlbG9ja0JsdWUsIHN0b3JtRHVzdCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjYXJldENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25Db2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IGh1bnRlckdyZWVuO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGhhdmVsb2NrQmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm94U2hhZG93Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG91cixcbiAgY2FyZXRDb2xvdXIsXG4gIGJvcmRlckNvbG91cixcbiAgc2VsZWN0aW9uQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJjYXJldENvbG91ciIsImNvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQm94U2hhZG93Q29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkNvbG91ciIsInN0b3JtRHVzdCIsImJvbmpvdXIiLCJodW50ZXJHcmVlbiIsImhhdmVsb2NrQmx1ZSIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVlBQSxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFKaEJDLFlBQVk7ZUFBWkEsWUFBWTs7SUFGWkMsV0FBVztlQUFYQSxXQUFXOztJQUZYQyxNQUFNO2VBQU5BLE1BQU07Ozs7O0lBY05DLDhCQUE4QjtlQUE5QkEsOEJBQThCOztJQUY5QkMsNkJBQTZCO2VBQTdCQSw2QkFBNkI7O0lBRjdCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFKekJDLGVBQWU7ZUFBZkEsZUFBZTs7O3VCQVI2QyxZQUFZO0FBRTlFLElBQU1KLE1BQU0sR0FBR0ssUUFBUyxVQUFBLEFBQUM7QUFFekIsSUFBTU4sV0FBVyxHQUFHTyxRQUFPLFFBQUEsQUFBQztBQUU1QixJQUFNUixZQUFZLEdBQUdPLFFBQVMsVUFBQSxBQUFDO0FBRS9CLElBQU1ELGVBQWUsR0FBR0UsUUFBTyxRQUFBLEFBQUM7QUFFaEMsSUFBTVQsZ0JBQWdCLEdBQUdVLFFBQVcsWUFBQSxBQUFDO0FBRXJDLElBQU1KLHlCQUF5QixHQUFHSyxRQUFZLGFBQUEsQUFBQztBQUUvQyxJQUFNTiw2QkFBNkIsR0FBR0csUUFBUyxVQUFBLEFBQUM7QUFFaEQsSUFBTUosOEJBQThCLEdBQUdRLFFBQVMsVUFBQSxBQUFDO2VBRXpDO0lBQ2JULE1BQU0sRUFBTkEsTUFBTTtJQUNORCxXQUFXLEVBQVhBLFdBQVc7SUFDWEQsWUFBWSxFQUFaQSxZQUFZO0lBQ1pNLGVBQWUsRUFBZkEsZUFBZTtJQUNmUCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQk0seUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJELDZCQUE2QixFQUE3QkEsNkJBQTZCO0lBQzdCRCw4QkFBOEIsRUFBOUJBLDhCQUE4QjtDQUMvQiJ9