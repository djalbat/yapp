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
        ";\n  }\n  \n  .hidden-scrollbars {\n    overflow: hidden;\n  }\n  \n  .fancy-scrollbars::-webkit-scrollbar {\n    width: ",
        ";\n    height: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-thumb {\n    border: 2px solid ",
        ";\n    box-shadow: inset 0 0 1px ",
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
                var _properties = this.properties, fancyScrollbars = _properties.fancyScrollbars, hiddenScrollbars = _properties.hiddenScrollbars;
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
                var _properties = this.properties, fancyScrollbars = _properties.fancyScrollbars, hiddenScrollbars = _properties.hiddenScrollbars;
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
]), _class))(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour, _styles.scrollbarThickness, _styles.scrollbarThickness, _colour.backgroundColour, _colour.scrollbarThumbBoxShadowColour, _styles.scrollbarThumbBorderRadius, _colour.scrollbarThumbBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2VsZWN0aW9uQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyLCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91ciwgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyICB9IGZyb20gXCIuL3NjaGVtZS9jb2xvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKGNsYXNzIGV4dGVuZHMgUmljaFRleHRhcmVhIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIuZGlkTW91bnQoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmFuY3lTY3JvbGxiYXJzLCBoaWRkZW5TY3JvbGxiYXJzIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmFuY3lTY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmFuY3ktc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaGlkZGVuU2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImhpZGRlbi1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCIsXG4gICAgXCJoaWRkZW5TY3JvbGxiYXJzXCJcbiAgXTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHRhYi1zaXplOiAyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBncmlkLWFyZWE6IGhpZ2hsaWdodHMtcmljaC10ZXh0YXJlYTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICA6OnNlbGVjdGlvbiB7XG4gICAgY29sb3I6ICR7c2VsZWN0aW9uQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NlbGVjdGlvbkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG4gIFxuICAuaGlkZGVuLXNjcm9sbGJhcnMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgICBoZWlnaHQ6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICR7c2Nyb2xsYmFyVGh1bWJCb3hTaGFkb3dDb2xvdXJ9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXN9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY2FyZXQtY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiZmFuY3lTY3JvbGxiYXJzIiwiaGlkZGVuU2Nyb2xsYmFycyIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJnZXRDb250ZW50IiwiYmluZCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0Q29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJSaWNoVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsInNwZWxsQ2hlY2siLCJpZ25vcmVkUHJvcGVydGllcyIsInNlbGVjdGlvbkNvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJiYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3hTaGFkb3dDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7a0VBTnNCO2dDQUVPO3NCQUNrQztzQkFDOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdJLFdBQWVBLElBQUFBLHNCQUFTLDBCQUFDOzs7Ozs7Ozs7WUFDdkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQThDLGNBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQXJEQyxrQkFBc0MsWUFBdENBLGlCQUFpQkMsbUJBQXFCLFlBQXJCQTtnQkFFekIsSUFBSUQsaUJBQWlCO29CQUNuQixJQUFJLENBQUNFLFFBQVEsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxJQUFJRCxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELHdDQUFNSixZQUFOLElBQUs7WUFDUDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQThDLGNBQUEsSUFBSSxDQUFDSixVQUFVLEVBQXJEQyxrQkFBc0MsWUFBdENBLGlCQUFpQkMsbUJBQXFCLFlBQXJCQTtnQkFFekIsSUFBSUQsaUJBQWlCO29CQUNuQixJQUFJLENBQUNJLFdBQVcsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxJQUFJSCxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ0csV0FBVyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHdDQUFNRCxlQUFOLElBQUs7WUFDUDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBTUMsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdENDLHlCQUF5QixJQUFJLENBQUNGLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDbERFLHlCQUF5QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0gsSUFBSSxDQUFDLElBQUksR0FDbERJLDBCQUEwQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVqRSxPQUFRO29CQUNORCxZQUFBQTtvQkFDQUUsd0JBQUFBO29CQUNBQyx3QkFBQUE7b0JBQ0FFLHlCQUFBQTtnQkFDRjtZQUNGOzs7O0VBekNxQ0UsOEJBQVksR0EyQ2pELHdCQUFPQyxxQkFBb0I7SUFDekJDLFlBQVk7QUFDZCxJQUVBLHdCQUFPQyxxQkFBb0I7SUFDekI7SUFDQTtDQUNELCtCQWtCVUMsdUJBQWUsRUFDSkMsaUNBQXlCLEVBUXBDQywwQkFBa0IsRUFDakJBLDBCQUFrQixFQVFSQyx3QkFBZ0IsRUFDUkMscUNBQTZCLEVBQ3hDQyxrQ0FBMEIsRUFDdkJDLHNDQUE4QiJ9