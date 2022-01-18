"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _scrollable = _interopRequireDefault(require("./element/scrollable"));
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
        "\n\n  z-index: 0;\n  overflow: hidden;\n  position: absolute;\n  white-space: pre;\n  pointer-events: none;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Syntax = /*#__PURE__*/ function(ScrollableElement) {
    _inherits(Syntax, ScrollableElement);
    var _super = _createSuper(Syntax);
    function Syntax() {
        _classCallCheck(this, Syntax);
        return _super.apply(this, arguments);
    }
    _createClass(Syntax, [
        {
            key: "setBounds",
            value: function setBounds(bounds) {
                var top = bounds.getTop(), left = bounds.getLeft(), width = bounds.getWidth(), height = bounds.getHeight();
                this.position(top, left);
                this.setWidth(width);
                this.setHeight(height);
            }
        },
        {
            key: "setLanguage",
            value: function setLanguage(language) {
                var state = {
                    language: language
                };
                this.removeLanguageClass();
                this.updateState(state);
                this.addLanguageClass();
            }
        },
        {
            key: "addLanguageClass",
            value: function addLanguageClass() {
                var state = this.getState(), language = state.language;
                if (language !== null) {
                    var languageClass = language; ///
                    this.addClass(languageClass);
                }
            }
        },
        {
            key: "removeLanguageClass",
            value: function removeLanguageClass() {
                var state = this.getState(), language = state.language;
                if (language !== null) {
                    var languageClass = language; ///
                    this.removeClass(languageClass);
                }
            }
        },
        {
            key: "update",
            value: function update(tokens) {
                var html1 = tokens.reduce(function(html, token) {
                    var tokenWithSelectionHTML = token.asHTML();
                    html += tokenWithSelectionHTML;
                    return html;
                }, "");
                this.html(html1);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setLanguage = this.setLanguage.bind(this), updateSyntax = this.update.bind(this), scrollSyntax = this.scroll.bind(this), setSyntaxBounds = this.setBounds.bind(this); //
                return {
                    setLanguage: setLanguage,
                    updateSyntax: updateSyntax,
                    scrollSyntax: scrollSyntax,
                    setSyntaxBounds: setSyntaxBounds
                };
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var language = null;
                this.setState({
                    language: language
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return Syntax;
}(_scrollable.default);
_defineProperty(Syntax, "tagName", "div");
_defineProperty(Syntax, "defaultProperties", {
    className: "syntax"
});
var _default = (0, _easyWithStyle).default(Syntax)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IFNjcm9sbGFibGVFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvc2Nyb2xsYWJsZVwiO1xyXG5cclxuY2xhc3MgU3ludGF4IGV4dGVuZHMgU2Nyb2xsYWJsZUVsZW1lbnQge1xyXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcclxuICAgIGNvbnN0IHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcclxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxyXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcclxuICAgICAgICAgIGhlaWdodCA9IGJvdW5kcy5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XHJcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcclxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgIGxhbmd1YWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7IC8vL1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbldpdGhTZWxlY3Rpb25IVE1MID0gdG9rZW4uYXNIVE1MKCk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuV2l0aFNlbGVjdGlvbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIFwiXCIpO1xyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBzZXRMYW5ndWFnZSA9IHRoaXMuc2V0TGFuZ3VhZ2UuYmluZCh0aGlzKSxcclxuICAgICAgICAgIHVwZGF0ZVN5bnRheCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsU3ludGF4ID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgLy8vXHJcbiAgICAgICAgICBzZXRTeW50YXhCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpOyAgLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgc2V0TGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheCxcclxuICAgICAgc2Nyb2xsU3ludGF4LFxyXG4gICAgICBzZXRTeW50YXhCb3VuZHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInN5bnRheFwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFN5bnRheClgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG5cclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl0sIm5hbWVzIjpbIlN5bnRheCIsInNldEJvdW5kcyIsImJvdW5kcyIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInBvc2l0aW9uIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwic3RhdGUiLCJyZW1vdmVMYW5ndWFnZUNsYXNzIiwidXBkYXRlU3RhdGUiLCJhZGRMYW5ndWFnZUNsYXNzIiwiZ2V0U3RhdGUiLCJsYW5ndWFnZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZSIsInRva2VucyIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuV2l0aFNlbGVjdGlvbkhUTUwiLCJhc0hUTUwiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVN5bnRheCIsInNjcm9sbFN5bnRheCIsInNjcm9sbCIsInNldFN5bnRheEJvdW5kcyIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVULEdBQXNCLENBQXRCLFdBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTZGbkIsQ0FlakM7Ozs7Ozs7SUExR01BLE1BQU0saUJBQVosUUFBUTtjQUFGQSxNQUFNOzhCQUFOQSxNQUFNO2FBQU5BLE1BQU07OEJBQU5BLE1BQU07OztpQkFBTkEsTUFBTTs7WUFDVkMsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ2pCLEdBQUssQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLE1BQU0sSUFDbkJDLElBQUksR0FBR0gsTUFBTSxDQUFDSSxPQUFPLElBQ3JCQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sUUFBUSxJQUN2QkMsTUFBTSxHQUFHUCxNQUFNLENBQUNRLFNBQVM7Z0JBRS9CLElBQUksQ0FB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