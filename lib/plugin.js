"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
var Plugin = /*#__PURE__*/ function() {
    function Plugin(lexer, parser, processor, tokens, node) {
        _classCallCheck(this, Plugin);
        this.lexer = lexer;
        this.parser = parser;
        this.processor = processor;
        this.tokens = tokens;
        this.node = node;
    }
    _createClass(Plugin, [
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
            }
        },
        {
            key: "getProcessor",
            value: function getProcessor() {
                return this.processor;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getLanguage",
            value: function getLanguage() {
                return this.language;
            }
        },
        {
            key: "setLexer",
            value: function setLexer(lexer) {
                this.lexer = lexer;
            }
        },
        {
            key: "setParser",
            value: function setParser(parser) {
                this.parser = parser;
            }
        },
        {
            key: "setProcessor",
            value: function setProcessor(processor) {
                this.processor = processor;
            }
        },
        {
            key: "update",
            value: function update(content) {
                this.tokens = this.lexer.tokenise(content);
                this.node = this.parser.parse(this.tokens);
                this.processor.process(this.tokens, this.node);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var Lexer = Class.Lexer, Parser = Class.Parser, Processor = Class.Processor, lexer = Lexer.fromNothing(), parser = Parser.fromNothing(), processor = Processor.fromNothing(), tokens = null, node = null, plugin = new Class(lexer, parser, processor, tokens, node);
                return plugin;
            }
        }
    ]);
    return Plugin;
}();
var _default = Plugin;
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkgeyByZXR1cm4gdGhpcy5sYW5ndWFnZTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0UHJvY2Vzc29yKHByb2Nlc3Nvcikge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnByb2Nlc3Nvci5wcm9jZXNzKHRoaXMudG9rZW5zLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyLCBQcm9jZXNzb3IgfSA9IENsYXNzLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9jZXNzb3IgPSBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBsdWdpbiA9IG5ldyBDbGFzcyhsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IsIHRva2Vucywgbm9kZSk7XG5cbiAgICByZXR1cm4gcGx1Z2luO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbjtcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJsZXhlciIsInBhcnNlciIsInByb2Nlc3NvciIsInRva2VucyIsIm5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFByb2Nlc3NvciIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGV4ZXIiLCJzZXRQYXJzZXIiLCJzZXRQcm9jZXNzb3IiLCJ1cGRhdGUiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiTGV4ZXIiLCJQYXJzZXIiLCJQcm9jZXNzb3IiLCJwbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTs7Ozs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7QUFFQSxHQUFLLENBQUNBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ0VDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxT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