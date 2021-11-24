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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    function Syntax() {
        _classCallCheck(this, Syntax);
        return _possibleConstructorReturn(this, _getPrototypeOf(Syntax).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IFNjcm9sbGFibGVFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvc2Nyb2xsYWJsZVwiO1xyXG5cclxuY2xhc3MgU3ludGF4IGV4dGVuZHMgU2Nyb2xsYWJsZUVsZW1lbnQge1xyXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcclxuICAgIGNvbnN0IHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcclxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxyXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcclxuICAgICAgICAgIGhlaWdodCA9IGJvdW5kcy5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XHJcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcclxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgIGxhbmd1YWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7IC8vL1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbldpdGhTZWxlY3Rpb25IVE1MID0gdG9rZW4uYXNIVE1MKCk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuV2l0aFNlbGVjdGlvbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIFwiXCIpO1xyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBzZXRMYW5ndWFnZSA9IHRoaXMuc2V0TGFuZ3VhZ2UuYmluZCh0aGlzKSxcclxuICAgICAgICAgIHVwZGF0ZVN5bnRheCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsU3ludGF4ID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgLy8vXHJcbiAgICAgICAgICBzZXRTeW50YXhCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpOyAgLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgc2V0TGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheCxcclxuICAgICAgc2Nyb2xsU3ludGF4LFxyXG4gICAgICBzZXRTeW50YXhCb3VuZHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInN5bnRheFwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFN5bnRheClgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG5cclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl0sIm5hbWVzIjpbIlN5bnRheCIsInNldEJvdW5kcyIsImJvdW5kcyIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInBvc2l0aW9uIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwic3RhdGUiLCJyZW1vdmVMYW5ndWFnZUNsYXNzIiwidXBkYXRlU3RhdGUiLCJhZGRMYW5ndWFnZUNsYXNzIiwiZ2V0U3RhdGUiLCJsYW5ndWFnZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZSIsInRva2VucyIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuV2l0aFNlbGVjdGlvbkhUTUwiLCJhc0hUTUwiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVN5bnRheCIsInNjcm9sbFN5bnRheCIsInNjcm9sbCIsInNldFN5bnRheEJvdW5kcyIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVULEdBQXNCLENBQXRCLFdBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBNkZuQixDQWVqQzs7Ozs7OztJQTFHTUEsTUFBTSxpQkFBWixRQUFRO2NBQUZBLE1BQU07YUFBTkEsTUFBTTs4QkFBTkEsTUFBTTtnRUFBTkEsTUFBTTs7aUJBQU5BLE1BQU07O1lBQ1ZDLEdBQVMsRUFBVEEsQ0FBUzttQkFBVEEsUUFBUSxDQUFSQSxTQUFTLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUNqQixHQUFLLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxNQUFNLElBQ25CQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksT0FBTyxJQUNyQkMsS0FBSyxHQUFHTCxNQUFNLENBQUNNLFFBQVEsSUFDdkJDLE1BQU0sR0FBR1AsTUFBTSxDQUFDUSxTQUFTO2dCQUUvQixJQUFJLENBQUNDLFFBQVEsQ0FBQ1IsR0FBRyxFQUFFRSxJ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