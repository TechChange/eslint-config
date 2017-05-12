module.exports = {
	"rules": {
		// Enforce corresponding getters and setters in objects
		"accessor-pairs": "error",
		// Enforce return statements in callbacks of array methods
		"array-callback-return": "error",
		// Disallow var reference outside of scope
		"block-scoped-var": "error",
		// Force class methods to be static static unless they utilize this.
		"class-methods-use-this": "error",
		// Limit the paths through a function to five at max
		"complexity": ["warn", 5],
		// Ensure that the type of returns is consistent (i.e. boolean, object, etc)
		"consistent-return": ["error", {
			"treatUndefinedAsUnspecified": true
		}],
		// Always require curly braces
		"curly": ["error", "all"],
		// Require default case in switch statements
		"default-case": "error",
		// Require the dot to be on the same line as the property, not the object.
		// More here: http://eslint.org/docs/rules/dot-location
		"dot-location": ["error", "property"],
		// Require dot notation to access properties where appropriate
		"dot-notation": ["error", {
			// Allow underscores when interacting with external API
			"allowPattern": "^[a-z]+(_[a-z]+)+$"
		}],
		// Enforce safe comparisons with === and !==
		"eqeqeq": "error",
		// Require for in on non-prototype inherited properties
		"guard-for-in": "error",
		// Disallow alert(), confirm(), prompt()
		"no-alert": "error",
		// Disallow arguments.caller and arguments.callee as they have been depreciated
		"no-caller": "error",
		// Don't allow lexical declarations in case/default clauses.
		"no-case-declarations": "error",
		// Disallow regexes that look like division
		"no-div-regex": "error",
		// Disallow else statements with return if not needed
		"no-else-return": "error",
		// Disallow empty functions -- but it's okay if you have a comment saying "//do nothing"
		"no-empty-function": "error",
		// Disallow empty destructuring patterns
		"no-empty-pattern": "error",
		// Disallow unsafe comparison with null (e.g. if (foo == null) )
		"no-eq-null": "error",
		// Disallow the use of eval()
		"no-eval": "error",
		// Disallow extending native objects
		"no-extend-native": "error",
		// Warn when .bind() used and this not referenced or not needed
		"no-extra-bind": "error",
		// Disallow unnecessary labels in loops and switches
		"no-extra-label": "error",
		// Enforce commenting of switch case fallthroughs
		"no-fallthrough": "error",
		// Warn when decimals are unbalanced (e.g. 2. or .8 should be 2.0 or 0.8)
		"no-floating-decimal": "error",
		// Disallow assignments to native objects or global variables.
		"no-global-assign": "error",
		// Warn for fancy coercions that can be hard to read
		"no-implicit-coercion": "error",
		// Disallow variable and function declarations in the global scope
		"no-implicit-globals": "error",
		// Disallow passing strings to setInterval and setTimeout
		"no-implied-eval": "error",
		// Disallow using this outside of context
		"no-invalid-this": "error",
		// Disallow obsolete use of __iterator__
		"no-iterator": "error",
		// Disallow using labels in switch statements
		"no-labels": "error",
		// Disallow unnecessary nested blocks
		"no-lone-blocks": "error",
		// Disallow function declarations in loops
		"no-loop-func": "error",
		// Disallow magic numbers. Numbers that occur multiple times in code without explicit meaning.
		"no-magic-numbers": "error",
		// Disallow multiple unnecessary spaces
		"no-multi-spaces": "error",
		// Disallow multiline strings
		"no-multi-str": "error",
		// Disallow new for side effects
		"no-new": "error",
		// Disallow Function declaration using new
		"no-new-func": "error",
		// Disallow new with String, Number, Boolean
		"no-new-wrappers": "error",
		// Disallow using new without assignment
		"no-new": "error",
		// Disallow octal literals
		"no-octal": "error",
		// Octal escape characters have been depreciated in favor of their unicode counterparts
		"no-octal-escape": "error",
		// Disallow reassignment of function parameters
		"no-param-reassign": "error",
		// Disallow use of depreciated __proto__
		"no-proto": "error",
		// Disallow redeclaration of existing variables and global variables
		"no-redeclare": ["error", {
			"builtinGlobals": true
		}],
		// Disallow the use of assignments in return statements
		"no-return-assign": "error",
		// Disallow unnecessary return await in async functions.
		"no-return-await": "error",
		// Disallow the use of javascript: in URLs (considered by some to be a form of eval)
		"no-script-url": "error",
		// Disallow self assignment where both sides are exactly the same.
		"no-self-assign": "error",
		// Disallow comparisons with self, if (x === x)
		"no-self-compare": "error",
		// Disallow including multiple expressions using a comma when only one is expected
		"no-sequences": "error",
		// Disallow throwing of anything other than Error objects (for the most part)
		"no-throw-literal": "error",
		// Disallow unmodified conditions in loops
		"no-unmodified-loop-condition": "error",
		// Disallow expressions without assignment or execution, but allow in certain cases
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true,
			"allowTernary": true,
			"allowTaggedTempltes": true,
		}],
		"no-unused-labels": "error",
		// Disallow calling call() and apply() when normal invocation will suffice
		"no-useless-call": "error",
		// Disallow concatenation of two strings when not needed (var foo = "a" + "b")
		"no-useless-concat": "error",
		// Disallow unnecessary escape characters.
		"no-useless-escape": "error",
		// Disallow redundant, useless return statements.
		"no-useless-return": "error",
		// Disallow the use of void operator as it can lead to confusion
		"no-void": "error",
		// Allow todo and other comments indicating incompletel code.
		"no-warning-comments": "off",
		// Disallow with statements, which are not allowed in strict mode
		"no-with": "error",
		// Always use an Error object when rejecting a promise.
		"prefer-promise-reject-errors": "error",
		// Force parseInt() functions to include the second argument (radix) to prevent incorrect interpretation
		"radix": "error",
		// Require await in async functions. It's probably a mistake if it's missing.
		"require-await": "error",
		// Don't require variable declarations to be hoisted to the top.
		"vars-in-top": "off",
		// Require parentheses for all immediately invoked function expressions (This may be up for debate)
		"wrap-iife": ["error", "inside"],
		// Disallow Yoda conditions where the literal is on the left side of an expression (e.g. if ("red" === color))
		"yoda": "error"
	}
};
