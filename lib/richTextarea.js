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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easyRichtextarea = require("easy-richtextarea");
var _styles = require("./styles");
var _colour = require("./scheme/colour");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  overflow: scroll;\n  grid-area: highlights-rich-textarea;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n\n  ::selection {\n    color: ",
        ";\n    background-color: ",
        ";\n  }\n  \n  .hidden-scrollbars {\n    overflow: hidden;\n  }\n  \n  .fancy-scrollbars {\n    scrollbar-color: ",
        " transparent;\n    scrollbar-gutter: auto;\n  }\n  \n  .fancy-scrollbars::-webkit-scrollbar {\n    width: ",
        ";\n    height: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-thumb {\n    border: 2px solid ",
        ";\n    border-radius: ",
        ";\n    background-color: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-corner {\n    display: none;\n  }\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  caret-color: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _class;
var _default = (0, _easyWithStyle.default)((_class = /*#__PURE__*/ function(RichTextarea) {
    _inherits(_class, RichTextarea);
    var _super = _createSuper(_class);
    function _class() {
        _classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    _createClass(_class, [
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, fancyScrollbars = _this_properties.fancyScrollbars, hiddenScrollbars = _this_properties.hiddenScrollbars;
                if (fancyScrollbars) {
                    this.addClass("fancy-scrollbars");
                }
                if (hiddenScrollbars) {
                    this.addClass("hidden-scrollbars");
                }
                _get(_getPrototypeOf(_class.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _this_properties = this.properties, fancyScrollbars = _this_properties.fancyScrollbars, hiddenScrollbars = _this_properties.hiddenScrollbars;
                if (fancyScrollbars) {
                    this.removeClass("fancy-scrollbars");
                }
                if (hiddenScrollbars) {
                    this.removeClass("hidden-scrollbars");
                }
                _get(_getPrototypeOf(_class.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getContent = this.getContent.bind(this), getRichTextareaContent = this.getContent.bind(this), setRichTextareaContent = this.setContent.bind(this), setRichTextareaReadOnly = this.setReadOnly.bind(this); ///
                return {
                    getContent: getContent,
                    getRichTextareaContent: getRichTextareaContent,
                    setRichTextareaContent: setRichTextareaContent,
                    setRichTextareaReadOnly: setRichTextareaReadOnly
                };
            }
        }
    ]);
    return _class;
}(_easyRichtextarea.RichTextarea), _defineProperty(_class, "defaultProperties", {
    spellCheck: "false"
}), _defineProperty(_class, "ignoredProperties", [
    "fancyScrollbars",
    "hiddenScrollbars"
]), _class))(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour, _colour.scrollbarColour, _styles.scrollbarThickness, _styles.scrollbarThickness, _colour.backgroundColour, _styles.scrollbarThumbBorderRadius, _colour.scrollbarColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyQ29sb3VyLCBzZWxlY3Rpb25Db2xvdXIsIGJhY2tncm91bmRDb2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIixcbiAgICBcImhpZGRlblNjcm9sbGJhcnNcIlxuICBdO1xufSlgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgdGFiLXNpemU6IDI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGdyaWQtYXJlYTogaGlnaGxpZ2h0cy1yaWNoLXRleHRhcmVhO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtzZWxlY3Rpb25Db2xvdXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2VsZWN0aW9uQmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgXG4gIC5oaWRkZW4tc2Nyb2xsYmFycyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZhbmN5LXNjcm9sbGJhcnMge1xuICAgIHNjcm9sbGJhci1jb2xvcjogJHtzY3JvbGxiYXJDb2xvdXJ9IHRyYW5zcGFyZW50O1xuICAgIHNjcm9sbGJhci1ndXR0ZXI6IGF1dG87XG4gIH1cbiAgXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgICBoZWlnaHQ6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3Njcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhckNvbG91cn07XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0IiwiZ2V0Q29udGVudCIsImJpbmQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsInNldFJlYWRPbmx5IiwiUmljaFRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJzcGVsbENoZWNrIiwiaWdub3JlZFByb3BlcnRpZXMiLCJzZWxlY3Rpb25Db2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyQ29sb3VyIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwiYmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztrRUFOc0I7Z0NBRU87c0JBQ2tDO3NCQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0YsV0FBZUEsSUFBQUEsc0JBQVMsMEJBQUM7Ozs7Ozs7OztZQUN2QkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBOEMsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQXJEQyxrQkFBc0MsaUJBQXRDQSxpQkFBaUJDLG1CQUFxQixpQkFBckJBO2dCQUV6QixJQUFJRCxpQkFBaUI7b0JBQ25CLElBQUksQ0FBQ0UsUUFBUSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELElBQUlELGtCQUFrQjtvQkFDcEIsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsd0NBQU1KLFlBQU4sSUFBSztZQUNQOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osSUFBOEMsbUJBQUEsSUFBSSxDQUFDSixVQUFVLEVBQXJEQyxrQkFBc0MsaUJBQXRDQSxpQkFBaUJDLG1CQUFxQixpQkFBckJBO2dCQUV6QixJQUFJRCxpQkFBaUI7b0JBQ25CLElBQUksQ0FBQ0ksV0FBVyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELElBQUlILGtCQUFrQjtvQkFDcEIsSUFBSSxDQUFDRyxXQUFXLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsd0NBQU1ELGVBQU4sSUFBSztZQUNQOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUN0Q0MseUJBQXlCLElBQUksQ0FBQ0YsVUFBVSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNsREUseUJBQXlCLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxJQUFJLENBQUMsSUFBSSxHQUNsREksMEJBQTBCLElBQUksQ0FBQ0MsV0FBVyxDQUFDTCxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRWpFLE9BQVE7b0JBQ05ELFlBQUFBO29CQUNBRSx3QkFBQUE7b0JBQ0FDLHdCQUFBQTtvQkFDQUUseUJBQUFBO2dCQUNGO1lBQ0Y7Ozs7RUF6Q3FDRSw4QkFBWSxHQTJDakQsd0JBQU9DLHFCQUFvQjtJQUN6QkMsWUFBWTtBQUNkLElBRUEsd0JBQU9DLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0QsK0JBa0JVQyx1QkFBZSxFQUNKQyxpQ0FBeUIsRUFRMUJDLHVCQUFlLEVBS3pCQywwQkFBa0IsRUFDakJBLDBCQUFrQixFQVFSQyx3QkFBZ0IsRUFDbkJDLGtDQUEwQixFQUN2QkgsdUJBQWUifQ==