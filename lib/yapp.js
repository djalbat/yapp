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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _style = /*#__PURE__*/ _interop_require_default(require("./mixins/style"));
var _prettyPrinter = /*#__PURE__*/ _interop_require_default(require("./prettyPrinter"));
var _scrollbar = require("./utilities/scrollbar");
var _plugin = require("./utilities/plugin");
var _customEventTypes = require("./customEventTypes");
var _properties = require("./utilities/properties");
var _content = require("./utilities/content");
var _colour = require("./scheme/colour");
var _defaults = require("./defaults");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
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
    var _super = _create_super(Yapp);
    function Yapp(selector, plugin) {
        _class_call_check(this, Yapp);
        var _this;
        _this = _super.call(this, selector);
        _define_property(_assert_this_initialized(_this), "customChangeHandler", function(event, element) {
            var contentChanged = _this.hasContentChanged();
            if (contentChanged) {
                var content = _this.getContent(), customEventType = _customEventTypes.CONTENT_CHANGE_CUSTOM_EVENT_TYPE;
                _this.update();
                _this.callCustomHandlers(customEventType, content);
            }
        });
        _this.plugin = plugin;
        return _this;
    }
    _create_class(Yapp, [
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
            key: "hasContentChanged",
            value: function hasContentChanged() {
                var richTextareaContentChanged = this.hasRichTextareaContentChanged(), contentChanged = richTextareaContentChanged; ///
                return contentChanged;
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
                var _this_properties = this.properties, _this_properties_editable = _this_properties.editable, editable = _this_properties_editable === void 0 ? _defaults.DEFAULT_EDITABLE : _this_properties_editable, _this_properties_hiddenGutter = _this_properties.hiddenGutter, hiddenGutter = _this_properties_hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _this_properties_hiddenGutter, _this_properties_fancyScrollbars = _this_properties.fancyScrollbars, fancyScrollbars = _this_properties_fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _this_properties_fancyScrollbars, _this_properties_hiddenScrollbars = _this_properties.hiddenScrollbars, hiddenScrollbars = _this_properties_hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _this_properties_hiddenScrollbars;
                return /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
                    onCustomChange: this.customChangeHandler,
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
}(_wrap_native_super(_easy.Element));
_define_property(Yapp, "tagName", "div");
_define_property(Yapp, "defaultProperties", {
    className: "yapp"
});
_define_property(Yapp, "ignoredProperties", [
    "Plugin",
    "language",
    "firaCode",
    "editable",
    "autoHeight",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars"
]);
Object.assign(Yapp.prototype, _style.default);
var _default = (0, _easywithstyle.default)(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclwiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgQ09OVEVOVF9DSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9jdXN0b21FdmVudFR5cGVzXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb2xvdXIsIGNhcmV0Q29sb3VyLCBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9BVVRPX0hFSUdIVCwgREVGQVVMVF9ISURERU5fR1VUVEVSLCBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFBsdWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsTGluZUNvdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gbGluZUNvdW50OyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsTGluZUNvdW50O1xuICB9XG5cbiAgY3VzdG9tQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgZW5hYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIGRpc2FibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUsIGF1dG9IZWlnaHQgPSBERUZBVUxUX0FVVE9fSEVJR0hUIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGZpcmFDb2RlICYmIHRoaXMuZW5hYmxlRmlyYUNvZGUoKTtcblxuICAgIHRoaXMuYWN0aXZhdGVSaWNoVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvSGVpZ2h0KSB7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgICBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSB0aGlzLmdldEluaXRpYWxMaW5lQ291bnQoKSxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgICBoZWlnaHQgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZWRpdGFibGUgPSBERUZBVUxUX0VESVRBQkxFLFxuICAgICAgICAgICAgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLFxuICAgICAgICAgICAgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTLFxuICAgICAgICAgICAgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIG9uQ3VzdG9tQ2hhbmdlPXt0aGlzLmN1c3RvbUNoYW5nZUhhbmRsZXJ9IGVkaXRhYmxlPXtlZGl0YWJsZX0gaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCk7XG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiYXV0b0hlaWdodFwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJub1Njcm9sbGJhcnNcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFlhcHAucHJvdG90eXBlLCBzdHlsZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgXG4gIGNvbG9yOiAke2NvbG91cn07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNhcmV0LWNvbG9yOiAke2NhcmV0Q29sb3VyfTtcbiAgYm9yZGVyLWNvbG9yOiAke2JvcmRlckNvbG91cn07XG4gIHRleHQtcmVuZGVyaW5nOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaXRpYWw7XG5cbiAgLmZpcmEtY29kZSB7XG5cbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTtcbiAgICBcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIllhcHAiLCJzZWxlY3RvciIsInBsdWdpbiIsImN1c3RvbUNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjdXN0b21FdmVudFR5cGUiLCJDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsInVwZGF0ZSIsImNhbGxDdXN0b21IYW5kbGVycyIsImdldFBsdWdpbiIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwicmljaFRleHRhcmVhQ29udGVudENoYW5nZWQiLCJoYXNSaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImluaXRpYWxMaW5lQ291bnQiLCJzZXRMZXhlciIsImxleGVyIiwic2V0UGFyc2VyIiwicGFyc2VyIiwiZW5hYmxlRmlyYUNvZGUiLCJhZGRDbGFzcyIsImRpc2FibGVGaXJhQ29kZSIsInJlbW92ZUNsYXNzIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwidXBkYXRlUHJldHR5UHJpbnRlciIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJmaXJhQ29kZSIsIkRFRkFVTFRfRklSQV9DT0RFIiwiYXV0b0hlaWdodCIsIkRFRkFVTFRfQVVUT19IRUlHSFQiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJhY3RpdmF0ZVJpY2hUZXh0YXJlYSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwiZ2V0TGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJnZXRQYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImdldFBhZGRpbmdCb3R0b20iLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNjcm9sbGJhclRoaWNrbmVzcyIsImdldFNjcm9sbGJhclRoaWNrbmVzcyIsImhlaWdodCIsInNldEhlaWdodCIsIndpbGxVbm1vdW50IiwiZWRpdGFibGUiLCJERUZBVUxUX0VESVRBQkxFIiwiaGlkZGVuR3V0dGVyIiwiREVGQVVMVF9ISURERU5fR1VUVEVSIiwiZmFuY3lTY3JvbGxiYXJzIiwiREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIiwiaGlkZGVuU2Nyb2xsYmFycyIsIkRFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMiLCJQcmV0dHlQcmludGVyIiwib25DdXN0b21DaGFuZ2UiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJmcm9tQ29udGVudCIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzdHlsZU1peGlucyIsIndpdGhTdHlsZSIsImNvbG91ciIsImNhcmV0Q29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkxBOzs7ZUFBQTs7O29FQTNMc0I7b0JBRVM7NERBRVA7b0VBQ0U7eUJBRVk7c0JBQ007Z0NBQ0s7MEJBQ2E7dUJBQ0M7c0JBQ0s7d0JBQ2lGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySixJQUFBLEFBQU1BLHFCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLEtBQ1FDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEeEJGOztrQ0FFSUM7UUErQlJFLGtEQUFBQSx1QkFBc0IsU0FBQ0MsT0FBT0M7WUFDNUIsSUFBTUMsaUJBQWlCLE1BQUtDLGlCQUFpQjtZQUU3QyxJQUFJRCxnQkFBZ0I7Z0JBQ2xCLElBQU1FLFVBQVUsTUFBS0MsVUFBVSxJQUN6QkMsa0JBQWtCQyxrREFBZ0M7Z0JBRXhELE1BQUtDLE1BQU07Z0JB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