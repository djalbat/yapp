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
                nonTerminalNodeQueries.forEach((function(nonTerminalNodeQuery) {
                    var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
                    nonTerminalNodes.forEach((function(nonTerminalNode) {
                        return this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
                    }).bind(this));
                }).bind(this));
            }
        },
        {
            key: "replaceTerminalNodesSignificantToken",
            value: function replaceTerminalNodesSignificantToken(tokens, node, callback) {
                for(var _len = arguments.length, terminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    terminalNodeQueries[_key - 3] = arguments[_key];
                }
                var contents = [];
                terminalNodeQueries.forEach((function(terminalNodeQuery1) {
                    var terminalNodes = terminalNodeQuery1.execute(node);
                    terminalNodes.forEach((function(terminalNode) {
                        var content = this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
                        if (content !== null) {
                            contents.push(content);
                        }
                    }).bind(this));
                }).bind(this));
                return contents;
            }
        },
        {
            key: "replaceNonTerminalNodeSignificantTokens",
            value: function replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback) {
                var terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
                terminalNodes.forEach((function(terminalNode) {
                    return this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
                }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9AKlwiKSxcbiAgICAgIGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4ubm9uVGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4udGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICB0ZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKHRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVWLEdBQTJCLENBQTNCLE1BQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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