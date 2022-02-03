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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9AKlwiKSxcbiAgICAgIGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4ubm9uVGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4udGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICB0ZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKHRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlByb2Nlc3NvciIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiY2FsbGJhY2siLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGVRdWVyaWVzIiwiY29udGVudHMiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiVG9rZW4iLCJmcm9tQ29udGVudCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiZnJvbU5vdGhpbmciLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVWLEdBQTJCLENBQTNCLE1BQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELEdBQUssQ0FBQ0EsaUJBQWlCLEdBQUdDLFNBQUssT0FBQ0MsY0FBYyxDQUFDLENBQU0sUUFDL0NDLHNCQUFzQixHQUFHRixTQUFLLE9BQUNDLGNBQWMsQ0FBQyxDQUFZO0lBRTFERSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUzs7Ozs7WUFDYkMsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRQyxDQUFSRCxPQUFPLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxF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