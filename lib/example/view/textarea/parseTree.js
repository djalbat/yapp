"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParseTreeTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ParseTreeTextarea extends _textarea.default {
    setParseTree(parseTree) {
        if (parseTree !== null) {
            parseTree.shiftLine(); //
            const parseTreeString = parseTree.asString(), value = parseTreeString; ///
            this.setValue(value);
        } else {
            this.clearParseTree();
        }
    }
    clearParseTree() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    parentContext() {
        const setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
        return {
            setParseTree,
            clearParseTree
        };
    }
    static defaultProperties = {
        className: "tokens",
        spellCheck: "false",
        readOnly: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUGFyc2VUcmVlVGV4dGFyZWEiLCJUZXh0YXJlYSIsInNldFBhcnNlVHJlZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyUGFyc2VUcmVlIiwiRU1QVFlfU1RSSU5HIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztpRUFKQTsyQkFFUTs7Ozs7O0FBRWQsTUFBTUEsMEJBQTBCQyxpQkFBUTtJQUNyREMsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLElBQUlBLGNBQWMsTUFBTTtZQUN0QkEsVUFBVUMsU0FBUyxJQUFLLEVBQUU7WUFFMUIsTUFBTUMsa0JBQWtCRixVQUFVRyxRQUFRLElBQ3BDQyxRQUFRRixpQkFBa0IsR0FBRztZQUVuQyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0Q7UUFDaEIsT0FBTztZQUNMLElBQUksQ0FBQ0UsY0FBYztRQUNyQjtJQUNGO0lBRUFBLGlCQUFpQjtRQUNmLE1BQU1GLFFBQVFHLHVCQUFZO1FBRTFCLElBQUksQ0FBQ0YsUUFBUSxDQUFDRDtJQUNoQjtJQUVBSSxnQkFBZ0I7UUFDZCxNQUFNVCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDVSxJQUFJLENBQUMsSUFBSSxHQUMxQ0gsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUVwRCxPQUFRO1lBQ05WO1lBQ0FPO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFVBQVU7SUFDWixFQUFFO0FBQ0oifQ==