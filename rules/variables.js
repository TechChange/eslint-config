module.exports = {
	"rules": {
		// Don't worry about when variables declarations happen
		"init-declarations": "off",
		// Disallow shadowing of variables inside of a catch
		"no-catch-shadow": "error",
		// Disallow deletion of variables as only object properties can be deleted
		"no-delete-var": "error",
		// Disallow labels that are variable names
		"no-label-var": "error",
		// Don't restrict globals.
		"no-restricted-globals": "off",
		// Disallow a variable from sharing the same name as a variable in its containing scope
		"no-shadow": "error",
		// Disallow overwriting global object properties
		"no-shadow-restricted-names": "error",
		// Disallow undefined variables unless declared in a global comment
		"no-undef": "error",
		// Disallow explicit variable definition to undefined
		"no-undef-init": "error",
		// Don't allow variables to be explicitly defined as undefined, like "var foo = undefined"
		"no-undefined": "error",
		// Disallow declaring variables that are never used
		"no-unused-vars": ["error", {
			"varsIgnorePattern": "React"
		}],
		// Disallow variable declaration before use (this will be standard in ES6)
		"no-use-before-define": ["error", "nofunc"]
	}
};
