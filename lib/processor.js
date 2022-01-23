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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9AKlwiKSxcbiAgICAgIGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4ubm9uVGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4udGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICB0ZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKHRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsImNhbGxiYWNrIiwibm9uVGVybWluYWxOb2RlUXVlcmllcyIsImZvckVhY2giLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zIiwidGVybWluYWxOb2RlUXVlcmllcyIsImNvbnRlbnRzIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwicHVzaCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ2V0Q29udGVudCIsImluZGV4IiwiaW5kZXhPZiIsIlRva2VuIiwiZnJvbUNvbnRlbnQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFVixHQUEyQixDQUEzQixNQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxHQUFLLENBQUNBLGlCQUFpQixHQUpELFNBQVcsT0FJREMsY0FBYyxDQUFDLENBQU0sUUFDL0NDLHNCQUFzQixHQUxOLFNBQVcsT0FLSUQsY0FBYyxDQUFDLENBQVk7SUFFMURFLFNBQVMsaUJBQWYsUUFBUTthQUFGQSxTQUFTOzs7OztZQUNiQyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFDLENBQVJELE9BQU8sQ0FBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUUsQ0FBQztn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