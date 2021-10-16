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
var Yapp = /*#__PURE__*/ function(Element1) {
    _inherits(Yapp, Element1);
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
            key: "getLineCount",
            value: function getLineCount() {
                var content = this.getContent(), lineCount = (0, _content).lineCountFromContent(content);
                return lineCount;
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
            key: "getScrollbarThickness",
            value: function getScrollbarThickness() {
                var _properties1 = this.properties, _fancyScrollbars = _properties1.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, scrollbarThickness = (0, _scrollbarThickness).getScrollbarThickness(fancyScrollbars);
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
                    var _properties1 = this.properties, onContentChange = _properties1.onContentChange, contentChangeHandler = onContentChange; ///
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
                var lineCount = this.getLineCount(), lineHeight = this.getLineHeight(), borderTopWidth = this.getBorderTopWidth(), borderBottomWidth = this.getBorderBottomWidth(), scrollbarThickness = this.getScrollbarThickness(), height = lineCount * lineHeight + borderTopWidth + borderBottomWidth + scrollbarThickness;
                this.setHeight(height);
                this.resize();
                this.update();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties2 = this.properties, _firaCode = _properties2.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode, _deferRender = _properties2.deferRender, deferRender = _deferRender === void 0 ? _defaults.DEFAULT_DEFER_RENDER : _deferRender;
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
                var _properties2 = this.properties, _firaCode = _properties2.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode;
                if (firaCode) {
                    this.removeClass("fira-code");
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties2 = this.properties, _hiddenGutter = _properties2.hiddenGutter, hiddenGutter = _hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _hiddenGutter, _fancyScrollbars = _properties2.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, changeHandler = this.changeHandler.bind(this), scrollHandler = this.scrollHandler.bind(this), scrollbarThickness = this.getScrollbarThickness();
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
                this.assignContext();
                var _properties2 = this.properties, childElements = _properties2.childElements, _editable = _properties2.editable, editable = _editable === void 0 ? _defaults.DEFAULT_EDITABLE : _editable, language = this.plugin.getLanguage(), content = (0, _content).contentFromChildElements(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
                this.setLanguage(language);
                this.scrollPrettyPrinter(scrollTop, scrollLeft);
                this.setRichTextareaContent(content);
                this.setRichTextareaReadOnly(readOnly);
                this.onResize((function(event, element) {
                    return this.resize();
                }).bind(this));
            }
        }
    ], [
        {
            key: "fromContent",
            value: function fromContent(content, language, Plugin1, options) {
                var Class = Yapp, properties = (0, _properties).propertiesFromContentLanguagePluginAndOptions(content, language, Plugin1, options), plugin = (0, _plugin).pluginFromLanguageAndPlugin(language, Plugin1), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        },
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var language = properties.language, Plugin1 = properties.Plugin, plugin = (0, _plugin).pluginFromLanguageAndPlugin(language, Plugin1), yapp = _easy.Element.fromClass(Class, properties, plugin);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgVE9QLCBMRUZULCBSSUdIVCwgTElORV9IRUlHSFQsIEJPVFRPTSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gbGluZUNvdW50O1xuICB9XG5cbiAgZ2V0TGluZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhMSU5FX0hFSUdIVCksXG4gICAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlcldpZHRoKHNpZGUpIHtcbiAgICBjb25zdCBib3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoYGJvcmRlci0ke3NpZGV9LXdpZHRoYCksXG4gICAgICAgICAgYm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBib3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBUT1AsXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyTGVmdFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBMRUZULFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gUklHSFQsXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyUmlnaHRXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBCT1RUT00sXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckJvdHRvbVdpZHRoO1xuICB9XG5cbiAgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCkge1xuICAgIGNvbnN0IHsgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKGZhbmN5U2Nyb2xsYmFycyk7XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5wbHVnaW4uc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLnBsdWdpbi5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJSaWdodFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCk7XG5cbiAgICBoZWlnaHQgLT0gKCBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoICk7XG4gICAgd2lkdGggLT0gKCBib3JkZXJMZWZ0V2lkdGggKyBib3JkZXJSaWdodFdpZHRoICk7XG5cbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVySGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbGluZUNvdW50ID0gdGhpcy5nZXRMaW5lQ291bnQoKSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKSxcbiAgICAgICAgICBoZWlnaHQgPSBsaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSwgZGVmZXJSZW5kZXIgPSBERUZBVUxUX0RFRkVSX1JFTkRFUiB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cblxuICAgIGlmIChkZWZlclJlbmRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLCBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICByZXNpemVZYXBwXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBlZGl0YWJsZSA9IERFRkFVTFRfRURJVEFCTEUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHRoaXMucmVzaXplKCkpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiUGx1Z2luXCIsXG4gICAgXCJsYW5ndWFnZVwiLFxuICAgIFwiZmlyYUNvZGVcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJkZWZlclJlbmRlclwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBZYXBwLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucyksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBtb25vc3BhY2U7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxO1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVSLEdBQU0sQ0FBTixLQUFNO0FBRVosR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFDZixHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQWlCLENBQWpCLElBQWlCO0FBQ1AsR0FBZ0MsQ0FBaEMsbUJBQWdDO0FBQzFCLEdBQW9CLENBQXBCLE9BQW9CO0FBQ1YsR0FBYSxDQUFiLFVBQWE7QUFDTCxHQUF3QixDQUF4QixXQUF3QjtBQUN2QixHQUFxQixDQUFyQixRQUFxQjtBQUNoQixHQUFpQixDQUFqQixPQUFpQjtBQUNzQyxHQUFZLENBQVosU0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1UXhHLGdGQU90QjtTQUFTLGtCQUNIO1NBQWMsbUJBQ2I7U0FBZSx1QkFDWDtTQUFtQiwyWEFrQnZDOzs7Ozs7O0lBalNNLElBQUk7Y0FBSixJQUFJO2FBQUosSUFBSSxDQUNJLFFBQVEsRUFBRSxNQUFNOzhCQUR4QixJQUFJOztpRUFBSixJQUFJLGFBRUEsUUFB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