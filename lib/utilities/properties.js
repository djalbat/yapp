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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMiLCJjb250ZW50IiwibGFuZ3VhZ2UiLCJQbHVnaW4iLCJvcHRpb25zIiwidGV4dCIsImNoaWxkRWxlbWVudHMiLCJnZXRUZXh0IiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJLDZDQUE2QyxHQUE3Qyw2Q0FBNkM7U0FBN0MsNkNBQTZDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDakcsR0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLEVBQ2QsYUFBYSxHQUFHLENBQUM7UUFBQSxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxRQUFRO2dCQUFGLE1BQ3pCLENBRHlCLElBQUk7O1FBQ3JCLENBQUM7SUFBQSxDQUFDLEVBQ0YsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixhQUFhLEVBQWIsYUFBYTtRQUNiLFFBQVEsRUFBUixRQUFRO1FBQ1IsTUFBTSxFQUFOLE1BQU07SUFDUixDQUFDLEVBQUUsT0FBTztJQUVoQixNQUFNLENBQUMsVUFBVTtBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICBjb25zdCB0ZXh0ID0gY29udGVudCwgLy8vXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBbe1xuICAgICAgICAgIGdldFRleHQ6ICgpID0+IHRleHQsXG4gICAgICAgIH1dLFxuICAgICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgY2hpbGRFbGVtZW50cyxcbiAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICBQbHVnaW5cbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4iXX0=