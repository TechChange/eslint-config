module.exports = {
	"rules": {
		"import/order": [
			"error",
			{
				"newlines-between": "always",
				"alphabetize" : {
					"order": "asc"
				},
				"groups": [
					["builtin", "external"],
					"parent",
					["sibling", "index"],
					"object",
					"type"
				],
				"pathGroups": [
					{
						"pattern": "react",
						"group": "external",
						"position": "before"
					},
				],
				"pathGroupsExcludedImportTypes": ["react"],
				"distinctGroup": false,
			}
		]
	}
};
