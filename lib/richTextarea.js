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
const _easyrichtextarea = require("easy-richtextarea");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _easywithstyle.default)(class extends _easyrichtextarea.RichTextarea {
    didMount() {
        const { fancyScrollbars, hiddenScrollbars } = this.properties;
        if (fancyScrollbars) {
            this.addClass("fancy-scrollbars");
        }
        if (hiddenScrollbars) {
            this.addClass("hidden-scrollbars");
        }
        super.didMount();
    }
    willUnmount() {
        const { fancyScrollbars, hiddenScrollbars } = this.properties;
        if (fancyScrollbars) {
            this.removeClass("fancy-scrollbars");
        }
        if (hiddenScrollbars) {
            this.removeClass("hidden-scrollbars");
        }
        super.willUnmount();
    }
    parentContext() {
        const getContent = this.getContent.bind(this), activateRichTextarea = this.activate.bind(this), getRichTextareaContent = this.getContent.bind(this), setRichTextareaContent = this.setContent.bind(this), hasRichTextareaContentChanged = this.hasContentChanged.bind(this); ///
        return {
            getContent,
            activateRichTextarea,
            getRichTextareaContent,
            setRichTextareaContent,
            hasRichTextareaContentChanged
        };
    }
    static defaultProperties = {
        spellCheck: "false"
    };
    static ignoredProperties = [
        "fancyScrollbars",
        "hiddenScrollbars"
    ];
})`

  color: transparent;
  width: 100%;
  height: 100%;
  cursor: auto;
  resize: none;
  outline: none;
  z-index: 1;
  tab-size: 2;
  overflow: scroll;
  position: relative;
  grid-area: pretty-richtextarea;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;

  .hidden-scrollbars {
    overflow: hidden;
  }
  
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgYWN0aXZhdGVSaWNoVGV4dGFyZWEgPSB0aGlzLmFjdGl2YXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoYXNSaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzQ29udGVudENoYW5nZWQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZW50LFxuICAgICAgYWN0aXZhdGVSaWNoVGV4dGFyZWEsXG4gICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIGhhc1JpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCIsXG4gICAgXCJoaWRkZW5TY3JvbGxiYXJzXCJcbiAgXTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHRhYi1zaXplOiAyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtYXJlYTogcHJldHR5LXJpY2h0ZXh0YXJlYTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAuaGlkZGVuLXNjcm9sbGJhcnMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJSaWNoVGV4dGFyZWEiLCJkaWRNb3VudCIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJwcm9wZXJ0aWVzIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImdldENvbnRlbnQiLCJiaW5kIiwiYWN0aXZhdGVSaWNoVGV4dGFyZWEiLCJhY3RpdmF0ZSIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0Q29udGVudCIsImhhc1JpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJkZWZhdWx0UHJvcGVydGllcyIsInNwZWxsQ2hlY2siLCJpZ25vcmVkUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7c0VBSnNCO2tDQUVPOzs7Ozs7TUFFN0IsV0FBZUEsSUFBQUEsc0JBQVMsRUFBQyxjQUFjQyw4QkFBWTtJQUNqREMsV0FBVztRQUNULE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQ0MsVUFBVTtRQUU3RCxJQUFJRixpQkFBaUI7WUFDbkIsSUFBSSxDQUFDRyxRQUFRLENBQUM7UUFDaEI7UUFFQSxJQUFJRixrQkFBa0I7WUFDcEIsSUFBSSxDQUFDRSxRQUFRLENBQUM7UUFDaEI7UUFFQSxLQUFLLENBQUNKO0lBQ1I7SUFFQUssY0FBYztRQUNaLE1BQU0sRUFBRUosZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQ0MsVUFBVTtRQUU3RCxJQUFJRixpQkFBaUI7WUFDbkIsSUFBSSxDQUFDSyxXQUFXLENBQUM7UUFDbkI7UUFFQSxJQUFJSixrQkFBa0I7WUFDcEIsSUFBSSxDQUFDSSxXQUFXLENBQUM7UUFDbkI7UUFFQSxLQUFLLENBQUNEO0lBQ1I7SUFFQUUsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdENDLHVCQUF1QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDOUNHLHlCQUF5QixJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDbERJLHlCQUF5QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0wsSUFBSSxDQUFDLElBQUksR0FDbERNLGdDQUFnQyxJQUFJLENBQUNDLGlCQUFpQixDQUFDUCxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFN0UsT0FBUTtZQUNORDtZQUNBRTtZQUNBRTtZQUNBQztZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLFlBQVk7SUFDZCxFQUFFO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCO1FBQ0E7S0FDRCxDQUFDO0FBQ0osRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJILENBQUMifQ==