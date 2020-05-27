"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { FlorenceLexer } from "occam-lexers";
import { FlorenceParser } from "occam-parsers";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv } from "easy-layout";

import Yapp from "../yapp";
import SubHeading from "./subHeading";
import TopSizeableDiv from "./div/sizeable/top";
import LeftSizeableDiv from "./div/sizeable/left";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import HorizontalSplitterDiv from "./div/splitter/horizontal";

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

class View extends Element {
  keyUpHandler() {
    try {
      const yappContent = this.getYappContent(),
            content = yappContent,  ///
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            parseTree = node.asParseTree(tokens);

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearParseTree();
    }
  }

  dragHandler() {
    const leftSizeableDivWidth = this.getLeftSizeableDivWidth(),
          topSizeableDivHeight = this.getTopSizeableDivHeight(),
          yappWidth = leftSizeableDivWidth, ///
          yappHeight = topSizeableDivHeight;  ///

    this.setYappWidth(yappWidth);
    this.setYappHeight(yappHeight);

    this.resizeYapp();
  }

  didMount() {
    this.dragHandler();
  }

  childElements(properties) {
    const { className } = properties,
          dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this);

    return (

      <div className={`${className} view`}>
        <ColumnsDiv>
          <LeftSizeableDiv>
            <RowsDiv>
              <TopSizeableDiv>
                <Yapp noAutoResize>{`"use strict";

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
              </TopSizeableDiv>
              <HorizontalSplitterDiv onDrag={dragHandler}/>
              <RowDiv>
                <RowsDiv>
                  <SubHeading>
                    Parse tree
                  </SubHeading>
                  <ParseTreeTextarea />
                </RowsDiv>
              </RowDiv>
            </RowsDiv>
          </LeftSizeableDiv>
          <VerticalSplitterDiv onDrag={dragHandler}/>
          <ColumnDiv>
            <RowsDiv>
              <SubHeading>

              </SubHeading>
            </RowsDiv>
          </ColumnDiv>
        </ColumnsDiv>
      </div>

    );
  }

  initialise(properties) {
    this.assignContext();

    this.keyUpHandler();  ///
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise(properties);

    return exampleView
  }
}

export default withStyle(View)`

  width: 100%;
  height: 72rem;
  display: flex;
  padding: 1rem;
  
`;
