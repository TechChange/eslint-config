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
		"./rules/possible-errors",
		"./rules/best-practices",
		"./rules/variables",
		"./rules/node",
		"./rules/es6",
		"./rules/imports",
		"./rules/strict",
		"./rules/style"
	]
};
