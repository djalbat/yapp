# Yapp

Yet Another Pretty Printer.

*Please note that Yapp is currently in beta, as the grammars are still under development. There is also a short wait for the package name to become available. If you are interested in contributing to Yapp, in particular to its grammars, see the contribution section below.*

Yapp is a fully fledged pretty printer, meant for code listings, that can also double as a code editor. It has advanced functionality to not only tokenise and parse code, but also to post-process it. This allows for a degree of refinement in syntax highlighting that rivals commercial editors. Here are three short examples. Here is some JavaScript...

![JavaScript](https://github.com/djalbat/yapp/blob/master/assets/javascript.png)

..., some XML...

![XML](https://github.com/djalbat/yapp/blob/master/assets/xml.png)

..., and some JSON:

![JSON](https://github.com/djalbat/yapp/blob/master/assets/json.png)

Yapp is fully configurable. You can supply it with plugins for any language you choose, or in order to override the built-in plugins for languages that are already supported. You can also style it with your own styles, to support your plugins or to override existing styles. Yapp supports [FiraCode](https://github.com/tonsky/FiraCode) by default. It is ideally suited to [Justapose](https://github.com/djalbat/juxtapose), but it can also be invoked standalone with no need for any third party front-end framework.

## Installation

*Again please note that Yapp is not currently available as an [npm](https://www.npmjs.com/) package, it can only be cloned.*

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

Although there is no special configuration to do, you do need to provide the necessary font files if you want FiraCode support. These can be found in the `css/` directory and can be copied as-is to your file folder or server. There is also a small squiggle image that is used to highlight error tokens. This should also be supplied, or just do without the squiggle. Yapp's style can be overridden easily if the paths will not work as-is, or if you want to supply other web fonts and images, say.

## Examples



## Acknowledgements

The following MDN articles were invaluable when writing the JavaScript grammar:

* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Contact

- james.smith@djalbat.com
- http://djalbat.com
