module.exports = {
	"env": {
		"node": true,
		"mocha": true,
	},
	"settings": {
		"ecmascript": 6,
	},
	"extends": [
		"eslint-config-techchange/rules/possible-errors",
		"eslint-config-techchange/rules/best-practices",
		"eslint-config-techchange/rules/variables",
		"eslint-config-techchange/rules/node",
		"eslint-config-techchange/rules/strict",
		"eslint-config-techchange/rules/style",
	]
};
