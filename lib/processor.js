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
var _error = /*#__PURE__*/ _interop_require_default(require("./token/significant/error"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var terminalNodeQuery = _occamquery.Query.fromExpression("//@*"), errorTerminalNodeQuery = _occamquery.Query.fromExpression("//error/@*");
var Processor = /*#__PURE__*/ function() {
    function Processor() {
        _class_call_check(this, Processor);
    }
    _create_class(Processor, [
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
                var _this = this;
                for(var _len = arguments.length, nonTerminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    nonTerminalNodeQueries[_key - 3] = arguments[_key];
                }
                nonTerminalNodeQueries.forEach(function(nonTerminalNodeQuery) {
                    var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
                    nonTerminalNodes.forEach(function(nonTerminalNode) {
                        return _this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
                    });
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKTtcblxuY2xhc3MgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyh0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi5ub25UZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgbm9uVGVybWluYWxOb2RlUXVlcmllcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGVRdWVyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlcyA9IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi50ZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcblxuICAgIHRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgodGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykpO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW47XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKGVuZE9mTGluZVRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBUb2tlbiA9IGNhbGxiYWNrKGNvbnRlbnQpOyAvLy9cblxuICAgIGlmIChUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHsgcmV0dXJuIG5ldyBDbGFzcygpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwicHJvY2VzcyIsInRva2VucyIsIm5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJjYWxsYmFjayIsIm5vblRlcm1pbmFsTm9kZVF1ZXJpZXMiLCJmb3JFYWNoIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VucyIsInRlcm1pbmFsTm9kZVF1ZXJpZXMiLCJjb250ZW50cyIsInRlcm1pbmFsTm9kZXMiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImdldENvbnRlbnQiLCJpbmRleCIsImluZGV4T2YiLCJUb2tlbiIsImZyb21Db250ZW50Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJmcm9tTm90aGluZyIsIkNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzRkE7OztlQUFBOzs7MEJBcEZzQjs0REFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFNQSxvQkFBb0JDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQyxTQUN6Q0MseUJBQXlCRixpQkFBSyxDQUFDQyxjQUFjLENBQUM7QUFFcEQsSUFBQSxBQUFNRSwwQkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE1BQU0sRUFBRUMsSUFBSTtnQkFDbEIsSUFBSUEsU0FBUyxNQUFNO29CQUNqQixJQUFJLENBQUNDLG9DQUFvQyxDQUFDRixR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