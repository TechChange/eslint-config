module.exports = {
	"rules": {
		// Keeping this off because it can sometimes result in less readable code.
		// Require braces around arrow body when required
		"arrow-body-style": ["off", "as-needed", {
			"requireReturnForObjectLiteral": true
		}],
		// Require parens around arrow-functions
		"arrow-parens": ["error", "always"],
		// Require spaces before and after arrow-function declarations
		"arrow-spacing": "error",
		// Require super when necessary, warn when it is used inproperly
		"constructor-super": "error",
		// Enforce space before generator *, no space after (e.g. function *generator() {})
		"generator-star-spacing": "error",
		// Disallow modifying variables named as class declarations
		"no-class-assign": "error",
		// Disallow arrow functions where the could be confused with comparison
		"no-confusing-arrow": "error",
		// Disallow modifying variables declared as constants
		"no-const-assign": "error",
		// Disallow duplicate named class members
		"no-dupe-class-members": "error",
		// Disallow duplicate imports, use a single import per module
		"no-duplicate-imports": "error",
		// Disallow symbol constructors
		"no-new-symbol": "error",
		// Disallow specific, restricted imports -- we should think about this list at some point.
		"no-restricted-modules": "off",
		// Disallow referencing this or super before super() call
		"no-this-before-super": "error",
		// Disallow unnecessary computerd property keys.
		"no-useless-computed-key": "error",
		// Disallow unnecessary constructors
		"no-useless-constructor": "error",
		// Disallow unnecessary renaming imports, exports and destructured assignments to the same name.
		"no-useless-rename": "error",
		// Disallow use of var in favor of let and const.
		"no-var": "error",
		// Require object literal shorthand definition.
		"object-shorthand": ["error", "always"],
		// Require use of arrow function notation in callbacks where appropriate.
		"prefer-arrow-callback": "error",
		// Require use of const when let or var assigned and never modified.
		"prefer-const": "error",
		// Require destructuring of objects and arrays.
		"prefer-destructuring": "error",
		// Disallow parseInt in favor of binary, octal, and hexadecimal literals
		"prefer-numeric-literals": "error",
		// Suggest using the rest parameters instead of arguments.
		"prefer-rest-params": "error",
		// Require the use of the spread operator instead of using Function.prototype.apply() function. 
		"prefer-spread": "error",
		// Require use of template literals over string concatenation (e.g. var str = `Hello ${world}!`; rather than var str = "Hello " + world;).
		"prefer-template": "error",
		// Require the use of yield expression in generator functions (without yield there is no reason to use a generator). Need to discuss with team. Probably a good idea, but only in ES6 environments
		"require-yield": "warn",
		// Enforce spacing between rest and spread operators and their expressions
		"rest-spread-spacing": ["error", "always"],
		// Enforce sorting of imports.
		"sort-imports": "error",
		// Require symbol descriptions
		"symbol-description": "error",
		// Disallow spaces in template strings
		"template-curly-spacing": ["error", "never"],
		// Enforce spacing around yield expressions.
		"yield-star-spacing": "error",
	}
};
