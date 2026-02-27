"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TokensTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TokensTextarea extends _textarea.default {
    setTokens(tokens) {
        if (tokens !== null) {
            let lineNumber = 1, previousToken = null;
            const html = tokens.reduce((html, token)=>{
                const tokenHTML = token.asHTML();
                if (previousToken === null) {
                    html += `${lineNumber++}: `;
                } else {
                    const previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                    if (previousTokenEndOfLineToken) {
                        html += `${lineNumber++}: `;
                    }
                }
                html += tokenHTML;
                previousToken = token;
                return html;
            }, _constants.EMPTY_STRING);
            this.html(html);
        } else {
            this.clearTokens();
        }
    }
    clearTokens() {
        const html = _constants.EMPTY_STRING;
        this.html(html);
    }
    parentContext() {
        const setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
        return {
            setTokens,
            clearTokens
        };
    }
    static defaultProperties = {
        className: "tokens",
        spellCheck: "false",
        readOnly: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW5zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBpZiAodG9rZW5zICE9PSBudWxsKSB7XG4gICAgICBsZXQgbGluZU51bWJlciA9IDEsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKChodG1sLCB0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICB0aGlzLmh0bWwoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2tlbnNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsIlRleHRhcmVhIiwic2V0VG9rZW5zIiwidG9rZW5zIiwibGluZU51bWJlciIsInByZXZpb3VzVG9rZW4iLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiRU1QVFlfU1RSSU5HIiwiY2xlYXJUb2tlbnMiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2lFQUpBOzJCQUVROzs7Ozs7QUFFZCxNQUFNQSx1QkFBdUJDLGlCQUFRO0lBQ2xEQyxVQUFVQyxNQUFNLEVBQUU7UUFDaEIsSUFBSUEsV0FBVyxNQUFNO1lBQ25CLElBQUlDLGFBQWEsR0FDYkMsZ0JBQWdCO1lBRXBCLE1BQU1DLE9BQU9ILE9BQU9JLE1BQU0sQ0FBQyxDQUFDRCxNQUFNRTtnQkFDaEMsTUFBTUMsWUFBWUQsTUFBTUUsTUFBTTtnQkFFOUIsSUFBSUwsa0JBQWtCLE1BQU07b0JBQzFCQyxRQUFRLEdBQUdGLGFBQWEsRUFBRSxDQUFDO2dCQUM3QixPQUFPO29CQUNMLE1BQU1PLDhCQUE4Qk4sY0FBY08sZ0JBQWdCO29CQUVsRSxJQUFJRCw2QkFBNkI7d0JBQy9CTCxRQUFRLEdBQUdGLGFBQWEsRUFBRSxDQUFDO29CQUM3QjtnQkFDRjtnQkFFQUUsUUFBUUc7Z0JBRVJKLGdCQUFnQkc7Z0JBRWhCLE9BQU9GO1lBQ1QsR0FBR08sdUJBQVk7WUFFZixJQUFJLENBQUNQLElBQUksQ0FBQ0E7UUFDWixPQUFPO1lBQ0wsSUFBSSxDQUFDUSxXQUFXO1FBQ2xCO0lBQ0Y7SUFFQUEsY0FBYztRQUNaLE1BQU1SLE9BQU9PLHVCQUFZO1FBRXpCLElBQUksQ0FBQ1AsSUFBSSxDQUFDQTtJQUNaO0lBRUFTLGdCQUFnQjtRQUNkLE1BQU1iLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNjLElBQUksQ0FBQyxJQUFJLEdBQ3BDRixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDRSxJQUFJLENBQUMsSUFBSTtRQUU5QyxPQUFRO1lBQ05kO1lBQ0FZO1FBQ0Y7SUFDRjtJQUVBLE9BQU9HLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFVBQVU7SUFDWixFQUFFO0FBQ0oifQ==