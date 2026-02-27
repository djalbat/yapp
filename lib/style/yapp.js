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
const _styles = require("../styles");
const _colour = require("../scheme/colour");
const yappStyle = `

  .yapp {
    width: 100%;
    height: 100%;
    border: 1px solid ${_colour.borderColour};
    background-color: ${_colour.backgroundColour};
    
    font-size: 13px;
    line-height: 20px;
    font-family: "Menlo", "Lucida Sans Typewriter", monospace;
    font-weight: normal;
    text-rendering: initial;
    font-feature-settings: initial;
  }    

  .yapp.fira-code {
    font-family: "Fira Code";
    text-rendering: optimizeLegibility;
    font-feature-settings: "calt" 1;
  }
  
  .yapp>.pretty-printer>.gutter {
    border-right: 1px dotted ${_colour.borderColour};
  }
  
  .yapp>.pretty-printer>.gutter>.line-numbers {
    color: ${_colour.colour};
    margin: 0 6px 0 6px;
    text-align: right;
  }
  
  .yapp>.pretty-printer textarea.rich {
    caret-color: ${_colour.caretColour};
  }

  .yapp>.pretty-printer textarea.rich::selection {
    color: ${_colour.selectionColour};
    background-color: ${_colour.selectionBackgroundColour};
  }
  
  .yapp>.pretty-printer textarea.rich.fancy-scrollbars {
    scrollbar-color: ${_colour.scrollbarColour} transparent;
    scrollbar-gutter: auto;
  }
  
  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar {
    width: ${_styles.scrollbarThickness};
    height: ${_styles.scrollbarThickness};
  }

  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar-track {
    display: none;
  }

  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar-thumb {
    border: 2px solid ${_colour.backgroundColour};
    border-radius: ${_styles.scrollbarThumbBorderRadius};
    background-color: ${_colour.scrollbarColour};
  }

  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar-corner {
    display: none;
  }

`;
const _default = yappStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY3JvbGxiYXJUaGlja25lc3MsIHNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBzY3JvbGxiYXJDb2xvdXIsIHNlbGVjdGlvbkNvbG91ciwgYmFja2dyb3VuZENvbG91ciwgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuLi9zY2hlbWUvY29sb3VyXCI7XG5cbmNvbnN0IHlhcHBTdHlsZSA9IGBcblxuICAueWFwcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1yZW5kZXJpbmc6IGluaXRpYWw7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbml0aWFsO1xuICB9ICAgIFxuXG4gIC55YXBwLmZpcmEtY29kZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7XG4gIH1cbiAgXG4gIC55YXBwPi5wcmV0dHktcHJpbnRlcj4uZ3V0dGVyIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgJHtib3JkZXJDb2xvdXJ9O1xuICB9XG4gIFxuICAueWFwcD4ucHJldHR5LXByaW50ZXI+Lmd1dHRlcj4ubGluZS1udW1iZXJzIHtcbiAgICBjb2xvcjogJHtjb2xvdXJ9O1xuICAgIG1hcmdpbjogMCA2cHggMCA2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC55YXBwPi5wcmV0dHktcHJpbnRlciB0ZXh0YXJlYS5yaWNoIHtcbiAgICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIH1cblxuICAueWFwcD4ucHJldHR5LXByaW50ZXIgdGV4dGFyZWEucmljaDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtzZWxlY3Rpb25Db2xvdXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2VsZWN0aW9uQmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgXG4gIC55YXBwPi5wcmV0dHktcHJpbnRlciB0ZXh0YXJlYS5yaWNoLmZhbmN5LXNjcm9sbGJhcnMge1xuICAgIHNjcm9sbGJhci1jb2xvcjogJHtzY3JvbGxiYXJDb2xvdXJ9IHRyYW5zcGFyZW50O1xuICAgIHNjcm9sbGJhci1ndXR0ZXI6IGF1dG87XG4gIH1cbiAgXG4gIC55YXBwPi5wcmV0dHktcHJpbnRlciB0ZXh0YXJlYS5yaWNoLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICAgIGhlaWdodDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICB9XG5cbiAgLnlhcHA+LnByZXR0eS1wcmludGVyIHRleHRhcmVhLnJpY2guZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAueWFwcD4ucHJldHR5LXByaW50ZXIgdGV4dGFyZWEucmljaC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3Njcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhckNvbG91cn07XG4gIH1cblxuICAueWFwcD4ucHJldHR5LXByaW50ZXIgdGV4dGFyZWEucmljaC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgeWFwcFN0eWxlO1xuIl0sIm5hbWVzIjpbInlhcHBTdHlsZSIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsInNlbGVjdGlvbkNvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb2xvdXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0VBOzs7ZUFBQTs7O3dCQXRFK0Q7d0JBQ2tFO0FBRWpJLE1BQU1BLFlBQVksQ0FBQzs7Ozs7c0JBS0csRUFBRUMsb0JBQVksQ0FBQztzQkFDZixFQUFFQyx3QkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBaUJaLEVBQUVELG9CQUFZLENBQUM7Ozs7V0FJakMsRUFBRUUsY0FBTSxDQUFDOzs7Ozs7aUJBTUgsRUFBRUMsbUJBQVcsQ0FBQzs7OztXQUlwQixFQUFFQyx1QkFBZSxDQUFDO3NCQUNQLEVBQUVDLGlDQUF5QixDQUFDOzs7O3FCQUk3QixFQUFFQyx1QkFBZSxDQUFDOzs7OztXQUs1QixFQUFFQywwQkFBa0IsQ0FBQztZQUNwQixFQUFFQSwwQkFBa0IsQ0FBQzs7Ozs7Ozs7c0JBUVgsRUFBRU4sd0JBQWdCLENBQUM7bUJBQ3RCLEVBQUVPLGtDQUEwQixDQUFDO3NCQUMxQixFQUFFRix1QkFBZSxDQUFDOzs7Ozs7O0FBT3hDLENBQUM7TUFFRCxXQUFlUCJ9