module.exports = {
	"rules": {
		// Disallow deletion of variables as only object properties can be deleted
		"no-delete-var": "error",
		// Disallow overwriting global object properties
		"no-shadow-restricted-names": "error",
		// Disallow a variable from sharing the same name as a variable in its containing scope
		"no-shadow": "error",
		// Disallow explicit variable definition to undefined
		"no-undef-init": "error",
		// Disallow undefined variables unless declared in a global comment
		"no-undef": "error",
		// Disallow declaring variables that are never used
		"no-unused-vars": ["error", {
			"varsIgnorePattern": "React"
		}],
		// Disallow variable declaration before use (this will be standard in ES6)
		"no-use-before-define": ["error", "nofunc"]
	}
};
