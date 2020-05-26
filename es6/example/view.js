"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Yapp from "../yapp";

class View extends Element {
  childElements(properties) {
    return (

      <Yapp>{`"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Yapp from "../yapp";

class View extends Element {

  ...

}

export default withStyle(View)\`

  width: 72rem;
  height: 48rem;
  margin: 5rem;

\`;`}</Yapp>

    );
  }

  initialise(properties) {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromClass(Class, properties) {
    const view = Element.fromClass(Class, properties);

    view.initialise(properties);

    return view;
  }
}

export default withStyle(View)`

  width: 72rem;
  height: 48rem;
  margin: 5rem;

`;
