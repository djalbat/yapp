"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { rewriteNodes } from "occam-grammar-utilities";
import { parserUtilities } from "occam-parsers";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv, HorizontalSplitterDiv } from "easy-layout";

import Yapp from "./yapp";
import SubHeading from "./view/subHeading";
import BNFTextarea from "./view/textarea/bnf";
import TokensTextarea from "./view/textarea/tokens";
import TopSizeableDiv from "./view/div/sizeable/top";
import LeftSizeableDiv from "./view/div/sizeable/left";
import RightSizeableDiv from "./view/div/sizeable/right";
import MiddleSizeableDiv from "./view/div/sizeable/middle";
import ParseTreeTextarea from "./view/textarea/parseTree";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

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
              <Yapp Plugin={Plugin} firaCode={firaCode} onContentChange={this.contentChangeHandler} >
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
