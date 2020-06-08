# Yapp

Yet Another Pretty Printer.

*Please note that Yapp is currently in beta, as the grammars are still under development. There is also a short wait for the package name to become available, so any mention of installing via `npm` below should be ignored. If you are interested in contributing to Yapp, in particular contributing to its grammars, see the contribution section below.*

Yapp is a fully fledged pretty printer that can also double as an editor. It has advanced functionality to not only tokenise and parse content, but also to post-process it. This results in a degree of refinement that rivals commercial editors. Here are three short examples. Some JavaScript...

![JavaScript](https://github.com/djalbat/yapp/blob/master/assets/javascript.png)

..., some XML...

![XML](https://github.com/djalbat/yapp/blob/master/assets/xml.png)

..., and some JSON:

![JSON](https://github.com/djalbat/yapp/blob/master/assets/json.png)

Yapp is fully configurable. You can supply it with plugins for any language you choose, or in order to override the built-in plugins for languages that are already supported. You can also style it with your own styles, to support your plugins or to override existing styles. It is ideally suited to the [Juxtapose](https://github.com/djalbat/juxtapose) and [Easy with Style](https://github.com/djalbat/easy-with-style) packages, however it can be used standalone, with no dependencies on any front-end frameworks.

## Installation

You can install Yapp with [npm](https://www.npmjs.com/):

    npm install yapp

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

Yapp supports [FiraCode](https://github.com/tonsky/FiraCode) by default, so you need to provide the necessary font files if you want this. These can be found in the `css/` directory and can be copied as-is to your file folder or server. Additionally, there is a small squiggle image that is used to highlight error tokens. This should also be supplied, or just do without the squiggle.

## Usage

If you simply want to see Yapp in action without further ado, open the `examples.html` file in the root of this repository and choose a language from there.

Yapp's standalone use is covered first. The following will add an instance of Yapp to the DOM:

```
"use strict";

import Yapp from "yapp";

import { renderYappStyles } from "yapp";

const yapp = Yapp.fromContent(` ... `),
      body = document.querySelector("body");

renderYappStyles();

const ;

body.appendChild(yapp.domElement);

yapp.didMount();
```
Note that you *must*:

* Call the `renderYappStyles()` function before you append the DOM element.
* Call the `didMount()` method immediately thereafter.

As well as the `content` argument, the `fromContent(...)` factory method takes `language`, `Plugin` and `options` arguments. Intermediate arguments can be set to `null` should you only want to set the `Plugin` or `options` argument, say. The `options` argument, if set, should be a plain old JavaScript object, the properties of which should correspond to the JSX attributes when Yapp is invoked that way, see below.

If you are prepared to use the [Easy](https://github.com/djalbat/easy) package, the following is a little less cumbersome:

```
"use strict";

import Yapp from "yapp";

import { Body } from "easy";
import { renderYappStyles } from "yapp";

const yapp = Yapp.fromContent(` ... `);

renderYappStyles();

const body = new Body();

body.mount(yapp);
```
Note that you still need to call the `renderYappStyles()` function, but that you can dispense with the `didMount()` method.

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
