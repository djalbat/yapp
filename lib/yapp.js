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
            key: "didMount",
            value: function didMount() {
                var content = this.getContent(), lineCount = (0, _content).lineCountFromContent(content), lineHeight = this.getLineHeight(), borderTopWidth = this.getBorderTopWidth(), borderBottomWidth = this.getBorderBottomWidth(), height = lineCount * lineHeight + _scrollbarThickness.default + borderTopWidth + borderBottomWidth;
                this.setHeight(height);
                this.resize();
                this.update();
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
                var _properties2 = this.properties, childElements = _properties2.childElements, _firaCode = _properties2.firaCode, firaCode = _firaCode === void 0 ? false : _firaCode, _editable = _properties2.editable, editable = _editable === void 0 ? false : _editable, language = this.plugin.getLanguage(), content = (0, _content).contentFromChildElements(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
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
    "editable"
]);
var _default = (0, _easyWithStyle).default(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgc2Nyb2xsQmFyVGhpY2tuZXNzIGZyb20gXCIuL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5pbXBvcnQgeyBzdHJpcFBpeGVscyB9IGZyb20gXCIuL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wbHVnaW5cIjtcbmltcG9ydCB7IFRPUCwgTEVGVCwgUklHSFQsIExJTkVfSEVJR0hULCBCT1RUT00gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tQ29udGVudCwgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbG91ciwgY2FyZXRDb2xvdXIsIGJvcmRlckNvbG91ciwgYmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS9jb2xvdXJcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGluZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhMSU5FX0hFSUdIVCksXG4gICAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlcldpZHRoKHNpZGUpIHtcbiAgICBjb25zdCBib3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoYGJvcmRlci0ke3NpZGV9LXdpZHRoYCksXG4gICAgICAgICAgYm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBib3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBUT1AsXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyTGVmdFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBMRUZULFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gUklHSFQsXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyUmlnaHRXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBCT1RUT00sXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckJvdHRvbVdpZHRoO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5wbHVnaW4uc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLnBsdWdpbi5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIGVuYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBkaXNhYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJSaWdodFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCk7XG5cbiAgICBoZWlnaHQgLT0gKCBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoICk7XG4gICAgd2lkdGggLT0gKCBib3JkZXJMZWZ0V2lkdGggKyBib3JkZXJSaWdodFdpZHRoICk7XG5cbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVySGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodCgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGxpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBzY3JvbGxCYXJUaGlja25lc3MgKyBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICByZXNpemVZYXBwXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBmaXJhQ29kZSA9IGZhbHNlLCBlZGl0YWJsZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5lbmFibGVGaXJhQ29kZSgpO1xuICAgIH1cblxuICAgIHRoaXMub25SZXNpemUoKGV2ZW50LCBlbGVtZW50KSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgXG4gIGNvbG9yOiAke2NvbG91cn07XG4gIGNhcmV0LWNvbG9yOiAke2NhcmV0Q29sb3VyfTtcbiAgYm9yZGVyLWNvbG9yOiAke2JvcmRlckNvbG91cn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVubG9cIiwgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7XG5cbiAgLmZpcmEtY29kZSB7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgLyogRm9yY2UgbGlnYXR1cmVzIGZvciBXZWJraXQsIEJsaW5rLCBHZWNrbyAqL1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTsgIC8qIEVuYWJsZSBsaWdhdHVyZXMgZm9yIElFIDEwKywgRWRnZSAqL1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVSLEdBQU0sQ0FBTixLQUFNO0FBRVosR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFDZixHQUFpQixDQUFqQixjQUFpQjtBQUNaLEdBQXNCLENBQXRCLG1CQUFzQjtBQUV6QixHQUFpQixDQUFqQixJQUFpQjtBQUNELEdBQW9CLENBQXBCLE9BQW9CO0FBQ1YsR0FBYSxDQUFiLFVBQWE7QUFDTCxHQUF3QixDQUF4QixXQUF3QjtBQUN2QixHQUFxQixDQUFyQixRQUFxQjtBQUNoQixHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E4T3RELGdGQU90QjtTQUFTLGtCQUNIO1NBQWMsbUJBQ2I7U0FBZSx1QkFDWDtTQUFtQixtZEFrQnZDOzs7Ozs7O0lBeFFNLElBQUk7Y0FBSixJQUFJO2FBQUosSUFBSSxDQUNJLFFBQVEsRUFBRSxNQUFNOzhCQUR4QixJQUFJOztpRUFBSixJQUFJLGFBRUEsUUFBUTtjQUVULE1BQU0sR0FBRyxNQUFNOzs7aUJBSmxCLElBQUk7O1lBT1IsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxHQUFHLENBQUM7NEJBQ0MsTUFBTTtZQUNwQixDQUFD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