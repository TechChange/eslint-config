module.exports = {
	"parserOptions": {
		"ecmaVersion": 9,
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
		"ecmascript": 9,
		"jsx": true,
		"react": {
			"pragma": "React",
			"version": "16.0"
		}
	},
	"plugins": [
		"react",
		"react-hooks",
		"jsx-a11y",
	],
	"extends": [
		"./rules/possible-errors",
		"./rules/best-practices",
		"./rules/variables",
		"./rules/node",
		"./rules/es6",
		"./rules/strict",
		"./rules/style",
		"./rules/react",
		"plugin:jsx-a11y/recommended"
	]
};
