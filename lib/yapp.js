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
        "\n\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  \n  color: ",
        ";\n  caret-color: ",
        ";\n  border-color: ",
        ";\n  background-color: ",
        ';\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: "Menlo", "Lucida Sans Typewriter", monospace;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: "Fira Code";\n    text-rendering: optimizeLegibility;\n    font-feature-settings: "calt" 1;\n    \n  }\n\n'
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
                var _properties = this.properties, _hiddenGutter = _properties.hiddenGutter, hiddenGutter = _hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _hiddenGutter, _hiddenScrollbars = _properties.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars, _fancyScrollbars = _properties.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars;
                return /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
                    onChange: this.changeHandler,
                    hiddenGutter: hiddenGutter,
                    fancyScrollbars: fancyScrollbars,
                    hiddenScrollbars: hiddenScrollbars
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPlugin = this.getPlugin.bind(this), getContent = this.getContent.bind(this), updateYapp = this.update.bind(this), setYappLexer = this.setLexer.bind(this), setYappParser = this.setParser.bind(this); ///
                return {
                    getPlugin: getPlugin,
                    getContent: getContent,
                    updateYapp: updateYapp,
                    setYappLexer: setYappLexer,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfQVVUT19IRUlHSFQsIERFRkFVTFRfSElEREVOX0dVVFRFUiwgREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgIC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBpZiAoY29udGVudENoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSwgYXV0b0hlaWdodCA9IERFRkFVTFRfQVVUT19IRUlHSFQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodCgpLFxuICAgICAgICAgICAgcGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGFkZGluZ1RvcCgpLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gdGhpcy5nZXRJbml0aWFsTGluZUNvdW50KCksXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgICBoZWlnaHQgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLCBoaWRkZW5TY3JvbGxiYXJzID0gREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8UHJldHR5UHJpbnRlciBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBoaWRkZW5HdXR0ZXI9e2hpZGRlbkd1dHRlcn0gZmFuY3lTY3JvbGxiYXJzPXtmYW5jeVNjcm9sbGJhcnN9IGhpZGRlblNjcm9sbGJhcnM9e2hpZGRlblNjcm9sbGJhcnN9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlclxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZWRpdGFibGUgPSBERUZBVUxUX0VESVRBQkxFIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGU7XG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiYXV0b0hlaWdodFwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJub1Njcm9sbGJhcnNcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiLFxuICAgIFwib25Db250ZW50Q2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oWWFwcC5wcm90b3R5cGUsIHN0eWxlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBcbiAgY29sb3I6ICR7Y29sb3VyfTtcbiAgY2FyZXQtY29sb3I6ICR7Y2FyZXRDb2xvdXJ9O1xuICBib3JkZXItY29sb3I6ICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxO1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJwcm9wZXJ0aWVzIiwib25Db250ZW50Q2hhbmdlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJnZXRQbHVnaW4iLCJnZXRDb250ZW50IiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwiZ2V0SW5pdGlhbExpbmVDb3VudCIsImxpbmVDb3VudCIsImxpbmVDb3VudEZyb21Db250ZW50IiwiaW5pdGlhbExpbmVDb3VudCIsInNldExleGVyIiwibGV4ZXIiLCJzZXRQYXJzZXIiLCJwYXJzZXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwiZGlkTW91bnQiLCJmaXJhQ29kZSIsIkRFRkFVTFRfRklSQV9DT0RFIiwiYXV0b0hlaWdodCIsIkRFRkFVTFRfQVVUT19IRUlHSFQiLCJhZGRDbGFzcyIsImxpbmVIZWlnaHQiLCJnZXRMaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsImdldFBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZ2V0UGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsImNoaWxkRWxlbWVudHMiLCJoaWRkZW5HdXR0ZXIiLCJERUZBVUxUX0hJRERFTl9HVVRURVIiLCJoaWRkZW5TY3JvbGxiYXJzIiwiREVGQVVMVF9ISURERU5fU0NST0xMQkFSUyIsImZhbmN5U2Nyb2xsYmFycyIsIkRFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyIsIlByZXR0eVByaW50ZXIiLCJvbkNoYW5nZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidXBkYXRlWWFwcCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImVkaXRhYmxlIiwiREVGQVVMVF9FRElUQUJMRSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5IiwiZnJvbUNvbnRlbnQiLCJQbHVnaW4iLCJvcHRpb25zIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMiLCJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic3R5bGVNaXhpbnMiLCJ3aXRoU3R5bGUiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkF1TGIsU0F5QkU7OztlQXpCRixRQXlCRTs7O2tFQTlNb0IsaUJBQWlCO29CQUVSLE1BQU07MERBRWIsZ0JBQWdCO2tFQUNkLGlCQUFpQjtzQkFFQyxvQkFBb0I7MEJBQ0Ysd0JBQXdCO3VCQUN2QixxQkFBcUI7c0JBQ2hCLGlCQUFpQjt3QkFDZ0UsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqSyxJQUFBLEFBQU1BLElBQUksaUJBc0tQLEFBdEtIO2NBQU1BLElBQUk7OEJBQUpBLElBQUk7YUFBSkEsSUFBSSxDQUNJQyxRQUFRLEVBQUVDLE1BQU07OEJBRHhCRixJQUFJOztrQ0FFQUMsUUFBUSxFQUFFO1FBNEJsQkUsK0NBQUFBLGVBQWEsRUFBRyxTQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztZQUNsQyxJQUFNQyxZQUFZLEdBQUdELE9BQU8sRUFDdEJFLGNBQWMsR0FBR0QsWUFBWSxDQUFDRSxpQkFBaUIsRUFBRSxBQUFDO1lBRXhELElBQUlELGNBQWMsRUFBRTtnQkFDbEIsSUFBbUMsV0FBZSxHQUFmLE1BQUtFLFVBQVUscUJBQWYsV0FBZSxDQUExQ0MsZUFBZSxFQUFmQSxlQUFlLGlDQUFHLElBQUksbUJBQUEsRUFDeEJDLG9CQUFvQixHQUFHRCxlQUFlLEFBQUMsRUFBRSxHQUFHO2dCQUVsRCxNQUFLRSxNQUFNLEVBQUUsQ0FBQztnQkFFZCxJQUFJRCxvQkFBb0IsRUFBRTtvQkFDeEJOLE9BQU8sZ0NBQU8sQ0FBQyxDQUFDLEdBQUc7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