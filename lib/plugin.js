"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Plugin;
    }
});
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Plugin = /*#__PURE__*/ function() {
    function Plugin(lexer, parser, processor, tokens, node) {
        _class_call_check(this, Plugin);
        this.lexer = lexer;
        this.parser = parser;
        this.processor = processor;
        this.tokens = tokens;
        this.node = node;
    }
    _create_class(Plugin, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFByb2Nlc3Nvcihwcm9jZXNzb3IpIHtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIHVwZGF0ZShjb250ZW50KSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5wcm9jZXNzb3IucHJvY2Vzcyh0aGlzLnRva2VucywgdGhpcy5ub2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciwgUHJvY2Vzc29yIH0gPSBDbGFzcyxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvY2Vzc29yID0gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwbHVnaW4gPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBsdWdpbiIsImxleGVyIiwicGFyc2VyIiwicHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0UHJvY2Vzc29yIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJjb25zdHJ1Y3RvciIsInNldExleGVyIiwic2V0UGFyc2VyIiwic2V0UHJvY2Vzc29yIiwidXBkYXRlIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJwcm9jZXNzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIkxleGVyIiwiUGFyc2VyIiwiUHJvY2Vzc29yIiwicGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEL0JMO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQU5LTDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsU0FBUztZQUN2Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFdBQWEsSUFBSSxDQUFDQyxXQUFXLENBQTdCRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNiLEtBQUs7Z0JBQ1osSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVWIsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYWIsU0FBUztnQkFDcEIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO1lBQ25COzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBSSxDQUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDSCxLQUFLLENBQUNrQixRQUFRLENBQUNEO2dCQUVsQyxJQUFJLENBQUNiLElBQUksR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUNoQixNQUFNO2dCQUV6QyxJQUFJLENBQUNELFNBQVMsQ0FBQ2tCLE9BQU8sQ0FBQyxJQUFJLENBQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJO1lBQy9DOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUN0QixJQUFRQyxRQUE2QkQsTUFBN0JDLE9BQU9DLFNBQXNCRixNQUF0QkUsUUFBUUMsWUFBY0gsTUFBZEcsV0FDakJ6QixRQUFRdUIsTUFBTUYsV0FBVyxJQUN6QnBCLFNBQVN1QixPQUFPSCxXQUFXLElBQzNCbkIsWUFBWXVCLFVBQVVKLFdBQVcsSUFDakNsQixTQUFTLE1BQ1RDLE9BQU8sTUFDUHNCLFNBQVMsSUFBSUosTUFBTXRCLE9BQU9DLFFBQVFDLFdBQVdDLFFBQVFDO2dCQUUzRCxPQUFPc0I7WUFDVDs7O1dBakVtQjNCIn0=