"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LexicalEntriesTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        const value = this.getValue(), lexicalEntries = JSON.parse(value);
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const value = JSON.stringify(lexicalEntries, null, 2);
        this.setValue(value);
    }
    parentContext() {
        const getLexicalEntries = this.getLexicalEntries.bind(this), setLexicalEntries = this.setLexicalEntries.bind(this);
        return {
            getLexicalEntries,
            setLexicalEntries
        };
    }
    static defaultProperties = {
        className: "lexical-entries",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgMik7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGV4aWNhbC1lbnRyaWVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbEVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzZXRMZXhpY2FsRW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLCtCQUErQkMsaUJBQVE7SUFDMURDLG9CQUFvQjtRQUNsQixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsaUJBQWlCQyxLQUFLQyxLQUFLLENBQUNKO1FBRWxDLE9BQU9FO0lBQ1Q7SUFFQUcsa0JBQWtCSCxjQUFjLEVBQUU7UUFDaEMsTUFBTUYsUUFBUUcsS0FBS0csU0FBUyxDQUFDSixnQkFBZ0IsTUFBTTtRQUVuRCxJQUFJLENBQUNLLFFBQVEsQ0FBQ1A7SUFDaEI7SUFFQVEsZ0JBQWdCO1FBQ2QsTUFBTVQsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNVLElBQUksQ0FBQyxJQUFJLEdBQ3BESixvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0ksSUFBSSxDQUFDLElBQUk7UUFFMUQsT0FBUTtZQUNOVjtZQUNBTTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSiJ9