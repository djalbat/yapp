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
var terminalNodeQuery = _occamquery.Query.fromExpressionString("//@*"), errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLyovZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4ubm9uVGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4udGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICB0ZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKHRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlByb2Nlc3NvciIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiY2FsbGJhY2siLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGVRdWVyaWVzIiwiY29udGVudHMiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiVG9rZW4iLCJmcm9tQ29udGVudCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiZnJvbU5vdGhpbmciLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0ZBOzs7ZUFBQTs7OzBCQXBGc0I7NERBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTUEsb0JBQW9CQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxTQUMvQ0MseUJBQXlCRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUUxRCxJQUFBLEFBQU1FLDBCQUFOO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsTUFBTSxFQUFFQyxJQUFJO2dCQUNsQixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCLElB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