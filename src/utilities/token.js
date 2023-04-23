"use strict";

import { sanitiseContent } from "../utilities/content";

export function tokenAsHTML(token) {
  const type = token.getType(),
        content = token.getContent(),
        sanitisedContent = sanitiseContent(content),
        className = type, ///
        html = `<span class="${className}">${sanitisedContent}</span>`;

    return html;
}

