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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgTmFtZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9uYW1lXCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcbmltcG9ydCBDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2NvbW1lbnRcIjtcbmltcG9ydCBBdHRyaWJ1dGVUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXR0cmlidXRlXCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9uYW1lL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2F0dHJpYnV0ZS9AaWRlbnRpZmllclwiKSxcbiAgICAgIGNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb21tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBFcnJvclRva2VuLCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gTmFtZVRva2VuLCBuYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBBdHRyaWJ1dGVUb2tlbiwgYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gQ29tbWVudFRva2VuLCBjb21tZW50Tm9uVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhYTUxQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVYLEdBQWMsQ0FBZCxVQUFjO0FBQ2QsR0FBMkIsQ0FBM0IsS0FBMkI7QUFDMUIsR0FBNEIsQ0FBNUIsTUFBNEI7QUFDMUIsR0FBOEIsQ0FBOUIsUUFBOEI7QUFDNUIsR0FBZ0MsQ0FBaEMsVUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxHQUFLLENBQUMscUJBQXFCLEdBUkwsU0FBVyxPQVFHLGNBQWMsRUFBQyxTQUFXLElBQ3hELHNCQUFzQixHQVROLFNBQVcsT0FTSSxjQUFjLEVBQUMsVUFBWSxJQUMxRCwwQkFBMEIsR0FWVixTQUFXLE9BVVEsY0FBYyxFQUFDLHVCQUF5QixJQUMzRSwyQkFBMkIsR0FYWCxTQUFXLE9BV1MsY0FBYyxFQUFDLFNBQVc7SUFFL0MsWUFBWTtjQUFaLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDL0IsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDckIsRUFBRSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQzt5QkFDYixvQ0FBb0MsQ0FBQyxNQUFNLEVBQUUsSUFBSSxXQUFHLE9BQU87K0JBWi9DLE1BQTRCO3VCQVlvQyxzQkFBc0I7eUJBRWxHLG9DQUFvQyxDQUFDLE1BQU0sRUFBRSxJQUFJLFdBQUcsT0FBTzsrQkFmaEQsS0FBMkI7dUJBZXFDLHFCQUFxQjt5QkFFaEcsb0NBQW9DLENBQUMsTUFBTSxFQUFFLElBQUksV0FBRyxPQUFPOytCQWQzQyxVQUFnQzt1QkFjZ0MsMEJBQTBCO3lCQUUxRyx3Q0FBd0MsQ0FBQyxNQUFNLEVBQUUsSUFBSSxXQUFHLE9BQU87K0JBakJqRCxRQUE4Qjt1QkFpQnNDLDJCQUEyQjtnQkFDcEgsQ0FBQztZQUNILENBQUM7Ozs7WUFFTSxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzt1QkF4QkYsVUFBYyxTQXdCTSxXQUFXLENBQUMsWUFBWTtZQUFHLENBQUM7OztXQWJqRCxZQUFZO0VBWFgsVUFBYztrQkFXZixZQUFZIn0=