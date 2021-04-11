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
var Plugin1 = function() {
    function Plugin1(lexer, parser, processor, tokens, node) {
        _classCallCheck(this, Plugin1);
        this.lexer = lexer;
        this.parser = parser;
        this.processor = processor;
        this.tokens = tokens;
        this.node = node;
    }
    _createClass(Plugin1, [
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
    return Plugin1;
}();
var _default = Plugin1;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkgeyByZXR1cm4gdGhpcy5sYW5ndWFnZTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0UHJvY2Vzc29yKHByb2Nlc3Nvcikge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnByb2Nlc3Nvci5wcm9jZXNzKHRoaXMudG9rZW5zLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyLCBQcm9jZXNzb3IgfSA9IENsYXNzLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9jZXNzb3IgPSBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBsdWdpbiA9IG5ldyBDbGFzcyhsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IsIHRva2Vucywgbm9kZSk7XG5cbiAgICByZXR1cm4gcGx1Z2luO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTixPQUFNO2FBQU4sT0FBTSxDQUNFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJOzhCQUQ5QyxPQUFNO2FBRUgsS0FBSyxHQUFHLEtBQUs7YUFDYixNQUFNLEdBQUcsTUFBTTthQUNmLFNBQVMsR0FBRyxTQUFTO2FBQ3JCLE1BQU0sR0FBRyxNQUFNO2FBQ2YsSUFBSSxHQUFHLElBQUk7O2lCQU5kLE9BQU07O1lBU1YsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTs0QkFDTSxLQUFLOzs7O1lBR25CLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVM7NEJBQ0ssTUFBTTs7OztZQUdwQixHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZOzRCQUNFLFNBQVM7Ozs7WUFHdkIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxNQUFNOzs7O1lBR3BCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87NEJBQ08sSUFBSTs7OztZQUdsQixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXOzRCQUFpQixRQUFROzs7O1lBRXBDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxLQUFLO3FCQUNQLEtBQUssR0FBRyxLQUFLOzs7O1lBR3BCLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxNQUFNO3FCQUNULE1BQU0sR0FBRyxNQUFNOzs7O1lBR3RCLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxTQUFTO3FCQUNmLFNBQVMsR0FBRyxTQUFTOzs7O1lBRzVCLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxPQUFPO3FCQUNQLE1BQU0sUUFBUSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU87cUJBRXBDLElBQUksUUFBUSxNQUFNLENBQUMsS0FBSyxNQUFNLE1BQU07cUJBRXBDLFNBQVMsQ0FBQyxPQUFPLE1BQU0sTUFBTSxPQUFPLElBQUk7Ozs7O1lBR3hDLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxLQUFLO29CQUNkLEtBQUssR0FBd0IsS0FBSyxDQUFsQyxLQUFLLEVBQUUsTUFBTSxHQUFnQixLQUFLLENBQTNCLE1BQU0sRUFBRSxTQUFTLEdBQUssS0FBSyxDQUFuQixTQUFTLEVBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxJQUN6QixNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFDM0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQ2pDLE1BQU0sR0FBRyxJQUFJLEVBQ2IsSUFBSSxHQUFHLElBQUksRUFDWCxNQUFNLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJO3VCQUV4RCxNQUFNOzs7O1dBNURYLE9BQU07O2VBZ0VHLE9BQU0ifQ==