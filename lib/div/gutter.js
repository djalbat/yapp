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
const _lineNumbers = /*#__PURE__*/ _interop_require_default(require("../div/lineNumbers"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class GutterDiv extends _easy.Element {
    update(tokens) {
        this.updateLineNumbersDiv(tokens);
    }
    scroll(scrollTop, scrollLeft) {
        this.scrollLineNumbersDiv(scrollTop, scrollLeft);
    }
    setLineCount(lineCount) {
        this.updateState({
            lineCount
        });
    }
    setInitialState() {
        const lineCount = null;
        this.setState({
            lineCount
        });
    }
    childElements() {
        return /*#__PURE__*/ _easy.React.createElement(_lineNumbers.default, null);
    }
    parentContext() {
        const context = this.getContext(), updateGutterDiv = this.update.bind(this), scrollGutterDiv = this.scroll.bind(this); ///
        return {
            ...context,
            updateGutterDiv,
            scrollGutterDiv
        };
    }
    initialise() {
        this.assignContext();
        this.setInitialState();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "gutter"
    };
}
const _default = (0, _easywithstyle.default)(GutterDiv)`

  width: fit-content;
  overflow: hidden;
  position: relative;
  grid-area: gutter;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZ3V0dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBMaW5lTnVtYmVyc0RpdiBmcm9tIFwiLi4vZGl2L2xpbmVOdW1iZXJzXCI7XHJcblxyXG5jbGFzcyBHdXR0ZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzRGl2KHRva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNjcm9sbExpbmVOdW1iZXJzRGl2KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lQ291bnQobGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxpbmVDb3VudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVyc0Rpdi8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXJEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXJEaXYgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgIHVwZGF0ZUd1dHRlckRpdixcclxuICAgICAgc2Nyb2xsR3V0dGVyRGl2XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHdXR0ZXJEaXYpYFxyXG5cclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1hcmVhOiBndXR0ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiR3V0dGVyRGl2IiwiRWxlbWVudCIsInVwZGF0ZSIsInRva2VucyIsInVwZGF0ZUxpbmVOdW1iZXJzRGl2Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbExpbmVOdW1iZXJzRGl2Iiwic2V0TGluZUNvdW50IiwibGluZUNvdW50IiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJMaW5lTnVtYmVyc0RpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInVwZGF0ZUd1dHRlckRpdiIsImJpbmQiLCJzY3JvbGxHdXR0ZXJEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0VBOzs7ZUFBQTs7O3NFQTlEc0I7c0JBRVM7b0VBRUo7Ozs7OztBQUUzQixNQUFNQSxrQkFBa0JDLGFBQU87SUFDN0JDLE9BQU9DLE1BQU0sRUFBRTtRQUNiLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNEO0lBQzVCO0lBRUFFLE9BQU9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO1FBQzVCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNGLFdBQVdDO0lBQ3ZDO0lBRUFFLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixJQUFJLENBQUNDLFdBQVcsQ0FBQztZQUNmRDtRQUNGO0lBQ0Y7SUFFQUUsa0JBQWtCO1FBQ2hCLE1BQU1GLFlBQVk7UUFFbEIsSUFBSSxDQUFDRyxRQUFRLENBQUM7WUFDWkg7UUFDRjtJQUNGO0lBRUFJLGdCQUFnQjtRQUNkLHFCQUVFLDBCQUFDQyxvQkFBYztJQUduQjtJQUVBQyxnQkFBZ0I7UUFDZixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUM1QkMsa0JBQWtCLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLEdBQ3ZDQyxrQkFBa0IsSUFBSSxDQUFDaEIsTUFBTSxDQUFDZSxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFaEQsT0FBUTtZQUNOLEdBQUdILE9BQU87WUFDVkU7WUFDQUU7UUFDRjtJQUNGO0lBRUFDLGFBQWE7UUFDWCxJQUFJLENBQUNDLGFBQWE7UUFFbEIsSUFBSSxDQUFDWCxlQUFlO0lBQ3RCO0lBRUEsT0FBT1ksVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMzQixVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY3BDLENBQUMifQ==