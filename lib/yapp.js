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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgVE9QLCBMRUZULCBSSUdIVCwgTElORV9IRUlHSFQsIEJPVFRPTSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExpbmVIZWlnaHQoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodEluUGl4ZWxzID0gdGhpcy5jc3MoTElORV9IRUlHSFQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSBzdHJpcFBpeGVscyhsaW5lSGVpZ2h0SW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJXaWR0aChzaWRlKSB7XG4gICAgY29uc3QgYm9yZGVyV2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKGBib3JkZXItJHtzaWRlfS13aWR0aGApLFxuICAgICAgICAgIGJvcmRlcldpZHRoID0gc3RyaXBQaXhlbHMoYm9yZGVyV2lkdGhJblBpeGVscyk7XG5cbiAgICByZXR1cm4gYm9yZGVyV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gVE9QLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gTEVGVCxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckxlZnRXaWR0aDtcbiAgfVxuXG4gIGdldEluaXRpYWxMaW5lQ291bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSBsaW5lQ291bnQ7IC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxMaW5lQ291bnQ7XG4gIH1cblxuICBnZXRCb3JkZXJSaWdodFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBSSUdIVCxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJSaWdodFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IEJPVFRPTSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBnZXRTY3JvbGxiYXJUaGlja25lc3MoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoZmFuY3lTY3JvbGxiYXJzKTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJUaGlja25lc3M7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHsgb25Db250ZW50Q2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgLy8vXG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChpbm5lckJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKTtcbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIGJvcmRlclJpZ2h0V2lkdGggKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IGlubmVyQm91bmRzID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IHRoaXMuZ2V0SW5pdGlhbExpbmVDb3VudCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgaGVpZ2h0ID0gaW5pdGlhbExpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoICsgc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBkZWZlclJlbmRlciA9IERFRkFVTFRfREVGRVJfUkVOREVSIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGRlZmVyUmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBoaWRkZW5HdXR0ZXIgPSBERUZBVUxUX0hJRERFTl9HVVRURVIsIGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciBoaWRkZW5HdXR0ZXI9e2hpZGRlbkd1dHRlcn0gc2Nyb2xsYmFyVGhpY2tuZXNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHJlc2l6ZVlhcHBcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImRlZmVyUmVuZGVyXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgXG4gIGNvbG9yOiAke2NvbG91cn07XG4gIGNhcmV0LWNvbG9yOiAke2NhcmV0Q29sb3VyfTtcbiAgYm9yZGVyLWNvbG9yOiAke2JvcmRlckNvbG91cn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVubG9cIiwgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7XG5cbiAgLmZpcmEtY29kZSB7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7XG4gICAgXG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJZYXBwIiwic2VsZWN0b3IiLCJwbHVnaW4iLCJnZXRQbHVnaW4iLCJnZXRDb250ZW50IiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwiZ2V0TGluZUhlaWdodCIsImxpbmVIZWlnaHRJblBpeGVscyIsImNzcyIsImxpbmVIZWlnaHQiLCJnZXRCb3JkZXJXaWR0aCIsInNpZGUiLCJib3JkZXJXaWR0aEluUGl4ZWxzIiwiYm9yZGVyV2lkdGgiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiZ2V0SW5pdGlhbExpbmVDb3VudCIsImxpbmVDb3VudCIsImluaXRpYWxMaW5lQ291bnQiLCJnZXRCb3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJwcm9wZXJ0aWVzIiwiZmFuY3lTY3JvbGxiYXJzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwic2V0TGV4ZXIiLCJsZXhlciIsInNldFBhcnNlciIsInBhcnNlciIsImNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwib25Db250ZW50Q2hhbmdlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiaW5uZXJCb3VuZHMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwicmljaFRleHRhcmVhQm91bmRzIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwicmVzaXplIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVuZGVyIiwic2V0SGVpZ2h0IiwiZGlkTW91bnQiLCJmaXJhQ29kZSIsImRlZmVyUmVuZGVyIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwiY2hpbGRFbGVtZW50cyIsImhpZGRlbkd1dHRlciIsImJpbmQiLCJvbkNoYW5nZSIsIm9uU2Nyb2xsIiwiYWN0aXZlIiwicGFyZW50Q29udGV4dCIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwicmVzaXplWWFwcCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZWRpdGFibGUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsIm9uUmVzaXplIiwiZnJvbUNvbnRlbnQiLCJQbHVnaW4iLCJvcHRpb25zIiwiQ2xhc3MiLCJ5YXBwIiwiZnJvbUNsYXNzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUixHQUFNLENBQU4sS0FBTTtBQUVaLEdBQWdCLENBQWhCLGFBQWdCO0FBQ2YsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFpQixDQUFqQixJQUFpQjtBQUNQLEdBQWdDLENBQWhDLG1CQUFnQztBQUMxQixHQUFvQixDQUFwQixPQUFvQjtBQUNWLEdBQWEsQ0FBYixVQUFhO0FBQ0wsR0FBd0IsQ0FBeEIsV0FBd0I7QUFDdkIsR0FBcUIsQ0FBckIsUUFBcUI7QUFDaEIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDc0MsR0FBWSxDQUFaLFNBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMlF4RyxDQU90QjtRQUFTLENBQ0g7UUFBYyxDQUNiO1FBQWUsQ0FDWDtRQUFtQixDQWtCdkM7Ozs7Ozs7SUFyU01BLElBQUksaUJBQVYsUUFBUTtjQUFGQSxJQUFJO2FBQUpBLElBQUksQ0FDSUMsUUFBUSxFQUFFQyxNQUFNOzhCQUR4QkYsSUFBSTs7aUVBQUpBLElBQUksYUFFQUMsUUFBUTtjQUVUQyxNQUFNLEdBQUdBLE1BQU07OztpQkFKbEJGLElBQUk7O1lBT1JHLEdBQVMsRUFBVEEsQ0FBUzttQkFB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