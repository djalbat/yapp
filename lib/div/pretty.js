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
const _syntax = /*#__PURE__*/ _interop_require_default(require("../div/syntax"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PrettyDiv extends _easy.Element {
    update(tokens) {
        this.updateSyntaxDiv(tokens);
    }
    scroll(scrollTop, scrollLeft) {
        this.scrollSyntaxDiv(scrollTop, scrollLeft);
    }
    didMount() {
        const { scrollbarThickness } = this.properties, marginRight = `${scrollbarThickness}px`, marginBottom = `${scrollbarThickness}px`;
        this.style(_constants.MARGIN_RIGHT, marginRight);
        this.style(_constants.MARGIN_BOTTOM, marginBottom);
    }
    willUnmount() {
    ///
    }
    childElements() {
        return /*#__PURE__*/ React.createElement(_syntax.default, null);
    }
    parentContext() {
        const context = this.getContext(), updatePrettyDiv = this.update.bind(this), scrollPrettyDiv = this.scroll.bind(this); ///
        return {
            ...context,
            updatePrettyDiv,
            scrollPrettyDiv
        };
    }
    initialise() {
        this.assignContext([
            "updateSyntaxDiv",
            "scrollSyntaxDiv"
        ]);
    }
    static tagName = "div";
    static ignoredProperties = [
        "scrollbarThickness"
    ];
    static defaultProperties = {
        className: "pretty"
    };
}
const _default = (0, _easywithstyle.default)(PrettyDiv)`

  z-index: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  position: relative;
  grid-area: pretty-richtextarea;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvcHJldHR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFN5bnRheERpdiBmcm9tIFwiLi4vZGl2L3N5bnRheFwiO1xyXG5cclxuaW1wb3J0IHsgTUFSR0lOX1JJR0hULCBNQVJHSU5fQk9UVE9NIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgUHJldHR5RGl2IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgdGhpcy51cGRhdGVTeW50YXhEaXYodG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcclxuICAgIHRoaXMuc2Nyb2xsU3ludGF4RGl2KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodCA9IGAke3Njcm9sbGJhclRoaWNrbmVzc31weGAsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBgJHtzY3JvbGxiYXJUaGlja25lc3N9cHhgO1xyXG5cclxuICAgIHRoaXMuc3R5bGUoTUFSR0lOX1JJR0hULCBtYXJnaW5SaWdodCk7XHJcbiAgICB0aGlzLnN0eWxlKE1BUkdJTl9CT1RUT00sIG1hcmdpbkJvdHRvbSk7XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgY2hpbGRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICA8U3ludGF4RGl2Lz5cclxuXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcclxuICAgICAgICAgIHVwZGF0ZVByZXR0eURpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFByZXR0eURpdiA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgLi4uY29udGV4dCxcclxuICAgICAgdXBkYXRlUHJldHR5RGl2LFxyXG4gICAgICBzY3JvbGxQcmV0dHlEaXZcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXHJcbiAgICAgIFwidXBkYXRlU3ludGF4RGl2XCIsXHJcbiAgICAgIFwic2Nyb2xsU3ludGF4RGl2XCJcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInByZXR0eVwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eURpdilgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGdyaWQtYXJlYTogcHJldHR5LXJpY2h0ZXh0YXJlYTtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJQcmV0dHlEaXYiLCJFbGVtZW50IiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlU3ludGF4RGl2Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbFN5bnRheERpdiIsImRpZE1vdW50Iiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJNQVJHSU5fUklHSFQiLCJNQVJHSU5fQk9UVE9NIiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiU3ludGF4RGl2IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlUHJldHR5RGl2IiwiYmluZCIsInNjcm9sbFByZXR0eURpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNFQTs7O2VBQUE7OztzRUFwRXNCO3NCQUVFOytEQUVGOzJCQUVzQjs7Ozs7O0FBRTVDLE1BQU1BLGtCQUFrQkMsYUFBTztJQUM3QkMsT0FBT0MsTUFBTSxFQUFFO1FBQ2IsSUFBSSxDQUFDQyxlQUFlLENBQUNEO0lBQ3ZCO0lBRUFFLE9BQU9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO1FBQzVCLElBQUksQ0FBQ0MsZUFBZSxDQUFDRixXQUFXQztJQUNsQztJQUVBRSxXQUFXO1FBQ1QsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUN4Q0MsY0FBYyxHQUFHRixtQkFBbUIsRUFBRSxDQUFDLEVBQ3ZDRyxlQUFlLEdBQUdILG1CQUFtQixFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDSSxLQUFLLENBQUNDLHVCQUFZLEVBQUVIO1FBQ3pCLElBQUksQ0FBQ0UsS0FBSyxDQUFDRSx3QkFBYSxFQUFFSDtJQUM1QjtJQUVBSSxjQUFjO0lBQ1osR0FBRztJQUNMO0lBRUFDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQyxlQUFTO0lBR2Q7SUFFQUMsZ0JBQWdCO1FBQ2YsTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDeEJDLGtCQUFrQixJQUFJLENBQUNyQixNQUFNLENBQUNzQixJQUFJLENBQUMsSUFBSSxHQUMzQ0Msa0JBQWtCLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQ21CLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztRQUVoRCxPQUFRO1lBQ04sR0FBR0gsT0FBTztZQUNWRTtZQUNBRTtRQUNGO0lBQ0Y7SUFFQUMsYUFBYTtRQUNYLElBQUksQ0FBQ0MsYUFBYSxDQUFDO1lBQ2pCO1lBQ0E7U0FDRDtJQUNIO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QjtLQUNELENBQUM7SUFFRixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEMsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwQyxDQUFDIn0=