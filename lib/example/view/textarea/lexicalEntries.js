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
        const value = this.getValue(), jsonString = value, json = JSON.parse(jsonString), lexicalEntries = json; ///
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const json = lexicalEntries, jsonString = JSON.stringify(json, null, 2), value = jsonString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAganNvblN0cmluZyA9IHZhbHVlLCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGpzb247ICAvLy9cblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QganNvbiA9IGxleGljYWxFbnRyaWVzLCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpLFxuICAgICAgICAgIHZhbHVlID0ganNvblN0cmluZzsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGV4aWNhbC1lbnRyaWVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwianNvblN0cmluZyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJsZXhpY2FsRW50cmllcyIsInNldExleGljYWxFbnRyaWVzIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGQTs7Ozs7O0FBRU4sTUFBTUEsK0JBQStCQyxpQkFBUTtJQUMxREMsb0JBQW9CO1FBQ2xCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUNiRyxPQUFPQyxLQUFLQyxLQUFLLENBQUNILGFBQ2xCSSxpQkFBaUJILE1BQU8sR0FBRztRQUVqQyxPQUFPRztJQUNUO0lBRUFDLGtCQUFrQkQsY0FBYyxFQUFFO1FBQ2hDLE1BQU1ILE9BQU9HLGdCQUNQSixhQUFhRSxLQUFLSSxTQUFTLENBQUNMLE1BQU0sTUFBTSxJQUN4Q0gsUUFBUUUsWUFBWSxHQUFHO1FBRTdCLElBQUksQ0FBQ08sUUFBUSxDQUFDVDtJQUNoQjtJQUVBVSxnQkFBZ0I7UUFDZCxNQUFNWCxvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ1ksSUFBSSxDQUFDLElBQUksR0FDcERKLG9CQUFvQixJQUFJLENBQUNBLGlCQUFpQixDQUFDSSxJQUFJLENBQUMsSUFBSTtRQUUxRCxPQUFRO1lBQ05aO1lBQ0FRO1FBQ0Y7SUFDRjtJQUVBLE9BQU9LLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKIn0=