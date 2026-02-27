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
const _easyrichtextarea = require("easy-richtextarea");
const _gutter = /*#__PURE__*/ _interop_require_default(require("./div/gutter"));
const _pretty = /*#__PURE__*/ _interop_require_default(require("./div/pretty"));
const _richTextarea = /*#__PURE__*/ _interop_require_default(require("./richTextarea"));
const _scrollbar = require("./utilities/scrollbar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { CHANGE_CUSTOM_EVENT_TYPE } = _easyrichtextarea.customEventTypes;
class PrettyPrinter extends _easy.Element {
    changeCustomHandler = (event, element)=>{
        const customEventType = CHANGE_CUSTOM_EVENT_TYPE; ///
        this.callCustomHandlers(customEventType, event, element);
    };
    scrollCustomHandler = (event, element)=>{
        const richTextarea = element, scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
        this.scrollGutterDiv(scrollTop, scrollLeft);
        this.scrollPrettyDiv(scrollTop, scrollLeft);
    };
    update(tokens) {
        this.updateGutterDiv(tokens);
        this.updatePrettyDiv(tokens);
    }
    childElements() {
        const { editable, hiddenGutter, fancyScrollbars, hiddenScrollbars } = this.properties, scrollbarThickness = (0, _scrollbar.getScrollbarThickness)(hiddenScrollbars, fancyScrollbars), readOnly = !editable, hidden = hiddenGutter; ///
        return [
            /*#__PURE__*/ _easy.React.createElement(_gutter.default, {
                hidden: hidden
            }),
            /*#__PURE__*/ _easy.React.createElement(_pretty.default, {
                scrollbarThickness: scrollbarThickness
            }),
            /*#__PURE__*/ _easy.React.createElement(_richTextarea.default, {
                readOnly: readOnly,
                fancyScrollbars: fancyScrollbars,
                hiddenScrollbars: hiddenScrollbars,
                onCustomChange: this.changeCustomHandler,
                onCustomScroll: this.scrollCustomHandler
            })
        ];
    }
    parentContext() {
        const context = this.getContext(), updatePrettyPrinter = this.update.bind(this); ///
        return {
            ...context,
            updatePrettyPrinter
        };
    }
    initialise() {
        this.assignContext([
            "updateGutterDiv",
            "scrollGutterDiv",
            "updatePrettyDiv",
            "scrollPrettyDiv"
        ]);
    }
    static tagName = "div";
    static defaultProperties = {
        className: "pretty-printer"
    };
    static ignoredProperties = [
        "onChange",
        "editable",
        "hiddenGutter",
        "noScrollbars",
        "fancyScrollbars"
    ];
}
const _default = (0, _easywithstyle.default)(PrettyPrinter)`

  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: auto;
  grid-template-areas: "gutter pretty-richtextarea";
  grid-template-columns: min-content auto;  

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjdXN0b21FdmVudFR5cGVzICB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuXG5pbXBvcnQgR3V0dGVyRGl2IGZyb20gXCIuL2Rpdi9ndXR0ZXJcIjtcbmltcG9ydCBQcmV0dHlEaXYgZnJvbSBcIi4vZGl2L3ByZXR0eVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclwiO1xuXG5jb25zdCB7IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9ID0gY3VzdG9tRXZlbnRUeXBlcztcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFOyAvLy9cblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgc2Nyb2xsQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsR3V0dGVyRGl2KHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eURpdihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlR3V0dGVyRGl2KHRva2Vucyk7XG4gICAgdGhpcy51cGRhdGVQcmV0dHlEaXYodG9rZW5zKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBlZGl0YWJsZSwgaGlkZGVuR3V0dGVyLCBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoaGlkZGVuU2Nyb2xsYmFycywgZmFuY3lTY3JvbGxiYXJzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBoaWRkZW4gPSBoaWRkZW5HdXR0ZXI7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyRGl2IGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxQcmV0dHlEaXYgc2Nyb2xsYmFyVGhpY2tuZXNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICAgIGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZT17dGhpcy5jaGFuZ2VDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVNjcm9sbD17dGhpcy5zY3JvbGxDdXN0b21IYW5kbGVyfVxuICAgICAgLz5cblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICB1cGRhdGVQcmV0dHlQcmludGVyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcInVwZGF0ZUd1dHRlckRpdlwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJEaXZcIixcbiAgICAgIFwidXBkYXRlUHJldHR5RGl2XCIsXG4gICAgICBcInNjcm9sbFByZXR0eURpdlwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJndXR0ZXIgcHJldHR5LXJpY2h0ZXh0YXJlYVwiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87ICBcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tRXZlbnRUeXBlcyIsIlByZXR0eVByaW50ZXIiLCJFbGVtZW50IiwiY2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNjcm9sbEN1c3RvbUhhbmRsZXIiLCJyaWNoVGV4dGFyZWEiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlckRpdiIsInNjcm9sbFByZXR0eURpdiIsInVwZGF0ZSIsInRva2VucyIsInVwZGF0ZUd1dHRlckRpdiIsInVwZGF0ZVByZXR0eURpdiIsImNoaWxkRWxlbWVudHMiLCJlZGl0YWJsZSIsImhpZGRlbkd1dHRlciIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJwcm9wZXJ0aWVzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwicmVhZE9ubHkiLCJoaWRkZW4iLCJHdXR0ZXJEaXYiLCJQcmV0dHlEaXYiLCJSaWNoVGV4dGFyZWEiLCJvbkN1c3RvbUNoYW5nZSIsIm9uQ3VzdG9tU2Nyb2xsIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlUHJldHR5UHJpbnRlciIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyRkE7OztlQUFBOzs7c0VBekZzQjtzQkFFUztrQ0FDRzsrREFFWjsrREFDQTtxRUFDRzsyQkFFYTs7Ozs7O0FBRXRDLE1BQU0sRUFBRUEsd0JBQXdCLEVBQUUsR0FBR0Msa0NBQWdCO0FBRXJELE1BQU1DLHNCQUFzQkMsYUFBTztJQUNqQ0Msc0JBQXNCLENBQUNDLE9BQU9DO1FBQzVCLE1BQU1DLGtCQUFrQlAsMEJBQTBCLEdBQUc7UUFFckQsSUFBSSxDQUFDUSxrQkFBa0IsQ0FBQ0QsaUJBQWlCRixPQUFPQztJQUNsRCxFQUFDO0lBRURHLHNCQUFzQixDQUFDSixPQUFPQztRQUM1QixNQUFNSSxlQUFlSixTQUNmSyxZQUFZRCxhQUFhRSxZQUFZLElBQ3JDQyxhQUFhSCxhQUFhSSxhQUFhO1FBRTdDLElBQUksQ0FBQ0MsZUFBZSxDQUFDSixXQUFXRTtRQUVoQyxJQUFJLENBQUNHLGVBQWUsQ0FBQ0wsV0FBV0U7SUFDbEMsRUFBQztJQUVESSxPQUFPQyxNQUFNLEVBQUU7UUFDYixJQUFJLENBQUNDLGVBQWUsQ0FBQ0Q7UUFDckIsSUFBSSxDQUFDRSxlQUFlLENBQUNGO0lBQ3ZCO0lBRUFHLGdCQUFnQjtRQUNkLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFDL0VDLHFCQUFxQkMsSUFBQUEsZ0NBQXFCLEVBQUNILGtCQUFrQkQsa0JBQzdESyxXQUFXLENBQUNQLFVBQ1pRLFNBQVNQLGNBQWUsR0FBRztRQUVqQyxPQUFROzBCQUVOLDBCQUFDUSxlQUFTO2dCQUFDRCxRQUFRQTs7MEJBQ25CLDBCQUFDRSxlQUFTO2dCQUFDTCxvQkFBb0JBOzswQkFDL0IsMEJBQUNNLHFCQUFZO2dCQUFDSixVQUFVQTtnQkFDVkwsaUJBQWlCQTtnQkFDakJDLGtCQUFrQkE7Z0JBQ2xCUyxnQkFBZ0IsSUFBSSxDQUFDOUIsbUJBQW1CO2dCQUN4QytCLGdCQUFnQixJQUFJLENBQUMxQixtQkFBbUI7O1NBR3ZEO0lBQ0g7SUFFQTJCLGdCQUFnQjtRQUNkLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxzQkFBc0IsSUFBSSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRXZELE9BQVE7WUFDTixHQUFHSCxPQUFPO1lBQ1ZFO1FBQ0Y7SUFDRjtJQUVBRSxhQUFhO1FBQ1gsSUFBSSxDQUFDQyxhQUFhLENBQUM7WUFDakI7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7SUFFRixPQUFPQyxvQkFBb0I7UUFDekI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNELENBQUM7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM3QyxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4QyxDQUFDIn0=