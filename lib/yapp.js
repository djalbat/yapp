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
        _define_property(_assert_this_initialized(_this), "changeCustomHandler", function(event, element) {
            var contentChanged = _this.hasContentChanged();
            if (contentChanged) {
                var content = _this.getContent(), customEventType = _customEventTypes.CONTENT_CHANGE_CUSTOM_EVENT_TYPE;
                _this.update();
                _this.callCustomHandlers(customEventType, event, element, content);
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
                    onCustomChange: this.changeCustomHandler,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgcGx1Z2luRnJvbVByb3BlcnRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyXCI7XG5pbXBvcnQgeyBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9BVVRPX0hFSUdIVCwgREVGQVVMVF9ISURERU5fR1VUVEVSLCBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFBsdWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsTGluZUNvdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gbGluZUNvdW50OyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsTGluZUNvdW50O1xuICB9XG5cbiAgY2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5wbHVnaW4uc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLnBsdWdpbi5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIGVuYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBkaXNhYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKTtcblxuICAgIHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBhdXRvSGVpZ2h0ID0gREVGQVVMVF9BVVRPX0hFSUdIVCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBmaXJhQ29kZSAmJiB0aGlzLmVuYWJsZUZpcmFDb2RlKCk7XG5cbiAgICB0aGlzLmFjdGl2YXRlUmljaFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodCgpLFxuICAgICAgICAgICAgcGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGFkZGluZ1RvcCgpLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gdGhpcy5nZXRJbml0aWFsTGluZUNvdW50KCksXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IGdldFNjcm9sbGJhclRoaWNrbmVzcygpLFxuICAgICAgICAgICAgaGVpZ2h0ID0gYm9yZGVyVG9wV2lkdGggKyBwYWRkaW5nVG9wICsgaW5pdGlhbExpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBwYWRkaW5nQm90dG9tICsgYm9yZGVyQm90dG9tV2lkdGggKyBzY3JvbGxiYXJUaGlja25lc3M7XG5cbiAgICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSxcbiAgICAgICAgICAgIGhpZGRlbkd1dHRlciA9IERFRkFVTFRfSElEREVOX0dVVFRFUixcbiAgICAgICAgICAgIGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyxcbiAgICAgICAgICAgIGhpZGRlblNjcm9sbGJhcnMgPSBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8UHJldHR5UHJpbnRlciBvbkN1c3RvbUNoYW5nZT17dGhpcy5jaGFuZ2VDdXN0b21IYW5kbGVyfSBlZGl0YWJsZT17ZWRpdGFibGV9IGhpZGRlbkd1dHRlcj17aGlkZGVuR3V0dGVyfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gaGlkZGVuU2Nyb2xsYmFycz17aGlkZGVuU2Nyb2xsYmFyc30gLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpO1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImF1dG9IZWlnaHRcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwibm9TY3JvbGxiYXJzXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHBsdWdpbiA9IHBsdWdpbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKENsYXNzLCBjb250ZW50LCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlndXJhdGlvbiA9IGNvbnRlbnQ7ICAvLy9cblxuICAgICAgY29udGVudCA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gWWFwcDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFlhcHAucHJvdG90eXBlLCBzdHlsZU1peGlucyk7XG4iXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwiY2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkNPTlRFTlRfQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwidXBkYXRlIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiZ2V0UGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJyaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCIsImhhc1JpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkIiwiZ2V0SW5pdGlhbExpbmVDb3VudCIsImxpbmVDb3VudCIsImxpbmVDb3VudEZyb21Db250ZW50IiwiaW5pdGlhbExpbmVDb3VudCIsInNldExleGVyIiwibGV4ZXIiLCJzZXRQYXJzZXIiLCJwYXJzZXIiLCJlbmFibGVGaXJhQ29kZSIsImFkZENsYXNzIiwiZGlzYWJsZUZpcmFDb2RlIiwicmVtb3ZlQ2xhc3MiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImZpcmFDb2RlIiwiREVGQVVMVF9GSVJBX0NPREUiLCJhdXRvSGVpZ2h0IiwiREVGQVVMVF9BVVRPX0hFSUdIVCIsImNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyIsImFjdGl2YXRlUmljaFRleHRhcmVhIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsImxpbmVIZWlnaHQiLCJnZXRMaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsImdldFBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZ2V0UGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2lsbFVubW91bnQiLCJlZGl0YWJsZSIsIkRFRkFVTFRfRURJVEFCTEUiLCJoaWRkZW5HdXR0ZXIiLCJERUZBVUxUX0hJRERFTl9HVVRURVIiLCJmYW5jeVNjcm9sbGJhcnMiLCJERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMiLCJoaWRkZW5TY3JvbGxiYXJzIiwiREVGQVVMVF9ISURERU5fU0NST0xMQkFSUyIsIlByZXR0eVByaW50ZXIiLCJvbkN1c3RvbUNoYW5nZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidXBkYXRlWWFwcCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImZyb21DbGFzcyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsInBsdWdpbkZyb21Qcm9wZXJ0aWVzIiwieWFwcCIsImZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJ1bmRlZmluZWQiLCJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzdHlsZU1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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