"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowDiv, RowsDiv, ColumnDiv } from "easy-layout";

import Yapp from "../yapp";
import SubHeading from "./subHeading";
import ColumnsDiv from "./div/columns";
import BNFTextarea from "./textarea/bnf";
import TokensTextarea from "./textarea/tokens";
import TopSizeableDiv from "./div/sizeable/top";
import LeftSizeableDiv from "./div/sizeable/left";
import JavaScriptLexer from "../lexer/javascript";
import JavaScriptParser from "../parser/javascript";
import RightSizeableDiv from "./div/sizeable/right";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import HorizontalSplitterDiv from "./div/splitter/horizontal";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

class View extends Element {
  Lexer = JavaScriptLexer;  ///

  Parser = JavaScriptParser;  ///

  getTokens() {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          lexer = this.Lexer.fromEntries(entries),
          yappContent = this.getYappContent(),
          content = yappContent,  ///
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getParseTree(tokens) {
    let parseTree = null;

    const bnf = this.getBNF(),
          parser = this.Parser.fromBNF(bnf),
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  contentChangeHandler() {
    try {
      const tokens = this.getTokens(),
            parseTree = this.getParseTree(tokens);

      this.setTokens(tokens);

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearTokens();

      this.clearParseTree();
    }
  }

  keyUpHandler() {
    this.contentChangeHandler();  ///
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
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);

    return (

      <div className={`${className} view`}>
        <ColumnsDiv>
          <LeftSizeableDiv>
            <RowsDiv>
              <TopSizeableDiv>
                <Yapp autoResize="false" onContentChange={contentChangeHandler}>{`"use strict";

import "juxtapose";
`}</Yapp>
              </TopSizeableDiv>
              <HorizontalSplitterDiv onDrag={dragHandler}/>
              <RowDiv>
                <RowsDiv>
                  <SubHeading>
                    Tokens
                  </SubHeading>
                  <TokensTextarea />
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
              <RightSizeableDiv>
                <RowsDiv>
                  <SubHeading>
                    Lexical entries
                  </SubHeading>
                  <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
                </RowsDiv>
              </RightSizeableDiv>
              <HorizontalSplitterDiv />
              <RowDiv>
                <RowsDiv>
                  <SubHeading>
                    BNF
                  </SubHeading>
                  <BNFTextarea onKeyUp={keyUpHandler} />
                </RowsDiv>
              </RowDiv>
            </RowsDiv>
          </ColumnDiv>
        </ColumnsDiv>
      </div>

    );
  }

  initialise(properties) {
    this.assignContext();

    const { bnf } = this.Parser,
          { entries } = this.Lexer,
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setLexicalEntries(lexicalEntries);

    this.contentChangeHandler();  ///
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
  height: 100vh;
  display: flex;
  
`;
