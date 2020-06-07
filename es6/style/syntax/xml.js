"use strict";

import { attributeColour, identifierColour } from "../../scheme/syntax/xml";

const xmlSyntaxStyle = `

  .xml.syntax > .attribute { color: ${attributeColour}; }

  .xml.syntax > .identifier { color: ${identifierColour}; }

`;

export default xmlSyntaxStyle;
