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
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  overflow: scroll;\n  position: relative;\n  grid-area: highlights-rich-textarea;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n\n  ::selection {\n    color: ",
        ";\n    background-color: ",
        ";\n  }\n  \n  .hidden-scrollbars {\n    overflow: hidden;\n  }\n  \n  .fancy-scrollbars {\n    scrollbar-color: ",
        " transparent;\n    scrollbar-gutter: auto;\n  }\n  \n  .fancy-scrollbars::-webkit-scrollbar {\n    width: ",
        ";\n    height: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-thumb {\n    border: 2px solid ",
        ";\n    border-radius: ",
        ";\n    background-color: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-corner {\n    display: none;\n  }\n\n  color: transparent;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: initial;\n  text-rendering: inherit;\n  background-color: transparent;\n  font-feature-settings: inherit;\n\n"
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
                var getContent = this.getContent.bind(this), activateRichTextarea = this.activate.bind(this), getRichTextareaContent = this.getContent.bind(this), setRichTextareaContent = this.setContent.bind(this), setRichTextareaReadOnly = this.setReadOnly.bind(this); ///
                return {
                    getContent: getContent,
                    activateRichTextarea: activateRichTextarea,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyQ29sb3VyLCBzZWxlY3Rpb25Db2xvdXIsIGJhY2tncm91bmRDb2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgYWN0aXZhdGVSaWNoVGV4dGFyZWEgPSB0aGlzLmFjdGl2YXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZW50LFxuICAgICAgYWN0aXZhdGVSaWNoVGV4dGFyZWEsXG4gICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCIsXG4gICAgXCJoaWRkZW5TY3JvbGxiYXJzXCJcbiAgXTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHRhYi1zaXplOiAyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtYXJlYTogaGlnaGxpZ2h0cy1yaWNoLXRleHRhcmVhO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtzZWxlY3Rpb25Db2xvdXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2VsZWN0aW9uQmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgXG4gIC5oaWRkZW4tc2Nyb2xsYmFycyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZhbmN5LXNjcm9sbGJhcnMge1xuICAgIHNjcm9sbGJhci1jb2xvcjogJHtzY3JvbGxiYXJDb2xvdXJ9IHRyYW5zcGFyZW50O1xuICAgIHNjcm9sbGJhci1ndXR0ZXI6IGF1dG87XG4gIH1cbiAgXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgICBoZWlnaHQ6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3Njcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhckNvbG91cn07XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6IGluaXRpYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0IiwiZ2V0Q29udGVudCIsImJpbmQiLCJhY3RpdmF0ZVJpY2hUZXh0YXJlYSIsImFjdGl2YXRlIiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0UmljaFRleHRhcmVhUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsIlJpY2hUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwic3BlbGxDaGVjayIsImlnbm9yZWRQcm9wZXJ0aWVzIiwic2VsZWN0aW9uQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhckNvbG91ciIsInNjcm9sbGJhclRoaWNrbmVzcyIsImJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7a0VBTnNCO2dDQUVPO3NCQUNrQztzQkFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9GLFdBQWVBLElBQUFBLHNCQUFTLDBCQUFDOzs7Ozs7Ozs7WUFDdkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQThDLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUFyREMsa0JBQXNDLGlCQUF0Q0EsaUJBQWlCQyxtQkFBcUIsaUJBQXJCQTtnQkFFekIsSUFBSUQsaUJBQWlCO29CQUNuQixJQUFJLENBQUNFLFFBQVEsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxJQUFJRCxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELHdDQUFNSixZQUFOLElBQUs7WUFDUDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQThDLG1CQUFBLElBQUksQ0FBQ0osVUFBVSxFQUFyREMsa0JBQXNDLGlCQUF0Q0EsaUJBQWlCQyxtQkFBcUIsaUJBQXJCQTtnQkFFekIsSUFBSUQsaUJBQWlCO29CQUNuQixJQUFJLENBQUNJLFdBQVcsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxJQUFJSCxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ0csV0FBVyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHdDQUFNRCxlQUFOLElBQUs7WUFDUDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBTUMsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdENDLHVCQUF1QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDOUNHLHlCQUF5QixJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDbERJLHlCQUF5QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0wsSUFBSSxDQUFDLElBQUksR0FDbERNLDBCQUEwQixJQUFJLENBQUNDLFdBQVcsQ0FBQ1AsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVqRSxPQUFRO29CQUNORCxZQUFBQTtvQkFDQUUsc0JBQUFBO29CQUNBRSx3QkFBQUE7b0JBQ0FDLHdCQUFBQTtvQkFDQUUseUJBQUFBO2dCQUNGO1lBQ0Y7Ozs7RUEzQ3FDRSw4QkFBWSxHQTZDakQsd0JBQU9DLHFCQUFvQjtJQUN6QkMsWUFBWTtBQUNkLElBRUEsd0JBQU9DLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0QsK0JBbUJVQyx1QkFBZSxFQUNKQyxpQ0FBeUIsRUFRMUJDLHVCQUFlLEVBS3pCQywwQkFBa0IsRUFDakJBLDBCQUFrQixFQVFSQyx3QkFBZ0IsRUFDbkJDLGtDQUEwQixFQUN2QkgsdUJBQWUifQ==