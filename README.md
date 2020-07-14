# Yapp

Yet Another Pretty Printer.

*If you just want to see Yapp in action without further ado*, then clone this repository, open the `index.html` file and choose a language.

*If you are interested in contributing to Yapp*, in particular contributing to its grammars, then see the contributions section below.

Otherwise read on.

Yapp is a fully fledged pretty printer and text editor. It has a powerful lexer and parser under the hood, and can process content after parsing in order to refine its appearance still further. The result is an experience that rivals the best open source and commercial editors.

Yapp is fully configurable. You can style it overall or target specific syntaxes. Yapp's plugin architecture also makes it easy to support additional languages. Yapp also supports [FiraCode](https://github.com/tonsky/FiraCode). See the dedicated section below for more details.

## Installation

You can install Yapp with [npm](https://www.npmjs.com/):

    npm install yapp

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Usage

There are three ways to use Yapp:

1. Vanilla JavaScript, with no need to install any additional packages.

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
      yapp = Yapp.fromContent(`

  ...

`);

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
      yapp = Yapp.fromContent(`

  ...

`);

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
Unless you plan to use Juxtapose to build your site, however, or at least some portion of it, this may not be ideal.

### Other considerations

Note that in all of the three use cases above you must call Yapp's `renderStyles()` method before you mount an instance of it. There is more on this in the section on styling Yapp further on.

Yapp will set its own height by default, based on its content. On the other hand its width is set to `100%`. So you will probably want to mount it in a containing element rather than the body element. If you are using Easy elements, for example, something like the following will do:

```
import { Element } from "easy";

const rootDiv = new Element("div#root"),
      yapp =

        ...

      ;

rootDiv.mount(yapp);
```
The code to render styles has been left out for the sake of brevity, but bear in mind that it always need to be included regardless of where you mount Yapp.


Yapp takes some additional parameters, namely `language`, `Plugin` and `options`. These can be passed as arguments to the `fromContent(...)` factory method or as attributes in the JSX. Intermediate arguments can be left as falsey when passing the latter arguments to the `fromContent(...)` method. For example:

```
const language = "json",
      options = {
        ...
      },
      yapp = Yapp.fromContent(`

        ...

      `, language, null, options);
```

Yapp is not editable by default. If you want to make it editable and supply it with a callback function to be invoked whenever its content changes, you can do via the options object:

```
const editable = true,
      onContentChange = changeHandler,  ///
      options = {
        editable
        onContentChange
      },
      yapp = Yapp.fromContent(`

        ...

      `, null, null, options);

function changeHandler(event, element) {
  const content = yapp.getContent();

  ...

}
```
These options are passed as individual attributes alongside the other parameters if invoking Yapp by way of JSX:

```
<Yapp editable
      language="javascript"
      onContentChange={(event, element) => {

                        const yapp = element, ///
                              content = yapp.getContent();

                        ...

                      }}
>{`

...

`}</Yapp>
```
Note that the second of the callback's arguments is a reference to the instance of Yapp, in case one is not available by other means. Note also that a `getContent()` method is supplied.

## Styling Yapp

Each of the usage examples in the usage section includes the following code:

```
"use strict";

import { renderYappStyles } from "yapp";

renderYappStyles();
```

Rendering the styles in this manner should always be done before any instance of Yapp is mounted, but only needs to be done once. If you do not want to alter Yapp's styles, either overall or for a particular syntax, then you never need to do any more than this.

Yapp's styles can be further broken down, however:

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
Note that the `renderStyles()` and `renderStyle()` functions, available via the [Easy with Style](https://github.com/djalbat/easy-with-style) package, are now being employed.

The remainder of this section shows how to override the default and syntax styles. FiraCode is dealt with separately in its own section further down.

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

## Examples

Open the `index.html` file in the root of the repository. There is an example for each of the supported languages. For instructions on building and live reloading, see the section on building near the foot of this readme file.

## FiraCode

Yapp supports [FiraCode](https://github.com/tonsky/FiraCode) by default, so you need to provide the necessary font files if you want this. These can be found in the `css/` directory and can be copied as-is to the necessary file folder, server, etc. Additionally, there is a small squiggle image that is used to highlight errors. This should also be supplied, or just do without the squiggle.

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

As well as building the XGL library itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and in the files and sub-directories of the `es6/example` directory.

If you wish to make use of live reloading while working on the examples, use `npm start` and the examples index page wll be available at http://localhost:8888.

## Acknowledgements

The following MDN articles were invaluable when writing the JavaScript grammar:

* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Contact

- james.smith@djalbat.com
- http://djalbat.com
