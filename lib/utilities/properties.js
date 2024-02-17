"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "propertiesFromContentAndOptions", {
    enumerable: true,
    get: function() {
        return propertiesFromContentAndOptions;
    }
});
function propertiesFromContentAndOptions(content, options) {
    var text = content, childElements = [
        {
            getText: function() {
                return text;
            }
        }
    ], properties = Object.assign({}, options, {
        childElements: childElements
    });
    return properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29udGVudEFuZE9wdGlvbnMoY29udGVudCwgb3B0aW9ucykge1xuICBjb25zdCB0ZXh0ID0gY29udGVudCwgLy8vXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBbe1xuICAgICAgICAgIGdldFRleHQ6ICgpID0+IHRleHQsXG4gICAgICAgIH1dLFxuICAgICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzXG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbInByb3BlcnRpZXNGcm9tQ29udGVudEFuZE9wdGlvbnMiLCJjb250ZW50Iiwib3B0aW9ucyIsInRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0VGV4dCIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsZ0NBQWdDQyxPQUFPLEVBQUVDLE9BQU87SUFDOUQsSUFBTUMsT0FBT0YsU0FDUEcsZ0JBQWdCO1FBQUM7WUFDZkMsU0FBUzt1QkFBTUY7O1FBQ2pCO0tBQUUsRUFDRkcsYUFBYUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR04sU0FBUztRQUN0Q0UsZUFBQUE7SUFDRjtJQUVOLE9BQU9FO0FBQ1QifQ==