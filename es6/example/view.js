"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { RowDiv, RowsDiv, ColumnDiv } from "easy-layout";
import { eliminateLeftRecursion, removeOrRenameIntermediateNodes } from "occam-grammar-utilities";

import Yapp from "./yapp";
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

import { ruleMapFromRules, startRuleFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class View extends Element {
  contentChangeHandler(event, element) {
    this.update();
  }

  keyUpHandler(event, element) {
    try {
      const lexicalEntries = this.getLexicalEntries(),
            entries = lexicalEntries, ///
            bnf = this.getBNF(),
            tokens = bnfLexer.tokensFromBNF(bnf),
            rules = bnfParser.rulesFromTokens(tokens),
            ruleMap = ruleMapFromRules(rules);

      let startRule = startRuleFromRules(rules);

      startRule = eliminateLeftRecursion(startRule, ruleMap);

      const { Lexer, Parser } = this.Plugin,
            lexer = Lexer.fromEntries(entries),
            parser = new Parser(startRule, ruleMap),  ///
            yappLexer = lexer,  ///
            yappParser = parser;  ///

      this.setYappLexer(yappLexer);

      this.setYappParser(yappParser);

      this.updateYapp();

      this.update();
    } catch (error) {
      console.log(error);
    }
  }

  dragHandler() {
    const leftSizeableDivWidth = this.getLeftSizeableDivWidth(),
          topSizeableDivHeight = this.getTopSizeableDivHeight(),
          yappWidth = leftSizeableDivWidth, ///
          yappHeight = topSizeableDivHeight;  ///

    this.setYappWidth(yappWidth);
    this.setYappHeight(yappHeight);
  }

  update() {
    try {
      let parseTree = null;

      const plugin = this.getPlugin(),
            tokens = plugin.getTokens(),
            node = plugin.getNode();

      if (node !== null) {
        removeOrRenameIntermediateNodes(node);

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

  didMount() {
    this.update();

    this.dragHandler(); ///

    this.resizeYapp();  ///
  }

  willUnmount() {
    ///
  }

  childElements() {
    const dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);

    return ([

      <ColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <TopSizeableDiv>
              <Yapp Plugin={this.Plugin} onContentChange={contentChangeHandler} editable >
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

  initialise() {
    this.assignContext();

    const { Lexer, Parser } = this.Plugin,
          { bnf } = Parser,
          { entries } = Lexer,
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setLexicalEntries(lexicalEntries);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise();

    return exampleView
  }
}

export default withStyle(View)`

  width: 100%;
  height: 100vh;
  display: flex;
  
`;
