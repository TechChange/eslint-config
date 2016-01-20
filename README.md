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

Enjoy!

## Future plans

We will follow semantic versioning for this starting at v0.1.0.
