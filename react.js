module.exports = {
	"parserOptions": {
		"ecmaVersion": 13,
		"ecmaFeatures": {
			"impliedStrict": true,
			"jsx": true
		}
	},
	"env": {
		"node": true,
		"mocha": true,
		"browser": true,
		"es6": true
	},
	"settings": {
		"ecmascript": 13,
		"jsx": true,
		"react": {
			"pragma": "React",
			"version": "16.0"
		}
	},
	"plugins": [
		"import",
		"jsx-a11y",
		"react",
		"react-hooks",
	],
	"extends": [
		"./rules/best-practices",
		"./rules/es6",
		"./rules/imports",
		"./rules/node",
		"./rules/possible-errors",
		"./rules/react",
		"./rules/strict",
		"./rules/style",
		"./rules/variables",
		"plugin:jsx-a11y/recommended"
	]
};
