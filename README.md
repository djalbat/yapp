# Yapp

Yet Another Pretty Printer.

*Please note that Yapp is currently in beta, as the grammars are still under development. There is also currently a short wait for the package name to become available, so any mention of installing Yapp via `npm` below should be ignored. If you wish to install Yapp for now, please do so from GitHub by adding the following dependency to your `package.json` file:*

```
"yapp": "git://github.com/djalbat/yapp.git"
```

*If you are interested in contributing to Yapp, in particular contributing to its grammars, see the contribution section below.*

Yapp is a fully fledged pretty printer that can also double as an editor. It has a powerful lexer and parser under the hood as well as the ability to process parsed content in order to refine its appearance still further. The result is an experience that rivals commercial editors.

Here are three short examples:

![JavaScript](https://github.com/djalbat/yapp/blob/master/assets/javascript.png)

![XML](https://github.com/djalbat/yapp/blob/master/assets/xml.png)

![JSON](https://github.com/djalbat/yapp/blob/master/assets/json.png)

Yapp is fully configurable. You can style it overall or target a specific languages. Its plugin architecture allows support to be added for any additional language.

## Installation

You can install Yapp with [npm](https://www.npmjs.com/):

    npm install yapp

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples or if you wish to contribute.

Yapp supports [FiraCode](https://github.com/tonsky/FiraCode) by default, so you need to provide the necessary font files if you want this. These can be found in the `css/` directory and can be copied as-is to the necessary file folder, server, etc. Additionally, there is a small squiggle image that is used to highlight error. This should also be supplied, or just do without the squiggle.

## Getting started

**If you simply want to see Yapp in action without further ado**, then clone this repository, open the `examples.html` file therein and choose a language. Otherwise read on.

As well as inserting an instance of Yapp into the DOM, you will need to style it. Instructions for doing so are given in the sub-section for styling Yapp further on. The requisite code is left out of the listings in the next two sub-sections for brevity's sake, however you will need to add the style rendering code at some point.

### Using Yapp standalone

The following will add an instance of Yapp to the DOM:

```
"use strict";

import Yapp from "yapp";

const body = document.querySelector("body"),
      yapp = Yapp.fromContent(`

  ...

`);

body.appendChild(yapp.domElement);

yapp.didMount();
```
Please note that you *must* call the `didMount()` method immediately after the DOM element has been added. Also note that you do not have to amke use of the body DOM element, any one can be used.

As well as the `content` argument, the `fromContent(...)` factory method takes `language`, `Plugin` and `options` arguments. Intermediate arguments can be set to `null` should you only want to set one of the later arguments. The `options` argument, if set, should be a plain old JavaScript object, the properties of which correspond to the attributes when Yapp is invoked by way of JSX, bar the arguments already given.

If you are prepared to use [Easy](https://github.com/djalbat/easy), then the following is perhaps a little less cumbersome:

```
"use strict";

import Yapp from "yapp";

import { Body } from "easy";

const body = new Body(),
      yapp = Yapp.fromContent(`

  ...

`);

body.mount(yapp);
```
Note that you can dispense with the `didMount()` method with this approach.

### Using Yapp by way of JSX

Yapp is ideally suited to JSX in the guise of [Juxtapose](https://github.com/djalbat/juxtapose) and programmatic styles in the guise of [Easy with Style](https://github.com/djalbat/easy-with-style).

Making use of JSX is arguably more elegant:

```
"use strict";

import "juxtapose";

import Yapp from "yapp";

import { Body } from "easy";

const body = new Body();

body.mount(

  <Yapp language="xml">{`

  ...

`}</Yapp>

);
```
As in the standalone case, you don't have to make do with the body DOM element, any can be used:

```
"use strict";

import "juxtapose";

import Yapp from "yapp";

import { Element } from "easy";

const rootDiv = new Element("div#root");

rootDiv.mount(

  ...

);
```
If using jSX, you need to install Babel's [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) plugin and then add a reference to it to your `babel.config.json` file:

```
{
  "presets": [
    [
      "@babel/env"
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-react-jsx"
  ]
}
```
Other than that, there are no changes needed.

### Styling Yapp

The recommended way of rendering styles is to do so individually:

```
"use strict";

import withStyle from "easy-with-style";  ///

import { yappStyle, syntaxStyle, firaCodeStyle } from "yapp";

const { renderStyle, renderStyles } = withStyle;

renderStyles(); // Always needed

renderStyle(yappStyle); // Not needed if using JSX

renderStyle(syntaxStyle); // Likely always needed

renderStyle(firaCodeStyle); // Only needed for FiraCode support.
```
If this all seems a bit too unwieldy, and if you don't want to make any changes to the styles and you do want FiraCode support, the above can be replaced with the following:

```
"use strict";

import { renderYappStyles } from "yapp";

renderYappStyles();
```
Note that in either case, rendering the styles must happen before any instance of Yapp is added to the DOM.

The remainder of this section explains how to override the default and syntax styles.

The default style looks like this:

```
position: relative;

font-size: 13px;
line-height: 20px;
font-family: "Fira Code", monospace;
text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */

```
So if you want Yapp to use a different font, simply replace the above with something more to your liking. If you do so, you must set the `line-height` property, because Yapp makes use of it when calculating its own height. The other properties are all effectively optional, however it is recommended you at least specify the font family and size.

If you are using Yapp standalone, you need to enclose the above styles in a selector to target Yapp:

```
...

const yappStyle = `

  .yapp {
    position: relative;

    font-size: ... ;
    line-height: ... ;
    font-family: ... ;

    ...
  }

`;

renderStyle(yappStyle);
```
If you are using JSX and programmatic styles, the two essentially go together, the following approach is probably best:

```
"use strict";

import Yapp from "yapp";
import withStyle from "easy-with-style";  ///

export default withStyle(Yapp)`

  font-size: ... ;
  line-height: ... ;
  font-family: ... ;
  text-rendering: initial;
  font-feature-settings: initial;

`;
```
Note that in this case you should specify the `text-rendering` and `font-feature-settings` properties in order to prevent the underlying ones still being used.

The syntax styles cannot be overridden by the above method, because the selectors largely target the pretty printer's child `span` elements and these are not generated programmatically for performance reasons. Therefore the only approach is the standalone one.

The best way to see what styles can be altered is to look at the styles in the [`style/syntax`](https://github.com/djalbat/yapp/tree/master/es6/style/syntax) folder. You can see how these are pulled together into a single syntax style in the [`style/syntax.js`](https://github.com/djalbat/yapp/blob/master/es6/style/syntax.js) file. You should aim for something similar, in particular note that the syntax styles each employ a corresponding scheme that maps colours to properties. You may want to start by just changing a scheme, in fact, rather than a style. For example, the XML scheme only has two colours:

```
"use strict";

import { cadetBlue, citron } from "../../colours";

export const nameColour = cadetBlue;

export const attributeColour = citron;
```
If you want to change the colours of pretty printed XML, therefore, you can duplicate this scheme and change the colours to the ones you like. You then only need to change the scheme that the XML style utilises, otherwise leaving the style as-is.

Perhaps the best way to get started with rendering your own styles is to look at the example code, see below.

## The examples

Open the `index.html` file in the root of the repository. There is an example for each of the supported languages.

## Contributing

All development is best done in the context of the examples, at least initially. There are three main areas that would benefit from contributions.

1. **More and improved syntax styles.** These can be contributed individually or as a whole. There is no need to do any programming beyond changing some variables.

2. **Improving the grammars for existing languages.** This can also be done with virtually no programming at all, since both the lexical entries and BNF can be changed directly in the examples.

3. **Altering existing plugins or creating new ones.** This is likely to be more work, however it should not be considered out of reach. The best way to create a new plugin is to effectively clone an existing one. See the source for details.

Contributions are best made in the form of pull requests.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

As well as building the XGL library itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and in the files and sub-directories of the `es6/example` directory.

If you wish to make use of live reloading while working on the examples, use `npm start` and the examples index page wll be available at http://localhost:8888.

## Acknowledgements

The following MDN articles were invaluable when writing the JavaScript grammar:

* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Contact

- james.smith@djalbat.com
- http://djalbat.com
