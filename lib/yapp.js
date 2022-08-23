"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _style = /*#__PURE__*/ _interopRequireDefault(require("./mixins/style"));
var _prettyPrinter = /*#__PURE__*/ _interopRequireDefault(require("./prettyPrinter"));
var _scrollbarThickness = require("./utilities/scrollbarThickness");
var _plugin = require("./utilities/plugin");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    "@swc/helpers - typeof";
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
        "\n\n  width: 100%;\n  height: 100%;\n\n  border: 1px solid;\n  \n  color: ",
        ";\n  caret-color: ",
        ";\n  border-color: ",
        ";\n  background-color: ",
        ';\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: "Menlo", "Lucida Sans Typewriter", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: "Fira Code";\n    text-rendering: optimizeLegibility;\n    font-feature-settings: "calt" 1;\n    \n  }\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Yapp = /*#__PURE__*/ function(Element) {
    _inherits(Yapp, Element);
    var _super = _createSuper(Yapp);
    function Yapp(selector, plugin) {
        _classCallCheck(this, Yapp);
        var _this;
        _this = _super.call(this, selector);
        _defineProperty(_assertThisInitialized(_this), "changeHandler", function(event, element) {
            var richTextarea = element, contentChanged = richTextarea.hasContentChanged();
            if (contentChanged) {
                var _properties = _this.properties, _onContentChange = _properties.onContentChange, onContentChange = _onContentChange === void 0 ? null : _onContentChange, contentChangeHandler = onContentChange; ///
                _this.update();
                if (contentChangeHandler) {
                    element = _assertThisInitialized(_this); ///
                    contentChangeHandler(event, element);
                }
            }
        });
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
            key: "getInitialLineCount",
            value: function getInitialLineCount() {
                var content = this.getContent(), lineCount = (0, _content.lineCountFromContent)(content), initialLineCount = lineCount; ///
                return initialLineCount;
            }
        },
        {
            key: "getScrollbarThickness",
            value: function getScrollbarThickness() {
                var scrollbarThickness = 0;
                var _properties = this.properties, _hiddenScrollbars = _properties.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars;
                if (!hiddenScrollbars) {
                    var _properties1 = this.properties, _fancyScrollbars = _properties1.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars;
                    scrollbarThickness = (0, _scrollbarThickness.getScrollbarThickness)(fancyScrollbars);
                }
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
            key: "update",
            value: function update() {
                var content = this.getContent();
                this.plugin.update(content);
                var tokens = this.plugin.getTokens();
                this.updatePrettyPrinter(tokens);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, _firaCode = _properties.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode, _autoHeight = _properties.autoHeight, autoHeight = _autoHeight === void 0 ? _defaults.DEFAULT_AUTO_HEIGHT : _autoHeight;
                if (firaCode) {
                    this.addClass("fira-code");
                }
                if (autoHeight) {
                    var lineHeight = this.getLineHeight(), paddingTop = this.getPaddingTop(), paddingBottom = this.getPaddingBottom(), borderTopWidth = this.getBorderTopWidth(), initialLineCount = this.getInitialLineCount(), borderBottomWidth = this.getBorderBottomWidth(), scrollbarThickness = this.getScrollbarThickness(), height = borderTopWidth + paddingTop + initialLineCount * lineHeight + paddingBottom + borderBottomWidth + scrollbarThickness;
                    this.setHeight(height);
                }
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
                var _properties = this.properties, _hiddenGutter = _properties.hiddenGutter, hiddenGutter = _hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _hiddenGutter, _hiddenScrollbars = _properties.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars, _fancyScrollbars = _properties.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, scrollbarThickness = this.getScrollbarThickness();
                return /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
                    onChange: this.changeHandler,
                    hiddenGutter: hiddenGutter,
                    fancyScrollbars: fancyScrollbars,
                    hiddenScrollbars: hiddenScrollbars,
                    scrollbarThickness: scrollbarThickness
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPlugin = this.getPlugin.bind(this), getContent = this.getContent.bind(this), updateYapp = this.update.bind(this), setYappLexer = this.setLexer.bind(this), setYappWidth = this.setWidth.bind(this), setYappHeight = this.setHeight.bind(this), setYappParser = this.setParser.bind(this); ///
                return {
                    getPlugin: getPlugin,
                    getContent: getContent,
                    updateYapp: updateYapp,
                    setYappLexer: setYappLexer,
                    setYappWidth: setYappWidth,
                    setYappHeight: setYappHeight,
                    setYappParser: setYappParser
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _properties = this.properties, childElements = _properties.childElements, _editable = _properties.editable, editable = _editable === void 0 ? _defaults.DEFAULT_EDITABLE : _editable, language = this.plugin.getLanguage(), content = (0, _content.contentFromChildElements)(childElements), readOnly = !editable;
                this.setLanguage(language);
                this.setRichTextareaContent(content);
                this.setRichTextareaReadOnly(readOnly);
                this.update();
            }
        }
    ], [
        {
            key: "fromContent",
            value: function fromContent(content, language, Plugin, options) {
                var Class = Yapp, properties = (0, _properties.propertiesFromContentLanguagePluginAndOptions)(content, language, Plugin, options), plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        },
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var language = properties.language, Plugin = properties.Plugin, plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
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
    "autoHeight",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars",
    "onContentChange"
]);
Object.assign(Yapp.prototype, _style.default);
var _default = (0, _easyWithStyle.default)(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfQVVUT19IRUlHSFQsIERFRkFVTFRfSElEREVOX0dVVFRFUiwgREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgIC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBpZiAoY29udGVudENoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIGdldFNjcm9sbGJhclRoaWNrbmVzcygpIHtcbiAgICBsZXQgc2Nyb2xsYmFyVGhpY2tuZXNzID0gMDtcblxuICAgIGNvbnN0IHsgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmICghaGlkZGVuU2Nyb2xsYmFycykge1xuICAgICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKGZhbmN5U2Nyb2xsYmFycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcm9sbGJhclRoaWNrbmVzcztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSwgYXV0b0hlaWdodCA9IERFRkFVTFRfQVVUT19IRUlHSFQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodCgpLFxuICAgICAgICAgICAgcGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGFkZGluZ1RvcCgpLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gdGhpcy5nZXRJbml0aWFsTGluZUNvdW50KCksXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgICBoZWlnaHQgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLCBoaWRkZW5TY3JvbGxiYXJzID0gREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBoaWRkZW5HdXR0ZXI9e2hpZGRlbkd1dHRlcn1cbiAgICAgICAgICAgICAgICAgICAgIGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICAgaGlkZGVuU2Nyb2xsYmFycz17aGlkZGVuU2Nyb2xsYmFyc31cbiAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlO1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImF1dG9IZWlnaHRcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwibm9TY3JvbGxiYXJzXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIixcbiAgICBcIm9uQ29udGVudENoYW5nZVwiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFlhcHAucHJvdG90eXBlLCBzdHlsZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBcbiAgY29sb3I6ICR7Y29sb3VyfTtcbiAgY2FyZXQtY29sb3I6ICR7Y2FyZXRDb2xvdXJ9O1xuICBib3JkZXItY29sb3I6ICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcblxuICAuZmlyYS1jb2RlIHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTtcbiAgICBcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIllhcHAiLCJzZWxlY3RvciIsInBsdWdpbiIsImNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwicHJvcGVydGllcyIsIm9uQ29udGVudENoYW5nZSIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwidXBkYXRlIiwiZ2V0UGx1Z2luIiwiZ2V0Q29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImluaXRpYWxMaW5lQ291bnQiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJoaWRkZW5TY3JvbGxiYXJzIiwiREVGQVVMVF9ISURERU5fU0NST0xMQkFSUyIsImZhbmN5U2Nyb2xsYmFycyIsIkRFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyIsInNldExleGVyIiwibGV4ZXIiLCJzZXRQYXJzZXIiLCJwYXJzZXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwiZGlkTW91bnQiLCJmaXJhQ29kZSIsIkRFRkFVTFRfRklSQV9DT0RFIiwiYXV0b0hlaWdodCIsIkRFRkFVTFRfQVVUT19IRUlHSFQiLCJhZGRDbGFzcyIsImxpbmVIZWlnaHQiLCJnZXRMaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsImdldFBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZ2V0UGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsImNoaWxkRWxlbWVudHMiLCJoaWRkZW5HdXR0ZXIiLCJERUZBVUxUX0hJRERFTl9HVVRURVIiLCJQcmV0dHlQcmludGVyIiwib25DaGFuZ2UiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJlZGl0YWJsZSIsIkRFRkFVTFRfRURJVEFCTEUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsImZyb21Db250ZW50IiwiUGx1Z2luIiwib3B0aW9ucyIsIkNsYXNzIiwicHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIiwicGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInN0eWxlTWl4aW5zIiwid2l0aFN0eWxlIiwiY29sb3VyIiwiY2FyZXRDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBK01iLFNBNEJFOzs7ZUE1QkYsUUE0QkU7OztrRUF6T29CLGlCQUFpQjtvQkFFUixNQUFNOzBEQUViLGdCQUFnQjtrRUFDZCxpQkFBaUI7a0NBRUwsZ0NBQWdDO3NCQUMxQixvQkFBb0I7MEJBQ0Ysd0JBQXdCO3VCQUN2QixxQkFBcUI7c0JBQ2hCLGlCQUFpQjt3QkFDZ0UsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqSyxJQUFBLEFBQU1BLElBQUksaUJBNkxQLEFBN0xIO2NBQU1BLElBQUk7OEJBQUpBLElBQUk7YUFBSkEsSUFBSSxDQUNJQyxRQUFRLEVBQUVDLE1BQU07OEJBRHhCRixJQUFJOztrQ0FFQUMsUUFBUSxFQUFFO1FBS2xCRSwrQ0FBQUEsZUFBYSxFQUFHLFNBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1lBQ2xDLElBQU1DLFlBQVksR0FBR0QsT0FBTyxFQUN0QkUsY0FBYyxHQUFHRCxZQUFZLENBQUNFLGlCQUFpQixFQUFFLEFBQUM7WUFFeEQsSUFBSUQsY0FBYyxFQUFFO2dCQUNsQixJQUFtQyxXQUFlLEdBQWYsTUFBS0UsVUFBVSxxQkFBZixXQUFlLENBQTFDQyxlQUFlLEVBQWZBLGVBQWUsaUNBQUcsSUFBSSxtQkFBQSxFQUN4QkMsb0JBQW9CLEdBQUdELGVBQWUsQUFBQyxFQUFFLEdBQUc7Z0JBRWxELE1BQUtFLE1BQU0sRUFBRSxDQUFDO2dCQUVkLElBQUlELG9CQUFvQixFQUFFO29CQUN4Qk4sT0FBTyxnQ0FBTyxDQUFDLENBQUMsR0FBRztvQkFFbkJNLG9CQUFvQixDQUFDUCxLQUFLLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQSxDQUFBO1FBbkJDLE1BQUtILE1BQU0sR0FBR0EsTUFBTSxDQUFDOzs7aUJBSm5CRixJQUFJOztZQXlCUmEsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsT0FBTyxJQUFJLENBQUNYLE1BQU0sQ0FBQztZQUNyQixDQUFDOzs7WUFFRFksR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBTUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDQyxzQkFBc0IsRUFBRSxFQUNuREMsT0FBTyxHQUFHRixtQkFBbUIsQUFBQyxFQUFFLEdBQUc7Z0JBRXpDLE9BQU9FLE9BQU8sQ0FBQztZQUNqQixDQUFDOzs7WUFFREMsR0FBbUIsRUFBbkJBLHFCQUFtQjttQkFBbkJBLFNBQUFBLG1CQUFtQixHQUFHO2dCQUNwQixJQUFNRCxPQUFPLEdBQUcsSUFBSSxDQUFDSCxVQUFVLEVBQUUsRUFDM0JLLFNBQVMsR0FBR0MsSUFBQUEsUUFBb0IscUJBQUEsRUFBQ0gsT0FBTyxDQUFDLEVBQ3pDSSxnQkFBZ0IsR0FBR0YsU0FBUyxBQUFDLEVBQUMsR0FBRztnQkFFdkMsT0FBT0UsZ0JBQWdCLENBQUM7WUFDMUIsQ0FBQzs7O1lBRURDLEdBQXFCLEVBQXJCQSx1QkFBcUI7bUJBQXJCQSxTQUFBQSxxQkFBcUIsR0FBRztnQkFDdEIsSUFBSUMsa0JBQWtCLEdBQUcsQ0FBQyxBQUFDO2dCQUUzQixJQUF5RCxXQUFlLEdBQWYsSUFBSSxDQUFDZCxVQUFVLHNCQUFmLFdBQWUsQ0FBaEVlLGdCQUFnQixFQUFoQkEsZ0JBQWdCLGtDQUFHQyxTQUF5QiwwQkFBQSxvQkFBQSxBQUFxQjtnQkFFekUsSUFBSSxDQUFDRCxnQkFBZ0IsRUFBRTtvQkFDckIsSUFBdUQsWUFBZSxHQUFmLElBQUksQ0FBQ2YsVUFBVSxxQkFBZixZQUFlLENBQTlEaUIsZUFBZSxFQUFmQSxlQUFlLGlDQUFHQyxTQUF3Qix5QkFBQSxtQkFBQSxBQUFxQjtvQkFFdkVKLGtCQUFrQixHQUFHRCxJQUFBQSxtQkFBcUIsc0JBQUEsRUFBQ0ksZUFBZSxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsT0FBT0gsa0JBQWtCLENBQUM7WUFDNUIsQ0FBQzs7O1lBRURLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsSUFBSSxDQUFDM0IsTUFBTSxDQUFDMEIsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQztZQUFDLENBQUM7OztZQUVoREMsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUM3QixNQUFNLENBQUM0QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1lBQUMsQ0FBQzs7O1lBRXBEbkIsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTUssT0FBTyxHQUFHLElBQUksQ0FBQ0gsVUFBVSxFQUFFLEFBQUM7Z0JBRWxDLElBQUksQ0FBQ1osTUFBTSxDQUFDVSxNQUFNLENBQUNLLE9BQU8sQ0FBQyxDQUFDO2dCQUU1QixJQUFNZSxNQUFNLEdBQUcsSUFBSSxDQUFDOUIsTUFBTSxDQUFDK0IsU0FBUyxFQUFFLEFBQUM7Z0JBRXZDLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNGLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUM7OztZQUVERyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUEyRSxXQUFlLEdBQWYsSUFBSSxDQUFDMUIsVUFBVSxjQUFmLFdBQWUsQ0FBbEYyQixRQUFRLEVBQVJBLFFBQVEsMEJBQUdDLFNBQWlCLGtCQUFBLFlBQUEsZ0JBQXVDLFdBQWUsQ0FBcERDLFVBQVUsRUFBVkEsVUFBVSw0QkFBR0MsU0FBbUIsb0JBQUEsY0FBQSxBQUFxQjtnQkFFM0YsSUFBSUgsUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQ0ksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELElBQUlGLFVBQVUsRUFBRTtvQkFDZCxJQUFNRyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLGNBQWMsR0FBRyxJQUFJLENBQUNDLGlCQUFpQixFQUFFLEVBQ3pDM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDSCxtQkFBbUIsRUFBRSxFQUM3QytCLGlCQUFpQixHQUFHLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUUsRUFDL0MzQixrQkFBa0IsR0FBRyxJQUFJLENBQUNELHFCQUFxQixFQUFFLEVBQ2pENkIsTUFBTSxHQUFHSixjQUFjLEdBQUdKLFVBQVUsR0FBR3RCLGdCQUFnQixHQUFHb0IsVUFBVSxHQUFHSSxhQUFhLEdBQUdJLGlCQUFpQixHQUFHMUIsa0JBQWtCLEFBQUM7b0JBRXBJLElBQUksQ0FBQzZCLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7WUFDSCxDQUFDOzs7WUFFREUsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBeUMsV0FBZSxHQUFmLElBQUksQ0FBQzVDLFVBQVUsY0FBZixXQUFlLENBQWhEMkIsUUFBUSxFQUFSQSxRQUFRLDBCQUFHQyxTQUFpQixrQkFBQSxZQUFBLEFBQXFCO2dCQUV6RCxJQUFJRCxRQUFRLEVBQUU7b0JBQ1osSUFBSSxDQUFDa0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQTJJLFdBQWUsR0FBZixJQUFJLENBQUM5QyxVQUFVLGtCQUFmLFdBQWUsQ0FBbEorQyxZQUFZLEVBQVpBLFlBQVksOEJBQUdDLFNBQXFCLHNCQUFBLGdCQUFBLHNCQUErRixXQUFlLENBQTVHakMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0Isa0NBQUdDLFNBQXlCLDBCQUFBLG9CQUFBLHFCQUFpRCxXQUFlLENBQTlEQyxlQUFlLEVBQWZBLGVBQWUsaUNBQUdDLFNBQXdCLHlCQUFBLG1CQUFBLEVBQ2hJSixrQkFBa0IsR0FBRyxJQUFJLENBQUNELHFCQUFxQixFQUFFLEFBQUM7Z0JBRXhELHFCQUVFLDBCQUFDb0MsY0FBYSxRQUFBO29CQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDeEQsYUFBYTtvQkFDNUJxRCxZQUFZLEVBQUVBLFlBQVk7b0JBQzFCOUIsZUFBZSxFQUFFQSxlQUFlO29CQUNoQ0YsZ0JBQWdCLEVBQUVBLGdCQUFnQjtvQkFDbENELGtCQUFrQixFQUFFQSxrQkFBa0I7a0JBQUksQ0FFekQ7WUFDSixDQUFDOzs7WUFFRHFDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU0vQyxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNnRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3JDL0MsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDK0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN2Q0MsVUFBVSxHQUFHLElBQUksQ0FBQ2xELE1BQU0sQ0FBQ2lELElBQUksQ0FBQyxJQUFJLENBQUMsRUFDbkNFLFlBQVksR0FBRyxJQUFJLENBQUNuQyxRQUFRLENBQUNpQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3ZDRyxZQUFZLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDdkNLLGFBQWEsR0FBRyxJQUFJLENBQUNkLFNBQVMsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN6Q00sYUFBYSxHQUFHLElBQUksQ0FBQ3JDLFNBQVMsQ0FBQytCLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFFLEdBQUc7Z0JBRXJELE9BQVE7b0JBQ05oRCxTQUFTLEVBQVRBLFNBQVM7b0JBQ1RDLFVBQVUsRUFBVkEsVUFBVTtvQkFDVmdELFVBQVUsRUFBVkEsVUFBVTtvQkFDVkMsWUFBWSxFQUFaQSxZQUFZO29CQUNaQyxZQUFZLEVBQVpBLFlBQVk7b0JBQ1pFLGFBQWEsRUFBYkEsYUFBYTtvQkFDYkMsYUFBYSxFQUFiQSxhQUFhO2lCQUNkLENBQUU7WUFDTCxDQUFDOzs7WUFFREMsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFFckIsSUFBdUQsV0FBZSxHQUFmLElBQUksQ0FBQzVELFVBQVUsRUFBOUQ4QyxhQUFhLEdBQWtDLFdBQWUsQ0FBOURBLGFBQWEsY0FBa0MsV0FBZSxDQUEvQ2UsUUFBUSxFQUFSQSxRQUFRLDBCQUFHQyxTQUFnQixpQkFBQSxZQUFBLEVBQzVDQyxRQUFRLEdBQUcsSUFBSSxDQUFDdEUsTUFBTSxDQUFDdUUsV0FBVyxFQUFFLEVBQ3BDeEQsT0FBTyxHQUFHeUQsSUFBQUEsUUFBd0IseUJBQUEsRUFBQ25CLGFBQWEsQ0FBQyxFQUNqRG9CLFFBQVEsR0FBRyxDQUFDTCxRQUFRLEFBQUM7Z0JBRTNCLElBQUksQ0FBQ00sV0FBVyxDQUFDSixRQUFRLENBQUMsQ0FBQztnQkFFM0IsSUFBSSxDQUFDSyxzQkFBc0IsQ0FBQzVELE9BQU8sQ0FBQyxDQUFDO2dCQUVyQyxJQUFJLENBQUM2RCx1QkFBdUIsQ0FBQ0gsUUFBUSxDQUFDLENBQUM7Z0JBRXZDLElBQUksQ0FBQy9ELE1BQU0sRUFBRSxDQUFDO1lBQ2hCLENBQUM7Ozs7WUFvQk1tRSxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQzlELE9BQU8sRUFBRXVELFFBQVEsRUFBRVEsTUFBTSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3JELElBQU1DLEtBQUssR0E1S1RsRixJQUFJLEFBNEtZLEVBQ1pTLFVBQVUsR0FBRzBFLElBQUFBLFdBQTZDLDhDQUFBLEVBQUNsRSxPQUFPLEVBQUV1RCxRQUFRLEVBQUVRLE1BQU0sRUFBRUMsT0FBTyxDQUFDLEVBQzlGL0UsTUFBTSxHQUFHa0YsSUFBQUEsT0FBMkIsNEJBQUEsRUFBQ1osUUFBUSxFQUFFUSxNQUFNLENBQUMsRUFDdERLLElBQUksR0FBR0MsS0FBTyxRQUFBLENBQUNDLFNBQVMsQ0FBQ0wsS0FBSyxFQUFFekUsVUFBVSxFQUFFUCxNQUFNLENBQUMsQUFBQztnQkFFMUQsT0FBT21GLElBQUksQ0FBQztZQUNkLENBQUM7OztZQUVNRSxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0wsS0FBSyxFQUFFekUsVUFBVSxFQUFFO2dCQUNsQyxJQUFRK0QsUUFBUSxHQUFhL0QsVUFBVSxDQUEvQitELFFBQVEsRUFBRVEsTUFBTSxHQUFLdkUsVUFBVSxDQUFyQnVFLE1BQU0sRUFDbEI5RSxNQUFNLEdBQUdrRixJQUFBQSxPQUEyQiw0QkFBQSxFQUFDWixRQUFRLEVBQUVRLE1BQU0sQ0FBQyxFQUN0REssSUFBSSxHQUFHQyxLQUFPLFFBQUEsQ0FBQ0MsU0FBUyxDQUFDTCxLQUFLLEVBQUV6RSxVQUFVLEVBQUVQLE1BQU0sQ0FBQyxBQUFDO2dCQUUxRCxPQUFPbUYsSUFBSSxDQUFDO1lBQ2QsQ0FBQzs7O1dBMUxHckYsSUFBSTtDQTJMVCxrQkEzTGtCc0YsS0FBTyxRQUFBLEVBMkx6QjtBQWxDQyxnQkF6Skl0RixJQUFJLEVBeUpEd0YsU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkEzSkl4RixJQUFJLEVBMkpEeUYsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxNQUFNO0NBQ2xCLENBQUM7QUFFRixnQkEvSkkxRixJQUFJLEVBK0pEMkYsbUJBQWlCLEVBQUc7SUFDekIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDbEIsQ0FBQztBQW9CSkMsTUFBTSxDQUFDQyxNQUFNLENBQUM3RixJQUFJLENBQUM4RixTQUFTLEVBQUVDLE1BQVcsUUFBQSxDQUFDLENBQUM7SUFFM0MsUUE0QkUsR0E1QmFDLElBQUFBLGNBQVMsUUFBQSxFQUFDaEcsSUFBSSxDQUFDLG9CQU9uQmlHLE9BQU0sT0FBQSxFQUNBQyxPQUFXLFlBQUEsRUFDVkMsT0FBWSxhQUFBLEVBQ1JDLE9BQWdCLGlCQUFBIn0=