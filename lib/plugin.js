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
class Plugin {
    constructor(lexer, parser, processor, tokens, node){
        this.lexer = lexer;
        this.parser = parser;
        this.processor = processor;
        this.tokens = tokens;
        this.node = node;
    }
    getLexer() {
        return this.lexer;
    }
    getParser() {
        return this.parser;
    }
    getProcessor() {
        return this.processor;
    }
    getTokens() {
        return this.tokens;
    }
    getNode() {
        return this.node;
    }
    getLanguage() {
        const { language } = this.constructor;
        return language;
    }
    setLexer(lexer) {
        this.lexer = lexer;
    }
    setParser(parser) {
        this.parser = parser;
    }
    setProcessor(processor) {
        this.processor = processor;
    }
    update(content) {
        this.tokens = this.lexer.tokenise(content);
        this.node = this.parser.parse(this.tokens);
        this.processor.process(this.tokens, this.node);
    }
    static fromNothing(Class) {
        const { Lexer, Parser, Processor } = Class, lexer = Lexer.fromNothing(), parser = Parser.fromNothing(), processor = Processor.fromNothing(), tokens = null, node = null, plugin = new Class(lexer, parser, processor, tokens, node);
        return plugin;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFByb2Nlc3Nvcihwcm9jZXNzb3IpIHtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIHVwZGF0ZShjb250ZW50KSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5wcm9jZXNzb3IucHJvY2Vzcyh0aGlzLnRva2VucywgdGhpcy5ub2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciwgUHJvY2Vzc29yIH0gPSBDbGFzcyxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvY2Vzc29yID0gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwbHVnaW4gPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBsdWdpbiIsImxleGVyIiwicGFyc2VyIiwicHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0UHJvY2Vzc29yIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMZXhlciIsInNldFBhcnNlciIsInNldFByb2Nlc3NvciIsInVwZGF0ZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwicHJvY2VzcyIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJMZXhlciIsIlBhcnNlciIsIlByb2Nlc3NvciIsInBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUFxQkE7OztBQUFOLE1BQU1BO0lBQ25CLFlBQVlDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxDQUFFO1FBQ2xELElBQUksQ0FBQ0osS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNMLEtBQUs7SUFDbkI7SUFFQU0sWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDTCxNQUFNO0lBQ3BCO0lBRUFNLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0wsU0FBUztJQUN2QjtJQUVBTSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNMLE1BQU07SUFDcEI7SUFFQU0sVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDTCxJQUFJO0lBQ2xCO0lBRUFNLGNBQWM7UUFDWixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBRXJDLE9BQU9BO0lBQ1Q7SUFFQUMsU0FBU1osS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO0lBQ2Y7SUFFQWEsVUFBVVosTUFBTSxFQUFFO1FBQ2hCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtJQUNoQjtJQUVBYSxhQUFhWixTQUFTLEVBQUU7UUFDdEIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO0lBQ25CO0lBRUFhLE9BQU9DLE9BQU8sRUFBRTtRQUNkLElBQUksQ0FBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDaUIsUUFBUSxDQUFDRDtRQUVsQyxJQUFJLENBQUNaLElBQUksR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxJQUFJLENBQUNmLE1BQU07UUFFekMsSUFBSSxDQUFDRCxTQUFTLENBQUNpQixPQUFPLENBQUMsSUFBSSxDQUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQ0MsSUFBSTtJQUMvQztJQUVBLE9BQU9nQixZQUFZQyxLQUFLLEVBQUU7UUFDeEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdILE9BQy9CckIsUUFBUXNCLE1BQU1GLFdBQVcsSUFDekJuQixTQUFTc0IsT0FBT0gsV0FBVyxJQUMzQmxCLFlBQVlzQixVQUFVSixXQUFXLElBQ2pDakIsU0FBUyxNQUNUQyxPQUFPLE1BQ1BxQixTQUFTLElBQUlKLE1BQU1yQixPQUFPQyxRQUFRQyxXQUFXQyxRQUFRQztRQUUzRCxPQUFPcUI7SUFDVDtBQUNGIn0=