module.exports = {
	"rules": {
		// Enforce no spaces at bookends of array/object definitions (e.g. [2, 3] is valid, [ 2, 3 ] is invalid)
		"array-bracket-spacing": ["error", "never"],		
		// Enforce spaces in single line blocks (e.g. function() { return true; } is valid, function() {return true;} is invalid)
		"block-spacing": "error",
		// Enforce consistent brace style
		"brace-style": ["error", "1tbs", {
			"allowSingleLine": true
		}],
		// Enforce camelcase in all variable and function declarations (does not include leading or trailing _ or CAMEL_CASE)
		"camelcase": ["error", { "properties": "never" }],
		// Enforce spaces after commas
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		// Enforce commas at the end of a line
		"comma-style": ["error", "last"],
		// Disallow spaces inside of computed properties
		"computed-property-spacing": ["error", "never"],
		// Enforce capturing the current execution context using the that variable (e.g var that = this;) - consider changing to self
		"consistent-this": ["error", "that"],
		// Enforce trailing space at the end of every non-empty file
		"eol-last": "error",
		// Enforce naming of optionally named functions (that could remain anonymous). This helps with debugging, but open to turning this off
		"func-names": "error",
		// Enforce a mininmum id length of 2 characters, except i for iterating over loops
		"id-length": ["error", {
			"exceptions": ["i", "_"]
		}],
		// Enforce tabs equivalent to two spaces
		"indent": ["error", "tab"],
		// Enforce double quotes for JSX attribute values unless a set of single quotes contains a double quote
		"jsx-quotes": ["error", "prefer-double"],
		// Enforce one space after key in object
		"key-spacing": ["error", {
			"beforeColon": false,
			"afterColon": true
		}],
		// Enforce spacing before and after keywords
		"keyword-spacing": ["error",{
			"before": true,
			"after": true
		}],
		// Enforce unix-style line endings
		"linebreak-style": ["error", "unix"],
		// Enforce spaces before comment blocks and allow comments at the beginning of array and object declarations
		"lines-around-comment": ["error", {
			"beforeBlockComment": true,
			"allowObjectStart": true,
			"allowArrayStart": true
		}],
		// Enforces maximum nesting level, need to check with team if we want to enforce this
		"max-depth": ["warn", 5],
		// Enforce a maximum line length of 100 characters, while treating tabs as 2 characters
		"max-len": ["warn", 100, 2],
		// Enforce a maximum of 10 levels of nested callbacks
		"max-nested-callbacks": "error",
		// Enforce a maximum of 5 arguments a function can accept
		"max-params": ["error", 5],
		// Require a capital letter to instantiate a constructor
		"new-cap": "error",
		// Require parentheses when instantiating a constructor
		"new-parens": "error",
		// Require a blank line after variable definitions
		"newline-after-var": "error",
		// Disallow using the Array constructor to create arrays
		"no-array-constructor": "error",
		// Disallow bitwise opearators (e.g. var x = y & z)
		"no-bitwise": "error",
		// Disallow the use of continue statements
		"no-continue": "error",
		// Disallow a singular if statement inside of an else block in favor of using an else if statement
		"no-lonely-if": "error",
		// Disallow mixing of tabs and spaces, except for the purpose of alignment
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		// Disallow more than three blank lines in a row, and only allow 1 at the end of a file
		"no-multiple-empty-lines": ["error", {
			// Disallow mixing of tabs and spaces, except for the purpose of alignment
			"max": 3,
			"maxEOF": 1
		}],
		// Disallow using negated conditions when the else branch is not empty
		"no-negated-condition": "error",
		// Disallow nested ternary expressions
		"no-nested-ternary": "error",
		// Disallow using the new Object constructor in favor of the object literal syntax var myObject = {};
		"no-new-object": "error",
		// Disallow the use of unary operators, ++ and -- unless they are used as iterators for a for loop
		"no-plusplus": ["error", {
			"allowForLoopAfterthoughts": true
		}],
		// Disallow spaces between function name and parentheses (e.g function ())
		"no-spaced-func": "error",
		// Disallow trailing whitespace on lines
		"no-trailing-spaces": "error",
		// Disallow use of ternary assignment for variables
		"no-unneeded-ternary": ["error", {
			"defaultAssignment": false
		}],
		// Require extra spaces inside objects
		"object-curly-spacing": ["error", "always"],
		// Require quoting of object keys when necessary (e.g. var object = { "foo-bar": 5, bar: 2, foo: function() {}})
		"quote-props": ["error", "as-needed"],
		// Require use of double quotes for string literals, unless they would require escaping (e.g. var string = 'The woman said "Hi!"';)
		"quotes": ["error", "single", "avoid-escape"],
		// Require JSDoc comments for all functions
		"require-jsdoc": ["error", {
			"require": {
				"FunctionDeclaration": true,
				"MethodDefinition": false,
				"ClassDeclaration": false
			}
		}],
		// Require space after semicolon, prevent space before semicolon
		"semi-spacing": "error",
		// Require semicolons after each new line
		"semi": ["error", "always"],
		// Require space before blocks (e.g. if (a) {})
		"space-before-blocks": "error",
		// Disallow space before opening paren in function definitions
		"space-before-function-paren": ["error", "never"],
		// Disallow spaces in parens
		"space-in-parens": "error",
		// Require space around infix operators (e.g. var foo = 1 + 2, not var foo = 1+2)
		"space-infix-ops": "error",
		// Require spaces around unary words like void, new, delete, disallow around nonwords like ++, --, !
		"space-unary-ops": "error",
		// Require spaces in comments (e.g. // This is a comment, not //This is a comment)
		"spaced-comment": ["error", "always"],
		// Wrap regex in parens to make it clearer
		"wrap-regex": "error"
	}
};
