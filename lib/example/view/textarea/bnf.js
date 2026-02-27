"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BNFTextarea extends _textarea.default {
    getBNF() {
        const value = this.getValue(), bnf = value; ///
        return bnf;
    }
    setBNF(bnf) {
        const value = bnf;
        this.setValue(value);
    }
    parentContext() {
        const getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
        return {
            getBNF,
            setBNF
        };
    }
    static defaultProperties = {
        className: "bnf",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldEJORihibmYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGJuZjtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRCTkYgPSB0aGlzLmdldEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEJORiA9IHRoaXMuc2V0Qk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEJORixcbiAgICAgIHNldEJORlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0Qk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldEJORiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLG9CQUFvQkMsaUJBQVE7SUFDL0NDLFNBQVM7UUFDUCxNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsTUFBTUYsT0FBTyxHQUFHO1FBRXRCLE9BQU9FO0lBQ1Q7SUFFQUMsT0FBT0QsR0FBRyxFQUFFO1FBQ1YsTUFBTUYsUUFBUUU7UUFFZCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7SUFDaEI7SUFFQUssZ0JBQWdCO1FBQ2QsTUFBTU4sU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDOUJILFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBRXBDLE9BQVE7WUFDTlA7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0oifQ==