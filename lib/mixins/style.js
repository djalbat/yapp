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
var _css = require("../utilities/css");
var _constants = require("../constants");
function getLineHeight() {
    var lineHeightInPixels = this.css(_constants.LINE_HEIGHT), lineHeight = (0, _css.stripPixels)(lineHeightInPixels);
    return lineHeight;
}
function getPadding(side) {
    var paddingInPixels = this.css("padding-".concat(side)), padding = (0, _css.stripPixels)(paddingInPixels);
    return padding;
}
function getBorderWidth(side) {
    var borderWidthInPixels = this.css("border-".concat(side, "-width")), borderWidth = (0, _css.stripPixels)(borderWidthInPixels);
    return borderWidth;
}
function getPaddingTop() {
    var side = _constants.TOP, paddingTop = this.getPadding(side);
    return paddingTop;
}
function getPaddingLeft() {
    var side = _constants.LEFT, paddingLeft = this.getPadding(side);
    return paddingLeft;
}
function getPaddingRight() {
    var side = _constants.RIGHT, paddingRight = this.getPadding(side);
    return paddingRight;
}
function getPaddingBottom() {
    var side = _constants.BOTTOM, paddingBottom = this.getPadding(side);
    return paddingBottom;
}
function getBorderTopWidth() {
    var side = _constants.TOP, borderTopWidth = this.getBorderWidth(side);
    return borderTopWidth;
}
function getBorderLeftWidth() {
    var side = _constants.LEFT, borderLeftWidth = this.getBorderWidth(side);
    return borderLeftWidth;
}
function getBorderRightWidth() {
    var side = _constants.RIGHT, borderRightWidth = this.getBorderWidth(side);
    return borderRightWidth;
}
function getBorderBottomWidth() {
    var side = _constants.BOTTOM, borderBottomWidth = this.getBorderWidth(side);
    return borderBottomWidth;
}
var styleMixins = {
    getLineHeight: getLineHeight,
    getPadding: getPadding,
    getPaddingTop: getPaddingTop,
    getPaddingLeft: getPaddingLeft,
    getPaddingRight: getPaddingRight,
    getPaddingBottom: getPaddingBottom,
    getBorderWidth: getBorderWidth,
    getBorderTopWidth: getBorderTopWidth,
    getBorderLeftWidth: getBorderLeftWidth,
    getBorderRightWidth: getBorderRightWidth,
    getBorderBottomWidth: getBorderBottomWidth
};
var _default = styleMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IFRPUCwgTEVGVCwgUklHSFQsIEJPVFRPTSwgTElORV9IRUlHSFQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGdldExpbmVIZWlnaHQoKSB7XG4gIGNvbnN0IGxpbmVIZWlnaHRJblBpeGVscyA9IHRoaXMuY3NzKExJTkVfSEVJR0hUKSxcbiAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgcmV0dXJuIGxpbmVIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmcoc2lkZSkge1xuICBjb25zdCBwYWRkaW5nSW5QaXhlbHMgPSB0aGlzLmNzcyhgcGFkZGluZy0ke3NpZGV9YCksXG4gICAgICAgIHBhZGRpbmcgPSBzdHJpcFBpeGVscyhwYWRkaW5nSW5QaXhlbHMpO1xuXG4gIHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRCb3JkZXJXaWR0aChzaWRlKSB7XG4gIGNvbnN0IGJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhgYm9yZGVyLSR7c2lkZX0td2lkdGhgKSxcbiAgICAgICAgYm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICByZXR1cm4gYm9yZGVyV2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdUb3AoKSB7XG4gIGNvbnN0IHNpZGUgPSBUT1AsXG4gICAgICAgIHBhZGRpbmdUb3AgPSB0aGlzLmdldFBhZGRpbmcoc2lkZSk7XG5cbiAgcmV0dXJuIHBhZGRpbmdUb3A7XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdMZWZ0KCkge1xuICBjb25zdCBzaWRlID0gTEVGVCxcbiAgICAgICAgcGFkZGluZ0xlZnQgPSB0aGlzLmdldFBhZGRpbmcoc2lkZSk7XG5cbiAgcmV0dXJuIHBhZGRpbmdMZWZ0O1xufVxuXG5mdW5jdGlvbiBnZXRQYWRkaW5nUmlnaHQoKSB7XG4gIGNvbnN0IHNpZGUgPSBSSUdIVCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0ID0gdGhpcy5nZXRQYWRkaW5nKHNpZGUpO1xuXG4gIHJldHVybiBwYWRkaW5nUmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdCb3R0b20oKSB7XG4gIGNvbnN0IHNpZGUgPSBCT1RUT00sXG4gICAgICAgIHBhZGRpbmdCb3R0b20gPSB0aGlzLmdldFBhZGRpbmcoc2lkZSk7XG5cbiAgcmV0dXJuIHBhZGRpbmdCb3R0b207XG59XG5cbmZ1bmN0aW9uIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICBjb25zdCBzaWRlID0gVE9QLFxuICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xufVxuXG5mdW5jdGlvbiBnZXRCb3JkZXJMZWZ0V2lkdGgoKSB7XG4gIGNvbnN0IHNpZGUgPSBMRUZULFxuICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gIHJldHVybiBib3JkZXJMZWZ0V2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldEJvcmRlclJpZ2h0V2lkdGgoKSB7XG4gIGNvbnN0IHNpZGUgPSBSSUdIVCxcbiAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgcmV0dXJuIGJvcmRlclJpZ2h0V2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICBjb25zdCBzaWRlID0gQk9UVE9NLFxuICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgcmV0dXJuIGJvcmRlckJvdHRvbVdpZHRoO1xufVxuXG5jb25zdCBzdHlsZU1peGlucyA9IHtcbiAgZ2V0TGluZUhlaWdodCxcbiAgZ2V0UGFkZGluZyxcbiAgZ2V0UGFkZGluZ1RvcCxcbiAgZ2V0UGFkZGluZ0xlZnQsXG4gIGdldFBhZGRpbmdSaWdodCxcbiAgZ2V0UGFkZGluZ0JvdHRvbSxcbiAgZ2V0Qm9yZGVyV2lkdGgsXG4gIGdldEJvcmRlclRvcFdpZHRoLFxuICBnZXRCb3JkZXJMZWZ0V2lkdGgsXG4gIGdldEJvcmRlclJpZ2h0V2lkdGgsXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZU1peGlucztcbiJdLCJuYW1lcyI6WyJnZXRMaW5lSGVpZ2h0IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwiTElORV9IRUlHSFQiLCJsaW5lSGVpZ2h0Iiwic3RyaXBQaXhlbHMiLCJnZXRQYWRkaW5nIiwic2lkZSIsInBhZGRpbmdJblBpeGVscyIsInBhZGRpbmciLCJnZXRCb3JkZXJXaWR0aCIsImJvcmRlcldpZHRoSW5QaXhlbHMiLCJib3JkZXJXaWR0aCIsImdldFBhZGRpbmdUb3AiLCJUT1AiLCJwYWRkaW5nVG9wIiwiZ2V0UGFkZGluZ0xlZnQiLCJMRUZUIiwicGFkZGluZ0xlZnQiLCJnZXRQYWRkaW5nUmlnaHQiLCJSSUdIVCIsInBhZGRpbmdSaWdodCIsImdldFBhZGRpbmdCb3R0b20iLCJCT1RUT00iLCJwYWRkaW5nQm90dG9tIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiZ2V0Qm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsInN0eWxlTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0dBOzs7ZUFBQTs7O21CQTlGNEI7eUJBQzBCO0FBRXRELFNBQVNBO0lBQ1AsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxzQkFBVyxHQUN6Q0MsYUFBYUMsSUFBQUEsZ0JBQVcsRUFBQ0o7SUFFL0IsT0FBT0c7QUFDVDtBQUVBLFNBQVNFLFdBQVdDLElBQUk7SUFDdEIsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ04sR0FBRyxDQUFDLEFBQUMsV0FBZSxPQUFMSyxRQUN0Q0UsVUFBVUosSUFBQUEsZ0JBQVcsRUFBQ0c7SUFFNUIsT0FBT0M7QUFDVDtBQUVBLFNBQVNDLGVBQWVILElBQUk7SUFDMUIsSUFBTUksc0JBQXNCLElBQUksQ0FBQ1QsR0FBRyxDQUFDLEFBQUMsVUFBYyxPQUFMSyxNQUFLLFlBQzlDSyxjQUFjUCxJQUFBQSxnQkFBVyxFQUFDTTtJQUVoQyxPQUFPQztBQUNUO0FBRUEsU0FBU0M7SUFDUCxJQUFNTixPQUFPTyxjQUFHLEVBQ1ZDLGFBQWEsSUFBSSxDQUFDVCxVQUFVLENBQUNDO0lBRW5DLE9BQU9RO0FBQ1Q7QUFFQSxTQUFTQztJQUNQLElBQU1ULE9BQU9VLGVBQUksRUFDWEMsY0FBYyxJQUFJLENBQUNaLFVBQVUsQ0FBQ0M7SUFFcEMsT0FBT1c7QUFDVDtBQUVBLFNBQVNDO0lBQ1AsSUFBTVosT0FBT2EsZ0JBQUssRUFDWkMsZUFBZSxJQUFJLENBQUNmLFVBQVUsQ0FBQ0M7SUFFckMsT0FBT2M7QUFDVDtBQUVBLFNBQVNDO0lBQ1AsSUFBTWYsT0FBT2dCLGlCQUFNLEVBQ2JDLGdCQUFnQixJQUFJLENBQUNsQixVQUFVLENBQUNDO0lBRXRDLE9BQU9pQjtBQUNUO0FBRUEsU0FBU0M7SUFDUCxJQUFNbEIsT0FBT08sY0FBRyxFQUNWWSxpQkFBaUIsSUFBSSxDQUFDaEIsY0FBYyxDQUFDSDtJQUUzQyxPQUFPbUI7QUFDVDtBQUVBLFNBQVNDO0lBQ1AsSUFBTXBCLE9BQU9VLGVBQUksRUFDWFcsa0JBQWtCLElBQUksQ0FBQ2xCLGNBQWMsQ0FBQ0g7SUFFNUMsT0FBT3FCO0FBQ1Q7QUFFQSxTQUFTQztJQUNQLElBQU10QixPQUFPYSxnQkFBSyxFQUNaVSxtQkFBbUIsSUFBSSxDQUFDcEIsY0FBYyxDQUFDSDtJQUU3QyxPQUFPdUI7QUFDVDtBQUVBLFNBQVNDO0lBQ1AsSUFBTXhCLE9BQU9nQixpQkFBTSxFQUNiUyxvQkFBb0IsSUFBSSxDQUFDdEIsY0FBYyxDQUFDSDtJQUU5QyxPQUFPeUI7QUFDVDtBQUVBLElBQU1DLGNBQWM7SUFDbEJqQyxlQUFBQTtJQUNBTSxZQUFBQTtJQUNBTyxlQUFBQTtJQUNBRyxnQkFBQUE7SUFDQUcsaUJBQUFBO0lBQ0FHLGtCQUFBQTtJQUNBWixnQkFBQUE7SUFDQWUsbUJBQUFBO0lBQ0FFLG9CQUFBQTtJQUNBRSxxQkFBQUE7SUFDQUUsc0JBQUFBO0FBQ0Y7SUFFQSxXQUFlRSJ9