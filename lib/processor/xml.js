"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _processor = _interopRequireDefault(require("../processor"));
var _name = _interopRequireDefault(require("../token/significant/name"));
var _error = _interopRequireDefault(require("../token/significant/error"));
var _comment = _interopRequireDefault(require("../token/significant/comment"));
var _attribute = _interopRequireDefault(require("../token/significant/attribute"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var nameTerminalNodeQuery = _occamDom.Query.fromExpression("//name/@*"), errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"), attributeTerminalNodeQuery = _occamDom.Query.fromExpression("//attribute/@identifier"), commentNonTerminalNodeQuery = _occamDom.Query.fromExpression("//comment");
var XMLProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(XMLProcessor, Processor);
    function XMLProcessor() {
        _classCallCheck(this, XMLProcessor);
        return _possibleConstructorReturn(this, _getPrototypeOf(XMLProcessor).apply(this, arguments));
    }
    _createClass(XMLProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node !== null) {
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _error.default;
                    }, errorTerminalNodeQuery);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _name.default;
                    }, nameTerminalNodeQuery);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _attribute.default;
                    }, attributeTerminalNodeQuery);
                    this.replaceNonTerminalNodesSignificantTokens(tokens, node, function(content) {
                        return _comment.default;
                    }, commentNonTerminalNodeQuery);
                }
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _processor.default.fromNothing(XMLProcessor);
            }
        }
    ]);
    return XMLProcessor;
}(_processor.default);
exports.default = XMLProcessor;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IveG1sLmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiUHJvY2Vzc29yIiwiTmFtZVRva2VuIiwiRXJyb3JUb2tlbiIsIkNvbW1lbnRUb2tlbiIsIkF0dHJpYnV0ZVRva2VuIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkiLCJjb21tZW50Tm9uVGVybWluYWxOb2RlUXVlcnkiLCJYTUxQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFWCxHQUFjLENBQWQsVUFBYztBQUNkLEdBQTJCLENBQTNCLEtBQTJCO0FBQzFCLEdBQTRCLENBQTVCLE1BQTRCO0FBQzFCLEdBQThCLENBQTlCLFFBQThCO0FBQzVCLEdBQWdDLENBQWhDLFVBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsR0FBSyxDQUFDLHFCQUFxQixHQVJMLFNBQVcsT0FRRyxjQUFjLEVBQUMsU0FBVyxJQUN4RCxzQkFBc0IsR0FUTixTQUFXLE9BU0ksY0FBYyxFQUFDLFVBQVksSUFDMUQsMEJBQTBCLEdBVlYsU0FBVyxPQVVRLGNBQWMsRUFBQyx1QkFBeUIsSUFDM0UsMkJBQTJCLEdBWFgsU0FBVyxPQVdTLGNBQWMsRUFBQyxTQUFXO0lBRS9DLFlBQVksaUJBQWxCLFFBQVE7Y0FBRixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBQy9CLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNyQixFQUFFLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsb0NBQW9DLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQVAsT0FBTzt3QkFBSyxNQUFNLENBWjFELE1BQTRCO3VCQVlvQyxzQkFBc0I7b0JBRXZHLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBUCxPQUFPO3dCQUFLLE1BQU0sQ0FmM0QsS0FBMkI7dUJBZXFDLHFCQUFxQjtvQkFFckcsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFQLE9BQU87d0JBQUssTUFBTSxDQWR0RCxVQUFnQzt1QkFjZ0MsMEJBQTBCO29CQUUvRyxJQUFJLENBQUMsd0NBQXdDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQVAsT0FBTzt3QkFBSyxNQUFNLENBakI1RCxRQUE4Qjt1QkFpQnNDLDJCQUEyQjtnQkFDcEgsQ0FBQztZQUNILENBQUM7Ozs7WUFFTSxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0F4QlQsVUFBYyxTQXdCTSxXQUFXLENBQUMsWUFBWTtZQUFHLENBQUM7OztXQWJqRCxZQUFZO0VBWFgsVUFBYztrQkFXZixZQUFZIn0=