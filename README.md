eslint-config-techchange
========================

So you want some sweet ESLint configurations for your project? We gotcha covered.

TechChange produced this ESLint file to reflect best practices and code standards for the organization. Though these standards are codified after substantial experience and unlikely to substantially change, this is considered a living document for us. Thus, as we encounter new cases and new patterns, we will update our rules accordingly.

## Installation

Make sure you have eslint installed already.

`npm install eslint`

Install `eslint-config-techchange` from NPM. Make sure to install it globally (`-g`) if you installed eslint globally too.

`npm install eslint-config-techchange`

Extend your `.eslintrc` file as follows.
```json
{
	"extends": "eslint-config-techchange"
}
```

Note: This module requires `eslint@>=8.0.0`, `@babel/core@>=7.0.0` and `@babel/eslint-parser@>=7.0.0` as of v4.

Enjoy!

### React Installation

The same instructions as above apply, except for two slight deviations.

First, make sure that `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y` are installed. Make sure to install it in the same scope as `eslint`.

```
npm install eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Second, when you extend the `.estlintrc` file, you will have to suffix the extension with `/react`.
```json
{
	"extends": "eslint-config-techchange/react"
}
```

## Changelog

- **4.0.0**
	- BREAKING: Upgrade `eslint` to v8.
	- BREAKING: Switch from the DEPRECATED `babel-eslint` library to the `@babel/eslint-parser` and `@babel/core` libraries.
	- UPDATED: Upgrade to latest version of 3rd-party react eslint libraries.
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
