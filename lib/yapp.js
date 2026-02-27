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
const _easy = require("easy");
const _style = /*#__PURE__*/ _interop_require_default(require("./mixins/style"));
const _prettyPrinter = /*#__PURE__*/ _interop_require_default(require("./prettyPrinter"));
const _plugin = require("./utilities/plugin");
const _scrollbar = require("./utilities/scrollbar");
const _customEventTypes = require("./customEventTypes");
const _configuration = require("./utilities/configuration");
const _content = require("./utilities/content");
const _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Yapp extends _easy.Element {
    constructor(selector, plugin){
        super(selector);
        this.plugin = plugin;
    }
    getPlugin() {
        return this.plugin;
    }
    getContent() {
        const richTextareaContent = this.getRichTextareaContent(), content = richTextareaContent; ///
        return content;
    }
    hasContentChanged() {
        const richTextareaContentChanged = this.hasRichTextareaContentChanged(), contentChanged = richTextareaContentChanged; ///
        return contentChanged;
    }
    getInitialLineCount() {
        const content = this.getContent(), lineCount = (0, _content.lineCountFromContent)(content), initialLineCount = lineCount; ///
        return initialLineCount;
    }
    changeCustomHandler = (event, element)=>{
        const contentChanged = this.hasContentChanged();
        if (contentChanged) {
            const content = this.getContent(), customEventType = _customEventTypes.CONTENT_CHANGE_CUSTOM_EVENT_TYPE;
            this.update();
            this.callCustomHandlers(customEventType, event, element, content);
        }
    };
    setLexer(lexer) {
        this.plugin.setLexer(lexer);
    }
    setParser(parser) {
        this.plugin.setParser(parser);
    }
    enableFiraCode() {
        this.addClass("fira-code");
    }
    disableFiraCode() {
        this.removeClass("fira-code");
    }
    update() {
        const content = this.getContent();
        this.plugin.update(content);
        const tokens = this.plugin.getTokens();
        this.updatePrettyPrinter(tokens);
    }
    didMount() {
        const { childElements, firaCode = _defaults.DEFAULT_FIRA_CODE, autoHeight = _defaults.DEFAULT_AUTO_HEIGHT } = this.properties, content = (0, _content.contentFromChildElements)(childElements);
        if (firaCode) {
            this.enableFiraCode();
        }
        this.activateRichTextarea();
        this.setRichTextareaContent(content);
        if (autoHeight) {
            const lineHeight = this.getLineHeight(), paddingTop = this.getPaddingTop(), paddingBottom = this.getPaddingBottom(), borderTopWidth = this.getBorderTopWidth(), initialLineCount = this.getInitialLineCount(), borderBottomWidth = this.getBorderBottomWidth(), scrollbarThickness = (0, _scrollbar.getScrollbarThickness)(), height = borderTopWidth + paddingTop + initialLineCount * lineHeight + paddingBottom + borderBottomWidth + scrollbarThickness;
            this.setHeight(height);
        }
        this.update();
    }
    willUnmount() {
    ///
    }
    childElements() {
        const { editable = _defaults.DEFAULT_EDITABLE, hiddenGutter = _defaults.DEFAULT_HIDDEN_GUTTER, fancyScrollbars = _defaults.DEFAULT_FANCY_SCROLLBARS, hiddenScrollbars = _defaults.DEFAULT_HIDDEN_SCROLLBARS } = this.properties;
        return /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
            onCustomChange: this.changeCustomHandler,
            editable: editable,
            hiddenGutter: hiddenGutter,
            fancyScrollbars: fancyScrollbars,
            hiddenScrollbars: hiddenScrollbars
        });
    }
    parentContext() {
        const getPlugin = this.getPlugin.bind(this), getContent = this.getContent.bind(this), updateYapp = this.update.bind(this), setYappLexer = this.setLexer.bind(this), setYappParser = this.setParser.bind(this); ///
        return {
            getPlugin,
            getContent,
            updateYapp,
            setYappLexer,
            setYappParser
        };
    }
    initialise() {
        this.assignContext();
        const language = this.plugin.getLanguage();
        this.updateLanguage(language);
    }
    static tagName = "div";
    static defaultProperties = {
        className: "yapp"
    };
    static ignoredProperties = [
        "Plugin",
        "language",
        "firaCode",
        "editable",
        "autoHeight",
        "hiddenGutter",
        "noScrollbars",
        "fancyScrollbars"
    ];
    static fromClass(Class, properties, ...remainingArguments) {
        const plugin = (0, _plugin.pluginFromProperties)(properties), yapp = _easy.Element.fromClass(Class, properties, plugin, ...remainingArguments);
        return yapp;
    }
    static fromContentAndConfiguration(Class, content, configuration) {
        if (configuration === undefined) {
            configuration = content; ///
            content = Class; ///
            Class = Yapp;
        }
        const properties = (0, _configuration.propertiesFromContentAndConfiguration)(content, configuration), plugin = (0, _plugin.pluginFromProperties)(properties), yapp = _easy.Element.fromClass(Class, properties, plugin);
        return yapp;
    }
}
Object.assign(Yapp.prototype, _style.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzdHlsZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3R5bGVcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgcGx1Z2luRnJvbVByb3BlcnRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyXCI7XG5pbXBvcnQgeyBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9BVVRPX0hFSUdIVCwgREVGQVVMVF9ISURERU5fR1VUVEVSLCBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFBsdWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XG4gIH1cblxuICBnZXRJbml0aWFsTGluZUNvdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gbGluZUNvdW50OyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsTGluZUNvdW50O1xuICB9XG5cbiAgY2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBDT05URU5UX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5wbHVnaW4uc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLnBsdWdpbi5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIGVuYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBkaXNhYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKTtcblxuICAgIHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBhdXRvSGVpZ2h0ID0gREVGQVVMVF9BVVRPX0hFSUdIVCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuZW5hYmxlRmlyYUNvZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlUmljaFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodCgpLFxuICAgICAgICAgICAgcGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGFkZGluZ1RvcCgpLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gdGhpcy5nZXRJbml0aWFsTGluZUNvdW50KCksXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IGdldFNjcm9sbGJhclRoaWNrbmVzcygpLFxuICAgICAgICAgICAgaGVpZ2h0ID0gYm9yZGVyVG9wV2lkdGggKyBwYWRkaW5nVG9wICsgaW5pdGlhbExpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBwYWRkaW5nQm90dG9tICsgYm9yZGVyQm90dG9tV2lkdGggKyBzY3JvbGxiYXJUaGlja25lc3M7XG5cbiAgICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSxcbiAgICAgICAgICAgIGhpZGRlbkd1dHRlciA9IERFRkFVTFRfSElEREVOX0dVVFRFUixcbiAgICAgICAgICAgIGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyxcbiAgICAgICAgICAgIGhpZGRlblNjcm9sbGJhcnMgPSBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8UHJldHR5UHJpbnRlciBvbkN1c3RvbUNoYW5nZT17dGhpcy5jaGFuZ2VDdXN0b21IYW5kbGVyfSBlZGl0YWJsZT17ZWRpdGFibGV9IGhpZGRlbkd1dHRlcj17aGlkZGVuR3V0dGVyfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gaGlkZGVuU2Nyb2xsYmFycz17aGlkZGVuU2Nyb2xsYmFyc30gLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpO1xuXG4gICAgdGhpcy51cGRhdGVMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImF1dG9IZWlnaHRcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwibm9TY3JvbGxiYXJzXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHBsdWdpbiA9IHBsdWdpbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKENsYXNzLCBjb250ZW50LCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlndXJhdGlvbiA9IGNvbnRlbnQ7ICAvLy9cblxuICAgICAgY29udGVudCA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gWWFwcDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFlhcHAucHJvdG90eXBlLCBzdHlsZU1peGlucyk7XG4iXSwibmFtZXMiOlsiWWFwcCIsIkVsZW1lbnQiLCJzZWxlY3RvciIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldENvbnRlbnQiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInJpY2hUZXh0YXJlYUNvbnRlbnRDaGFuZ2VkIiwiaGFzUmljaFRleHRhcmVhQ29udGVudENoYW5nZWQiLCJjb250ZW50Q2hhbmdlZCIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImluaXRpYWxMaW5lQ291bnQiLCJjaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiQ09OVEVOVF9DSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJ1cGRhdGUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJzZXRMZXhlciIsImxleGVyIiwic2V0UGFyc2VyIiwicGFyc2VyIiwiZW5hYmxlRmlyYUNvZGUiLCJhZGRDbGFzcyIsImRpc2FibGVGaXJhQ29kZSIsInJlbW92ZUNsYXNzIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwidXBkYXRlUHJldHR5UHJpbnRlciIsImRpZE1vdW50IiwiY2hpbGRFbGVtZW50cyIsImZpcmFDb2RlIiwiREVGQVVMVF9GSVJBX0NPREUiLCJhdXRvSGVpZ2h0IiwiREVGQVVMVF9BVVRPX0hFSUdIVCIsInByb3BlcnRpZXMiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJhY3RpdmF0ZVJpY2hUZXh0YXJlYSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwiZ2V0TGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJnZXRQYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImdldFBhZGRpbmdCb3R0b20iLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNjcm9sbGJhclRoaWNrbmVzcyIsImdldFNjcm9sbGJhclRoaWNrbmVzcyIsImhlaWdodCIsInNldEhlaWdodCIsIndpbGxVbm1vdW50IiwiZWRpdGFibGUiLCJERUZBVUxUX0VESVRBQkxFIiwiaGlkZGVuR3V0dGVyIiwiREVGQVVMVF9ISURERU5fR1VUVEVSIiwiZmFuY3lTY3JvbGxiYXJzIiwiREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIiwiaGlkZGVuU2Nyb2xsYmFycyIsIkRFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMiLCJQcmV0dHlQcmludGVyIiwib25DdXN0b21DaGFuZ2UiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwidXBkYXRlTGFuZ3VhZ2UiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImZyb21DbGFzcyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicGx1Z2luRnJvbVByb3BlcnRpZXMiLCJ5YXBwIiwiZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsInVuZGVmaW5lZCIsInByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzdHlsZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFxQkE7OztzQkFaVTs4REFFUDtzRUFDRTt3QkFFVzsyQkFDQztrQ0FDVzsrQkFDSzt5QkFDUzswQkFDc0Y7Ozs7OztBQUV0SSxNQUFNQSxhQUFhQyxhQUFPO0lBQ3ZDLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxDQUFFO1FBQzVCLEtBQUssQ0FBQ0Q7UUFFTixJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRCxNQUFNO0lBQ3BC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