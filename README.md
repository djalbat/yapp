# Yapp

Yet Another Pretty Printer.

*Please note that Yapp is currently in beta, as the grammars are still under development. There is also currently a short wait for the package name to become available, so any mention of installing Yapp via `npm` below should be ignored. If you wish to install Yapp for now, please do so from GitHub by adding the following dependency to your `package.json` file:*

```
"yapp": "git://github.com/djalbat/yapp.git"
```

*If you are interested in contributing to Yapp, in particular contributing to its grammars, see the contribution section below.*

Yapp is a fully fledged pretty printer that can also double as an editor. It has advanced functionality to not only tokenise and parse content, but also to post-process it. This results in a degree of refinement that rivals commercial editors. Here are three short examples. Some JavaScript...

![JavaScript](https://github.com/djalbat/yapp/blob/master/assets/javascript.png)

..., some XML...

![XML](https://github.com/djalbat/yapp/blob/master/assets/xml.png)

..., and some JSON:

![JSON](https://github.com/djalbat/yapp/blob/master/assets/json.png)

Yapp is fully configurable. You can supply it with plugins for any language you choose, or in order to override the built-in plugins. You can also style it with your own styles, to support your plugins or to override existing styles. It is ideally suited to [Juxtapose](https://github.com/djalbat/juxtapose) and [Easy with Style](https://github.com/djalbat/easy-with-style), however it can be used standalone, with no dependencies on any front-end frameworks.

## Installation

You can install Yapp with [npm](https://www.npmjs.com/):

    npm install yapp

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples or contribute.

Yapp supports [FiraCode](https://github.com/tonsky/FiraCode) by default, so you need to provide the necessary font files if you want this. These can be found in the `css/` directory and can be copied as-is to the necessary file folder, server, etc. Additionally, there is a small squiggle image that is used to highlight error tokens. This should also be supplied, or just do without the squiggle.

## Usage

If you simply want to see Yapp in action without further ado, open the `examples.html` file in the root of this repository and choose a language from there. Otherwise read on.

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

The recommended way of rendering styles is the following:

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
If this seems unwieldy, and if you don't want to make any changes to the styles and you do want FiraCode support, all of the above can be replaced with the following:

```
"use strict";

import { renderYappStyles } from "yapp";

renderYappStyles();
```
In either case, rendering the styles must happen before Yapp is added to the DOM.

## Contributing

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
