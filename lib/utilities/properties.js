"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.propertiesFromContentLanguagePluginAndOptions = propertiesFromContentLanguagePluginAndOptions;
function propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options) {
    var text = content, childElements = [
        {
            getText: function() {
                return text;
            }
        }
    ], properties = Object.assign({
        childElements: childElements,
        language: language,
        Plugin: Plugin
    }, options);
    return properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRleHQgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IFt7XG4gICAgICAgICAgZ2V0VGV4dDogKCkgPT4gdGV4dCxcbiAgICAgICAgfV0sXG4gICAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzLFxuICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgIFBsdWdpblxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMiLCJjb250ZW50IiwibGFuZ3VhZ2UiLCJQbHVnaW4iLCJvcHRpb25zIiwidGV4dCIsImNoaWxkRWxlbWVudHMiLCJnZXRUZXh0IiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO1FBRWdCQSw2Q0FBNkMsR0FBN0NBLDZDQUE2QyxBQUY3RDtTQUVnQkEsNkNBQTZDLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxDQUFDO0lBQ2pHLEdBQUssQ0FBQ0MsSUFBSSxHQUFHSixPQUFPLEVBQ2RLLGFBQWEsR0FBRyxDQUFDO1FBQUEsQ0FBQztZQUNoQkMsT0FBTyxFQUFFLFFBQVE7dUJBQUZGLElBQUk7O1FBQ3JCLENBQUM7SUFBQSxDQUFDLEVBQ0ZHLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUMxQkosYUFBYSxFQUFiQSxhQUFhO1FBQ2JKLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxNQUFNLEVBQU5BLE1BQU07SUFDUixDQUFDLEVBQUVDLE9BQU87SUFFaEIsTUFBTSxDQUFDSSxVQUFVO0FBQ25CLENBQUMifQ==