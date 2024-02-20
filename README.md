# Yapp

Yet Another Pretty Printer.

*If you just want to see Yapp in action without further ado*, then clone this repository, run `npm install` and `npm start`, and then open your browser at http://localhost:8888.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Usage](#usage)
- [Configuration](#configuration)
- [Fira Code support](#fira-code-support)
- [Styling Yapp](#styling-yapp)
- [Plugins](#plugins)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

Yapp is another pretty printer and a basic text editor. It has both a lexer and a parser under the hood, and can process content after parsing in order to refine its appearance still further. The result is an experience that rivals the best open source and commercial pretty printers. Yapp is also configurable. You can style it overall or target the syntax highlighting for specific languages. Its plugin architecture allows it to support additional languages. It also supports [Fira Code](https://github.com/tonsky/FiraCode).

## Installation

You can install Yapp with [npm](https://www.npmjs.com/):

    npm install yapp

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Examples

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The examples will then be available at the following URL:

http://localhost:8888

The source for the examples can be found in the `src/examples.js` file and corresponding `src/example` folder. You are encouraged to try the examples whilst reading what follows. You can rebuild them on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

There are three ways to use Yapp:

1. Vanilla JavaScript, with no need to install additional packages.
2. Make use of an [Easy](https://github.com/djalbat/easy) element, which is slightly less cumbersome.
3. Use JSX by way of [Juxtapose](https://juxtapose.info), arguably the most elegant approach.

The second approach is recommended, at least to begin with.

### Vanilla JavaScript

The following will mount an instance of Yapp and render the necessary styles:

```
"use strict";

import Yapp from "yapp";

import { mountYapp, unmountYapp, renderYappStyles } from "yapp";

const {  } = elementMixins;

const body = document.querySelector("body"),
      yapp = Yapp.fromContentAndConfiguration(` ... `, {});

renderYappStyles();

mountYapp(yapp, body);

unmountYapp(yapp); // At some later time.
```

Note that if you take this approach then you must call the `mountYapp()` function with the Yapp instance as an argument. Similarly if you remove an instance of Yapp from the DOM then you must call the `unmountYapp()` function.

### Make use of an Easy element

A slightly less cumbersome approach is to make use of an [Easy](https://github.com/djalbat/easy) element:

```
"use strict";

import Yapp from "yapp";

import { Body } from "easy";
import { renderYappStyles } from "yapp";

const body = new Body(),
      yapp = Yapp.fromContentAndConfiguration(` ... `, {});

renderYappStyles();

body.mount(yapp);
```

Note that there is now no need to call the `didMount()` method.

### Use JSX by way of Juxtapose

Arguably the most elegant approach is to use JSX by way of [Juxtapose](https://juxtapose.info):

```
"use strict";

import "juxtapose";

import Yapp from "yapp";

import { Body } from "easy";
import { renderYappStyles } from "yapp";

const body = new Body();

renderYappStyles();

body.mount(

  <Yapp>{`

  ...

`}</Yapp>

);
```

Unless you plan to use Juxtapose to build your site, however, this may not be ideal.

Note that in all of the three use cases above you must call the `renderYappStyles()` function *before* mounting any instance of Yapp.

### Other considerations

Yapp will set its own height by default, based on its content. On the other hand its width is set to `100%`, so you will probably want to mount it in a containing element rather than the body element. If you are using Easy elements, for example, something like the following will work:

```
import { Element } from "easy";

const rootDiv = new Element("div#root"),
      yapp = ... ;

rootDiv.mount(yapp);
```

## Configuration

This is by way of the `configuration` argument of the `fromContentAndConfiguration(...)` factory method...

```
const configuration = {
        language: "json",
        editable: true,
        onCustomContentChange: coCustomntentChangeHandler
      },
      yapp = Yapp.fromContentAndConfiguration(` ... `, configuration);
```

...or by way of JSX attributes:

```
<Yapp language="json" editable onCustomContentChange={coCustomntentChangeHandler} >{`

  ...

`}</Yapp>
```

If Yapp is made editable, the `coCustomntentChangeHandler(...)` callback should take the following form:

```
function coCustomntentChangeHandler(content) {

  ...

}
```

Note that the second of the callback's arguments is a reference to the instance of Yapp, in case one is not available by other means. Note also that a `getContent()` method is supplied.

## Fira Code support

Yapp supports [Fira Code](https://github.com/tonsky/FiraCode). In order to enable it, either add a `firaCode` property set to `true` to the ' `configuration` object if you are using the `fromContentAndConfiguration(...)` factory method or add a `firaCode` boolean attribute if using JSX:

```
<Yapp firaCode ... >{`

  ...

`}</Yapp>
```

If you choose to enable Fira Code then you need to provide the necessary web font files. These can be found in the `css/` directory of this repository and can be utilised as-is. Here is an example of the CSS that references them:

```
@font-face {
  src: url("/css/woff2/Fira Code-Light.woff2");
  font-family: "Fira Code";
  font-weight: normal;
}
```

You do not have to provide this, rendering Yapp's styles will do so for you, but it is recommended that you check the network tab in your browser's developer tools to ensure that these files are being served.

You can also preload the font files by putting something like the following in the header of the containing HTML page:

```
<link rel="preload" href="/css/woff2/Fira Code-Bold.woff2" as="font" type="font/woff2" crossorigin >
<link rel="preload" href="/css/woff2/Fira Code-Regular.woff2" as="font" type="font/woff2" crossorigin >
```

Note that both the path and the host of the URLs are assumed fixed in the snippets above but this may not be the case. Instructions on how to rectify this can be found in the section on styling Yapp that follows:

## Styling Yapp

Each of the usage examples in the usage section includes the following code:

```
"use strict";

import { renderYappStyles } from "yapp";

renderYappStyles();
```

Rendering the styles in this manner should always be done before any instance of Yapp is mounted, but only needs to be done once. 

If you do not want to alter Yapp's styles any further then you never need to do any more than this. On the other hand if you do want to make changes to Yapp's styles then you must eschew the `renderYappStyles()` function in favour of a more refined approach:

```
"use strict";

import withStyle from "easy-with-style";  ///

import { yappStyle, syntaxStyle, firaCodeStyle } from "yapp";

const { renderStyle } = withStyle;

renderStyle(yappStyle);

renderStyle(syntaxStyle);

renderStyle(firaCodeStyle);
```

Now the `renderStyle()` function is being utilised to render each of Yapp's styles individually. This is pretty much all that the `renderYappStyles()` function, in fact.

We cover the three individual styles next.

### Overall styles

Here is the default overall style:

https://github.com/djalbat/yapp/blob/master/src/style/yapp.js

If you want something different, simply copy this style and make the requisite changes. Or you can override specific styles by making use of CSS classes.

### Syntax styles

Here is the syntax style:

https://github.com/djalbat/yapp/blob/master/src/style/syntax.js

You can see that it is comprised of styles for three of the four languages that Yapp supports by default. There is no spefiic style for plain text. There is a default style, however.

In a similar vein to the overall style you can either copy and completely replace syntax styles of override specific ones. For example, if you added support for the Java language then you might want to add something like the following to a new, Java-specific style: 

```
.yapp .java.syntax > .keyword { color: #a93927; }

.yapp .java.syntax > .string-literal { color: "#f5087a"; }
```

### Fira Code styles

If the paths of the web font files are different to the default then you may want to alter the Fira Code style:

https://github.com/djalbat/yapp/blob/master/src/style/firaCode.js

Note that it also takes a `host` argument. In fact if all you want to do is change the host then you can do this directly from the `renderYappStyles()` function...

```
"use strict";

import { renderYappStyles } from "yapp";

const host = "...";

renderYappStyles(host);
```

...which passes this down to the `firaCodeStyle()` function.

## Plugins

If you have been supplied with a plugin, or have written your own, it is straightforward to appraise Yapp of it by way of a property of the `configuration` argument of the `fromContentAndConfiguration(...)` factory method or as a JSX attribute. The remainder of this section covers authoring plugins. It assumes that you are able to build the examples, each of which corresponds to a built-in plugin. See the section on building later on for details.

To begin to author your own plugin, follow these steps:

1. Add an item corresponding to your plugin's language to the `index.html` file in the root of the repository.

2. Edit the [`es6/example.js`](https://github.com/djalbat/yapp/blob/master/es6/example.js) file, importing the view for the plugin and adding to the `switch` statement as required. Note that since you have yet to create the view, the `import` the build will break.

3. Create a view for the plugin. Aside from the obvious specifics these views are just boilerplate and the easiest thing to do is just to copy a file for an existing one, for example the [`es6/example/view/javascript.js`](https://github.com/djalbat/yapp/blob/master/es6/example/view/javascript.js) file, and alter it as required.

4. Create the plugin itself. Again, plugins are entirely boilerplate and the best approach is  to copy the file of an existing one, for example the [`es6/plugin/javascript.js`](https://github.com/djalbat/yapp/blob/master/es6/plugin/javascript.js) file.

5. Do the same for your plugin's constituent lexer, parser and processor files. Each of these constituents are non-trivial and it is recommended that you copy those of the simple plain text plugin rather than those of an advanced plugin such as the JavaScript plugin. The relevant files are:
    - [`es6/lexer/plainText.js`](https://github.com/djalbat/yapp/blob/master/es6/lexer/plainText.js)
    - [`es6/parser/plainText.js`](https://github.com/djalbat/yapp/blob/master/es6/parser/plainText.js)
    - [`es6/processor/plainText.js`](https://github.com/djalbat/yapp/blob/master/es6/processor/plainText.js)

Once these files are in place, the examples should build again.

The fun now starts with devising the necessary lexical entries and BNF for your plugin. This can be done dynamically within the example. Whenever you make progress, you can copy lexical entries and BNF back into the requisite variables in your lexer and parser. For the processor, if that functionality is needed, it is recommended that you have a look at the JavaScript processor.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

As well as building Yapp itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and in the files and sub-directories of the `es6/example` directory.

If you wish to make use of live reloading while working on the examples, use `npm start` and the examples index page wll be available at http://localhost:8888.

## Acknowledgements

* The [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements) and [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) MDN articles were invaluable when writing the JavaScript grammar.

## Contact

- james.smith@djalbat.com
