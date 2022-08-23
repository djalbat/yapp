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
                var language = this.constructor.language;
                return language;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFByb2Nlc3Nvcihwcm9jZXNzb3IpIHtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIHVwZGF0ZShjb250ZW50KSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5wcm9jZXNzb3IucHJvY2Vzcyh0aGlzLnRva2VucywgdGhpcy5ub2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciwgUHJvY2Vzc29yIH0gPSBDbGFzcyxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvY2Vzc29yID0gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwbHVnaW4gPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW47XG4iXSwibmFtZXMiOlsiUGx1Z2luIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRQcm9jZXNzb3IiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImNvbnN0cnVjdG9yIiwic2V0TGV4ZXIiLCJzZXRQYXJzZXIiLCJzZXRQcm9jZXNzb3IiLCJ1cGRhdGUiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiTGV4ZXIiLCJQYXJzZXIiLCJQcm9jZXNzb3IiLCJwbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFzRWIsU0FBc0I7OztlQUF0QixRQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBFdEIsSUFBQSxBQUFNQSxNQUFNLGlC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