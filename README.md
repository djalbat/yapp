# Yapp

Yet Another Pretty Printer.

*Please note that Yapp is currently in beta, as the grammars are still under development. There is also a short wait for the package name to become available. If you are interested in contributing to Yapp, in particular to its grammars, see the contribution section below.*

Yapp is a fully fledged pretty printer, meant for code listings, that can also double as a code editor. It has advanced functionality to not only tokenise and parse code, but also to post-process it. This allows for a degree of refinement in syntax highlighting that rivals commercial editors. Here are three short examples. Here is some JavaScript...

![JavaScript](https://github.com/djalbat/yapp/blob/master/assets/javascript.png)

..., a small amount of XML...

![XML](https://github.com/djalbat/yapp/blob/master/assets/xml.png)

..., and some JSON.

![JSON](https://github.com/djalbat/yapp/blob/master/assets/json.png)

Yapp is fully configurable. You can supply it with plugins for any language you choose, or in order to override the built-in plugins for languages that are already supported. You can also style it with your own themes to support your plugins or override existing ones. Yapp supports [FiraCode](https://github.com/tonsky/FiraCode) by default.

## Installation

*Again please note that Yapp is not currently available as an [npm](https://www.npmjs.com/) packge, it can only be cloned.*

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/yapp.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples



## Acknowledgements

The following MDN articles were invaluable when writing the JavaScript grammar:

* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Contact

- james.smith@djalbat.com
- http://djalbat.com
