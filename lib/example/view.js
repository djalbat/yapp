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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _occamparsers = require("occam-parsers");
const _easylayout = require("easy-layout");
const _yapp = /*#__PURE__*/ _interop_require_default(require("./yapp"));
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
const _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
const _top = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/top"));
const _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
const _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
const _middle = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/middle"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { rulesFromBNF } = _occamparsers.parserUtilities;
class View extends _easy.Element {
    contentChangeCustomHandler = (event, element)=>{
        this.update();
    };
    lexerFromEntries(entries) {
        const { Plugin } = this.constructor, { Lexer } = Plugin, lexer = Lexer.fromEntries(entries);
        return lexer;
    }
    parserFromBNF(bnf) {
        const { Plugin } = this.constructor, { Parser } = Plugin, rules = rulesFromBNF(bnf), parser = Parser.fromRules(rules);
        return parser;
    }
    keyUpHandler = (event, element)=>{
        try {
            const lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, bnf = this.getBNF(), lexer = this.lexerFromEntries(entries), parser = this.parserFromBNF(bnf), yappLexer = lexer, yappParser = parser; ///
            this.setYappLexer(yappLexer);
            this.setYappParser(yappParser);
            this.updateYapp();
            this.update();
        } catch (error) {
            console.log(error);
        }
    };
    update() {
        try {
            let parseTree = null;
            const plugin = this.getPlugin(), tokens = plugin.getTokens(), node = plugin.getNode();
            if (node !== null) {
                parseTree = node.asParseTree(tokens);
            }
            this.setTokens(tokens);
            this.setParseTree(parseTree);
        } catch (error) {
            console.log(error);
            this.clearTokens();
            this.clearParseTree();
        }
    }
    didMount() {
        this.update();
    }
    willUnmount() {
    ///
    }
    childElements() {
        const { Plugin, firaCode, initialContent } = this.constructor;
        return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_top.default, null, /*#__PURE__*/ React.createElement(_yapp.default, {
            Plugin: Plugin,
            firaCode: firaCode,
            onCustomContentChange: this.contentChangeCustomHandler
        }, initialContent)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_middle.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)))))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
            onKeyUp: this.keyUpHandler
        }))), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
            onKeyUp: this.keyUpHandler
        }))))));
    }
    initialise() {
        this.assignContext();
        const { Plugin } = this.constructor, { Lexer, Parser } = Plugin, { bnf } = Parser, { entries } = Lexer, lexicalEntries = entries; ///
        this.setBNF(bnf);
        this.setLexicalEntries(lexicalEntries);
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  width: 100%;
  height: 100vh;
  display: flex;
  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2LCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1pZGRsZVNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29udGVudENoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgbGV4ZXJGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgeyBQbHVnaW4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgeyBMZXhlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBwYXJzZXJGcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIGxleGVyID0gdGhpcy5sZXhlckZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgcGFyc2VyID0gdGhpcy5wYXJzZXJGcm9tQk5GKGJuZiksXG4gICAgICAgICAgICB5YXBwTGV4ZXIgPSBsZXhlciwgIC8vL1xuICAgICAgICAgICAgeWFwcFBhcnNlciA9IHBhcnNlcjsgIC8vL1xuXG4gICAgICB0aGlzLnNldFlhcHBMZXhlcih5YXBwTGV4ZXIpO1xuXG4gICAgICB0aGlzLnNldFlhcHBQYXJzZXIoeWFwcFBhcnNlcik7XG5cbiAgICAgIHRoaXMudXBkYXRlWWFwcCgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4oKSxcbiAgICAgICAgICAgIHRva2VucyA9IHBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIG5vZGUgPSBwbHVnaW4uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFBsdWdpbiwgZmlyYUNvZGUsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8VG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxZYXBwIFBsdWdpbj17UGx1Z2lufSBmaXJhQ29kZT17ZmlyYUNvZGV9IG9uQ3VzdG9tQ29udGVudENoYW5nZT17dGhpcy5jb250ZW50Q2hhbmdlQ3VzdG9tSGFuZGxlcn0gPlxuICAgICAgICAgICAgICAgIHtpbml0aWFsQ29udGVudH1cbiAgICAgICAgICAgICAgPC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYS8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9NaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgTGV4ZXIsIFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsIlZpZXciLCJFbGVtZW50IiwiY29udGVudENoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJsZXhlckZyb21FbnRyaWVzIiwiZW50cmllcyIsIlBsdWdpbiIsIkxleGVyIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlckZyb21CTkYiLCJibmYiLCJQYXJzZXIiLCJydWxlcyIsInBhcnNlciIsImZyb21SdWxlcyIsImtleVVwSGFuZGxlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJnZXRCTkYiLCJ5YXBwTGV4ZXIiLCJ5YXBwUGFyc2VyIiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsInVwZGF0ZVlhcHAiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZVRyZWUiLCJwbHVnaW4iLCJnZXRQbHVnaW4iLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJub2RlIiwiZ2V0Tm9kZSIsImFzUGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwiY2xlYXJUb2tlbnMiLCJjbGVhclBhcnNlVHJlZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiVG9wU2l6ZWFibGVEaXYiLCJZYXBwIiwib25DdXN0b21Db250ZW50Q2hhbmdlIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiTWlkZGxlU2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiVG9rZW5zVGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0TGV4aWNhbEVudHJpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9MQTs7O2VBQUE7OztzRUFsTHNCO3NCQUVFOzhCQUNROzRCQUNtRTs2REFFbEY7bUVBQ007NERBQ0M7K0RBQ0c7NERBQ0E7NkRBQ0M7OERBQ0M7K0RBQ0M7a0VBQ0E7dUVBQ0s7Ozs7OztBQUVuQyxNQUFNLEVBQUVBLFlBQVksRUFBRSxHQUFHQyw2QkFBZTtBQUV4QyxNQUFNQyxhQUFhQyxhQUFPO0lBQ3hCQyw2QkFBNkIsQ0FBQ0MsT0FBT0M7UUFDbkMsSUFBSSxDQUFDQyxNQUFNO0lBQ2IsRUFBQztJQUVEQyxpQkFBaUJDLE9BQU8sRUFBRTtRQUN4QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzdCLEVBQUVDLEtBQUssRUFBRSxHQUFHRCxRQUNaRSxRQUFRRCxNQUFNRSxXQUFXLENBQUNKO1FBRWhDLE9BQU9HO0lBQ1Q7SUFF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