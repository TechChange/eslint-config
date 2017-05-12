module.exports = {
	"rules": {
		// Enforce corresponding getters and setters in objects
		"accessor-pairs": "error",
		// Disallow var reference outside of scope
		"block-scoped-var": "error",
		// Limit the paths through a function to five at max
		"complexity": [1, 5],
		// Ensure that the type of returns is consistent (i.e. boolean, object, etc)
		"consistent-return": "error",
		// Always require curly braces
		"curly": "error",
		// Require default case in switch statements
		"default-case": "error",
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
		// Disallow regexes that look like division
		"no-div-regex": "error",
		// Disallow else statements with return if not needed
		"no-else-return": "error",
		// Disallow unsafe comparison with null (e.g. if (foo == null) )
		"no-eq-null": "error",
		// Disallow the use of eval()
		"no-eval": "error",
		// Disallow extending native objects
		"no-extend-native": "error",
		// Warn when .bind() used and this not referenced or not needed
		"no-extra-bind": "error",
		// Enforce commenting of switch case fallthroughs
		"no-fallthrough": "error",
		// Warn when decimals are unbalanced (e.g. 2. or .8 should be 2.0 or 0.8)
		"no-floating-decimal": "error",
		// Warn for fancy coercions that can be hard to read
		"no-implicit-coercion": "error",
		// Disallow passing strings to setInterval and setTimeout
		"no-implied-eval": "error",
		// Disallow using this outside of context
		"no-invalid-this": "error",
		// Disallow obsolete use of __iterator__
		"no-iterator": "error",
		// Disallow using labels in switch statements
		"no-labels": "error",
		// Disallow function declarations in loops
		"no-loop-func": "error",
		// Disallow multiple unnecessary spaces
		"no-multi-spaces": "error",
		// Disallow reassignment of native objects
		"no-native-reassign": "error",
		// Disallow Function declaration using new
		"no-new-func": "error",
		// Disallow new with String, Number, Boolean
		"no-new-wrappers": "error",
		// Disallow using new without assignment
		"no-new": "error",
		// Octal escape characters have been depreciated in favor of their unicode counterparts
		"no-octal-escape": "error",
		// Disallow octal literals
		"no-octal": "error",
		// Disallow reassignment of function parameters
		"no-param-reassign": "error",
		// Disallow using process.env in node environments in favor of using config files
		"no-process-env": "warn",
		// Disallow use of depreciated __proto__
		"no-proto": "error",
		// Disallow redeclaration of existing variables and global variables
		"no-redeclare": ["error", {
			"builtinGlobals": true
		}],
		// Disallow the use of assignments in return statements
		"no-return-assign": "error",
		// Disallow the use of javascript: in URLs (considered by some to be a form of eval)
		"no-script-url": "error",
		// Disallow comparisons with self, if (x === x)
		"no-self-compare": "error",
		// Disallow including multiple expressions using a comma when only one is expected
		"no-sequences": "error",
		// Disallow throwing of anything other than Error objects (for the most part)
		"no-throw-literal": "error",
		// Disallow expressions without assignment or execution, but allow in certain cases
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true,
			"allowTernary": true
		}],
		// Disallow calling call() and apply() when normal invocation will suffice
		"no-useless-call": "error",
		// Disallow concatenation of two strings when not needed (var foo = "a" + "b")
		"no-useless-concat": "error",
		// Disallow the use of void operator as it can lead to confusion
		"no-void": "error",
		// Disallow with statements, which are not allowed in strict mode
		"no-with": "error",
		// Force parseInt() functions to include the second argument (radix) to prevent incorrect interpretation
		"radix": "error",
		// Require parentheses for all immediately invoked function expressions (This may be up for debate)
		"wrap-iife": ["error", "inside"],
		// Disallow Yoda conditions where the literal is on the left side of an expression (e.g. if ("red" === color))
		"yoda": "error"
	}
};
