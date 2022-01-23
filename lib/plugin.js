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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkgeyByZXR1cm4gdGhpcy5sYW5ndWFnZTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0UHJvY2Vzc29yKHByb2Nlc3Nvcikge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnByb2Nlc3Nvci5wcm9jZXNzKHRoaXMudG9rZW5zLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyLCBQcm9jZXNzb3IgfSA9IENsYXNzLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9jZXNzb3IgPSBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBsdWdpbiA9IG5ldyBDbGFzcyhsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IsIHRva2Vucywgbm9kZSk7XG5cbiAgICByZXR1cm4gcGx1Z2luO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbjtcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJsZXhlciIsInBhcnNlciIsInByb2Nlc3NvciIsInRva2VucyIsIm5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFByb2Nlc3NvciIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGV4ZXIiLCJzZXRQYXJzZXIiLCJzZXRQcm9jZXNzb3IiLCJ1cGRhdGUiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiTGV4ZXIiLCJQYXJzZXIiLCJQcm9jZXNzb3IiLCJwbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVOQSxNQUFNLGlCQUFaLFFBQVE7YUFBRkEsTUFBTSxDQUNFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7O1FBQ2hELElBQUksQ0FBQ0osS0FBSyxHQUFHQSxLQUFLO1FBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO1FBQzFCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO1FBQ3BCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJOzs7O1lBR2xCQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQ0wsS0FBSztZQUNuQixDQUFDOzs7WUFFRE0sR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNMLE1BQU07WUFDcEIsQ0FBQzs7O1lBRURNLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDTCxTQUFTO1lBQ3ZCLENBQUM7OztZQUVETSxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0wsTUFBTTtZQUNwQixDQUFDOzs7WUFFRE0sR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNMLElBQUk7WUFDbEIsQ0FBQzs7O1lBRURNLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDQyxRQUFRO1lBQUUsQ0FBQzs7O1lBRXZDQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDWixLQUFLLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztZQUNwQixDQUFDOzs7WUFFRGEsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsQ0FBQ1osTUFBTSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO1lBQ3RCLENBQUM7OztZQUVEYSxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxDQUFDWixTQUFTLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7WUFDNUIsQ0FBQzs7O1lBRURhLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDaUIsUUFBUSxDQUFDRCxPQUFPO2dCQUV6QyxJQUFJLENBQUNaLElBQUksR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxJQUFJLENBQUNmLE1BQU07Z0JBRXpDLElBQUksQ0FBQ0QsU0FBUyxDQUFDaUIsT0FBTyxDQUFDLElBQUksQ0FBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUNDLElBQUk7WUFDL0MsQ0FBQzs7OztZQUVNZ0IsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLEdBQUssQ0FBR0MsS0FBSyxHQUF3QkQsS0FBSyxDQUFsQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQWdCRixLQUFLLENBQTNCRSxNQUFNLEVBQUVDLFNBQVMsR0FBS0gsS0FBSyxDQUFuQkcsU0FBUyxFQUMxQnhCLEtBQUssR0FBR3NCLEtBQUssQ0FBQ0YsV0FBVyxJQUN6Qm5CLE1BQU0sR0FBR3NCLE1BQU0sQ0FBQ0gsV0FBVyxJQUMzQmxCLFNBQVMsR0FBR3NCLFNBQVMsQ0FBQ0osV0FBVyxJQUNqQ2pCLE1BQU0sR0FBRyxJQUFJLEVBQ2JDLElBQUksR0FBRyxJQUFJLEVBQ1hxQixNQUFNLEdBQUcsR0FBRyxDQUFDSixLQUFLLENBQUNyQixLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0JBRS9ELE1BQU0sQ0FBQ3FCLE1BQU07WUFDZixDQUFDOzs7OztlQUdZMUIsTUFBTSJ9