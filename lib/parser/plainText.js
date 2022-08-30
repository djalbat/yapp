"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextParser;
    }
});
var _occamParsers = require("occam-parsers");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var rulesFromBNF = _occamParsers.parserUtilities.rulesFromBNF, parserFromRules = _occamParsers.parserUtilities.parserFromRules;
var bnf = "\n\n  document                   ::=  .+ ;\n\n      ", rules = rulesFromBNF(bnf);
var PlainTextParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(PlainTextParser, CommonParser);
    var _super = _createSuper(PlainTextParser);
    function PlainTextParser() {
        _classCallCheck(this, PlainTextParser);
        return _super.apply(this, arguments);
    }
    _createClass(PlainTextParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return parserFromRules(PlainTextParser, rules);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(PlainTextParser, rules);
            }
        }
    ]);
    return PlainTextParser;
}(_occamParsers.CommonParser);
_defineProperty(PlainTextParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvcGxhaW5UZXh0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICAuKyA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIHBhcnNlckZyb21SdWxlcyhQbGFpblRleHRQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoUGxhaW5UZXh0UGFyc2VyLCBydWxlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUGxhaW5UZXh0UGFyc2VyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwiYm5mIiwicnVsZXMiLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBY1FBLGVBQWU7Ozs0QkFaUCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHNUMsSUFBUUMsWUFBWSxHQUFzQkMsYUFBZSxnQkFBQSxDQUFqREQsWUFBWSxFQUFFRSxlQUFlLEdBQUtELGFBQWUsZ0JBQUEsQ0FBbkNDLGVBQWUsQUFBcUI7QUFFMUQsSUFBTUMsR0FBRyxHQUFJLHNEQUlQLEFBQUMsRUFDREMsS0FBSyxHQUFHSixZQUFZLENBQUNHLEdBQUcsQ0FBQyxBQUFDO0FBRWpCLElBQUEsQUFBTUosZUFBZSxpQkFBckI7Y0FBTUEsZUFBZTs4QkFBZkEsZUFBZTthQUFmQSxlQUFlOzhCQUFmQSxlQUFlOzs7aUJBQWZBLGVBQWU7O1lBRzNCTSxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPSCxlQUFlLENBSDFCSCxlQUFlLEVBRzZCSyxLQUFLLENBQUMsQ0FBQztZQUFDLENBQUM7OztZQUVqRUUsR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNGLEtBQUssRUFBRTtnQkFBRSxPQUFPRyxhQUFZLGFBQUEsQ0FBQ0QsU0FBUyxDQUxwQ1AsZUFBZSxFQUt1Q0ssS0FBSyxDQUFDLENBQUM7WUFBQyxDQUFDOzs7V0FML0RMLGVBQWU7Q0FNbkMsQ0FONENRLGFBQVksYUFBQSxDQU14RDtBQUxDLGdCQURtQlIsZUFBZSxFQUMzQkksS0FBRyxFQUFHQSxHQUFHLENBQUMifQ==