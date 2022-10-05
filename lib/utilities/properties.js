"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "propertiesFromContentLanguagePluginAndOptions", {
    enumerable: true,
    get: function() {
        return propertiesFromContentLanguagePluginAndOptions;
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRleHQgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IFt7XG4gICAgICAgICAgZ2V0VGV4dDogKCkgPT4gdGV4dCxcbiAgICAgICAgfV0sXG4gICAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzLFxuICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgIFBsdWdpblxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMiLCJjb250ZW50IiwibGFuZ3VhZ2UiLCJQbHVnaW4iLCJvcHRpb25zIiwidGV4dCIsImNoaWxkRWxlbWVudHMiLCJnZXRUZXh0IiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSw4Q0FBOENDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUNoRyxJQUFNQyxPQUFPSixTQUNQSyxnQkFBZ0I7UUFBQztZQUNmQyxTQUFTO3VCQUFNRjs7UUFDakI7S0FBRSxFQUNGRyxhQUFhQyxPQUFPQyxNQUFNLENBQUM7UUFDekJKLGVBQUFBO1FBQ0FKLFVBQUFBO1FBQ0FDLFFBQUFBO0lBQ0YsR0FBR0M7SUFFVCxPQUFPSTtBQUNUIn0=