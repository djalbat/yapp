"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "propertiesFromContentAndConfiguration", {
    enumerable: true,
    get: function() {
        return propertiesFromContentAndConfiguration;
    }
});
function propertiesFromContentAndConfiguration(content, configuration) {
    var text = content, childElements = [
        {
            getText: function() {
                return text;
            }
        }
    ], properties = Object.assign({}, configuration, {
        childElements: childElements
    });
    return properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbikge1xuICBjb25zdCB0ZXh0ID0gY29udGVudCwgLy8vXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBbe1xuICAgICAgICAgIGdldFRleHQ6ICgpID0+IHRleHQsXG4gICAgICAgIH1dLFxuICAgICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlndXJhdGlvbiwgeyAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzXG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbInByb3BlcnRpZXNGcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJjb250ZW50IiwiY29uZmlndXJhdGlvbiIsInRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0VGV4dCIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0Esc0NBQXNDQyxPQUFPLEVBQUVDLGFBQWE7SUFDMUUsSUFBTUMsT0FBT0YsU0FDUEcsZ0JBQWdCO1FBQUM7WUFDZkMsU0FBUzt1QkFBTUY7O1FBQ2pCO0tBQUUsRUFDRkcsYUFBYUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR04sZUFBZTtRQUM1Q0UsZUFBQUE7SUFDRjtJQUVOLE9BQU9FO0FBQ1QifQ==