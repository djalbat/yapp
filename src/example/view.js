"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { eliminateLeftRecursion, rewriteNodes } from "occam-grammar-utilities";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv, HorizontalSplitterDiv } from "easy-layout";

import Yapp from "./yapp";
import SubHeading from "./subHeading";
import BNFTextarea from "./textarea/bnf";
import TokensTextarea from "./textarea/tokens";
import TopSizeableDiv from "./div/sizeable/top";
import LeftSizeableDiv from "./div/sizeable/left";
import RightSizeableDiv from "./div/sizeable/right";
import MiddleSizeableDiv from "./div/sizeable/middle";
import ParseTreeTextarea from "./textarea/parseTree";
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
            ruleMap = ruleMapFromRules(rules),
            startRule = startRuleFromRules(rules);

      eliminateLeftRecursion(startRule, ruleMap);

      const { Plugin } = this.constructor,
            { Lexer, Parser } = Plugin,
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

    this.resizeYapp();
  }

  update() {
    try {
      let parseTree = null;

      const plugin = this.getPlugin(),
            tokens = plugin.getTokens(),
            node = plugin.getNode();

      if (node !== null) {
        rewriteNodes(node);

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
    const { Plugin, firaCode, initialContent } = this.constructor,
          dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);

    return ([

      <ColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <TopSizeableDiv>
              <Yapp Plugin={Plugin} firaCode={firaCode} onContentChange={contentChangeHandler} >
                {initialContent}
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

    const { Plugin } = this.constructor,
          { Lexer, Parser } = Plugin,
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
}

export default withStyle(View)`

  width: 100%;
  height: 100vh;
  display: flex;
  padding: 1rem;
  
`;
