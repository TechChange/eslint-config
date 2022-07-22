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

## Changelog

- **4.0.1**
	- UPDATED: Update to `ecmaVersion:13`, i.e. ECMAScript 2022, to support the latest javascript standard. 
- **4.0.0**
	- BREAKING: Upgrade `eslint` to v8.
	- BREAKING: Switch from the DEPRECATED `babel-eslint` library to the `@babel/eslint-parser` and `@babel/core` libraries for react configs.
	- UPDATED: Upgrade to latest version of the 3rd-party react eslint libraries.
- **3.0.1**
	- UPDATED: Update `max-len` rule to account for line breaks in international regex exceptions.
- **3.0.0**
	- BREAKING: Added `react/jsx-indent` rule to enforce tabbing logical expressions inside a JSX statement.
	- UPDATED: Update `max-len` rule to:
		- Ignore URLs since these shouldn't have newlines inside them
		- Ignore internationalization due to long contant names
	- UPDATED: Increase `complexity` allowed to the eslint default of `20` as existing rule was unnecessarily constraining
	- UPDATED: Remove react rule to start functions with handle
	- UPDATED: Update rule `id-length` to allow variables `j` and `k` which are commonly used in `for` loops
- **2.0.0**
	- BREAKING: Added jsx-a11y plugin as peer dependency.
	- ADDED: Added recommended rules from jsx-a11y plugin.
- **1.0.0**
	- BREAKING: Added rules for React hooks
- **0.2.0**
	- UPDATED: Use latest version of `eslint-plugin-react`
	- ADDED: Additional react rules
- **0.1.2**
	- REMOVED: Babel eslint
	- REMOVED: Extraneous settings
- **0.1.1**
	- UPDATED: Allow `dangerouslySetInnerHTML`
- **0.1.0**
	- UPDATED: Upgrade `eslint` to v2
	- UPDATED: Upgrade `babel-eslint` to v5
	- UPDATED: Upgrade `babel-loader` to v1.3
- **0.0.4**
	- UPDATED: Warn on `max-len`
	- UPDATED: Increase allowed function complexity
	- UPDATED: Warn on `global-require`
	- UPDATED: Turn off `arrow-body-style`
	- UPDATED: Turn off `react/no-multi-comp`
- **0.0.3**
	- UPDATED: Turn off `react/jsx-no-bind` errors
- **0.0.2**
	- ADDED: React rules
- **0.0.1**
	- Initial commit
