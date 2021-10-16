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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiRWxlbWVudCIsIlJpY2hUZXh0YXJlYSIsIlByZXR0eVByaW50ZXIiLCJzdHJpcFBpeGVscyIsImdldFNjcm9sbGJhclRoaWNrbmVzcyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsIlRPUCIsIkxFRlQiLCJSSUdIVCIsIkxJTkVfSEVJR0hUIiwiQk9UVE9NIiwicHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJERUZBVUxUX0VESVRBQkxFIiwiREVGQVVMVF9GSVJBX0NPREUiLCJERUZBVUxUX0RFRkVSX1JFTkRFUiIsIkRFRkFVTFRfSElEREVOX0dVVFRFUiIsIkRFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyIsIllhcHAiLCJjb25zdHJ1Y3RvciIsInNlbGVjdG9yIiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwiZ2V0Q29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldExpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0SW5QaXhlbHMiLCJjc3MiLCJsaW5lSGVpZ2h0IiwiZ2V0Qm9yZGVyV2lkdGgiLCJzaWRlIiwiYm9yZGVyV2lkdGhJblBpeGVscyIsImJvcmRlcldpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJpbml0aWFsTGluZUNvdW50IiwiZ2V0Qm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZmFuY3lTY3JvbGxiYXJzIiwicHJvcGVydGllcyIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNldExleGVyIiwibGV4ZXIiLCJzZXRQYXJzZXIiLCJwYXJzZXIiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwidXBkYXRlIiwic2Nyb2xsSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsInRva2VucyIsImdldFRva2VucyIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJyZXNpemUiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldHR5UHJpbnRlcldpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJyZW5kZXIiLCJzZXRIZWlnaHQiLCJkaWRNb3VudCIsImZpcmFDb2RlIiwiZGVmZXJSZW5kZXIiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2xhc3MiLCJjaGlsZEVsZW1lbnRzIiwiaGlkZGVuR3V0dGVyIiwiYmluZCIsIm9uQ2hhbmdlIiwib25TY3JvbGwiLCJhY3RpdmUiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlWWFwcCIsInNldFlhcHBXaWR0aCIsInNldFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJyZXNpemVZYXBwIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImZyb21Db250ZW50IiwiUGx1Z2luIiwib3B0aW9ucyIsIkNsYXNzIiwieWFwcCIsImZyb21DbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVSLEdBQU0sQ0FBTixLQUFNO0FBRVosR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFDZixHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQWlCLENBQWpCLElBQWlCO0FBQ1AsR0FBZ0MsQ0FBaEMsbUJBQWdDO0FBQzFCLEdBQW9CLENBQXBCLE9BQW9CO0FBQ1YsR0FBYSxDQUFiLFVBQWE7QUFDTCxHQUF3QixDQUF4QixXQUF3QjtBQUN2QixHQUFxQixDQUFyQixRQUFxQjtBQUNoQixHQUFpQixDQUFqQixPQUFpQjtBQUNzQyxHQUFZLENBQVosU0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF3UXhHLENBT3RCO1FBQVMsQ0FDSDtRQUFjLENBQ2I7UUFBZSxDQUNYO1FBQW1CLENBa0J2Qzs7Ozs7OztJQWxTTSxJQUFJLGlCQUFWLFFBQVE7Y0FBRixJQUFJO2FBQUosSUFBSSxDQUNJLFFBQVEsRUFBRSxNQUFNOzhCQUR4QixJQUFJOztpRUFBSixJQUFJLGFBRUEsUUFBUTtjQUVULE1BQU0sR0FBRyxNQUFNOzs7aUJBSmxCLElBQUk7O1lBT1IsR0FBUyxFQUFULENBQVM7bUJBQVQsUUFBUSxD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QixPQUFpQixlQUFqQixPQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgVE9QLCBMRUZULCBSSUdIVCwgTElORV9IRUlHSFQsIEJPVFRPTSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExpbmVIZWlnaHQoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodEluUGl4ZWxzID0gdGhpcy5jc3MoTElORV9IRUlHSFQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSBzdHJpcFBpeGVscyhsaW5lSGVpZ2h0SW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJXaWR0aChzaWRlKSB7XG4gICAgY29uc3QgYm9yZGVyV2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKGBib3JkZXItJHtzaWRlfS13aWR0aGApLFxuICAgICAgICAgIGJvcmRlcldpZHRoID0gc3RyaXBQaXhlbHMoYm9yZGVyV2lkdGhJblBpeGVscyk7XG5cbiAgICByZXR1cm4gYm9yZGVyV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gVE9QLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gTEVGVCxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckxlZnRXaWR0aDtcbiAgfVxuXG4gIGdldEluaXRpYWxMaW5lQ291bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSBsaW5lQ291bnQ7IC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxMaW5lQ291bnQ7XG4gIH1cblxuICBnZXRCb3JkZXJSaWdodFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBSSUdIVCxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJSaWdodFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IEJPVFRPTSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBnZXRTY3JvbGxiYXJUaGlja25lc3MoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoZmFuY3lTY3JvbGxiYXJzKTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJUaGlja25lc3M7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHsgb25Db250ZW50Q2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgLy8vXG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKTtcbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIGJvcmRlclJpZ2h0V2lkdGggKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IHRoaXMuZ2V0SW5pdGlhbExpbmVDb3VudCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgaGVpZ2h0ID0gaW5pdGlhbExpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoICsgc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBkZWZlclJlbmRlciA9IERFRkFVTFRfREVGRVJfUkVOREVSIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGRlZmVyUmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBoaWRkZW5HdXR0ZXIgPSBERUZBVUxUX0hJRERFTl9HVVRURVIsIGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciBoaWRkZW5HdXR0ZXI9e2hpZGRlbkd1dHRlcn0gc2Nyb2xsYmFyVGhpY2tuZXNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHJlc2l6ZVlhcHBcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImRlZmVyUmVuZGVyXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgXG4gIGNvbG9yOiAke2NvbG91cn07XG4gIGNhcmV0LWNvbG9yOiAke2NhcmV0Q29sb3VyfTtcbiAgYm9yZGVyLWNvbG9yOiAke2JvcmRlckNvbG91cn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVubG9cIiwgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7XG5cbiAgLmZpcmEtY29kZSB7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7XG4gICAgXG4gIH1cblxuYDtcbiJdfQ==