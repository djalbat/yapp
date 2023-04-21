"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  border: 1px solid darkgrey;
  resize: none;
  padding: 0.25rem;
  flex-grow: 1;
  font-size: 1.2rem;
  line-height: 1.5rem;
  white-space: pre;
  font-family: monospace;

`;
