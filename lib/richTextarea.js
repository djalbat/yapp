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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easyrichtextarea = require("easy-richtextarea");
var _styles = require("./styles");
var _colour = require("./scheme/colour");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  overflow: scroll;\n  position: relative;\n  grid-area: overlay-rich-textarea;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n\n  ::selection {\n    color: ",
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
var _default = (0, _easywithstyle.default)((_class = /*#__PURE__*/ function(RichTextarea) {
    _inherits(_class, RichTextarea);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    _create_class(_class, [
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
                _get(_get_prototype_of(_class.prototype), "didMount", this).call(this);
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
                _get(_get_prototype_of(_class.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getContent = this.getContent.bind(this), activateRichTextarea = this.activate.bind(this), getRichTextareaContent = this.getContent.bind(this), setRichTextareaContent = this.setContent.bind(this); ///
                return {
                    getContent: getContent,
                    activateRichTextarea: activateRichTextarea,
                    getRichTextareaContent: getRichTextareaContent,
                    setRichTextareaContent: setRichTextareaContent
                };
            }
        }
    ]);
    return _class;
}(_easyrichtextarea.RichTextarea), _define_property(_class, "defaultProperties", {
    spellCheck: "false"
}), _define_property(_class, "ignoredProperties", [
    "fancyScrollbars",
    "hiddenScrollbars"
]), _class))(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour, _colour.scrollbarColour, _styles.scrollbarThickness, _styles.scrollbarThickness, _colour.backgroundColour, _styles.scrollbarThumbBorderRadius, _colour.scrollbarColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyQ29sb3VyLCBzZWxlY3Rpb25Db2xvdXIsIGJhY2tncm91bmRDb2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgYWN0aXZhdGVSaWNoVGV4dGFyZWEgPSB0aGlzLmFjdGl2YXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGFjdGl2YXRlUmljaFRleHRhcmVhLFxuICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIixcbiAgICBcImhpZGRlblNjcm9sbGJhcnNcIlxuICBdO1xufSlgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgdGFiLXNpemU6IDI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC1hcmVhOiBvdmVybGF5LXJpY2gtdGV4dGFyZWE7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgOjpzZWxlY3Rpb24ge1xuICAgIGNvbG9yOiAke3NlbGVjdGlvbkNvbG91cn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuICBcbiAgLmhpZGRlbi1zY3JvbGxiYXJzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZmFuY3ktc2Nyb2xsYmFycyB7XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAke3Njcm9sbGJhckNvbG91cn0gdHJhbnNwYXJlbnQ7XG4gICAgc2Nyb2xsYmFyLWd1dHRlcjogYXV0bztcbiAgfVxuICBcbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICAgIGhlaWdodDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAke2JhY2tncm91bmRDb2xvdXJ9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXN9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29sb3VyfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgY2FyZXQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiZmFuY3lTY3JvbGxiYXJzIiwiaGlkZGVuU2Nyb2xsYmFycyIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJnZXRDb250ZW50IiwiYmluZCIsImFjdGl2YXRlUmljaFRleHRhcmVhIiwiYWN0aXZhdGUiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJSaWNoVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsInNwZWxsQ2hlY2siLCJpZ25vcmVkUHJvcGVydGllcyIsInNlbGVjdGlvbkNvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb2xvdXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJiYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O29FQU5zQjtnQ0FFTztzQkFDa0M7c0JBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvRixXQUFlQSxJQUFBQSxzQkFBUywwQkFBQzs7Ozs7Ozs7O1lBQ3ZCQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUE4QyxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBckRDLGtCQUFzQyxpQkFBdENBLGlCQUFpQkMsbUJBQXFCLGlCQUFyQkE7Z0JBRXpCLElBQUlELGlCQUFpQjtvQkFDbkIsSUFBSSxDQUFDRSxRQUFRLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsSUFBSUQsa0JBQWtCO29CQUNwQixJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCwwQ0FBTUosWUFBTixJQUFLO1lBQ1A7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixJQUE4QyxtQkFBQSxJQUFJLENBQUNKLFVBQVUsRUFBckRDLGtCQUFzQyxpQkFBdENBLGlCQUFpQkMsbUJBQXFCLGlCQUFyQkE7Z0JBRXpCLElBQUlELGlCQUFpQjtvQkFDbkIsSUFBSSxDQUFDSSxXQUFXLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsSUFBSUgsa0JBQWtCO29CQUNwQixJQUFJLENBQUNHLFdBQVcsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCwwQ0FBTUQsZUFBTixJQUFLO1lBQ1A7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3RDQyx1QkFBdUIsSUFBSSxDQUFDQyxRQUFRLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQzlDRyx5QkFBeUIsSUFBSSxDQUFDSixVQUFVLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2xESSx5QkFBeUIsSUFBSSxDQUFDQyxVQUFVLENBQUNMLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFL0QsT0FBUTtvQkFDTkQsWUFBQUE7b0JBQ0FFLHNCQUFBQTtvQkFDQUUsd0JBQUFBO29CQUNBQyx3QkFBQUE7Z0JBQ0Y7WUFDRjs7OztFQXpDcUNFLDhCQUFZLEdBMkNqRCx5QkFBT0MscUJBQW9CO0lBQ3pCQyxZQUFZO0FBQ2QsSUFFQSx5QkFBT0MscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRCwrQkFtQlVDLHVCQUFlLEVBQ0pDLGlDQUF5QixFQVExQkMsdUJBQWUsRUFLekJDLDBCQUFrQixFQUNqQkEsMEJBQWtCLEVBUVJDLHdCQUFnQixFQUNuQkMsa0NBQTBCLEVBQ3ZCSCx1QkFBZSJ9