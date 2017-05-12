module.exports = {
	"rules": {
		// DISABLED UNTIL MORE FLEXIBLE:
		// Require braces around arrow body when required
		"arrow-body-style": ["off", "as-needed"],
		// Require parens around arrow-functions
		"arrow-parens": ["error", "always"],
		// Require spaces before and after arrow-function declarations
		"arrow-spacing": "error",
		// Require super when necessary, warn when it is used inproperly
		"constructor-super": "error",
		// Enforce space before generator *, no space after (e.g. function *generator() {})
		"generator-star-spacing": "error",
		// Disallow arrow functions where the could be confused with comparison
		"no-confusing-arrow": "error",
		// Disallow modifying variables named as class declarations
		"no-class-assign": "error",
		// Disallow modifying variables declared as constants
		"no-const-assign": "error",
		// Disallow duplicate named class members
		"no-dupe-class-members": "error",
		// Disallow referencing this or super before super() call
		"no-this-before-super": "error",
		// Disallow use of var in favor of let and const. Need to discuss with team.
		"no-var": "warn",
		// Require object literal shorthand definition. Need to discuss with team.
		"object-shorthand": "warn",
		// Require use of arrow function notation in callbacks where appropriate. Need to discuss with team. Probably a good idea, but only in ES6 environments.
		"prefer-arrow-callback": "warn",
		// Require use of const when let or var assigned and never modified. Need to discuss with team. Probably a good idea, but only in ES6 environments.
		"prefer-const": "warn",
		// Require use of Reflect API where it can be used to replace older object methods. Needs configuration and need to discuss with team. Only applicable in ES6 environments
		"prefer-reflect": "warn",
		// Require the use of the spread operator instead of using Function.prototype.apply() function. Need to discuss with team. Probably a good idea, but only in ES6 environments.
		"prefer-spread": "warn",
		// Require use of template literals over string concatenation (e.g. var str = `Hello ${world}!`; rather than var str = "Hello " + world;). Need to discuss with team. Probably a good idea, but only in ES6 environments.
		"prefer-template": "warn",
		// Require the use of yield expression in generator functions (without yield there is no reason to use a generator). Need to discuss with team. Probably a good idea, but only in ES6 environments
		"require-yield": "warn"
	}
};
