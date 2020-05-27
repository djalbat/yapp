"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  border: 1px solid darkgrey;
  resize: none;
  padding: 0.25rem;
  display: flex;
  flex-grow: 1;
  font-size: 1.2rem;
  white-space: pre;
  font-family: monospace;

`;
