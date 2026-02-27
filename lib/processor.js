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
const _occamquery = require("occam-query");
const terminalNodeQuery = _occamquery.Query.fromExpressionString("//@*");
class Processor {
    replaceTerminalNodeSignificantToken(terminalNode, tokens, callback) {
        let significantToken;
        significantToken = terminalNode.getSignificantToken();
        if (significantToken === null) {
            return null;
        }
        const endOfLineToken = significantToken.isEndOfLineToken();
        if (endOfLineToken) {
            return null;
        }
        const content = significantToken.getContent(), index = tokens.indexOf(significantToken), Token = callback(content); ///
        if (Token === null) {
            return null;
        }
        significantToken = Token.fromContent(content);
        const start = index, deleteCount = 1;
        tokens.splice(start, deleteCount, significantToken);
        terminalNode.setSignificantToken(significantToken);
        return content;
    }
    replaceTerminalNodesSignificantToken(tokens, node, callback, ...terminalNodeQueries) {
        const contents = [];
        terminalNodeQueries.forEach((terminalNodeQuery)=>{
            const terminalNodes = terminalNodeQuery.execute(node);
            terminalNodes.forEach((terminalNode)=>{
                const content = this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
                if (content !== null) {
                    contents.push(content);
                }
            });
        });
        return contents;
    }
    replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback) {
        const terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
        terminalNodes.forEach((terminalNode)=>{
            this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
        });
    }
    replaceNonTerminalNodesSignificantTokens(tokens, node, callback, ...nonTerminalNodeQueries) {
        nonTerminalNodeQueries.forEach((nonTerminalNodeQuery)=>{
            const nonTerminalNodes = nonTerminalNodeQuery.execute(node);
            nonTerminalNodes.forEach((nonTerminalNode)=>{
                this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
            });
        });
    }
    static fromNothing(Class) {
        return new Class();
    }
}
const _default = Processor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL0AqXCIpO1xuXG5jbGFzcyBQcm9jZXNzb3Ige1xuICByZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAoZW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIFRva2VuID0gY2FsbGJhY2soY29udGVudCk7IC8vL1xuXG4gICAgaWYgKFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi50ZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcblxuICAgIHRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgodGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKHRva2Vucywgbm9kZSwgY2FsbGJhY2ssIC4uLm5vblRlcm1pbmFsTm9kZVF1ZXJpZXMpIHtcbiAgICBub25UZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVzID0gbm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgbm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiUHJvY2Vzc29yIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJjYWxsYmFjayIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJpbmRleCIsImluZGV4T2YiLCJUb2tlbiIsImZyb21Db250ZW50Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJub2RlIiwidGVybWluYWxOb2RlUXVlcmllcyIsImNvbnRlbnRzIiwiZm9yRWFjaCIsInRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwicHVzaCIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUZBOzs7ZUFBQTs7OzRCQS9Fc0I7QUFFdEIsTUFBTUEsb0JBQW9CQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVyRCxNQUFNQztJQUNKQyxvQ0FBb0NDLFlBQVksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUU7UUFDbEUsSUFBSUM7UUFFSkEsbUJBQW1CSCxhQUFhSSxtQkFBbUI7UUFFbkQsSUFBSUQscUJBQXFCLE1BQU07WUFDN0IsT0FBTztRQUNUO1FBRUEsTUFBTUUsaUJBQWlCRixpQkFBaUJHLGdCQUFnQjtRQUV4RCxJQUFJRCxnQkFBZ0I7WUFDbEIsT0FBTztRQUNUO1FBRUEsTUFBTUUsVUFBVUosaUJBQWlCSyxVQUFVLElBQ3JDQyxRQUFRUixPQUFPUyxPQUFPLENBQUNQLG1CQUN2QlEsUUFBUVQsU0FBU0ssVUFBVSxHQUFHO1FBRXBDLElBQUlJLFVBQVUsTUFBTTtZQUNsQixPQUFPO1FBQ1Q7UUFFQVIsbUJBQW1CUSxNQUFNQyxXQUFXLENBQUNMO1FBRXJDLE1BQU1NLFFBQVFKLE9BQ1JLLGNBQWM7UUFFcEJiLE9BQU9jLE1BQU0sQ0FBQ0YsT0FBT0MsYUFBYVg7UUFFbENILGFBQWFnQixtQkFBbUIsQ0FBQ2I7UUFFakMsT0FBT0k7SUFDVDtJQUVBVSxxQ0FBcUNoQixNQUFNLEVBQUVpQixJQUFJLEVBQUVoQixRQUFRLEVBQUUsR0FBR2lCLG1CQUFtQixFQUFFO1FBQ25GLE1BQU1DLFdBQVcsRUFBRTtRQUVuQkQsb0JBQW9CRSxPQUFPLENBQUMsQ0FBQzFCO1lBQzNCLE1BQU0yQixnQkFBZ0IzQixrQkFBa0I0QixPQUFPLENBQUNMO1lBRWhESSxjQUFjRCxPQUFPLENBQUMsQ0FBQ3JCO2dCQUNyQixNQUFNTyxVQUFVLElBQUksQ0FBQ1IsbUNBQW1DLENBQUNDLGNBQWNDLFFBQVFDO2dCQUUvRSxJQUFJSyxZQUFZLE1BQU07b0JBQ3BCYSxTQUFTSSxJQUFJLENBQUNqQjtnQkFDaEI7WUFDRjtRQUNGO1FBRUEsT0FBT2E7SUFDVDtJQUVBSyx3Q0FBd0NDLGVBQWUsRUFBRXpCLE1BQU0sRUFBRUMsUUFBUSxFQUFFO1FBQ3pFLE1BQU1vQixnQkFBZ0IzQixrQkFBa0I0QixPQUFPLENBQUNHO1FBRWhESixjQUFjRCxPQUFPLENBQUMsQ0FBQ3JCO1lBQ3JCLElBQUksQ0FBQ0QsbUNBQW1DLENBQUNDLGNBQWNDLFFBQVFDO1FBQ2pFO0lBQ0Y7SUFFQXlCLHlDQUF5QzFCLE1BQU0sRUFBRWlCLElBQUksRUFBRWhCLFFBQVEsRUFBRSxHQUFHMEIsc0JBQXNCLEVBQUU7UUFDMUZBLHVCQUF1QlAsT0FBTyxDQUFDLENBQUNRO1lBQzlCLE1BQU1DLG1CQUFtQkQscUJBQXFCTixPQUFPLENBQUNMO1lBRXREWSxpQkFBaUJULE9BQU8sQ0FBQyxDQUFDSztnQkFDeEIsSUFBSSxDQUFDRCx1Q0FBdUMsQ0FBQ0MsaUJBQWlCekIsUUFBUUM7WUFDeEU7UUFDRjtJQUNGO0lBRUEsT0FBTzZCLFlBQVlDLEtBQUssRUFBRTtRQUFFLE9BQU8sSUFBSUE7SUFBUztBQUNsRDtNQUVBLFdBQWVsQyJ9