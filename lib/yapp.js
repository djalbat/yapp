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
var _plugin = require("./utilities/plugin");
var _scrollbar = require("./utilities/scrollbar");
var _properties = require("./utilities/properties");
var _customEventTypes = require("./customEventTypes");
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
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var plugin = (0, _plugin.pluginFromProperties)(properties), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        },
        {
            key: "fromContentAndOptions",
            value: function fromContentAndOptions(Class, content, options) {
                if (options === undefined) {
                    options = content; ///
                    content = Class; ///
                    Class = Yapp;
                }
                var properties = (0, _properties.propertiesFromContentAndOptions)(content, options), plugin = (0, _plugin.pluginFromProperties)(properties), yapp = _easy.Element.fromClass(Class, properties, plugin);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgcGx1Z2luRnJvbVByb3BlcnRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRBbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb2xvdXIsIGNhcmV0Q29sb3VyLCBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9BVVRPX0hFSUdIVCwgREVGQVVMVF9ISURERU5fR1VUVEVSLCBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFBsdWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsTGluZUNvdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gbGluZUNvdW50OyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsTGluZUNvdW50O1xuICB9XG5cbiAgY3VzdG9tQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgZW5hYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIGRpc2FibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUsIGF1dG9IZWlnaHQgPSBERUZBVUxUX0FVVE9fSEVJR0hUIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGZpcmFDb2RlICYmIHRoaXMuZW5hYmxlRmlyYUNvZGUoKTtcblxuICAgIHRoaXMuYWN0aXZhdGVSaWNoVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvSGVpZ2h0KSB7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgICBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSB0aGlzLmdldEluaXRpYWxMaW5lQ291bnQoKSxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgICBoZWlnaHQgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZWRpdGFibGUgPSBERUZBVUxUX0VESVRBQkxFLFxuICAgICAgICAgICAgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLFxuICAgICAgICAgICAgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTLFxuICAgICAgICAgICAgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIG9uQ3VzdG9tQ2hhbmdlPXt0aGlzLmN1c3RvbUNoYW5nZUhhbmRsZXJ9IGVkaXRhYmxlPXtlZGl0YWJsZX0gaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCk7XG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiYXV0b0hlaWdodFwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJub1Njcm9sbGJhcnNcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHBsdWdpbiA9IHBsdWdpbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kT3B0aW9ucyhDbGFzcywgY29udGVudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFlhcHA7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudEFuZE9wdGlvbnMoY29udGVudCwgb3B0aW9ucyksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihZYXBwLnByb3RvdHlwZSwgc3R5bGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICB0ZXh0LXJlbmRlcmluZzogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbml0aWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7XG4gICAgXG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJZYXBwIiwic2VsZWN0b3IiLCJwbHVnaW4iLCJjdXN0b21DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiQ09OVEVOVF9DSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJ1cGRhdGUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJnZXRQbHVnaW4iLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkIiwiaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQiLCJnZXRJbml0aWFsTGluZUNvdW50IiwibGluZUNvdW50IiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJpbml0aWFsTGluZUNvdW50Iiwic2V0TGV4ZXIiLCJsZXhlciIsInNldFBhcnNlciIsInBhcnNlciIsImVuYWJsZUZpcmFDb2RlIiwiYWRkQ2xhc3MiLCJkaXNhYmxlRmlyYUNvZGUiLCJyZW1vdmVDbGFzcyIsInRva2VucyIsImdldFRva2VucyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJERUZBVUxUX0ZJUkFfQ09ERSIsImF1dG9IZWlnaHQiLCJERUZBVUxUX0FVVE9fSEVJR0hUIiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwiYWN0aXZhdGVSaWNoVGV4dGFyZWEiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50IiwibGluZUhlaWdodCIsImdldExpbmVIZWlnaHQiLCJwYWRkaW5nVG9wIiwiZ2V0UGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJnZXRQYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZ2V0Qm9yZGVyQm90dG9tV2lkdGgiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJ3aWxsVW5tb3VudCIsImVkaXRhYmxlIiwiREVGQVVMVF9FRElUQUJMRSIsImhpZGRlbkd1dHRlciIsIkRFRkFVTFRfSElEREVOX0dVVFRFUiIsImZhbmN5U2Nyb2xsYmFycyIsIkRFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyIsImhpZGRlblNjcm9sbGJhcnMiLCJERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIiwiUHJldHR5UHJpbnRlciIsIm9uQ3VzdG9tQ2hhbmdlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVZYXBwIiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNldExhbmd1YWdlIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwbHVnaW5Gcm9tUHJvcGVydGllcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNvbnRlbnRBbmRPcHRpb25zIiwib3B0aW9ucyIsInVuZGVmaW5lZCIsInByb3BlcnRpZXNGcm9tQ29udGVudEFuZE9wdGlvbnMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInN0eWxlTWl4aW5zIiwid2l0aFN0eWxlIiwiY29sb3VyIiwiY2FyZXRDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtTUE7OztlQUFBOzs7b0VBak1zQjtvQkFFUzs0REFFUDtvRUFDRTtzQkFFVzt5QkFDQzswQkFDVTtnQ0FDQzt1QkFDYztzQkFDSzt3QkFDaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJKLElBQUEsQUFBTUEscUJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsS0FDUUMsUUFBUSxFQUFFQyxNQUFNO2dDQUR4QkY7O2tDQUVJQztRQStCUkUsa0RBQUFBLHVCQUFzQixTQUFDQyxPQUFPQztZQUM1QixJQUFNQyxpQkFBaUIsTUFBS0MsaUJBQWlCO1lBRTdDLElBQUlELGdCQUFnQjtnQkFDbEIsSUFBTUUsVUFBVSxNQUFLQyxVQUFVLElBQ3pCQyxrQkFBa0JDLGtEQUFnQztnQkFFeEQsTUFBS0MsTUFBTTtnQkFFWCxNQUFLQyxrQkFBa0IsQ0FBQ0gsaUJBQWlCRjtZ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