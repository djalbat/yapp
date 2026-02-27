"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _constants = require("../constants");
const _tokens = require("../utilities/tokens");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LineNumbersDiv extends _easy.Element {
    update(tokens) {
        let html = _constants.EMPTY_STRING;
        const lineCount = (0, _tokens.lineCountFromTokens)(tokens);
        for(let lineNumber = 1; lineNumber <= lineCount; lineNumber++){
            html = `${html}${lineNumber}<br/>`;
        }
        this.html(html);
    }
    scroll(scrollTop, scrollLeft) {
        const top = `${-scrollTop}px`, css = {
            top
        };
        this.css(css);
    }
    parentContext() {
        const scrollLineNumbersDiv = this.scroll.bind(this), updateLineNumbersDiv = this.update.bind(this); ///
        return {
            scrollLineNumbersDiv,
            updateLineNumbersDiv
        };
    }
    static tagName = "div";
    static defaultProperties = {
        className: "line-numbers"
    };
}
const _default = (0, _easywithstyle.default)(LineNumbersDiv)`

  position: relative;
  user-select: none;
  pointer-events: none;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvbGluZU51bWJlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Ub2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBsZXQgaHRtbCA9IEVNUFRZX1NUUklORztcclxuXHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgZm9yIChsZXQgbGluZU51bWJlciA9IDE7IGxpbmVOdW1iZXIgPD0gbGluZUNvdW50OyBsaW5lTnVtYmVyKyspIHtcclxuICAgICAgaHRtbCA9IGAke2h0bWx9JHtsaW5lTnVtYmVyfTxici8+YDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGNzcyA9IHtcclxuICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHRoaXMuY3NzKGNzcyk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2Nyb2xsTGluZU51bWJlcnNEaXYgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cclxuICAgICAgICAgIHVwZGF0ZUxpbmVOdW1iZXJzRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICBzY3JvbGxMaW5lTnVtYmVyc0RpdixcclxuICAgICAgdXBkYXRlTGluZU51bWJlcnNEaXZcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwibGluZS1udW1iZXJzXCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGluZU51bWJlcnNEaXYpYFxyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiTGluZU51bWJlcnNEaXYiLCJFbGVtZW50IiwidXBkYXRlIiwidG9rZW5zIiwiaHRtbCIsIkVNUFRZX1NUUklORyIsImxpbmVDb3VudCIsImxpbmVDb3VudEZyb21Ub2tlbnMiLCJsaW5lTnVtYmVyIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvcCIsImNzcyIsInBhcmVudENvbnRleHQiLCJzY3JvbGxMaW5lTnVtYmVyc0RpdiIsImJpbmQiLCJ1cGRhdGVMaW5lTnVtYmVyc0RpdiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0RBOzs7ZUFBQTs7O3NFQTlDc0I7c0JBRUU7MkJBRUs7d0JBQ087Ozs7OztBQUVwQyxNQUFNQSx1QkFBdUJDLGFBQU87SUFDbENDLE9BQU9DLE1BQU0sRUFBRTtRQUNiLElBQUlDLE9BQU9DLHVCQUFZO1FBRXZCLE1BQU1DLFlBQVlDLElBQUFBLDJCQUFtQixFQUFDSjtRQUV0QyxJQUFLLElBQUlLLGFBQWEsR0FBR0EsY0FBY0YsV0FBV0UsYUFBYztZQUM5REosT0FBTyxHQUFHQSxPQUFPSSxXQUFXLEtBQUssQ0FBQztRQUNwQztRQUVBLElBQUksQ0FBQ0osSUFBSSxDQUFDQTtJQUNaO0lBRUFLLE9BQU9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO1FBQzVCLE1BQU1DLE1BQU0sR0FBRyxDQUFDRixVQUFVLEVBQUUsQ0FBQyxFQUN2QkcsTUFBTTtZQUNKRDtRQUNGO1FBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO0lBQ1g7SUFFQUMsZ0JBQWdCO1FBQ2YsTUFBTUMsdUJBQXVCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUMzQ0MsdUJBQXVCLElBQUksQ0FBQ2YsTUFBTSxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFekQsT0FBUTtZQUNORDtZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JCLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWF6QyxDQUFDIn0=