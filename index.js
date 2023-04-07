module.exports = {
	"parserOptions": {
		"ecmaVersion": 13,
	},
	"env": {
		"node": true,
		"mocha": true,
		"browser": true,
		"es6": true
	},
	"plugins": [
		"import"
	],
	"extends": [
		"./rules/best-practices",
		"./rules/es6",
		"./rules/imports",
		"./rules/node",
		"./rules/possible-errors",
		"./rules/strict",
		"./rules/style",
		"./rules/variables"
	]
};
