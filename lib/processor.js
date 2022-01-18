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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9AKlwiKSxcbiAgICAgIGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4ubm9uVGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCBjYWxsYmFjaywgLi4udGVybWluYWxOb2RlUXVlcmllcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICB0ZXJtaW5hbE5vZGVRdWVyaWVzLmZvckVhY2goKHRlcm1pbmFsTm9kZVF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsImNhbGxiYWNrIiwibm9uVGVybWluYWxOb2RlUXVlcmllcyIsImZvckVhY2giLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zIiwidGVybWluYWxOb2RlUXVlcmllcyIsImNvbnRlbnRzIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwicHVzaCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ2V0Q29udGVudCIsImluZGV4IiwiaW5kZXhPZiIsIlRva2VuIiwiZnJvbUNvbnRlbnQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFVixHQUEyQixDQUEzQixNQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxHQUFLLENBQUNBLGlCQUFpQixHQUpELFNBQVcsT0FJREMsY0FBYyxDQUFDLENBQU0sUUFDL0NDLHNCQUFzQixHQUxOLFNBQVcsT0FLSUQsY0FBYyxDQUFDLENBQVk7SUFFMURFLFNBQVMsaUJBQWYsUUFBUTthQUFGQSxTQUFTOzhCQUFUQSxTQUFTOztpQkFBVEEsU0FBUzs7WUFDYkMsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRQyxDQUFSRCxPQUFPLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEVBQUUsRUFBRUEsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUNDLG9DQUFvQyxDQUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxRQUFRLENBQVBFLE9BQU87d0JBQUtDLE1BQU0sQ0FSMUQsTUFBMkI7dUJBUXFDUCxzQkFBc0I7Z0JBQ3pHLENBQUM7WUFDSCxDQUFDOzs7WUFFRFEsR0FBd0MsRUFBeENBLENBQXdDO21CQUF4Q0EsUUFBUSxDQUFSQSx3Q0FBd0MsQ0FBQ0wsTUFBTSxFQUFFQyxJQUFJLEVBQUVLLFFBQVEsRUFBNkIsQ0FBQztnQkFBNUIsR0FBR0MsQ0FBSCxHQUF5QixDQUF6QixJQUF5QixHQUF6QixTQUF5QixDQUF6QixNQUF5QixFQUF0QkEsc0JBQXNCLEdBQXpCLEdBQXlCLE9BQXpCLElBQXlCLEdBQXpCLENBQXlCLEdBQXpCLElBQXlCLEdBQXpCLENBQXlCLE9BQXpCLElBQXlCLEdBQXpCLENBQXlCLEVBQXpCLElBQXlCLEdBQXpCLElBQXlCLEVBQXpCLElBQXlCLEdBQXpCLENBQUM7b0JBQUVBLHNCQUFzQixDQUF6QixJQUF5QixHQUF6QixDQUF5QixJQUF6QixTQUF5QixDQUF6QixJQUF5QjtnQkFBRCxDQUFDOztnQkFDeEZBLHNCQUFzQixDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFQQyxvQkFBb0IsRUFBSyxDQUFDOztvQkFDeEQsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0Qsb0JBQW9CLENBQUNFLE9BQU8sQ0FBQ1YsSUFBSTtvQkFFMURTLGdCQUFnQixDQUFDRixPQUFPLENBQUMsUUFBUSxDQUFQSSxlQUFlO3dCQUFLLE1BQU0sUUFBREMsdUNBQXVDLENBQUNELGVBQWUsRUFBRVosTUFBTSxFQUFFTSxRQUFROztnQkFDOUgsQ0FBQztZQUNILENBQUM7OztZQUVESixHQUFvQyxFQUFwQ0EsQ0FBb0M7bUJBQXBDQSxRQUFRLENBQVJBLG9DQUFvQyxDQUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUssUUFBUSxFQUEwQixDQUFDO2dCQUF6QixHQUFHUSxDQUFILEdBQXNCLENBQXRCLElBQXNCLEdBQXRCLFNBQXNCLENBQXRCLE1BQXNCLEVBQW5CQSxtQkFBbUIsR0FBdEIsR0FBc0IsT0FBdEIsSUFBc0IsR0FBdEIsQ0FBc0IsR0FBdEIsSUFBc0IsR0FBdEIsQ0FBc0IsT0FBdEIsSUFBc0IsR0FBdEIsQ0FBc0IsRUFBdEIsSUFBc0IsR0FBdEIsSUFBc0IsRUFBdEIsSUFBc0IsR0FBdEIsQ0FBQztvQkFBRUEsbUJBQW1CLENBQXRCLElBQXNCLEdBQXRCLENBQXNCLElBQXRCLFNBQXNCLENBQXRCLElBQXNCO2dCQUFELENBQUM7O2dCQUNqRixHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBRW5CRCxtQkFBbUIsQ0FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBUGIsa0JBQWlCLEVBQUssQ0FBQzs7b0JBQ2xELEdBQUssQ0FBQ3FCLGFBQWEsR0FBR3JCLGtCQUFpQixDQUFDZ0IsT0FBTyxDQUFDVixJQUFJO29CQUVwRGUsYUFBYSxDQUFDUixPQUFPLENBQUMsUUFBUSxDQUFQUyxZQUFZLEVBQUssQ0FBQzt3QkFDdkMsR0FBSyxDQUFDZCxPQUFPLFVBQVFlLG1DQUFtQyxDQUFDRCxZQUFZLEVBQUVqQixNQUFNLEVBQUVNLFFBQVE7d0JBRXZGLEVBQUUsRUFBRUgsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDOzRCQUNyQlksUUFBUSxDQUFDSSxJQUFJLENBQUNoQixPQUFPO3dCQUN2QixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLENBQUNZLFFBQVE7WUFDakIsQ0FBQzs7O1lBRURGLEdBQXVDLEVBQXZDQSxDQUF1QzttQkFBdkNBLFFBQVEsQ0FBUkEsdUNBQXVDLENBQUNELGVBQWUsRUFBRVosTUFBTSxFQUFFTSxRQUFRLEVBQUUsQ0FBQzs7Z0JBQzFFLEdBQUssQ0FBQ1UsYUFBYSxHQUFHckIsaUJBQWlCLENBQUNnQixPQUFPLENBQUNDLGVBQWU7Z0JBRS9ESSxhQUFhLENBQUNSLE9BQU8sQ0FBQyxRQUFRLENBQVBTLFlBQVk7b0JBQUssTUFBTSxPQUFEQyxtQ0FBbUMsQ0FBQ0QsWUFBWSxFQUFFakIsTUFBTSxFQUFFTSxRQUFROztZQUNqSCxDQUFDOzs7WUFFRFksR0FBbUMsRUFBbkNBLENBQW1DO21CQUFuQ0EsUUFBUSxDQUFSQSxtQ0FBbUMsQ0FBQ0QsWUFBWSxFQUFFakIsTUFBTSxFQUFFTSxRQUFRLEVBQUUsQ0FBQztnQkFDbkUsR0FBRyxDQUFDYyxnQkFBZ0I7Z0JBRXBCQSxnQkFBZ0IsR0FBR0gsWUFBWSxDQUFDSSxtQkFBbUI7Z0JBRW5ELEVBQUUsRUFBRUQsZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsR0FBSyxDQUFDRSxjQUFjLEdBQUdGLGdCQUFnQixDQUFDRyxnQkFBZ0I7Z0JBRXhELEVBQUUsRUFBRUQsY0FBYyxFQUFFLENBQUM7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsR0FBSyxDQUFDbkIsT0FBTyxHQUFHaUIsZ0JBQWdCLENBQUNJLFVBQVUsSUFDckNDLEtBQUssR0FBR3pCLE1BQU0sQ0FBQzBCLE9BQU8sQ0FBQ04sZ0JBQWdCLEdBQ3ZDTyxLQUFLLEdBQUdyQixRQUFRLENBQUNILE9BQU8sRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXBDLEVBQUUsRUFBRXdCLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsTUFBTSxDQUFDLElBQUk7Z0JBQ2IsQ0FBQztnQkFFRFAsZ0JBQWdCLEdBQUdPLEtBQUssQ0FBQ0MsV0FBVyxDQUFDekIsT0FBTztnQkFFNUMsR0FBSyxDQUFDMEIsS0FBSyxHQUFHSixLQUFLLEVBQ2JLLFdBQVcsR0FBRyxDQUFDO2dCQUVyQjlCLE1BQU0sQ0FBQytCLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFQyxXQUFXLEVBQUVWLGdCQUFnQjtnQkFFbERILFlBQVksQ0FBQ2UsbUJBQW1CLENBQUNaLGdCQUFnQjtnQkFFakQsTUFBTSxDQUFDakIsT0FBTztZQUNoQixDQUFDOzs7O1lBRU04QixHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsR0FBRyxDQUFDQSxLQUFLO1lBQUksQ0FBQzs7O1dBMUU3Q3BDLFNBQVM7O2VBNkVBQSxTQUFTIn0=