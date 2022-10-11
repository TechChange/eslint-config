eslint-config-techchange
========================

So you want some sweet ESLint configurations for your project? We gotcha covered.

TechChange produced this ESLint file to reflect best practices and code standards for the organization. Though these standards are codified after substantial experience and unlikely to substantially change, this is considered a living document for us. Thus, as we encounter new cases and new patterns, we will update our rules accordingly.

## Installation

1. Install `eslint` and `eslint-config-techchange` from NPM.

`npm install --save-dev eslint eslint-config-techchange`

2. Extend your `.eslintrc` file as follows.

```json
{
	"extends": "eslint-config-techchange"
}
```

Enjoy!

### React Installation

The same instructions as above apply, except for a few slight deviations.

First, make sure to install the `@babel-core` and `@babel/eslint-parser` libraries to be able to parse React via eslint.

`npm install --save-dev @babel/core @babel/eslint-parser`

Next, make sure to install the `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, and `eslint-plugin-react-hooks` libraries for nested rules dependencies.

`npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

Finally, when you extend the `.estlintrc` file, you will have to suffix the extension with `/react`.

```json
{
	"extends": [
		"eslint-config-techchange/react"
	],
	"parser": "@babel/eslint-parser"
}
```
