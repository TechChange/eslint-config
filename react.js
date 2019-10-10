module.exports = {
	"parser": "babel-eslint",
	"parser-options": {
		"ecmaVersion": 6,
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
		"ecmascript": 6,
		"jsx": true,
		"react": {
			"pragma": "React",
			"version": "16.0"
		}
	},
	"plugins": [
		"react",
		"react-hooks"
	],
	"extends": [
		"eslint-config-techchange/rules/possible-errors",
		"eslint-config-techchange/rules/best-practices",
		"eslint-config-techchange/rules/variables",
		"eslint-config-techchange/rules/node",
		"eslint-config-techchange/rules/es6",
		"eslint-config-techchange/rules/strict",
		"eslint-config-techchange/rules/style",
		"eslint-config-techchange/rules/react"
	]
};
