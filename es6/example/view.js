"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { FlorenceLexer } from "occam-lexers";
import { FlorenceParser } from "occam-parsers";
import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv } from "easy-layout";

import Yapp from "../yapp";
import SubHeading from "./subHeading";
import BNFTextarea from "./textarea/bnf";
import RuleNameInput from "./input/ruleName";
import TopSizeableDiv from "./div/sizeable/top";
import LeftSizeableDiv from "./div/sizeable/left";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import HorizontalSplitterDiv from "./div/splitter/horizontal";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

import { findRuleByName } from "../utilities/rule";

class View extends Element {
  Lexer = FlorenceLexer;  ///

  Parser = FlorenceParser;  ///

  changeHandler() {
    try {
      let parseTree = null;

      const lexicalEntries = this.getLexicalEntries(),
            yappContent = this.getYappContent(),
            ruleName = this.getRuleName(),
            bnf = this.getBNF(),
            entries = lexicalEntries, ///
            lexer = this.Lexer.fromEntries(entries),
            content = yappContent,  ///
            tokens = lexer.tokenise(content),
            parser = this.Parser.fromBNF(bnf),
            name = ruleName,  ///
            rules = parser.getRules(),
            rule = findRuleByName(name, rules),
            node = parser.parse(tokens, rule);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearParseTree();
    }
  }

  keyUpHandler() {
    this.changeHandler();
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
          autoResize = false,
          dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return (

      <div className={`${className} view`}>
        <ColumnsDiv>
          <LeftSizeableDiv>
            <RowsDiv>
              <TopSizeableDiv>
                <Yapp onChange={changeHandler} autoResize={autoResize} >{`"use strict";

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
                Lexical entries
              </SubHeading>
              <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
              <SubHeading>
                BNF
              </SubHeading>
              <BNFTextarea onKeyUp={keyUpHandler} />
              <SubHeading>
                Rule name
              </SubHeading>
              <RuleNameInput onKeyUp={keyUpHandler} />
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

    this.changeHandler();  ///
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
