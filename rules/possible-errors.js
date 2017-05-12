module.exports = {
	"rules": {
		// Disallow await inside of loops
		"no-await-in-loop": "error",
		// Disallow comparing against -0.
		"no-compare-neg-zero": "error",
		// Disallow variable assignment in conditionals
		"no-cond-assign": "error",
		// Disallow console.log and console.warn, but allow console.error
		"no-console": ["error", {
			"allow": ["error"]
		}],
		// Disallow use of constant expressions in conditionals
		"no-constant-condition": "error",
		// Disallow control characters in regexs
		"no-control-regex": "error",
		// Disallow debugger
		"no-debugger": "error",
		// Disallow duplicate params in function declarations
		"no-dupe-args": "error",
		// Disallow duplicate keys in object literals
		"no-dupe-keys": "error",
		// Disallow duplicate case labels in switch statements
		"no-duplicate-case": "error",
		// Disallow empty block statements
		"no-empty": "error",
		// Disallow empty character class in regex
		"no-empty-character-class": "error",
		// Disallow assignment of the exception parameter
		"no-ex-assign": "error",
		// Disallow extra boolean casts in conditionals (e.g. if (!!bar) {)
		"no-extra-boolean-cast": "error",
		// Disallow unnecessary, extra, parentheses
		"no-extra-parens": "error",
		// Disallow extra semi-colons
		"no-extra-semi": "error",
		// Disallow reassignment of function declaration
		"no-func-assign": "error",
		// Disallow innerblock function declarations
		"no-inner-declarations": "error",
		// Disallow invalid regex
		"no-invalid-regexp": "error",
		// Disallow non-space/tab whitespace
		"no-irregular-whitespace": "error",
		// Disallow global object function calls (e.g. JSON() or Math())
		"no-obj-calls": "error",
		// Disallow use of Object.prototypes builtins directly
		"no-prototype-builtins": "error",
		// Disallow multiple plain spaces in regexes
		"no-regex-spaces": "error",
		// Disallow empty slots in arrays (e.g. [1,,2])
		"no-sparse-arrays": "error",
		// Disallow template literaly placeholder syntax in regular strings
		"no-template-curly-in-string": "error",
		// Disallow confusing multiline expressions
		"no-unexpected-multiline": "error",
		// Disallow code that has no ability to be executed
		"no-unreachable": "error",
		// Disallow control flow statements in finally blocks.
		"no-unsafe-finally": "error",
		// Disallow negating the left operand of relational operators
		"no-unsafe-negation": "error",
		// Disallow comparison against NaN without isNan()
		"use-isnan": "error",
		// Ensure JSDoc comments are syntactically correct
		"valid-jsdoc": ["error", {
			// Prefer @returns to @return
			"prefer": {
				"return": "returns",
			},
			// Do not require a description for @returns
			"requireReturn": false
		}],
		// Validates string comparison of typeof for errors
		"valid-typeof": "error",
	}
};
