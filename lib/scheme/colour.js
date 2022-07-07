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
    default: function() {
        return _default;
    },
    colour: function() {
        return colour;
    },
    caretColour: function() {
        return caretColour;
    },
    borderColour: function() {
        return borderColour;
    },
    selectionColour: function() {
        return selectionColour;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    selectionBackgroundColour: function() {
        return selectionBackgroundColour;
    },
    scrollbarThumbBoxShadowColour: function() {
        return scrollbarThumbBoxShadowColour;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29sb3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBib25qb3VyLCBodXJyaWNhbmUsIGh1bnRlckdyZWVuLCBoYXZlbG9ja0JsdWUsIHN0b3JtRHVzdCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjYXJldENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25Db2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IGh1bnRlckdyZWVuO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGhhdmVsb2NrQmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm94U2hhZG93Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG91cixcbiAgY2FyZXRDb2xvdXIsXG4gIGJvcmRlckNvbG91cixcbiAgc2VsZWN0aW9uQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImNvbG91ciIsImNhcmV0Q29sb3VyIiwiYm9yZGVyQ29sb3VyIiwic2VsZWN0aW9uQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInN0b3JtRHVzdCIsImJvbmpvdXIiLCJodW50ZXJHcmVlbiIsImhhdmVsb2NrQmx1ZSIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQUlBQSxNQUFNO2VBQU5BLE1BQU07O0lBRU5DLFdBQVc7ZUFBWEEsV0FBVzs7SUFFWEMsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxlQUFlO2VBQWZBLGVBQWU7O0lBRWZDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUVoQkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXpCQyw2QkFBNkI7ZUFBN0JBLDZCQUE2Qjs7SUFFN0JDLDhCQUE4QjtlQUE5QkEsOEJBQThCOzs7dUJBaEI4QixZQUFZO0FBRTlFLElBQU1QLE1BQU0sR0FBR1EsUUFBUyxVQUFBLEFBQUM7QUFFekIsSUFBTVAsV0FBVyxHQUFHUSxRQUFPLFFBQUEsQUFBQztBQUU1QixJQUFNUCxZQUFZLEdBQUdNLFFBQVMsVUFBQSxBQUFDO0FBRS9CLElBQU1MLGVBQWUsR0FBR00sUUFBTyxRQUFBLEFBQUM7QUFFaEMsSUFBTUwsZ0JBQWdCLEdBQUdNLFFBQVcsWUFBQSxBQUFDO0FBRXJDLElBQU1MLHlCQUF5QixHQUFHTSxRQUFZLGFBQUEsQUFBQztBQUUvQyxJQUFNTCw2QkFBNkIsR0FBR0UsUUFBUyxVQUFBLEFBQUM7QUFFaEQsSUFBTUQsOEJBQThCLEdBQUdLLFFBQVMsVUFBQSxBQUFDO2VBRXpDO0lBQ2JaLE1BQU0sRUFBTkEsTUFBTTtJQUNOQyxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGVBQWUsRUFBZkEsZUFBZTtJQUNmQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJDLDZCQUE2QixFQUE3QkEsNkJBQTZCO0lBQzdCQyw4QkFBOEIsRUFBOUJBLDhCQUE4QjtDQUMvQiJ9