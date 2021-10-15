"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _scrollable = _interopRequireDefault(require("./element/bounded/scrollable"));
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
        "\n\n  z-index: 0;\n  overflow: hidden;\n  position: absolute;\n  white-space: pre;\n  pointer-events: none;\n  background-color: transparent;\n  \n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Syntax = /*#__PURE__*/ function(ScrollableBoundedElement) {
    _inherits(Syntax, ScrollableBoundedElement);
    function Syntax() {
        _classCallCheck(this, Syntax);
        return _possibleConstructorReturn(this, _getPrototypeOf(Syntax).apply(this, arguments));
    }
    _createClass(Syntax, [
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
                var html = tokens.reduce(function(html, token) {
                    var tokenWithSelectionHTML = token.asHTML();
                    html += tokenWithSelectionHTML;
                    return html;
                }, "");
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setLanguage = this.setLanguage.bind(this), updateSyntax = this.update.bind(this), scrollSyntax = this.scroll.bind(this), setSyntaxBounds = this.setBounds.bind(this); ///
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
                var language = null, initialState = {
                    language: language
                };
                this.setState(initialState);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeW50YXguanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiU2Nyb2xsYWJsZUJvdW5kZWRFbGVtZW50IiwiU3ludGF4Iiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVTeW50YXgiLCJzY3JvbGxTeW50YXgiLCJzY3JvbGwiLCJzZXRTeW50YXhCb3VuZHMiLCJzZXRCb3VuZHMiLCJzZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFRixHQUE4QixDQUE5QixXQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1GbEMsQ0FpQmpDOzs7Ozs7O0lBbEdNLE1BQU0saUJBQVosUUFBUTtjQUFGLE1BQU07YUFBTixNQUFNOzhCQUFOLE1BQU07Z0VBQU4sTUFBTTs7aUJBQU4sTUFBTTs7WUFDVixHQUFXLEVBQVgsQ0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7b0JBQ2IsUUFBUSxFQUFSLFFBQVE7Z0JBQ1YsQ0FBQztnQkFFRCxJ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QU0iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgU2Nyb2xsYWJsZUJvdW5kZWRFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvYm91bmRlZC9zY3JvbGxhYmxlXCI7XHJcblxyXG5jbGFzcyBTeW50YXggZXh0ZW5kcyBTY3JvbGxhYmxlQm91bmRlZEVsZW1lbnQge1xyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgbGFuZ3VhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW1vdmVMYW5ndWFnZUNsYXNzKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgdGhpcy5hZGRMYW5ndWFnZUNsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRMYW5ndWFnZUNsYXNzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxhbmd1YWdlIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMuYWRkQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVMYW5ndWFnZUNsYXNzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxhbmd1YWdlIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHsgLy8vXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuV2l0aFNlbGVjdGlvbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gdG9rZW5XaXRoU2VsZWN0aW9uSFRNTDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgfSwgXCJcIik7XHJcblxyXG4gICAgdGhpcy5odG1sKGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IHNldExhbmd1YWdlID0gdGhpcy5zZXRMYW5ndWFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgdXBkYXRlU3ludGF4ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxTeW50YXggPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cclxuICAgICAgICAgIHNldFN5bnRheEJvdW5kcyA9IHRoaXMuc2V0Qm91bmRzLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgc2V0TGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheCxcclxuICAgICAgc2Nyb2xsU3ludGF4LFxyXG4gICAgICBzZXRTeW50YXhCb3VuZHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsLFxyXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgICAgICBsYW5ndWFnZVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInN5bnRheFwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFN5bnRheClgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG5cclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl19