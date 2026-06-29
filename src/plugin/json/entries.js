"use strict";

const entries = [
  {
    "special": "^(?:,|:|\\{|\\}|\\[|\\])"
  },
  {
    "number": "^-?[1-9][0-9]*(\\.[0-9]+)?"
  },
  {
    "keyword": "^(?:null|true|false)"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
