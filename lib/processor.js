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
                terminalNodeQueries.forEach(function(terminalNodeQuery) {
                    var _this1 = _this;
                    var terminalNodes = terminalNodeQuery.execute(node);
                    terminalNodes.forEach(function(terminalNode) {
                        var content = _this1.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9AKlwiKSxcbiAgICAgIGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4ubm9uVGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4udGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICB0ZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKHRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlByb2Nlc3NvciIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiY2FsbGJhY2siLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGVRdWVyaWVzIiwiY29udGVudHMiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiVG9rZW4iLCJmcm9tQ29udGVudCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiZnJvbU5vdGhpbmciLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O3dCQUVTLFdBQVc7NENBRVYsMkJBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU1BLGlCQUFpQixHQUFHQyxTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUNoREMsc0JBQXNCLEdBQUdGLFNBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLEFBQUM7QUFFbEUsSUFBQSxBQUFNRSxTQUFTLGlCQTZFWixBQTdFSDthQUFNQSxTQUFTOzs7OztZQUNiQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0Ms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