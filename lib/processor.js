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
                terminalNodeQueries.forEach((function(terminalNodeQuery) {
                    var terminalNodes = terminalNodeQuery.execute(node);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwibmFtZXMiOlsiUXVlcnkiLCJFcnJvclRva2VuIiwidGVybWluYWxOb2RlUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiY2FsbGJhY2siLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGVRdWVyaWVzIiwiY29udGVudHMiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiVG9rZW4iLCJmcm9tQ29udGVudCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiZnJvbU5vdGhpbmciLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVWLEdBQTJCLENBQTNCLE1BQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELEdBQUssQ0FBQyxpQkFBaUIsR0FKRCxTQUFXLE9BSUQsY0FBYyxFQUFDLElBQU0sSUFDL0Msc0JBQXNC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