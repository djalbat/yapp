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
var _scrollbar = require("./utilities/scrollbar");
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
        ';\n  font-size: 13px;\n  line-height: 20px;\n  font-family: "Menlo", "Lucida Sans Typewriter", monospace;\n  font-weight: normal;\n  caret-color: ',
        ";\n  border-color: ",
        ";\n  text-rendering: initial;\n  background-color: ",
        ';\n  font-feature-settings: initial;\n\n  .fira-code {\n\n    font-family: "Fira Code";\n    text-rendering: optimizeLegibility;\n    font-feature-settings: "calt" 1;\n    \n  }\n\n'
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
                var _this_properties = _this.properties, _this_properties_onContentChange = _this_properties.onContentChange, onContentChange = _this_properties_onContentChange === void 0 ? null : _this_properties_onContentChange, contentChangeHandler = onContentChange; ///
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
                var _this_properties = this.properties, childElements = _this_properties.childElements, _this_properties_firaCode = _this_properties.firaCode, firaCode = _this_properties_firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _this_properties_firaCode, _this_properties_autoHeight = _this_properties.autoHeight, autoHeight = _this_properties_autoHeight === void 0 ? _defaults.DEFAULT_AUTO_HEIGHT : _this_properties_autoHeight, content = (0, _content.contentFromChildElements)(childElements);
                firaCode && this.enableFiraCode();
                this.activateRichTextarea();
                this.setRichTextareaContent(content);
                if (autoHeight) {
                    var lineHeight = this.getLineHeight(), paddingTop = this.getPaddingTop(), paddingBottom = this.getPaddingBottom(), borderTopWidth = this.getBorderTopWidth(), initialLineCount = this.getInitialLineCount(), borderBottomWidth = this.getBorderBottomWidth(), scrollbarThickness = (0, _scrollbar.getScrollbarThickness)(), height = borderTopWidth + paddingTop + initialLineCount * lineHeight + paddingBottom + borderBottomWidth + scrollbarThickness;
                    this.setHeight(height);
                }
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
                var _this_properties = this.properties, _this_properties_editable = _this_properties.editable, editable = _this_properties_editable === void 0 ? _defaults.DEFAULT_EDITABLE : _this_properties_editable, _this_properties_hiddenGutter = _this_properties.hiddenGutter, hiddenGutter = _this_properties_hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _this_properties_hiddenGutter, _this_properties_hiddenScrollbars = _this_properties.hiddenScrollbars, hiddenScrollbars = _this_properties_hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _this_properties_hiddenScrollbars, _this_properties_fancyScrollbars = _this_properties.fancyScrollbars, fancyScrollbars = _this_properties_fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _this_properties_fancyScrollbars;
                return /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
                    onChange: this.changeHandler,
                    editable: editable,
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
                var language = this.plugin.getLanguage();
                this.setLanguage(language);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclwiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfQVVUT19IRUlHSFQsIERFRkFVTFRfSElEREVOX0dVVFRFUiwgREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBlbmFibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgZGlzYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgIC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBpZiAoY29udGVudENoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSwgYXV0b0hlaWdodCA9IERFRkFVTFRfQVVUT19IRUlHSFQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgZmlyYUNvZGUgJiYgdGhpcy5lbmFibGVGaXJhQ29kZSgpO1xuXG4gICAgdGhpcy5hY3RpdmF0ZVJpY2hUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgaWYgKGF1dG9IZWlnaHQpIHtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICAgIHBhZGRpbmdUb3AgPSB0aGlzLmdldFBhZGRpbmdUb3AoKSxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b20gPSB0aGlzLmdldFBhZGRpbmdCb3R0b20oKSxcbiAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IHRoaXMuZ2V0SW5pdGlhbExpbmVDb3VudCgpLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoKSxcbiAgICAgICAgICAgIGhlaWdodCA9IGJvcmRlclRvcFdpZHRoICsgcGFkZGluZ1RvcCArIGluaXRpYWxMaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgcGFkZGluZ0JvdHRvbSArIGJvcmRlckJvdHRvbVdpZHRoICsgc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBlZGl0YWJsZSA9IERFRkFVTFRfRURJVEFCTEUsIGhpZGRlbkd1dHRlciA9IERFRkFVTFRfSElEREVOX0dVVFRFUiwgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMsIGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFByZXR0eVByaW50ZXIgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gZWRpdGFibGU9e2VkaXRhYmxlfSBoaWRkZW5HdXR0ZXI9e2hpZGRlbkd1dHRlcn0gZmFuY3lTY3JvbGxiYXJzPXtmYW5jeVNjcm9sbGJhcnN9IGhpZGRlblNjcm9sbGJhcnM9e2hpZGRlblNjcm9sbGJhcnN9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlclxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKTtcblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiUGx1Z2luXCIsXG4gICAgXCJsYW5ndWFnZVwiLFxuICAgIFwiZmlyYUNvZGVcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJhdXRvSGVpZ2h0XCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCIsXG4gICAgXCJvbkNvbnRlbnRDaGFuZ2VcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBZYXBwLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucyksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihZYXBwLnByb3RvdHlwZSwgc3R5bGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICB0ZXh0LXJlbmRlcmluZzogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbml0aWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7XG4gICAgXG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJZYXBwIiwic2VsZWN0b3IiLCJwbHVnaW4iLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInByb3BlcnRpZXMiLCJvbkNvbnRlbnRDaGFuZ2UiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInVwZGF0ZSIsImdldFBsdWdpbiIsImdldENvbnRlbnQiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRJbml0aWFsTGluZUNvdW50IiwibGluZUNvdW50IiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJpbml0aWFsTGluZUNvdW50Iiwic2V0TGV4ZXIiLCJsZXhlciIsInNldFBhcnNlciIsInBhcnNlciIsImVuYWJsZUZpcmFDb2RlIiwiYWRkQ2xhc3MiLCJkaXNhYmxlRmlyYUNvZGUiLCJyZW1vdmVDbGFzcyIsInRva2VucyIsImdldFRva2VucyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJkaWRNb3VudCIsImNoaWxkRWxlbWVudHMiLCJmaXJhQ29kZSIsIkRFRkFVTFRfRklSQV9DT0RFIiwiYXV0b0hlaWdodCIsIkRFRkFVTFRfQVVUT19IRUlHSFQiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJhY3RpdmF0ZVJpY2hUZXh0YXJlYSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwiZ2V0TGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJnZXRQYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImdldFBhZGRpbmdCb3R0b20iLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNjcm9sbGJhclRoaWNrbmVzcyIsImdldFNjcm9sbGJhclRoaWNrbmVzcyIsImhlaWdodCIsInNldEhlaWdodCIsIndpbGxVbm1vdW50IiwiZWRpdGFibGUiLCJERUZBVUxUX0VESVRBQkxFIiwiaGlkZGVuR3V0dGVyIiwiREVGQVVMVF9ISURERU5fR1VUVEVSIiwiaGlkZGVuU2Nyb2xsYmFycyIsIkRFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMiLCJmYW5jeVNjcm9sbGJhcnMiLCJERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMiLCJQcmV0dHlQcmludGVyIiwib25DaGFuZ2UiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJmcm9tQ29udGVudCIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzdHlsZU1peGlucyIsIndpdGhTdHlsZSIsImNvbG91ciIsImNhcmV0Q29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0xBOzs7ZUFBQTs7O2tFQXRMc0I7b0JBRVM7MERBRVA7a0VBQ0U7eUJBRVk7c0JBQ007MEJBQ2tCO3VCQUNDO3NCQUNLO3dCQUNpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySixJQUFBLEFBQU1BLHFCQXNLSCxBQXRLSDtjQUFNQTs4QkFBQUE7YUFBQUEsS0FDUUMsUUFBUSxFQUFFQyxNQUFNOzhCQUR4QkY7O2tDQUVJQztRQW9DUkUsK0NBQUFBLGlCQUFnQixTQUFDQyxPQUFPQyxTQUFZO1lBQ2xDLElBQU1DLGVBQWVELFNBQ2ZFLGlCQUFpQkQsYUFBYUUsaUJBQWlCO1lBRXJELElBQUlELGdCQUFnQjtnQkFDbEIsSUFBbUMsbUJBQUEsTUFBS0UsVUFBVSxxQ0FBZixpQkFBM0JDLGlCQUFBQSxnRUFBa0IsSUFBSSxxQ0FDeEJDLHVCQUF1QkQsaUJBQWtCLEdBQUc7Z0JBRWxELE1BQUtFLE1BQU07Z0JBRVgsSUFBSUQsc0JBQXNCO29CQUN4Qk4seUNBQWdCLEdBQUc7b0JBRW5CTSxxQkFBcUJQLE9BQU9DO2dCQUM5QixDQUFDO1lBQ0gsQ0FBQztRQUNIO1FBbERFLE1BQUtILE1BQU0sR0FBR0E7OztpQkFKWkY7O1lBT0phLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDWCxNQUFNO1lBQ3BCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLGFB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