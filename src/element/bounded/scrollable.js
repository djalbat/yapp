"use strict";

import { Element } from "easy";

import scrollbarThickness from "../../scrollbarThickness";

export default class BoundedScrollableElement extends Element {
  scroll(scrollTop, scrollLeft) {
    this.setScrollTop(scrollTop);
    this.setScrollLeft(scrollLeft);

    const top = this.getTop(),
          left = this.getLeft();

    this.position(top, left);
  }

  setBounds(bounds) {
    const top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();

    this.resize(width, height);
    this.position(top, left);
  }

  resize(width, height) {
    width = width - scrollbarThickness;
    height = height - scrollbarThickness;

    this.setWidth(width);
    this.setHeight(height);

    const top = this.getTop(),
          left = this.getLeft();

    this.position(top, left);
  }

  position(top, left) {
    this.setTop(top);
    this.setLeft(left);

    let width = this.getWidth(),
        height = this.getHeight();

    const scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();

    top = top - scrollTop;
    left = left - scrollLeft;
    width = width + scrollLeft;
    height = height + scrollTop;

    top = `${top}px`;
    left = `${left}px`;
    width = `${width}px`;
    height = `${height}px`;

    const css = {
      top,
      left,
      width,
      height
    };

    this.css(css);
  }

  getTop() {
    const state = this.getState(),
          { top } = state;

    return top;
  }

  getLeft() {
    const state = this.getState(),
          { left } = state;

    return left;
  }

  getWidth() {
    const state = this.getState(),
          { width } = state;

    return width;
  }

  getHeight() {
    const state = this.getState(),
          { height } = state;

    return height;
  }

  getScrollTop() {
    const state = this.getState(),
          { scrollTop } = state;

    return scrollTop;
  }

  getScrollLeft() {
    const state = this.getState(),
          { scrollLeft } = state;

    return scrollLeft;
  }

  setTop(top) {
    this.updateState({
      top
    });
  }

  setLeft(left) {
    this.updateState({
      left
    });
  }

  setWidth(width) {
    this.updateState({
      width
    });
  }

  setHeight(height) {
    this.updateState({
      height
    });
  }

  setScrollTop(scrollTop) {
    this.updateState({
      scrollTop
    });
  }

  setScrollLeft(scrollLeft) {
    this.updateState({
      scrollLeft
    });
  }

  setInitialState() {
    const top = 0,
          left = 0,
          width = 0,
          height = 0,
          scrollTop = 0,
          scrollLeft = 0;

    this.setState({
      top,
      left,
      width,
      height,
      scrollTop,
      scrollLeft
    });
  }

  initialise() {
    this.assignContext();

    this.setInitialState();
  }
}
