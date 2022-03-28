"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _error = _interopRequireDefault(require("./token/significant/error"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var terminalNodeQuery = _occamDom.Query.fromExpression("//@*"), errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*");
var Processor = /*#__PURE__*/ function() {
    function Processor() {
        _classCallCheck(this, Processor);
    }
    _createClass(Processor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node !== null) {
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _error.default;
                    }, errorTerminalNodeQuery);
                }
            }
        },
        {
            key: "replaceNonTerminalNodesSignificantTokens",
            value: function replaceNonTerminalNodesSignificantTokens(tokens, node, callback) {
                for(var _len = arguments.length, nonTerminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    nonTerminalNodeQueries[_key - 3] = arguments[_key];
                }
                var _this = this;
                nonTerminalNodeQueries.forEach(function(nonTerminalNodeQuery) {
                    var _this1 = _this;
                    var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
                    nonTerminalNodes.forEach(function(nonTerminalNode) {
                        return _this1.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
                    });
                });
            }
        },
        {
            key: "replaceTerminalNodesSignificantToken",
            value: function replaceTerminalNodesSignificantToken(tokens, node, callback) {
                for(var _len = arguments.length, terminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    terminalNodeQueries[_key - 3] = arguments[_key];
                }
                var _this = this;
                var contents = [];
                terminalNodeQueries.forEach(function(terminalNodeQuery1) {
                    var _this2 = _this;
                    var terminalNodes = terminalNodeQuery1.execute(node);
                    terminalNodes.forEach(function(terminalNode) {
                        var content = _this2.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
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
                    return _this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
                });
            }
        },
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
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiLCIuLi9zcmMvY29sb3Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKTtcblxuY2xhc3MgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyh0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi5ub25UZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgbm9uVGVybWluYWxOb2RlUXVlcmllcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGVRdWVyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlcyA9IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi50ZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcblxuICAgIHRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgodGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykpO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW47XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKGVuZE9mTGluZVRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBUb2tlbiA9IGNhbGxiYWNrKGNvbnRlbnQpOyAvLy9cblxuICAgIGlmIChUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHsgcmV0dXJuIG5ldyBDbGFzcygpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nV29vZCA9IFwiI2Y4ZjZmMVwiO1xuZXhwb3J0IGNvbnN0IGJvbmpvdXIgPSBcIiNlNWUwZTFcIjtcbmV4cG9ydCBjb25zdCBnYWluc2Jvcm91Z2ggPSBcIiNkNWQ4ZDJcIjtcbmV4cG9ydCBjb25zdCBzdGFyZHVzdCA9IFwiIzlmOWY5Y1wiO1xuZXhwb3J0IGNvbnN0IGh1cnJpY2FuZSA9IFwiIzkwODk4OVwiO1xuZXhwb3J0IGNvbnN0IHN0b3JtRHVzdCA9IFwiIzY0NjQ2M1wiO1xuZXhwb3J0IGNvbnN0IGVtcGVyb3IgPSBcIiM1MTUxNTBcIjtcbmV4cG9ydCBjb25zdCB0dWF0YXJhID0gXCIjMzYzNTM0XCI7XG5leHBvcnQgY29uc3Qgd29vZHNtb2tlID0gXCIjMGMwZDBmXCI7XG5cbmV4cG9ydCBjb25zdCBjaXRyb24gPSBcIiM4NmI5MjNcIjtcbmV4cG9ydCBjb25zdCBzdXNoaSA9IFwiIzdmYTgyZlwiO1xuZXhwb3J0IGNvbnN0IG9saXZlRHJhYiA9IFwiIzYzODgyOVwiO1xuZXhwb3J0IGNvbnN0IHJpZmxlR3JlZW4gPSBcIiM0MTQ4MzNcIjtcbmV4cG9ydCBjb25zdCBsb2dDYWJpbiA9IFwiIzI0MzAxZFwiO1xuZXhwb3J0IGNvbnN0IGJsYWNrT2xpdmUgPSBcIiMxYzI0MTJcIjtcbmV4cG9ydCBjb25zdCBodW50ZXJHcmVlbiA9IFwiIzE2MWQxMFwiO1xuXG5leHBvcnQgY29uc3QgY2FkZXRCbHVlID0gXCIjNWY5ZWEwXCI7XG5leHBvcnQgY29uc3QgaGF2ZWxvY2tCbHVlID0gXCIjNUI4RGUxXCI7XG5cbmV4cG9ydCBjb25zdCBwb21lZ3JhbmF0ZSA9IFwiI2Y1MjkyOVwiO1xuZXhwb3J0IGNvbnN0IHJhenptYXRhenogPSBcIiNlMzI1NmJcIjtcbmV4cG9ydCBjb25zdCBmbGFtaW5nbyA9IFwiI2YzNGI0NFwiO1xuZXhwb3J0IGNvbnN0IHRhaGl0aSA9IFwiI0Y1OEEwQVwiO1xuZXhwb3J0IGNvbnN0IGVxdWF0b3IgPSBcIiNlNGFDNWVcIjtcblxuZXhwb3J0IGNvbnN0IHBvcnRpY2EgPSBcIiNmN2U3NWZcIjtcbmV4cG9ydCBjb25zdCBjZWxlcnkgPSBcIiNiY2I4NTJcIjtcbmV4cG9ydCBjb25zdCBzeWNhbW9yZSA9IFwiIzkwOGQzOVwiO1xuIl0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsImNhbGxiYWNrIiwibm9uVGVybWluYWxOb2RlUXVlcmllcyIsImZvckVhY2giLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zIiwidGVybWluYWxOb2RlUXVlcmllcyIsImNvbnRlbnRzIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwicHVzaCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ2V0Q29udGVudCIsImluZGV4IiwiaW5kZXhPZiIsIlRva2VuIiwiZnJvbUNvbnRlbnQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFNBQVcsV0FBWCxXQUFXLENBQUE7QUFFVixJQUFBLE1BQTJCLGtDQUEzQiwyQkFBMkIsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNQSxpQkFBaUIsR0FBR0MsU0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFDaERDLHNCQUFzQixHQUFHRixTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxBQUFDO0FBRWxFLElBQUEsQUFBTUUsU0FBUyxpQkE2RVosQUE3RUg7YUFBTUEsU0FBUzs7Ozs7WUFDYkMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJQSxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUNqQixJQUFJLENBQUNDLG9DQUFvQyxDQUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxTQUFDRSxPQUFPOytCQUFLQyxNQUFVLFFBQUE7cUJBQUEsRUFBRVAsc0JBQXNCLENBQUMsQ0FBQztpQkFDMUc7YUFDRjs7O1lBRURRLEdBQXdDLEVBQXhDQSwwQ0FBd0M7bUJBQXhDQSxTQUFBQSx3Q0FBd0MsQ0FBQ0wsTUFBTSxFQUFFQyxJQUFJLEVBQUVLLFFBQVEsRUFBNkI7Z0JBQTNCLElBQUEsSUFBQSxJQUF5QixHQUF6QixTQUF5QixDQUF6QixNQUF5QixFQUF6QixBQUFHQyxzQkFBc0IsR0FBekIsVUFBQSxJQUF5QixHQUF6QixDQUF5QixHQUF6QixJQUF5QixHQUF6QixDQUF5QixJQUFBLENBQUEsRUFBekIsSUFBeUIsR0FBekIsQ0FBeUIsRUFBekIsSUFBeUIsR0FBekIsSUFBeUIsRUFBekIsSUFBeUIsRUFBQSxDQUF6QjtvQkFBQSxBQUFHQSxzQkFBc0IsQ0FBekIsSUFBeUIsR0FBekIsQ0FBeUIsSUFBekIsU0FBeUIsQUFBekIsQ0FBQSxJQUF5QixDQUFBLEFDaEI1RixDRGdCNEY7aUJBQUE7O2dCQUN4RkEsc0JBQXNCLENBQUNDLE9BQU8sQ0FBQyxTQUFDQyxvQkFBb0IsRUFBSzs7b0JBQ3ZELElBQU1DLGdCQUFnQixHQUFHRCxvQkFBb0IsQ0FBQ0UsT0FBTyxDQUFDVixJQUFJLENBQUMsQUFBQztvQkFFNURTLGdCQUFnQixDQUFDRixPQUFPLENBQUMsU0FBQ0ksZUFBZTsrQkFBSyxPQUFLQyx1Q0FBdUMsQ0FBQ0QsZUFBZSxFQUFFWixNQUFNLEVBQUVNLFFBQVEsQ0FBQztxQkFBQSxDQUFDLENBQUM7aUJBQ2hJLENBQUMsQ0FBQzthQUNKOzs7WUFFREosR0FBb0MsRUFBcENBLHNDQUFvQzttQkFBcENBLFNBQUFBLG9DQUFvQyxDQUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUssUUFBUSxFQUEwQjtnQkFBeEIsSUFBQSxJQUFBLElBQXNCLEdBQXRCLFNBQXNCLENBQXRCLE1BQXNCLEVBQXRCLEFBQUdRLG1CQUFtQixHQUF0QixVQUFBLElBQXNCLEdBQXRCLENBQXNCLEdBQXRCLElBQXNCLEdBQXRCLENBQXNCLElBQUEsQ0FBQSxFQUF0QixJQUFzQixHQUF0QixDQUFzQixFQUF0QixJQUFzQixHQUF0QixJQUFzQixFQUF0QixJQUFzQixFQUFBLENBQXRCO29CQUFBLEFBQUdBLG1CQUFtQixDQUF0QixJQUFzQixHQUF0QixDQUFzQixJQUF0QixTQUFzQixBQUF0QixDQUFBLElBQXNCLENBQUEsQUN4QnJGLENEd0JxRjtpQkFBQTs7Z0JBQ2pGLElBQU1DLFFBQVEsR0FBRyxFQUFFLEFBQUM7Z0JBRXBCRCxtQkFBbUIsQ0FBQ04sT0FBTyxDQUFDLFNBQUNkLGtCQUFpQixFQUFLOztvQkFDakQsSUFBTXNCLGFBQWEsR0FBR3RCLGtCQUFpQixDQUFDaUIsT0FBTyxDQUFDVixJQUFJLENBQUMsQUFBQztvQkFFdERlLGFBQWEsQ0FBQ1IsT0FBTyxDQUFDLFNBQUNTLFlBQVksRUFBSzt3QkFDdEMsSUFBTWQsT0FBTyxHQUFHLE9BQUtlLG1DQUFtQyxDQUFDRCxZQUFZLEVBQUVqQixNQUFNLEVBQUVNLFFBQVEsQ0FBQyxBQUFDO3dCQUV6RixJQUFJSCxPQUFPLEtBQUssSUFBSSxFQUFFOzRCQUNwQlksUUFBUSxDQUFDSSxJQUFJLENBQUNoQixPQUFPLENBQUMsQ0FBQzt5QkFDeEI7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKLENBQUMsQ0FBQztnQkFFSCxPQUFPWSxRQUFRLENBQUM7YUFDakI7OztZQUVERixHQUF1QyxFQUF2Q0EseUNBQXVDO21CQUF2Q0EsU0FBQUEsdUNBQXVDLENBQUNELGVBQWUsRUFBRVosTUFBTSxFQUFFTSxRQUFRLEVBQUU7O2dCQUN6RSxJQUFNVSxhQUFhLEdBQUd0QixpQkFBaUIsQ0FBQ2lCLE9BQU8sQ0FBQ0MsZUFBZSxDQUFDLEFBQUM7Z0JBRWpFSSxhQUFhLENBQUNSLE9BQU8sQ0FBQyxTQUFDUyxZQUFZOzJCQUFLLE1BQUtDLG1DQUFtQyxDQUFDRCxZQUFZLEVBQUVqQixNQUFNLEVBQUVNLFFBQVEsQ0FBQztpQkFBQSxDQUFDLENBQUM7YUFDbkg7OztZQUVEWSxHQUFtQyxFQUFuQ0EscUNBQW1DO21CQUFuQ0EsU0FBQUEsbUNBQW1DLENBQUNELFlBQVksRUFBRWpCLE1BQU0sRUFBRU0sUUFBUSxFQUFFO2dCQUNsRSxJQUFJYyxnQkFBZ0IsQUFBQztnQkFFckJBLGdCQUFnQixHQUFHSCxZQUFZLENBQUNJLG1CQUFtQixFQUFFLENBQUM7Z0JBRXRELElBQUlELGdCQUFnQixLQUFLLElBQUksRUFBRTtvQkFDN0IsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsSUFBTUUsY0FBYyxHQUFHRixnQkFBZ0IsQ0FBQ0csZ0JBQWdCLEVBQUUsQUFBQztnQkFFM0QsSUFBSUQsY0FBYyxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFFRCxJQUFNbkIsT0FBTyxHQUFHaUIsZ0JBQWdCLENBQUNJLFVBQVUsRUFBRSxFQUN2Q0MsS0FBSyxHQUFHekIsTUFBTSxDQUFDMEIsT0FBTyxDQUFDTixnQkFBZ0IsQ0FBQyxFQUN4Q08sS0FBSyxHQUFHckIsUUFBUSxDQUFDSCxPQUFPLENBQUMsQUFBQyxFQUFDLEdBQUc7Z0JBRXBDLElBQUl3QixLQUFLLEtBQUssSUFBSSxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFFRFAsZ0JBQWdCLEdBQUdPLEtBQUssQ0FBQ0MsV0FBVyxDQUFDekIsT0FBTyxDQUFDLENBQUM7Z0JBRTlDLElBQU0wQixLQUFLLEdBQUdKLEtBQUssRUFDYkssV0FBVyxHQUFHLENBQUMsQUFBQztnQkFFdEI5QixNQUFNLENBQUMrQixNQUFNLENBQUNGLEtBQUssRUFBRUMsV0FBVyxFQUFFVixnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVwREgsWUFBWSxDQUFDZSxtQkFBbUIsQ0FBQ1osZ0JBQWdCLENBQUMsQ0FBQztnQkFFbkQsT0FBT2pCLE9BQU8sQ0FBQzthQUNoQjs7OztZQUVNOEIsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPLElBQUlBLEtBQUssRUFBRSxDQUFDO2FBQUU7Ozs7Q0FDbEQsRUFBQTtlQUVjcEMsU0FBUyJ9