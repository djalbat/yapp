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
import RightSizeableDiv from "./div/sizeable/right";
import MiddleSizeableDiv from "./div/sizeable/middle";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import HorizontalSplitterDiv from "./div/splitter/horizontal";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

class View extends Element {
  grammarChangeHandler() {
    try {
      const lexicalEntries = this.getLexicalEntries(),
            entries = lexicalEntries, ///
            bnf = this.getBNF(),
            lexer = this.Lexer.fromEntries(entries),
            parser = this.Parser.fromBNF(bnf),
            yappLexer = lexer,  ///
            yappParser = parser;  ///

      this.setYappLexer(yappLexer);

      this.setYappParser(yappParser);

      this.updateYapp();
    } catch (error) {
      console.log(error);
    }
  }

  contentChangeHandler() {
    try {
      let parseTree = null;

      const yappNode = this.getYappNode(),
            yappTokens = this.getYappTokens(),
            tokens = yappTokens,  ///
            node = yappNode;  ///

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      this.setTokens(tokens);

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearTokens();

      this.clearParseTree();
    }
  }

  keyUpHandler() {
    this.grammarChangeHandler();  ///

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
    this.dragHandler(); ///
  }

  childElements(properties) {
    const dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);

    return ([

      <ColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <TopSizeableDiv>
              <Yapp language={this.language}
                    autoResize="false"
                    onContentChange={contentChangeHandler}
              >
                {this.initialContent}
              </Yapp>
            </TopSizeableDiv>
            <HorizontalSplitterDiv onDrag={dragHandler}/>
            <RowDiv>
              <RowsDiv>
                <MiddleSizeableDiv>
                  <RowsDiv>
                    <SubHeading>
                      Tokens
                    </SubHeading>
                    <TokensTextarea />
                  </RowsDiv>
                </MiddleSizeableDiv>
                <HorizontalSplitterDiv />
                <RowsDiv>
                  <SubHeading>
                    Parse tree
                  </SubHeading>
                  <ParseTreeTextarea />
                </RowsDiv>
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

    ]);
  }

  initialise(properties) {
    this.assignContext();

    const { bnf } = this.Parser,
          { entries } = this.Lexer,
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setLexicalEntries(lexicalEntries);

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
  height: 100vh;
  display: flex;
  
`;
