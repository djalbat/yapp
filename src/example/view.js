"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { rewriteNodes } from "occam-grammar-utilities";
import { parserUtilities } from "occam-parsers";
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

const { rulesFromBNF } = parserUtilities;

class View extends Element {
  contentChangeHandler = (event, element) => {
    this.update();
  }

  keyUpHandler = (event, element) => {
    try {
      const { Plugin } = this.constructor,
            { Lexer, Parser } = Plugin,
            lexicalEntries = this.getLexicalEntries(),
            bnf = this.getBNF(),
            entries = lexicalEntries, ///
            rules = rulesFromBNF(bnf),
            lexer = Lexer.fromEntries(entries),
            parser = Parser.fromRules(rules),
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
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { Plugin, firaCode, initialContent } = this.constructor;

    return (

      <ColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <TopSizeableDiv>
              <Yapp Plugin={Plugin} firaCode={firaCode} onContentChange={this.contentChangeHandler} readOnly >
                {initialContent}
              </Yapp>
            </TopSizeableDiv>
            <HorizontalSplitterDiv/>
            <RowDiv>
              <RowsDiv>
                <MiddleSizeableDiv>
                  <RowsDiv>
                    <SubHeading>
                      Tokens
                    </SubHeading>
                    <TokensTextarea/>
                  </RowsDiv>
                </MiddleSizeableDiv>
                <HorizontalSplitterDiv/>
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
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <RightSizeableDiv>
              <RowsDiv>
                <SubHeading>
                  Lexical entries
                </SubHeading>
                <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
              </RowsDiv>
            </RightSizeableDiv>
            <HorizontalSplitterDiv/>
            <RowDiv>
              <RowsDiv>
                <SubHeading>
                  BNF
                </SubHeading>
                <BNFTextarea onKeyUp={this.keyUpHandler} />
              </RowsDiv>
            </RowDiv>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
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
