"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var body = new _easy.Body(), style = {
    width: "50px",
    height: "50px",
    overflow: "scroll"
}, outerDiv = /*#__PURE__*/ _easy.React.createElement("div", {
    style: style
}), innerDiv = /*#__PURE__*/ _easy.React.createElement("div", null);
outerDiv.append(innerDiv);
body.append(outerDiv);
var outerDivWidth = outerDiv.getWidth(), innerDivWidth = innerDiv.getWidth(), scrollbarThickness = outerDivWidth - innerDivWidth; ///
outerDiv.remove();
var _default = scrollbarThickness;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY3JvbGxiYXJUaGlja25lc3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCb2R5IiwiYm9keSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm91dGVyRGl2IiwiZGl2IiwiaW5uZXJEaXYiLCJhcHBlbmQiLCJvdXRlckRpdldpZHRoIiwiZ2V0V2lkdGgiLCJpbm5lckRpdldpZHRoIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVnQixHQUFNLENBQU4sS0FBTTtBQUVsQyxHQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FGWSxLQUFNLFNBRzVCLEtBQUssR0FBRyxDQUFDO0lBQ1AsS0FBSyxHQUFFLElBQU07SUFDYixNQUFNLEdBQUUsSUFBTTtJQUNkLFFBQVEsR0FBRSxNQUFRO0FBQ3BCLENBQUMsRUFDRCxRQUFRLGlCQVJjLEtBQU0sc0JBVXpCLEdBQUc7SUFBQyxLQUFLLEVBQUUsS0FBSztJQUduQixRQUFRLGlCQWJjLEtBQU0sc0JBZXpCLEdBQUc7QUFJWixRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVE7QUFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO0FBRXBCLEdBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFDakMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQ2pDLGtCQUFrQixHQUFHLGFBQWEsR0FBRyxhQUFhLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRTdELFFBQVEsQ0FBQyxNQUFNO2VBRUEsa0JBQWtCIn0=