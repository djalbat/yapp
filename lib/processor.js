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
var _occamquery = require("occam-query");
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
var terminalNodeQuery = _occamquery.Query.fromExpressionString("//@*");
var Processor = /*#__PURE__*/ function() {
    function Processor() {
        _class_call_check(this, Processor);
    }
    _create_class(Processor, [
        {
            key: "replaceTerminalNodeSignificantToken",
            value: function replaceTerminalNodeSignificantToken(terminalNode, tokens, callback) {
                var significantToken;
                significantToken = terminalNode.getSignificantToken();
                if (significantToken === null) {
                    return null;
                }
                var endOfLineToken = significantToken.isEndOfLineToken();
                if (endOfLineToken) {
                    return null;
                }
                var content = significantToken.getContent(), index = tokens.indexOf(significantToken), Token = callback(content); ///
                if (Token === null) {
                    return null;
                }
                significantToken = Token.fromContent(content);
                var start = index, deleteCount = 1;
                tokens.splice(start, deleteCount, significantToken);
                terminalNode.setSignificantToken(significantToken);
                return content;
            }
        },
        {
            key: "replaceTerminalNodesSignificantToken",
            value: function replaceTerminalNodesSignificantToken(tokens, node, callback) {
                var _this = this;
                for(var _len = arguments.length, terminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    terminalNodeQueries[_key - 3] = arguments[_key];
                }
                var contents = [];
                terminalNodeQueries.forEach(function(terminalNodeQuery) {
                    var terminalNodes = terminalNodeQuery.execute(node);
                    terminalNodes.forEach(function(terminalNode) {
                        var content = _this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
                        if (content !== null) {
                            contents.push(content);
                        }
                    });
                });
                return contents;
            }
        },
        {
            key: "replaceNonTerminalNodeSignificantTokens",
            value: function replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback) {
                var _this = this;
                var terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
                terminalNodes.forEach(function(terminalNode) {
                    _this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
                });
            }
        },
        {
            key: "replaceNonTerminalNodesSignificantTokens",
            value: function replaceNonTerminalNodesSignificantTokens(tokens, node, callback) {
                var _this = this;
                for(var _len = arguments.length, nonTerminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    nonTerminalNodeQueries[_key - 3] = arguments[_key];
                }
                nonTerminalNodeQueries.forEach(function(nonTerminalNodeQuery) {
                    var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
                    nonTerminalNodes.forEach(function(nonTerminalNode) {
                        _this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
                    });
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                return new Class();
            }
        }
    ]);
    return Processor;
}();
var _default = Processor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL0AqXCIpO1xuXG5jbGFzcyBQcm9jZXNzb3Ige1xuICByZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAoZW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIFRva2VuID0gY2FsbGJhY2soY29udGVudCk7IC8vL1xuXG4gICAgaWYgKFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi50ZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcblxuICAgIHRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgodGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKHRva2Vucywgbm9kZSwgY2FsbGJhY2ssIC4uLm5vblRlcm1pbmFsTm9kZVF1ZXJpZXMpIHtcbiAgICBub25UZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVzID0gbm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgbm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiUHJvY2Vzc29yIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJjYWxsYmFjayIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJpbmRleCIsImluZGV4T2YiLCJUb2tlbiIsImZyb21Db250ZW50Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJub2RlIiwidGVybWluYWxOb2RlUXVlcmllcyIsImNvbnRlbnRzIiwiZm9yRWFjaCIsInRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwicHVzaCIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUZBOzs7ZUFBQTs7OzBCQS9Fc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU1BLG9CQUFvQkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUM7QUFFckQsSUFBQSxBQUFNQywwQkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLG9DQUFvQ0MsWUFBWSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0JBQ2hFLElBQUlDO2dCQUVKQSxtQkFBbUJILGFBQWFJLG1CQUFtQjtnQkFFbkQsSUFBSUQscUJBQXFCLE1BQU07b0JBQzdCLE9BQU87Z0JBQ1Q7Z0JBRUEsSUFBTUUsaUJBQWlCRixpQkFBaUJHLGdCQUFnQjtnQkFFeEQsSUFBSUQsZ0JBQWdCO29CQUNsQixPQUFPO2dCQUNUO2dCQUVBLElBQU1FLFVBQVVKLGlCQUFpQkssVUFBVSxJQUNyQ0MsUUFBUVIsT0FBT1MsT0FBTyxDQUFDUCxtQkFDdkJRLFFBQVFULFNBQVNLLFVBQVUsR0FBRztnQkFFcEMsSUFBSUksVUFBVSxNQUFNO29CQUNsQixPQUFPO2dCQUNUO2dCQUVBUixtQkFBbUJRLE1BQU1DLFdBQVcsQ0FBQ0w7Z0JBRXJDLElBQU1NLFFBQVFKLE9BQ1JLLGNBQWM7Z0JBRXBCYixPQUFPYyxNQUFNLENBQUNGLE9BQU9DLGFBQWFYO2dCQUVsQ0gsYUFBYWdCLG1CQUFtQixDQUFDYjtnQkFFakMsT0FBT0k7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxxQ0FBcUNoQixNQUFNLEVBQUVpQixJQUFJLEVBQUVoQixRQUFROztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2lCLHNCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxvQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXNCOztnQkFDakYsSUFBTUMsV0FBVyxFQUFFO2dCQUVuQkQsb0JBQW9CRSxPQUFPLENBQUMsU0FBQzFCO29CQUMzQixJQUFNMkIsZ0JBQWdCM0Isa0JBQWtCNEIsT0FBTyxDQUFDTDtvQkFFaERJLGNBQWNELE9BQU8sQ0FBQyxTQUFDckI7d0JBQ3JCLElBQU1PLFVBQVUsTUFBS1IsbUNBQW1DLENBQUNDLGNBQWNDLFFBQVFDO3dCQUUvRSxJQUFJSyxZQUFZLE1BQU07NEJBQ3BCYSxTQUFTSSxJQUFJLENBQUNqQjt3QkFDaEI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT2E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSx3Q0FBd0NDLGVBQWUsRUFBRXpCLE1BQU0sRUFBRUMsUUFBUTs7Z0JBQ3ZFLElBQU1vQixnQkFBZ0IzQixrQkFBa0I0QixPQUFPLENBQUNHO2dCQUVoREosY0FBY0QsT0FBTyxDQUFDLFNBQUNyQjtvQkFDckIsTUFBS0QsbUNBQW1DLENBQUNDLGNBQWNDLFFBQVFDO2dCQUNqRTtZQUNGOzs7WUFFQXlCLEtBQUFBO21CQUFBQSxTQUFBQSx5Q0FBeUMxQixNQUFNLEVBQUVpQixJQUFJLEVBQUVoQixRQUFROztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBRzBCLHlCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSx1QkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXlCOztnQkFDeEZBLHVCQUF1QlAsT0FBTyxDQUFDLFNBQUNRO29CQUM5QixJQUFNQyxtQkFBbUJELHFCQUFxQk4sT0FBTyxDQUFDTDtvQkFFdERZLGlCQUFpQlQsT0FBTyxDQUFDLFNBQUNLO3dCQUN4QixNQUFLRCx1Q0FBdUMsQ0FBQ0MsaUJBQWlCekIsUUFBUUM7b0JBQ3hFO2dCQUNGO1lBQ0Y7Ozs7WUFFTzZCLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUksT0FBTyxJQUFJQTtZQUFTOzs7V0F4RTVDbEM7O0lBMkVOLFdBQWVBIn0=