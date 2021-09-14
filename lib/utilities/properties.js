"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.propertiesFromContentLanguagePluginAndOptions = propertiesFromContentLanguagePluginAndOptions;
function propertiesFromContentLanguagePluginAndOptions(content, language, Plugin1, options) {
    var text = content, childElements = [
        {
            getText: function() {
                return text;
            }
        }
    ], properties = Object.assign({
        childElements: childElements,
        language: language,
        Plugin: Plugin1
    }, options);
    return properties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRleHQgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IFt7XG4gICAgICAgICAgZ2V0VGV4dDogKCkgPT4gdGV4dCxcbiAgICAgICAgfV0sXG4gICAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzLFxuICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgIFBsdWdpblxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksNkNBQTZDLEdBQTdDLDZDQUE2QztTQUE3Qyw2Q0FBNkMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNqRyxHQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFDZCxhQUFhOztZQUNYLE9BQU87dUJBQVEsSUFBSTs7O09BRXJCLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTTtRQUN4QixhQUFhLEVBQWIsYUFBYTtRQUNiLFFBQVEsRUFBUixRQUFRO1FBQ1IsTUFBTSxFQUFOLE9BQU07T0FDTCxPQUFPO1dBRVQsVUFBVTtBQUNuQixDQUFDIn0=