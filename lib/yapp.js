"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Yapp;
    }
});
var _easy = require("easy");
var _style = /*#__PURE__*/ _interop_require_default(require("./mixins/style"));
var _prettyPrinter = /*#__PURE__*/ _interop_require_default(require("./prettyPrinter"));
var _plugin = require("./utilities/plugin");
var _scrollbar = require("./utilities/scrollbar");
var _customEventTypes = require("./customEventTypes");
var _configuration = require("./utilities/configuration");
var _content = require("./utilities/content");
var _defaults = require("./defaults");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Element;
                var plugin = (0, _plugin.pluginFromProperties)(properties), yapp = (_Element = _easy.Element).fromClass.apply(_Element, [
                    Class,
                    properties,
                    plugin
                ].concat(_to_consumable_array(remainingArguments)));
                return yapp;
            }
        },
        {
            key: "fromContentAndConfiguration",
            value: function fromContentAndConfiguration(Class, content, configuration) {
                if (configuration === undefined) {
                    configuration = content; ///
                    content = Class; ///
                    Class = Yapp;
                }
                var properties = (0, _configuration.propertiesFromContentAndConfiguration)(content, configuration), plugin = (0, _plugin.pluginFromProperties)(properties), yapp = _easy.Element.fromClass(Class, properties, plugin);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgcGx1Z2luRnJvbVByb3BlcnRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyXCI7XG5pbXBvcnQgeyBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9BVVRPX0hFSUdIVCwgREVGQVVMVF9ISURERU5fR1VUVEVSLCBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFBsdWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsTGluZUNvdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gbGluZUNvdW50OyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsTGluZUNvdW50O1xuICB9XG5cbiAgY3VzdG9tQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgZW5hYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIGRpc2FibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUsIGF1dG9IZWlnaHQgPSBERUZBVUxUX0FVVE9fSEVJR0hUIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGZpcmFDb2RlICYmIHRoaXMuZW5hYmxlRmlyYUNvZGUoKTtcblxuICAgIHRoaXMuYWN0aXZhdGVSaWNoVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvSGVpZ2h0KSB7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgICBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSB0aGlzLmdldEluaXRpYWxMaW5lQ291bnQoKSxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgICBoZWlnaHQgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZWRpdGFibGUgPSBERUZBVUxUX0VESVRBQkxFLFxuICAgICAgICAgICAgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLFxuICAgICAgICAgICAgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTLFxuICAgICAgICAgICAgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIG9uQ3VzdG9tQ2hhbmdlPXt0aGlzLmN1c3RvbUNoYW5nZUhhbmRsZXJ9IGVkaXRhYmxlPXtlZGl0YWJsZX0gaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCk7XG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiYXV0b0hlaWdodFwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJub1Njcm9sbGJhcnNcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgcGx1Z2luID0gcGx1Z2luRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oQ2xhc3MsIGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoY29uZmlndXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWd1cmF0aW9uID0gY29udGVudDsgIC8vL1xuXG4gICAgICBjb250ZW50ID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBZYXBwO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oWWFwcC5wcm90b3R5cGUsIHN0eWxlTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJZYXBwIiwic2VsZWN0b3IiLCJwbHVnaW4iLCJjdXN0b21DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiQ09OVEVOVF9DSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJ1cGRhdGUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJnZXRQbHVnaW4iLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkIiwiaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQiLCJnZXRJbml0aWFsTGluZUNvdW50IiwibGluZUNvdW50IiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJpbml0aWFsTGluZUNvdW50Iiwic2V0TGV4ZXIiLCJsZXhlciIsInNldFBhcnNlciIsInBhcnNlciIsImVuYWJsZUZpcmFDb2RlIiwiYWRkQ2xhc3MiLCJkaXNhYmxlRmlyYUNvZGUiLCJyZW1vdmVDbGFzcyIsInRva2VucyIsImdldFRva2VucyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJERUZBVUxUX0ZJUkFfQ09ERSIsImF1dG9IZWlnaHQiLCJERUZBVUxUX0FVVE9fSEVJR0hUIiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwiYWN0aXZhdGVSaWNoVGV4dGFyZWEiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50IiwibGluZUhlaWdodCIsImdldExpbmVIZWlnaHQiLCJwYWRkaW5nVG9wIiwiZ2V0UGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJnZXRQYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZ2V0Qm9yZGVyQm90dG9tV2lkdGgiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJ3aWxsVW5tb3VudCIsImVkaXRhYmxlIiwiREVGQVVMVF9FRElUQUJMRSIsImhpZGRlbkd1dHRlciIsIkRFRkFVTFRfSElEREVOX0dVVFRFUiIsImZhbmN5U2Nyb2xsYmFycyIsIkRFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyIsImhpZGRlblNjcm9sbGJhcnMiLCJERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIiwiUHJldHR5UHJpbnRlciIsIm9uQ3VzdG9tQ2hhbmdlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVZYXBwIiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNldExhbmd1YWdlIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwicGx1Z2luRnJvbVByb3BlcnRpZXMiLCJ5YXBwIiwiZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsInVuZGVmaW5lZCIsInByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInN0eWxlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztvQkFaVTs0REFFUDtvRUFDRTtzQkFFVzt5QkFDQztnQ0FDVzs2QkFDSzt1QkFDUzt3QkFDc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEksSUFBQSxBQUFNQSxxQkFBRCxB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