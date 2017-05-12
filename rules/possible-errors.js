module.exports = {
	"rules": {
		// Disallow variable assignment in conditionals
		"no-cond-assign": "error",
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
		// Disallow empty character class in regex
		"no-empty-character-class": "error",
		// Disallow empty block statements
		"no-empty": "error",
		// Disallow assignment of the exception parameter
		"no-ex-assign": "error",
		// Disallow extra boolean casts in conditionals (e.g. if (!!bar) {)
		"no-extra-boolean-cast": "error",
		// Disallow extra semi-colons
		"no-extra-semi": "error",
		// Disallow reassignment of function declaration
		"no-func-assign": "error",
		// Disallow invalid regex
		"no-invalid-regexp": "error",
		// Disallow non-space/tab whitespace
		"no-irregular-whitespace": "error",
		// Disallow negated left operand of in operator
		"no-negated-in-lhs": "error",
		// Disallow global object function calls (e.g. JSON() or Math())
		"no-obj-calls": "error",
		// Disallow multiple plain spaces in regexes
		"no-regex-spaces": "error",
		// Disallow empty slots in arrays (e.g. [1,,2])
		"no-sparse-arrays": "error",
		// Disallow code that has no ability to be executed
		"no-unreachable": "error",
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
		// Disallow multi-line expressions without semi-colons
		"no-unexpected-multiline": "error"
	}
};
