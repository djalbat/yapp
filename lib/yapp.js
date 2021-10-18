"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _richTextarea = _interopRequireDefault(require("./richTextarea"));
var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));
var _css = require("./utilities/css");
var _scrollbarThickness = require("./utilities/scrollbarThickness");
var _plugin = require("./utilities/plugin");
var _constants = require("./constants");
var _properties = require("./utilities/properties");
var _content = require("./utilities/content");
var _colour = require("./scheme/colour");
var _defaults = require("./defaults");
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
        ";\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility;\n    font-feature-settings: \"calt\" 1;\n    \n  }\n\n"
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
            key: "getInitialLineCount",
            value: function getInitialLineCount() {
                var content = this.getContent(), lineCount = (0, _content).lineCountFromContent(content), initialLineCount = lineCount; ///
                return initialLineCount;
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
            key: "getScrollbarThickness",
            value: function getScrollbarThickness() {
                var _properties = this.properties, _fancyScrollbars = _properties.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, scrollbarThickness = (0, _scrollbarThickness).getScrollbarThickness(fancyScrollbars);
                return scrollbarThickness;
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
                var tokens = this.plugin.getTokens(), innerBounds = this.updatePrettyPrinter(tokens);
                if (innerBounds !== null) {
                    var richTextareaBounds = innerBounds; ///
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
                var innerBounds = this.resizePrettyPrinter(), richTextareaBounds = innerBounds; ///
                this.setRichTextareaBounds(richTextareaBounds);
            }
        },
        {
            key: "render",
            value: function render() {
                var lineHeight = this.getLineHeight(), borderTopWidth = this.getBorderTopWidth(), initialLineCount = this.getInitialLineCount(), borderBottomWidth = this.getBorderBottomWidth(), scrollbarThickness = this.getScrollbarThickness(), height = initialLineCount * lineHeight + borderTopWidth + borderBottomWidth + scrollbarThickness;
                this.setHeight(height);
                this.resize();
                this.update();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, _firaCode = _properties.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode, _deferRender = _properties.deferRender, deferRender = _deferRender === void 0 ? _defaults.DEFAULT_DEFER_RENDER : _deferRender;
                if (firaCode) {
                    this.addClass("fira-code");
                }
                if (deferRender) {
                    return;
                }
                this.render();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, _firaCode = _properties.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode;
                if (firaCode) {
                    this.removeClass("fira-code");
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, _hiddenGutter = _properties.hiddenGutter, hiddenGutter = _hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _hiddenGutter, _fancyScrollbars = _properties.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, changeHandler = this.changeHandler.bind(this), scrollHandler = this.scrollHandler.bind(this), scrollbarThickness = this.getScrollbarThickness();
                return [
                    /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
                        hiddenGutter: hiddenGutter,
                        scrollbarThickness: scrollbarThickness
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_richTextarea.default, {
                        onChange: changeHandler,
                        onScroll: scrollHandler,
                        fancyScrollbars: fancyScrollbars,
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
                var _this = this;
                this.assignContext();
                var _properties = this.properties, childElements = _properties.childElements, _editable = _properties.editable, editable = _editable === void 0 ? _defaults.DEFAULT_EDITABLE : _editable, language = this.plugin.getLanguage(), content = (0, _content).contentFromChildElements(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
                this.setLanguage(language);
                this.scrollPrettyPrinter(scrollTop, scrollLeft);
                this.setRichTextareaContent(content);
                this.setRichTextareaReadOnly(readOnly);
                this.onResize(function(event, element) {
                    return _this.resize();
                });
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
    "deferRender",
    "hiddenGutter",
    "fancyScrollbars"
]);
var _default = (0, _easyWithStyle).default(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiRWxlbWVudCIsIlJpY2hUZXh0YXJlYSIsIlByZXR0eVByaW50ZXIiLCJzdHJpcFBpeGVscyIsImdldFNjcm9sbGJhclRoaWNrbmVzcyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsIlRPUCIsIkxFRlQiLCJSSUdIVCIsIkxJTkVfSEVJR0hUIiwiQk9UVE9NIiwicHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJERUZBVUxUX0VESVRBQkxFIiwiREVGQVVMVF9GSVJBX0NPREUiLCJERUZBVUxUX0RFRkVSX1JFTkRFUiIsIkRFRkFVTFRfSElEREVOX0dVVFRFUiIsIkRFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyIsIllhcHAiLCJjb25zdHJ1Y3RvciIsInNlbGVjdG9yIiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwiZ2V0Q29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldExpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SW5QaXhlbHMiLCJjc3MiLCJsaW5lSGVpZ2h0IiwiZ2V0Qm9yZGVyV2lkdGgiLCJzaWRlIiwiYm9yZGVyV2lkdGhJblBpeGVscyIsImJvcmRlcldpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJpbml0aWFsTGluZUNvdW50IiwiZ2V0Qm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZmFuY3lTY3JvbGxiYXJzIiwicHJvcGVydGllcyIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNldExleGVyIiwibGV4ZXIiLCJzZXRQYXJzZXIiLCJwYXJzZXIiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwidXBkYXRlIiwic2Nyb2xsSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsInRva2VucyIsImdldFRva2VucyIsImlubmVyQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsInJlc2l6ZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRQcmV0dHlQcmludGVySGVpZ2h0IiwicmVzaXplUHJldHR5UHJpbnRlciIsInJlbmRlciIsInNldEhlaWdodCIsImRpZE1vdW50IiwiZmlyYUNvZGUiLCJkZWZlclJlbmRlciIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsImNoaWxkRWxlbWVudHMiLCJoaWRkZW5HdXR0ZXIiLCJiaW5kIiwib25DaGFuZ2UiLCJvblNjcm9sbCIsImFjdGl2ZSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVZYXBwIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsInJlc2l6ZVlhcHAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImVkaXRhYmxlIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInJlYWRPbmx5Iiwic2V0TGFuZ3VhZ2UiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0UmljaFRleHRhcmVhUmVhZE9ubHkiLCJvblJlc2l6ZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZnJvbUNvbnRlbnQiLCJQbHVnaW4iLCJvcHRpb25zIiwiQ2xhc3MiLCJ5YXBwIiwiZnJvbUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVIsR0FBTSxDQUFOLEtBQU07QUFFWixHQUFnQixDQUFoQixhQUFnQjtBQUNmLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBaUIsQ0FBakIsSUFBaUI7QUFDUCxHQUFnQyxDQUFoQyxtQkFBZ0M7QUFDMUIsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDVixHQUFhLENBQWIsVUFBYTtBQUNMLEdBQXdCLENBQXhCLFdBQXdCO0FBQ3ZCLEdBQXFCLENBQXJCLFFBQXFCO0FBQ2hCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ3NDLEdBQVksQ0FBWixTQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJReEcsQ0FPdEI7UUFBUyxDQUNIO1FBQWMsQ0FDYjtRQUFlLENBQ1g7UUFBbUIsQ0FrQnZDOzs7Ozs7O0lBclNNLElBQUksaUJBQVYsUUFBUTtjQUFGLElBQUk7YUFBSixJQUFJLENBQ0ksUUFBUSxFQUFFLE1BQU07OEJBRHhCLElBQUk7O2lFQUFKLElBQUksYUFFQSxRQUFRO2NBRVQsTUFBTSxHQUFHLE1BQU07OztpQkFKbEIsSUFBSTs7WUFPUixHQUFTLEVBQVQsQ0FB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Q1IsQ0FBVTtJQUNWLENBQVU7SUFDVixDQUFVO0lBQ1YsQ0FBYTtJQUNiLENBQWM7SUFDZCxDQUFpQjtBQUNuQixDQUFDO21CQXJRbUIsY0FBaUIsVUF5UmQsSUFBSSxxQkE1UXVDLE9BQWlCLFNBQWpCLE9BQWlCLGNBQWpCLE9BQWlCLGVBQWpCLE9BQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgc3RyaXBQaXhlbHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3NzXCI7XG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5pbXBvcnQgeyBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBUT1AsIExFRlQsIFJJR0hULCBMSU5FX0hFSUdIVCwgQk9UVE9NIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb2xvdXIsIGNhcmV0Q29sb3VyLCBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9ERUZFUl9SRU5ERVIsIERFRkFVTFRfSElEREVOX0dVVFRFUiwgREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGluZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhMSU5FX0hFSUdIVCksXG4gICAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlcldpZHRoKHNpZGUpIHtcbiAgICBjb25zdCBib3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoYGJvcmRlci0ke3NpZGV9LXdpZHRoYCksXG4gICAgICAgICAgYm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBib3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBUT1AsXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyTGVmdFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBMRUZULFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIGdldEJvcmRlclJpZ2h0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFJJR0hULFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclJpZ2h0V2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJCb3R0b21XaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gQk9UVE9NLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIGdldFNjcm9sbGJhclRoaWNrbmVzcygpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IGdldFNjcm9sbGJhclRoaWNrbmVzcyhmYW5jeVNjcm9sbGJhcnMpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhclRoaWNrbmVzcztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKGlubmVyQm91bmRzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyTGVmdFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpO1xuXG4gICAgaGVpZ2h0IC09ICggYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aCApO1xuICAgIHdpZHRoIC09ICggYm9yZGVyTGVmdFdpZHRoICsgYm9yZGVyUmlnaHRXaWR0aCApO1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyV2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckhlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgaW5uZXJCb3VuZHMgPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gdGhpcy5nZXRJbml0aWFsTGluZUNvdW50KCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKSxcbiAgICAgICAgICBoZWlnaHQgPSBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKyBzY3JvbGxiYXJUaGlja25lc3M7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUsIGRlZmVyUmVuZGVyID0gREVGQVVMVF9ERUZFUl9SRU5ERVIgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoZGVmZXJSZW5kZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGhpZGRlbkd1dHRlciA9IERFRkFVTFRfSElEREVOX0dVVFRFUiwgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSB0aGlzLmdldFNjcm9sbGJhclRoaWNrbmVzcygpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIGhpZGRlbkd1dHRlcj17aGlkZGVuR3V0dGVyfSBzY3JvbGxiYXJUaGlja25lc3M9e3Njcm9sbGJhclRoaWNrbmVzc30gLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gZmFuY3lTY3JvbGxiYXJzPXtmYW5jeVNjcm9sbGJhcnN9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBIZWlnaHQsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgcmVzaXplWWFwcFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZWRpdGFibGUgPSBERUZBVUxUX0VESVRBQkxFIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMub25SZXNpemUoKGV2ZW50LCBlbGVtZW50KSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiZGVmZXJSZW5kZXJcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBcbiAgY29sb3I6ICR7Y29sb3VyfTtcbiAgY2FyZXQtY29sb3I6ICR7Y2FyZXRDb2xvdXJ9O1xuICBib3JkZXItY29sb3I6ICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcblxuICAuZmlyYS1jb2RlIHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTtcbiAgICBcbiAgfVxuXG5gO1xuIl19