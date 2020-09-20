# Yapp

Yet Another Pretty Printer.

*If you just want to see Yapp in action without further ado*, then clone this repository, open the `index.html` file and choose a language.

*If you are interested in contributing to Yapp, in particular in contributing to its grammars*, then see the contributions section below.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Fira Code support](#fira-code-support)
- [Styling Yapp](#styling-yapp)
- [Plugins](#plugins)
- [Building](#building)
- [Contact](#contact)

## Introduction

Yapp is an advanced pretty printer and text editor. It has a powerful lexer and parser under the hood, and can process content after parsing in order to refine its appearance still further. The result is an experience that rivals the best open source and commercial editors. Yapp is also fully configurable. You can style it overall or target specific syntaxes. Its plugin architecture additionally makes it easy to support any language. Lastly, Yapp supports [Fira Code](https://github.com/tonsky/FiraCode).

## Installation

You can install Yapp with [npm](https://www.npmjs.com/):

    npm install yapp

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

There are three ways to use Yapp:

1. Vanilla JavaScript, with no need to install additional packages.
2. Make use of an [Easy](https://github.com/djalbat/easy) element, which is slightly less cumbersome.
3. Use JSX by way of [Juxtapose](http://juxtapose.info), arguably the most elegant approach.

The second approach is recommended, at least to begin with.

### Vanilla JavaScript

The following will mount an instance of Yapp and render the necessary styles:

```
"use strict";

import Yapp from "yapp";

import { renderYappStyles } from "yapp";

const body = document.querySelector("body"),
      yapp = Yapp.fromContent(` ... `);

renderYappStyles();

body.appendChild(yapp.domElement);

yapp.didMount();
```
Note that if you take this approach then you must call Yapp's `didMount()` method explicitly.

### Make use of an Easy element

A slightly less cumbersome approach is to make use of an [Easy](https://github.com/djalbat/easy) element:
```
"use strict";

import Yapp from "yapp";

import { Body } from "easy";
import { renderYappStyles } from "yapp";

const body = new Body(),
      yapp = Yapp.fromContent(` ... `);

renderYappStyles();

body.mount(yapp);
```
Note that there is now no need to call the `didMount()` method.

### Use JSX by way of Juxtapose

Arguably the most elegant approach is to use JSX by way of [Juxtapose](http://juxtapose.info):

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

Note that in all of the three use cases above you must call the `renderYappStyles()` function before mounting any instance of Yapp.

### Other considerations

Yapp will set its own height by default, based on its content. On the other hand its width is set to `100%`, so you will probably want to mount it in a containing element rather than the body element. If you are using Easy elements, for example, something like the following will work:

```
import { Element } from "easy";

const rootDiv = new Element("div#root"),
      yapp = ... ;

rootDiv.mount(yapp);
```

## Configuration

Yapp takes some additional, optional parameters, namely `language`, `Plugin` and `options`. These can be passed as arguments to the `fromContent(...)` factory method or as attributes in the JSX. Intermediate arguments can be left as falsey when passing the latter arguments to the `fromContent(...)` factory method:

```
const language = "json",
      options = {
        editable: true,
        onContentChange: contentChangeHandler
      },
      yapp = Yapp.fromContent(` ... `, language, null, options);
```
When using JSX, the properties of the `options` parameter are in fact passed individually:

```
<Yapp language="json" editable onContentChange={contentChangeHandler} >{`

  ...

`}</Yapp>
```
If Yapp is made editable, the `contentChangeHandler(...)` callback should take the following form:

```
function contentChangeHandler(event, element) {
  const yapp = element, ///
        content = yapp.getContent();

  ...

}
```
Note that the second of the callback's arguments is a reference to the instance of Yapp, in case one is not available by other means. Note also that a `getContent()` method is supplied.

The only other option is the `firaCode` option, covered next.

## Fira Code support

Yapp supports [Fira Code](https://github.com/tonsky/FiraCode). To enable it, add the `firaCode` option either to the `options` object if you are using the `fromContent(...)` factory method or as an attribute if using JSX:

```
<Yapp firaCode ... >{`

  ...

`}</Yapp>
```

If you choose to enable Fira Code then you need to provide the necessary web font files. These can be found in the `css/` directory of this repository and can be utilised as-is. Here is an example of the CSS that references them:

```
@font-face {
  font-family: "Fira Code";
  src: url("css/woff2/FiraCode-Light.woff2") format("woff2"),
  url("css/woff2/FiraCode-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
```
You do not have to provide this, rendering Yapp's styles will do so, but it is recommended that you check the network tab in your browser's developer tools to ensure that these files are being picked up.

## Styling Yapp

Each of the usage examples in the usage section includes the following code:

```
"use strict";

import { renderYappStyles } from "yapp";

renderYappStyles();
```

Rendering the styles in this manner should always be done before any instance of Yapp is mounted, but only needs to be done once. If you do not want to alter Yapp's styles, either overall or for a particular syntax, then you never need to do any more than this.

### Overall styles

A handful of overall CSS properties, mainly relating to fonts colours, can be overridden directly. The most elegant way to do this is with programmatic styles. You can take the following approach, for example:

```
"use strict";

import Yapp from "yapp";
import withStyle from "easy-with-style";  ///

export default withStyle(Yapp)`

  border: 2px dotted;

  color: green;
  caret-color: white;
  border-color: yellow;
  background-color: red;

  font-size: 14px;
  line-height: 20px;
  font-family:  monospace;
  text-rendering: optimizeLegibility;
  font-feature-settings: normal;

`;
```
Now you can import this class rather than the package's `Yapp` class and your style will always be used without the need for repetition.

Some of the relevant CSS properties of child elements are not inheritable and must therefore be targeted directly. For example:

```
.yaap > textarea::selection {
  color: white !important;
  background-color: orange !important;
}
```
This style can be applied either by way of your own CSS file or programmatically if you prefer:
```
import withStyle from "easy-with-style";  ///

const { renderStyle } = withStyle;

renderStyle(`

  .yaap > textarea::selection {
    color: white !important;
    background-color: orange !important;
  }

`);
```
All the HTML elements of which Yapp is comprised have placeholder classes, for example the textarea element has a `rich` placeholder class, and can therefore be targeted in this way.

### Syntax styles

How to approach styling Yapp's syntax broadly boils down to whether you want to set the style for the syntax of a new language, supported by a plugin that you supply, or to override the style for an existing language.

In the first instance, the approach can be the same as for overall styles, that is, you can supply a set of CSS properties that target the syntax elements either programmatically or in a CSS file. For example, if you have have a plugin for the Java language, then you could add the following style to go with it:

```
.yapp .java.syntax > .keyword { color: #a93927; }

.yapp .java.syntax > .string-literal { color: "#f5087a"; }
```
Bear in mind that a default syntax style that is applied, found in the [default.js](https://github.com/djalbat/yapp/blob/master/es6/style/syntax/default.js) file. You can override its individual CSS properties easily enough, however, because the specificity of your own style, given the additional language selector, will be greater.

In the second instance, or if you want to remove the default style altogether rather than override it, the approach is to render Yapp's styles individually to give yourself the opportunity of leaving out specific ones:

```
"use strict";

import withStyle from "easy-with-style";  ///

import { syntaxStyle, firaCodeStyle } from "yapp";

const { renderStyle, renderStyles } = withStyle;

renderStyles(); // Always needed

renderStyle(syntaxStyle); // Leave this out if you wish.

renderStyle(firaCodeStyle); // Only needed for Fira Code support.
```
In fact the above is just what the `renderYappStyles()` function does. In leaving out the syntax style, which includes the defaults, you have clean slate to work with.

## Plugins

If you have been supplied with a plugin, or have written your own, it is straightforward to appraise Yapp of it by way of the aforementioned `Plugin` parameter, passed either as an argument to the `fromContent(...)` factory method or as a JSX attribute. The remainder of this section covers authoring plugins. It assumes that you are able to build the examples, each of which corresponds to a built-in plugin. See the section on building later on for details.

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

## Contributions

All development is best done in the context of the examples, at least initially. There are three main areas that would benefit from contributions.

1. **More and improved syntax styles.** These can be contributed individually or as a whole. There is no need to do any programming beyond changing some variables.

2. **Improving the grammars for existing languages.** This can also be done with virtually no programming at all, since both the lexical entries and BNF can be changed directly in the examples.

3. **Altering existing plugins or creating new ones.** This is likely to be more work, however it should not be considered out of reach. The best way to create a new plugin is to effectively clone an existing one. See the source for details.

Contributions are best made in the form of pull requests.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

As well as building Yapp itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and in the files and sub-directories of the `es6/example` directory.

If you wish to make use of live reloading while working on the examples, use `npm start` and the examples index page wll be available at http://localhost:8888.

## Acknowledgements

The following MDN articles were invaluable when writing the JavaScript grammar:

* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Contact

- james.smith@djalbat.com
- http://djalbat.com


AWS_ACCESS_KEY_ID=AKIAZIP7YYLHOW4VDQS3
AWS_SECRET_ACCESS_KEY=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
NLTK_DATA=/usr/local/share/nltk_data

/Users/james.smith/Private/PHE/foodscanner_data_pipeline/service/pipeline.py

--settings s3://foodscanner-pipeline-etl-statics/supplements/etl_settings.yaml

/Users/james.smith/Private/PHE/foodscanner_data_pipeline.screwed

