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
var Yapp = function(Element1) {
    _inherits(Yapp, _easy.Element);
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
                var lineHeightInPixels = this.css("line-height"), lineHeight = _css.stripPixels(lineHeightInPixels);
                return lineHeight;
            }
        },
        {
            key: "getBorderWidth",
            value: function getBorderWidth(side) {
                var borderWidthInPixels = this.css("border-".concat(side, "-width")), borderWidth = _css.stripPixels(borderWidthInPixels);
                return borderWidth;
            }
        },
        {
            key: "getBorderTopWidth",
            value: function getBorderTopWidth() {
                var side = _constants.TOP_SIDE, borderTopWidth = this.getBorderWidth(side);
                return borderTopWidth;
            }
        },
        {
            key: "getBorderLeftWidth",
            value: function getBorderLeftWidth() {
                var side = _constants.LEFT_SIDE, borderLeftWidth = this.getBorderWidth(side);
                return borderLeftWidth;
            }
        },
        {
            key: "getBorderRightWidth",
            value: function getBorderRightWidth() {
                var side = _constants.RIGHT_SIDE, borderRightWidth = this.getBorderWidth(side);
                return borderRightWidth;
            }
        },
        {
            key: "getBorderBottomWidth",
            value: function getBorderBottomWidth() {
                var side = _constants.BOTTOM_SIDE, borderBottomWidth = this.getBorderWidth(side);
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
                var content = this.getContent(), lineCount = _content.lineCountFromContent(content), lineHeight = this.getLineHeight(), borderTopWidth = this.getBorderTopWidth(), borderBottomWidth = this.getBorderBottomWidth(), height = lineCount * lineHeight + _scrollbarThickness.default + borderTopWidth + borderBottomWidth;
                this.setHeight(height);
                this.resize();
                this.update();
            }
        },
        {
            key: "willUnmout",
            value: function willUnmout() {
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
                var _properties2 = this.properties, childElements = _properties2.childElements, _firaCode = _properties2.firaCode, firaCode = _firaCode === void 0 ? false : _firaCode, _editable = _properties2.editable, editable = _editable === void 0 ? false : _editable, language = this.plugin.getLanguage(), content = _content.contentFromChildElements(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
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
                var Class = Yapp, properties = _properties.propertiesFromContentLanguagePluginAndOptions(content, language, Plugin1, options), plugin = _plugin.pluginFromLanguageAndPlugin(language, Plugin1), yapp = _easy.Element.fromClass(Class, properties, plugin);
                yapp.initialise();
                return yapp;
            }
        },
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var language = properties.language, Plugin1 = properties.Plugin, plugin = _plugin.pluginFromLanguageAndPlugin(language, Plugin1), yapp = _easy.Element.fromClass(Class, properties, plugin);
                yapp.initialise();
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
var _default = _easyWithStyle.default(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgc2Nyb2xsQmFyVGhpY2tuZXNzIGZyb20gXCIuL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5pbXBvcnQgeyBzdHJpcFBpeGVscyB9IGZyb20gXCIuL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wbHVnaW5cIjtcbmltcG9ydCB7IFRPUF9TSURFLCBMRUZUX1NJREUsIFJJR0hUX1NJREUsIEJPVFRPTV9TSURFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb2xvdXIsIGNhcmV0Q29sb3VyLCBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExpbmVIZWlnaHQoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodEluUGl4ZWxzID0gdGhpcy5jc3MoXCJsaW5lLWhlaWdodFwiKSxcbiAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlcldpZHRoKHNpZGUpIHtcbiAgICBjb25zdCBib3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoYGJvcmRlci0ke3NpZGV9LXdpZHRoYCksXG4gICAgICAgICAgYm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBib3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBUT1BfU0lERSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyVG9wV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJMZWZ0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IExFRlRfU0lERSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckxlZnRXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclJpZ2h0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFJJR0hUX1NJREUsXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyUmlnaHRXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBCT1RUT01fU0lERSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgZW5hYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIGRpc2FibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHsgb25Db250ZW50Q2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgLy8vXG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKTtcbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIGJvcmRlclJpZ2h0V2lkdGggKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gbGluZUNvdW50ICogbGluZUhlaWdodCArIHNjcm9sbEJhclRoaWNrbmVzcyArIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3V0KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBIZWlnaHQsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgcmVzaXplWWFwcFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZmlyYUNvZGUgPSBmYWxzZSwgZWRpdGFibGUgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuZW5hYmxlRmlyYUNvZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBZYXBwLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucyksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBcbiAgY29sb3I6ICR7Y29sb3VyfTtcbiAgY2FyZXQtY29sb3I6ICR7Y2FyZXRDb2xvdXJ9O1xuICBib3JkZXItY29sb3I6ICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcblxuICAuZmlyYS1jb2RlIHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyAvKiBGb3JjZSBsaWdhdHVyZXMgZm9yIFdlYmtpdCwgQmxpbmssIEdlY2tvICovXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxOyAgLyogRW5hYmxlIGxpZ2F0dXJlcyBmb3IgSUUgMTArLCBFZGdlICovXG4gICAgXG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRVIsS0FBTTtJQUVaLGFBQWdCO0lBQ2YsY0FBaUI7SUFDWixtQkFBc0I7SUFFekIsSUFBaUI7SUFDRCxPQUFvQjtJQUNILFVBQWE7SUFDWixXQUF3QjtJQUN2QixRQUFxQjtJQUNoQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FrUHRELGdGQU90QjtTQUFTLGtCQUNIO1NBQWMsbUJBQ2I7U0FBZSx1QkFDWDtTQUFtQixtZEFrQnZDOzs7Ozs7O0lBNVFNLElBQUksWUFBUyxRQUFPO2NBQXBCLElBQUksRUFicUIsS0FBTTthQWEvQixJQUFJLENBQ0ksUUFBUSxFQUFFLE1BQU07OEJBRHhCLElBQUk7O2lFQUFKLElBQUksYUFFQSxRQUFRO2NBRVQsTUFBTSxHQUFHLE1BQU07OztpQkFKbEIsSUFBSTs7WUFPUixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTOzRCQUNLLE1BQU07Ozs7WUFHcEIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtvQkFDRixtQkFBbUIsUUFBUSxzQkFBc0IsSUFDakQsT0FBTyxHQUFHLG1CQUFtQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFbEMsT0FBTzs7OztZQUdoQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLGtCQUFrQixRQUFRLEdBQUcsRUFBQyxXQUFhLElBQzdDLFVBQVUsR0EzQlUsSUFBaUIsYUEyQlosa0JBQWtCO3VCQUV4QyxVQUFVOzs7O1lBR25CLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxJQUFJO29CQUNYLG1CQUFtQixRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQU8sTUFBTSxDQUFYLElBQUksR0FBQyxNQUFNLEtBQ3BELFdBQVcsR0FsQ08sSUFBaUIsYUFrQ1QsbUJBQW1CO3VCQUU1QyxXQUFXOzs7O1lBR3BCLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCO29CQUNULElBQUksR0F0QytDLFVBQWEsV0F1Q2hFLGNBQWMsUUFBUSxjQUFjLENBQUMsSUFBSTt1QkFFeEMsY0FBYzs7OztZQUd2QixHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQjtvQkFDVixJQUFJLEdBN0MrQyxVQUFhLFlBOENoRSxlQUFlLFFBQVEsY0FBYyxDQUFDLElBQUk7dUJBRXpDLGVBQWU7Ozs7WUFHeEIsR0FBbUIsR0FBbkIsbUJBQW1COzRCQUFuQixtQkFBbUI7b0JBQ1gsSUFBSSxHQXBEK0MsVUFBYSxhQXFEaEUsZ0JBQWdCLFFBQVEsY0FBYyxDQUFDLElBQUk7dUJBRTFDLGdCQUFnQjs7OztZQUd6QixHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQjtvQkFDWixJQUFJLEdBM0QrQyxVQUFhLGNBNERoRSxpQkFBaUIsUUFBUSxjQUFjLENBQUMsSUFBSTt1QkFFM0MsaUJBQWlCOzs7O1lBRzFCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxLQUFLO3FCQUFTLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSzs7OztZQUU1QyxHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsTUFBTTtxQkFBUyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7WUFFaEQsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYztxQkFDUCxRQUFRLEVBQUMsU0FBVzs7OztZQUczQixHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlO3FCQUNSLFdBQVcsRUFBQyxTQUFXOzs7O1lBRzlCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDcEIsWUFBWSxHQUFHLE9BQU8sRUFDdEIsY0FBYyxHQUFHLFlBQVksQ0FBQyxpQkFBaUI7b0JBRWpELGNBQWM7d0JBQ1ksWUFBZSxRQUFWLFVBQVUsRUFBbkMsZUFBZSxHQUFLLFlBQWUsQ0FBbkMsZUFBZSxFQUNqQixvQkFBb0IsR0FBRyxlQUFlLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3lCQUU1QyxNQUFNO29CQUVYLE9BQU8sUUFBUyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5CLG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7OztZQUlyRSxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQ3BCLFlBQVksR0FBRyxPQUFPLEVBQ3RCLFNBQVMsR0FBRyxZQUFZLENBQUMsWUFBWSxJQUNyQyxVQUFVLEdBQUcsWUFBWSxDQUFDLGFBQWE7cUJBRXhDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxVQUFVOzs7O1lBR2hELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07b0JBQ0UsT0FBTyxRQUFRLFVBQVU7cUJBRTFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFFcEIsTUFBTSxRQUFRLE1BQU0sQ0FBQyxTQUFTLElBQzlCLGtCQUFrQixRQUFRLG1CQUFtQixDQUFDLE1BQU07b0JBRXRELGtCQUFrQixLQUFLLElBQUk7eUJBQ3hCLHFCQUFxQixDQUFDLGtCQUFrQjs7Ozs7WUFJakQsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTTtvQkFDQSxLQUFLLFFBQVEsUUFBUSxJQUNyQixNQUFNLFFBQVEsU0FBUztvQkFFckIsY0FBYyxRQUFRLGlCQUFpQixJQUN2QyxlQUFlLFFBQVEsa0JBQWtCLElBQ3pDLGdCQUFnQixRQUFRLG1CQUFtQixJQUMzQyxpQkFBaUIsUUFBUSxvQkFBb0I7Z0JBRW5ELE1BQU0sSUFBTSxjQUFjLEdBQUcsaUJBQWlCO2dCQUM5QyxLQUFLLElBQU0sZUFBZSxHQUFHLGdCQUFnQjtxQkFFeEMscUJBQXFCLENBQUMsS0FBSztxQkFDM0Isc0JBQXNCLENBQUMsTUFBTTtvQkFFNUIsa0JBQWtCLFFBQVEsbUJBQW1CO3FCQUU5QyxxQkFBcUIsQ0FBQyxrQkFBa0I7Ozs7WUFHL0MsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDQSxPQUFPLFFBQVEsVUFBVSxJQUN6QixTQUFTLEdBdEk0QyxRQUFxQixzQkFzSXpDLE9BQU8sR0FDeEMsVUFBVSxRQUFRLGFBQWEsSUFDL0IsY0FBYyxRQUFRLGlCQUFpQixJQUN2QyxpQkFBaUIsUUFBUSxvQkFBb0IsSUFDN0MsTUFBTSxHQUFHLFNBQVMsR0FBRyxVQUFVLEdBaEpWLG1CQUFzQixXQWdKWSxjQUFjLEdBQUcsaUJBQWlCO3FCQUUxRixTQUFTLENBQUMsTUFBTTtxQkFFaEIsTUFBTTtxQkFFTixNQUFNOzs7O1lBR2IsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTs7OztZQUlWLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsYUFBYSxRQUFRLGFBQWEsQ0FBQyxJQUFJLFFBQ3ZDLGFBQWEsUUFBUSxhQUFhLENBQUMsSUFBSTs7a0NBbktsQixLQUFNLHFCQUdYLGNBQWlCO2tDQUhaLEtBQU0scUJBRVosYUFBZ0I7d0JBc0tyQixRQUFRLEVBQUUsYUFBYTt3QkFBRSxRQUFRLEVBQUUsYUFBYTt3QkFBRSxNQUFNLEVBQU4sSUFBTTs7Ozs7O1lBSzFFLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsU0FBUyxRQUFRLFNBQVMsQ0FBQyxJQUFJLFFBQy9CLFVBQVUsUUFBUSxNQUFNLENBQUMsSUFBSSxRQUM3QixZQUFZLFFBQVEsUUFBUSxDQUFDLElBQUksUUFDakMsYUFBYSxRQUFRLFNBQVMsQ0FBQyxJQUFJLFFBQ25DLFlBQVksUUFBUSxRQUFRLENBQUMsSUFBSSxRQUNqQyxhQUFhLFFBQVEsU0FBUyxDQUFDLElBQUksUUFDbkMsVUFBVSxRQUFRLE1BQU0sQ0FBQyxJQUFJLE9BQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztvQkFHN0MsU0FBUyxFQUFULFNBQVM7b0JBQ1QsVUFBVSxFQUFWLFVBQVU7b0JBQ1YsWUFBWSxFQUFaLFlBQVk7b0JBQ1osYUFBYSxFQUFiLGFBQWE7b0JBQ2IsWUFBWSxFQUFaLFlBQVk7b0JBQ1osYUFBYSxFQUFiLGFBQWE7b0JBQ2IsVUFBVSxFQUFWLFVBQVU7Ozs7O1lBSWQsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSCxhQUFhO29CQUU0QyxZQUFlLFFBQVYsVUFBVSxFQUFyRSxhQUFhLEdBQXlDLFlBQWUsQ0FBckUsYUFBYSxjQUF5QyxZQUFlLENBQXRELFFBQVEsRUFBUixRQUFRLDBCQUFHLEtBQUssMEJBQXVCLFlBQWUsQ0FBcEMsUUFBUSxFQUFSLFFBQVEsMEJBQUcsS0FBSyxjQUNuRCxRQUFRLFFBQVEsTUFBTSxDQUFDLFdBQVcsSUFDbEMsT0FBTyxHQTVMOEMsUUFBcUIsMEJBNEx2QyxhQUFhLEdBQ2hELFFBQVEsSUFBSSxRQUFRLEVBQ3BCLFNBQVMsR0FBRyxDQUFDLEVBQ2IsVUFBVSxHQUFHLENBQUMsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7cUJBRXBCLFdBQVcsQ0FBQyxRQUFRO3FCQUVwQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVTtxQkFFekMsc0JBQXNCLENBQUMsT0FBTztxQkFFOUIsdUJBQXVCLENBQUMsUUFBUTtvQkFFakMsUUFBUTt5QkFDTCxjQUFjOztxQkFHaEIsUUFBUSxXQUFFLEtBQUssRUFBRSxPQUFPO2dDQUFVLE1BQU07Ozs7OztZQWdCeEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTSxFQUFFLE9BQU87b0JBQzdDLEtBQUssR0FBRyxJQUFJLEVBQ1osVUFBVSxHQWhPMEMsV0FBd0IsK0NBZ09qQixPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU0sRUFBRSxPQUFPLEdBQzdGLE1BQU0sR0FuTzRCLE9BQW9CLDZCQW1PakIsUUFBUSxFQUFFLE9BQU0sR0FDckQsSUFBSSxHQTNPaUIsS0FBTSxTQTJPWixTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNO2dCQUV4RCxJQUFJLENBQUMsVUFBVTt1QkFFUixJQUFJOzs7O1lBR04sR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVO29CQUN4QixRQUFRLEdBQWEsVUFBVSxDQUEvQixRQUFRLEVBQUUsT0FBTSxHQUFLLFVBQVUsQ0FBckIsTUFBTSxFQUNsQixNQUFNLEdBN080QixPQUFvQiw2QkE2T2pCLFFBQVEsRUFBRSxPQUFNLEdBQ3JELElBQUksR0FyUGlCLEtBQU0sU0FxUFosU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTTtnQkFFeEQsSUFBSSxDQUFDLFVBQVU7dUJBRVIsSUFBSTs7OztXQTVPVCxJQUFJO21CQWJxQixLQUFNO2dCQWEvQixJQUFJLEdBNk1ELE9BQU8sSUFBRyxHQUFLO2dCQTdNbEIsSUFBSSxHQStNRCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O2dCQWhOZixJQUFJLEdBbU5ELGlCQUFpQjtLQUN0QixNQUFRO0tBQ1IsUUFBVTtLQUNWLFFBQVU7S0FDVixRQUFVOztlQXRPUSxjQUFpQixTQStQZCxJQUFJLHFCQWxQdUMsT0FBaUIsU0FBakIsT0FBaUIsY0FBakIsT0FBaUIsZUFBakIsT0FBaUIifQ==