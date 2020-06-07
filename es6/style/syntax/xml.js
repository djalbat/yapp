"use strict";

import { nameColour, attributeColour } from "../../scheme/syntax/xml";

const xmlSyntaxStyle = `

  .xml.syntax > .name { color: ${nameColour}; }

  .xml.syntax > .attribute { color: ${attributeColour}; }

`;

export default xmlSyntaxStyle;
