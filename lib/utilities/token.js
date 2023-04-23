"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "tokenAsHTML", {
    enumerable: true,
    get: function() {
        return tokenAsHTML;
    }
});
var _content = require("../utilities/content");
function tokenAsHTML(token) {
    var type = token.getType(), content = token.getContent(), sanitisedContent = (0, _content.sanitiseContent)(content), className = type, html = '<span class="'.concat(className, '">').concat(sanitisedContent, "</span>");
    return html;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNhbml0aXNlQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5Bc0hUTUwodG9rZW4pIHtcbiAgY29uc3QgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZSwgLy8vXG4gICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3Nhbml0aXNlZENvbnRlbnR9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbn1cblxuIl0sIm5hbWVzIjpbInRva2VuQXNIVE1MIiwidG9rZW4iLCJ0eXBlIiwiZ2V0VHlwZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImNsYXNzTmFtZSIsImh0bWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3VCQUZnQjtBQUV6QixTQUFTQSxZQUFZQyxLQUFLLEVBQUU7SUFDakMsSUFBTUMsT0FBT0QsTUFBTUUsT0FBTyxJQUNwQkMsVUFBVUgsTUFBTUksVUFBVSxJQUMxQkMsbUJBQW1CQyxJQUFBQSx3QkFBZSxFQUFDSCxVQUNuQ0ksWUFBWU4sTUFDWk8sT0FBTyxBQUFDLGdCQUE2QkgsT0FBZEUsV0FBVSxNQUFxQixPQUFqQkYsa0JBQWlCO0lBRTFELE9BQU9HO0FBQ1gifQ==