"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _richTextarea = _interopRequireDefault(require("./richTextarea"));
var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));
var _scrollbarThickness = _interopRequireDefault(require("./scrollbarThickness"));
var _css = require("./utilities/css");
var _plugin = require("./utilities/plugin");
var _constants = require("./constants");
var _properties = require("./utilities/properties");
var _content = require("./utilities/content");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 100%;\n  position: relative;\n\n  border: 1px solid;\n  \n  color: ",
        ";\n  caret-color: ",
        ";\n  border-color: ",
        ";\n  background-color: ",
        ";\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n    font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n    \n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Yapp = /*#__PURE__*/ function(Element) {
    _inherits(Yapp, Element);
    function Yapp(selector, plugin) {
        _classCallCheck(this, Yapp);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Yapp).call(this, selector));
        _this.plugin = plugin;
        return _this;
    }
    _createClass(Yapp, [
        {
            key: "getPlugin",
            value: function getPlugin() {
                return this.plugin;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var richTextareaContent = this.getRichTextareaContent(), content = richTextareaContent; ///
                return content;
            }
        },
        {
            key: "getLineHeight",
            value: function getLineHeight() {
                var lineHeightInPixels = this.css(_constants.LINE_HEIGHT), lineHeight = (0, _css).stripPixels(lineHeightInPixels);
                return lineHeight;
            }
        },
        {
            key: "getBorderWidth",
            value: function getBorderWidth(side) {
                var borderWidthInPixels = this.css("border-".concat(side, "-width")), borderWidth = (0, _css).stripPixels(borderWidthInPixels);
                return borderWidth;
            }
        },
        {
            key: "getBorderTopWidth",
            value: function getBorderTopWidth() {
                var side = _constants.TOP, borderTopWidth = this.getBorderWidth(side);
                return borderTopWidth;
            }
        },
        {
            key: "getBorderLeftWidth",
            value: function getBorderLeftWidth() {
                var side = _constants.LEFT, borderLeftWidth = this.getBorderWidth(side);
                return borderLeftWidth;
            }
        },
        {
            key: "getBorderRightWidth",
            value: function getBorderRightWidth() {
                var side = _constants.RIGHT, borderRightWidth = this.getBorderWidth(side);
                return borderRightWidth;
            }
        },
        {
            key: "getBorderBottomWidth",
            value: function getBorderBottomWidth() {
                var side = _constants.BOTTOM, borderBottomWidth = this.getBorderWidth(side);
                return borderBottomWidth;
            }
        },
        {
            key: "setLexer",
            value: function setLexer(lexer) {
                this.plugin.setLexer(lexer);
            }
        },
        {
            key: "setParser",
            value: function setParser(parser) {
                this.plugin.setParser(parser);
            }
        },
        {
            key: "enableFiraCode",
            value: function enableFiraCode() {
                this.addClass("fira-code");
            }
        },
        {
            key: "disableFiraCode",
            value: function disableFiraCode() {
                this.removeClass("fira-code");
            }
        },
        {
            key: "changeHandler",
            value: function changeHandler(event, element) {
                var richTextarea = element, contentChanged = richTextarea.hasContentChanged();
                if (contentChanged) {
                    var _properties = this.properties, onContentChange = _properties.onContentChange, contentChangeHandler = onContentChange; ///
                    this.update();
                    element = this; ///
                    contentChangeHandler && contentChangeHandler(event, element); ///
                }
            }
        },
        {
            key: "scrollHandler",
            value: function scrollHandler(event, element) {
                var richTextarea = element, scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
                this.scrollPrettyPrinter(scrollTop, scrollLeft);
            }
        },
        {
            key: "update",
            value: function update() {
                var content = this.getContent();
                this.plugin.update(content);
                var tokens = this.plugin.getTokens(), richTextareaBounds = this.updatePrettyPrinter(tokens);
                if (richTextareaBounds !== null) {
                    this.setRichTextareaBounds(richTextareaBounds);
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
                var width = this.getWidth(), height = this.getHeight();
                var borderTopWidth = this.getBorderTopWidth(), borderLeftWidth = this.getBorderLeftWidth(), borderRightWidth = this.getBorderRightWidth(), borderBottomWidth = this.getBorderBottomWidth();
                height -= borderTopWidth + borderBottomWidth;
                width -= borderLeftWidth + borderRightWidth;
                this.setPrettyPrinterWidth(width);
                this.setPrettyPrinterHeight(height);
                var richTextareaBounds = this.resizePrettyPrinter();
                this.setRichTextareaBounds(richTextareaBounds);
            }
        },
        {
            key: "render",
            value: function render() {
                var content = this.getContent(), lineCount = (0, _content).lineCountFromContent(content), lineHeight = this.getLineHeight(), borderTopWidth = this.getBorderTopWidth(), borderBottomWidth = this.getBorderBottomWidth(), height = lineCount * lineHeight + _scrollbarThickness.default + borderTopWidth + borderBottomWidth;
                this.setHeight(height);
                this.resize();
                this.update();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, _deferRender = _properties.deferRender, deferRender = _deferRender === void 0 ? false : _deferRender;
                if (deferRender) {
                    return;
                }
                this.render();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var changeHandler = this.changeHandler.bind(this), scrollHandler = this.scrollHandler.bind(this);
                return [
                    /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, null),
                    /*#__PURE__*/ _easy.React.createElement(_richTextarea.default, {
                        onChange: changeHandler,
                        onScroll: scrollHandler,
                        active: true
                    })
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPlugin = this.getPlugin.bind(this), updateYapp = this.update.bind(this), setYappWidth = this.setWidth.bind(this), setYappHeight = this.setHeight.bind(this), setYappLexer = this.setLexer.bind(this), setYappParser = this.setParser.bind(this), resizeYapp = this.resize.bind(this); ///
                return {
                    getPlugin: getPlugin,
                    updateYapp: updateYapp,
                    setYappWidth: setYappWidth,
                    setYappHeight: setYappHeight,
                    setYappLexer: setYappLexer,
                    setYappParser: setYappParser,
                    resizeYapp: resizeYapp
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _properties = this.properties, childElements = _properties.childElements, _firaCode = _properties.firaCode, firaCode = _firaCode === void 0 ? false : _firaCode, _editable = _properties.editable, editable = _editable === void 0 ? false : _editable, language = this.plugin.getLanguage(), content = (0, _content).contentFromChildElements(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
                this.setLanguage(language);
                this.scrollPrettyPrinter(scrollTop, scrollLeft);
                this.setRichTextareaContent(content);
                this.setRichTextareaReadOnly(readOnly);
                if (firaCode) {
                    this.enableFiraCode();
                }
                this.onResize((function(event, element) {
                    return this.resize();
                }).bind(this));
            }
        }
    ], [
        {
            key: "fromContent",
            value: function fromContent(content, language, Plugin, options) {
                var Class = Yapp, properties = (0, _properties).propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options), plugin = (0, _plugin).pluginFromLanguageAndPlugin(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        },
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var language = properties.language, Plugin = properties.Plugin, plugin = (0, _plugin).pluginFromLanguageAndPlugin(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        }
    ]);
    return Yapp;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Yapp, "tagName", "div");
_defineProperty(Yapp, "defaultProperties", {
    className: "yapp"
});
_defineProperty(Yapp, "ignoredProperties", [
    "Plugin",
    "language",
    "firaCode",
    "editable",
    "deferRender"
]);
var _default = (0, _easyWithStyle).default(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiRWxlbWVudCIsIlJpY2hUZXh0YXJlYSIsIlByZXR0eVByaW50ZXIiLCJzY3JvbGxCYXJUaGlja25lc3MiLCJzdHJpcFBpeGVscyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsIlRPUCIsIkxFRlQiLCJSSUdIVCIsIkxJTkVfSEVJR0hUIiwiQk9UVE9NIiwicHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJZYXBwIiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldENvbnRlbnQiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRMaW5lSGVpZ2h0IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsImdldEJvcmRlcldpZHRoIiwic2lkZSIsImJvcmRlcldpZHRoSW5QaXhlbHMiLCJib3JkZXJXaWR0aCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJnZXRCb3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJzZXRMZXhlciIsImxleGVyIiwic2V0UGFyc2VyIiwicGFyc2VyIiwiZW5hYmxlRmlyYUNvZGUiLCJhZGRDbGFzcyIsImRpc2FibGVGaXJhQ29kZSIsInJlbW92ZUNsYXNzIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsInJlc2l6ZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRQcmV0dHlQcmludGVySGVpZ2h0IiwicmVzaXplUHJldHR5UHJpbnRlciIsInJlbmRlciIsImxpbmVDb3VudCIsInNldEhlaWdodCIsImRpZE1vdW50IiwiZGVmZXJSZW5kZXIiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwib25DaGFuZ2UiLCJvblNjcm9sbCIsImFjdGl2ZSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVZYXBwIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsInJlc2l6ZVlhcHAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImZpcmFDb2RlIiwiZWRpdGFibGUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsIm9uUmVzaXplIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJmcm9tQ29udGVudCIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInlhcHAiLCJmcm9tQ2xhc3MiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUixHQUFNLENBQU4sS0FBTTtBQUVaLEdBQWdCLENBQWhCLGFBQWdCO0FBQ2YsR0FBaUIsQ0FBakIsY0FBaUI7QUFDWixHQUFzQixDQUF0QixtQkFBc0I7QUFFekIsR0FBaUIsQ0FBakIsSUFBaUI7QUFDRCxHQUFvQixDQUFwQixPQUFvQjtBQUNWLEdBQWEsQ0FBYixVQUFhO0FBQ0wsR0FBd0IsQ0FBeEIsV0FBd0I7QUFDdkIsR0FBcUIsQ0FBckIsUUFBcUI7QUFDaEIsR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBeVB0RCxnRkFPdEI7U0FBUyxrQkFDSDtTQUFjLG1CQUNiO1NBQWUsdUJBQ1g7U0FBbUIsbWRBa0J2Qzs7Ozs7OztJQW5STSxJQUFJLGlCQUFWLFFBQVE7Y0FBRixJQUFJO2FBQUosSUFBSSxDQUNJLFFBQVEsRUFBRSxNQUFNOzhCQUR4QixJQUFJOztpRUFBSixJQUFJLGFBRUEsUUFBUTtjQUVULE1BQU0sR0FBRyxNQUFNOzs7aUJBSmxCLElBQUk7O1lBT1IsR0FBUyxHQUFULFNBQVM7bUJBQVQsUUFBUSxDQUFSLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNwQixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsSUFDakQsT0FBTyxHQUFHLG1CQUFtQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFekMsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQXhCZSxVQUFhLGVBeUJ6RCxVQUFVLE9BM0JRLElBQWlCLGNBMkJWLGtCQUFrQjtnQkFFakQsTUFBTSxDQUFDLFVBQVU7WUFDbkIsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFPLE1BQU0sQ0FBWCxJQUFJLEdBQUMsTUFBTSxLQUNwRCxXQUFXLE9BbENPLElBQWlCLGNBa0NULG1CQUFtQjtnQkFFbkQsTUFBTSxDQUFDLFdBQVc7WUFDcEIsQ0FBQzs7O1lBRUQsR0FBaUIsR0FBakIsaUJBQWlCO21CQUFqQixRQUFRLENBQVIsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFDLElBQUksR0F0Q3dDLFVBQWEsTUF1Q3pELGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBRS9DLE1BQU0sQ0FBQyxjQUFjO1lBQ3ZCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxJQUFJLEdBN0N3QyxVQUFhLE9BOEN6RCxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUVoRCxNQUFNLENBQUMsZUFBZTtZQUN4QixDQUFDOzs7WUFFRCxHQUFtQixHQUFuQixtQkFBbUI7bUJBQW5CLFFBQVEsQ0FBUixtQkFBbUIsR0FBRyxDQUFDO2dCQUNyQixHQUFLLENBQUMsSUFBSSxHQXBEd0MsVUFBYSxRQXFEekQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUVqRCxNQUFNLENBQUMsZ0JBQWdCO1lBQ3pCLENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLEdBQUssQ0FBQyxJQUFJLEdBM0R3QyxVQUFhLFNBNER6RCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBRWxELE1BQU0sQ0FBQyxpQkFBaUI7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQUcsQ0FBQzs7O1lBRWhELEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUFHLENBQUM7OztZQUVwRCxHQUFjLEdBQWQsY0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUMsU0FBVztZQUMzQixDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTttQkFBZixRQUFRLENBQVIsZUFBZSxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUMsU0FBVztZQUM5QixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLEVBQ3RCLGNBQWMsR0FBRyxZQUFZLENBQUMsaUJBQWlCO2dCQUVyRCxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUM7b0JBQ25CLEdBQUssQ0FBdUIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQW5DLGVBQWUsR0FBSyxXQUFlLENBQW5DLGVBQWUsRUFDakIsb0JBQW9CLEdBQUcsZUFBZSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFakQsSUFBSSxDQUFDLE1BQU07b0JBRVgsT0FBTyxHQUFHLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5CLG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUNuRSxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLEdBQUssQ0FBQyxZQUFZLEdBQUcsT0FBTyxFQUN0QixTQUFTLEdBQUcsWUFBWSxDQUFDLFlBQVksSUFDckMsVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhO2dCQUU3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVU7WUFDaEQsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBRS9CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBRTFCLEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQzlCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNO2dCQUUxRCxFQUFFLEVBQUUsa0JBQWtCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0I7Z0JBQy9DLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7Z0JBRTNCLEdBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUN2QyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixJQUN6QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQzNDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0I7Z0JBRW5ELE1BQU0sSUFBTSxjQUFjLEdBQUcsaUJBQWlCO2dCQUM5QyxLQUFLLElBQU0sZUFBZSxHQUFHLGdCQUFnQjtnQkFFN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUs7Z0JBQ2hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNO2dCQUVsQyxHQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtnQkFFbkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQjtZQUMvQyxDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUN6QixTQUFTLE9BdEk0QyxRQUFxQix1QkFzSXpDLE9BQU8sR0FDeEMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQy9CLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQ3ZDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsSUFDN0MsTUFBTSxHQUFHLFNBQVMsR0FBRyxVQUFVLEdBaEpWLG1CQUFzQixXQWdKWSxjQUFjLEdBQUcsaUJBQWlCO2dCQUUvRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBRXJCLElBQUksQ0FBQyxNQUFNO2dCQUVYLElBQUksQ0FBQyxNQUFNO1lBQ2IsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBMkIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLGlCQUFmLFdBQWUsQ0FBdkMsV0FBVyxFQUFYLFdBQVcsNkJBQUcsS0FBSztnQkFFM0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDO29CQUNoQixNQUFNO2dCQUNSLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE1BQU07WUFDYixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7WUFDYixFQUFHLEFBQUgsQ0FBRztZQUNMLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FDNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBRWxELE1BQU0sQ0FBRSxDQUFDO2tDQS9La0IsS0FBTSxxQkFHWCxjQUFpQjtrQ0FIWixLQUFNLHFCQUVaLGFBQWdCO3dCQWdMckIsUUFBUSxFQUFFLGFBQWE7d0JBQUUsUUFBUSxFQUFFLGFBQWE7d0JBQUUsTUFBTSxFQUFOLElBQU07O2dCQUV4RSxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNwQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUN0QyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUN0QyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUN4QyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFL0MsTUFBTSxDQUFFLENBQUM7b0JBQ1AsU0FBUyxFQUFULFNBQVM7b0JBQ1QsVUFBVSxFQUFWLFVBQVU7b0JBQ1YsWUFBWSxFQUFaLFlBQVk7b0JBQ1osYUFBYSxFQUFiLGFBQWE7b0JBQ2IsWUFBWSxFQUFaLFlBQVk7b0JBQ1osYUFBYSxFQUFiLGFBQWE7b0JBQ2IsVUFBVSxFQUFWLFVBQVU7Z0JBQ1osQ0FBQztZQUNILENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDWixJQUFJLENBQUMsYUFBYTtnQkFFbEIsR0FBSyxDQUF5RCxXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBckUsYUFBYSxHQUF5QyxXQUFlLENBQXJFLGFBQWEsY0FBeUMsV0FBZSxDQUF0RCxRQUFRLEVBQVIsUUFBUSwwQkFBRyxLQUFLLDBCQUF1QixXQUFlLENBQXBDLFFBQVEsRUFBUixRQUFRLDBCQUFHLEtBQUssY0FDbkQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUNsQyxPQUFPLE9BdE04QyxRQUFxQiwyQkFzTXZDLGFBQWEsR0FDaEQsUUFBUSxJQUFJLFFBQVEsRUFDcEIsU0FBUyxHQUFHLENBQUMsRUFDYixVQUFVLEdBQUcsQ0FBQyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2dCQUV6QixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVU7Z0JBRTlDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPO2dCQUVuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUTtnQkFFckMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO29CQUNiLElBQUksQ0FBQyxjQUFjO2dCQUNyQixDQUFDO2dCQUVELElBQUksQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPO29CQUFLLE1BQU0sQ0FBTixJQUFJLENBQUMsTUFBTTs7WUFDL0MsQ0FBQzs7OztZQWdCTSxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDdEQsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQ1osVUFBVSxPQTNPMEMsV0FBd0IsZ0RBMk9qQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQzdGLE1BQU0sT0E5TzRCLE9BQW9CLDhCQThPakIsUUFBUSxFQUFFLE1BQU0sR0FDckQsSUFBSSxHQXRQaUIsS0FBTSxTQXNQWixTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNO2dCQUV4RCxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztZQUVNLEdBQVMsR0FBVCxTQUFTO21CQUFoQixRQUFRLENBQUQsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDbkMsR0FBSyxDQUFHLFFBQVEsR0FBYSxVQUFVLENBQS9CLFFBQVEsRUFBRSxNQUFNLEdBQUssVUFBVSxDQUFyQixNQUFNLEVBQ2xCLE1BQU0sT0F0UDRCLE9BQW9CLDhCQXNQakIsUUFBUSxFQUFFLE1BQU0sR0FDckQsSUFBSSxHQTlQaUIsS0FBTSxTQThQWixTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNO2dCQUV4RCxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztXQXBQRyxJQUFJO21CQWJxQixLQUFNO2dCQWEvQixJQUFJLEdBdU5ELE9BQU8sSUFBRyxHQUFLO2dCQXZObEIsSUFBSSxHQXlORCxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxJQUFNO0FBQ25CLENBQUM7Z0JBM05HLElBQUksR0E2TkQsaUJBQWlCLEdBQUcsQ0FBQztLQUMxQixNQUFRO0tBQ1IsUUFBVTtLQUNWLFFBQVU7S0FDVixRQUFVO0tBQ1YsV0FBYTtBQUNmLENBQUM7bUJBbFBtQixjQUFpQixVQXNRZCxJQUFJLHFCQXpQdUMsT0FBaUIsU0FBakIsT0FBaUIsY0FBakIsT0FBaUIsZUFBakIsT0FBaUIifQ==