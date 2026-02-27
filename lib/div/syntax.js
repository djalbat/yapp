"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SyntaxDiv extends _easy.Element {
    updateLanguage(language) {
        this.removeLanguageClass();
        this.setLanguage(language);
        this.addLanguageClass();
    }
    addLanguageClass() {
        const language = this.getLanguage();
        if (language !== null) {
            const languageClass = language; ///
            this.addClass(languageClass);
        }
    }
    removeLanguageClass() {
        const language = this.getLanguage();
        if (language !== null) {
            const languageClass = language; ///
            this.removeClass(languageClass);
        }
    }
    update(tokens) {
        const html = tokens.reduce((html, token)=>{
            const tokenHTML = token.asHTML();
            html += tokenHTML;
            return html;
        }, _constants.EMPTY_STRING);
        this.html(html);
    }
    scroll(scrollTop, scrollLeft) {
        const top = `${-scrollTop}px`, left = `${-scrollLeft}px`, css = {
            top,
            left
        };
        this.css(css);
    }
    getLanguage() {
        const { language } = this.getState();
        return language;
    }
    setLanguage(language) {
        this.updateState({
            language
        });
    }
    setInitialState() {
        const language = null;
        this.setState({
            language
        });
    }
    parentContext() {
        const updateLanguage = this.updateLanguage.bind(this), updateSyntaxDiv = this.update.bind(this), scrollSyntaxDiv = this.scroll.bind(this); ///
        return {
            updateLanguage,
            updateSyntaxDiv,
            scrollSyntaxDiv
        };
    }
    initialise() {
        this.setInitialState();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "syntax"
    };
}
const _default = (0, _easywithstyle.default)(SyntaxDiv)`

  position: relative;
  white-space: pre;
  user-select: none;
  pointer-events: none;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3ludGF4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgU3ludGF4RGl2IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgIGlmIChsYW5ndWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZ3VhZ2U7IC8vL1xyXG5cclxuICAgICAgdGhpcy5hZGRDbGFzcyhsYW5ndWFnZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUxhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHsgLy8vXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XHJcblxyXG4gICAgdGhpcy5odG1sKGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBsZWZ0ID0gYCR7LXNjcm9sbExlZnR9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgIGxlZnRcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIGdldExhbmd1YWdlKCkge1xyXG4gICAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGFuZ3VhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgdXBkYXRlTGFuZ3VhZ2UgPSB0aGlzLnVwZGF0ZUxhbmd1YWdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB1cGRhdGVTeW50YXhEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheERpdiA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgdXBkYXRlTGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheERpdixcclxuICAgICAgc2Nyb2xsU3ludGF4RGl2XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4RGl2KWBcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiU3ludGF4RGl2IiwiRWxlbWVudCIsInVwZGF0ZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJyZW1vdmVMYW5ndWFnZUNsYXNzIiwic2V0TGFuZ3VhZ2UiLCJhZGRMYW5ndWFnZUNsYXNzIiwiZ2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZSIsInRva2VucyIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImFzSFRNTCIsIkVNUFRZX1NUUklORyIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ0b3AiLCJsZWZ0IiwiY3NzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVTeW50YXhEaXYiLCJzY3JvbGxTeW50YXhEaXYiLCJpbml0aWFsaXNlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1R0E7OztlQUFBOzs7c0VBckdzQjtzQkFFRTsyQkFFSzs7Ozs7O0FBRTdCLE1BQU1BLGtCQUFrQkMsYUFBTztJQUM3QkMsZUFBZUMsUUFBUSxFQUFFO1FBQ3ZCLElBQUksQ0FBQ0MsbUJBQW1CO1FBRXhCLElBQUksQ0FBQ0MsV0FBVyxDQUFDRjtRQUVqQixJQUFJLENBQUNHLGdCQUFnQjtJQUN2QjtJQUVBQSxtQkFBbUI7UUFDakIsTUFBTUgsV0FBVyxJQUFJLENBQUNJLFdBQVc7UUFFakMsSUFBSUosYUFBYSxNQUFNO1lBQ3JCLE1BQU1LLGdCQUFnQkwsVUFBVSxHQUFHO1lBRW5DLElBQUksQ0FBQ00sUUFBUSxDQUFDRDtRQUNoQjtJQUNGO0lBRUFKLHNCQUFzQjtRQUNwQixNQUFNRCxXQUFXLElBQUksQ0FBQ0ksV0FBVztRQUVqQyxJQUFJSixhQUFhLE1BQU07WUFDckIsTUFBTUssZ0JBQWdCTCxVQUFVLEdBQUc7WUFFbkMsSUFBSSxDQUFDTyxXQUFXLENBQUNGO1FBQ25CO0lBQ0Y7SUFFQUcsT0FBT0MsTUFBTSxFQUFFO1FBQ2IsTUFBTUMsT0FBT0QsT0FBT0UsTUFBTSxDQUFDLENBQUNELE1BQU1FO1lBQzFCLE1BQU1DLFlBQVlELE1BQU1FLE1BQU07WUFFOUJKLFFBQVFHO1lBRVIsT0FBT0g7UUFDVCxHQUFHSyx1QkFBWTtRQUVyQixJQUFJLENBQUNMLElBQUksQ0FBQ0E7SUFDWjtJQUVBTSxPQUFPQyxTQUFTLEVBQUVDLFVBQVUsRUFBRTtRQUM1QixNQUFNQyxNQUFNLEdBQUcsQ0FBQ0YsVUFBVSxFQUFFLENBQUMsRUFDdkJHLE9BQU8sR0FBRyxDQUFDRixXQUFXLEVBQUUsQ0FBQyxFQUN6QkcsTUFBTTtZQUNKRjtZQUNBQztRQUNGO1FBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO0lBQ1g7SUFFQWpCLGNBQWM7UUFDWixNQUFNLEVBQUVKLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQ3NCLFFBQVE7UUFFbEMsT0FBT3RCO0lBQ1Q7SUFFQUUsWUFBWUYsUUFBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQ3VCLFdBQVcsQ0FBQztZQUNmdkI7UUFDRjtJQUNGO0lBRUF3QixrQkFBa0I7UUFDaEIsTUFBTXhCLFdBQVc7UUFFakIsSUFBSSxDQUFDeUIsUUFBUSxDQUFDO1lBQ1p6QjtRQUNGO0lBQ0Y7SUFFQTBCLGdCQUFnQjtRQUNmLE1BQU0zQixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUM0QixJQUFJLENBQUMsSUFBSSxHQUM3Q0Msa0JBQWtCLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQ21CLElBQUksQ0FBQyxJQUFJLEdBQzNDRSxrQkFBa0IsSUFBSSxDQUFDYixNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztRQUVoRCxPQUFRO1lBQ041QjtZQUNBNkI7WUFDQUM7UUFDRjtJQUNGO0lBRUFDLGFBQWE7UUFDWCxJQUFJLENBQUNOLGVBQWU7SUFDdEI7SUFFQSxPQUFPTyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JDLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjcEMsQ0FBQyJ9