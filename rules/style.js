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
		// Enforce capitalization of the first letter of a comment
		"capitalized-comments": "error",
		// No enforced style on dangling commas
		"comma-dangle": "off",
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
		// Disallow spacing between function identifiers and their invocations
		"func-call-spacing": ["error", "never"],
		// Don't require functions to have the same name as the property to which they are assigned.
		"func-name-matching": "off",
		// Enforce naming of optionally named functions (that could remain anonymous). This helps with debugging, but open to turning this off
		"func-names": "error",
		// Don't require functions to be written declaratively or expressively, let the developer decide.
		"func-style": "off",
		// Enforce a mininmum id length of 2 characters, except i for iterating over loops
		"id-length": ["error", {
			"exceptions": ["i", "_"]
		}],
		// Enforce tabs equivalent to two spaces
		"indent": ["error", "tab", {
			// Indent "case" one more than switch
			"SwitchCase": 1,
			// Enforce indentation for multi-line property chains.
			"MemberExpression": 1,
			// Enforce indentation in object expressions.
			"ObjectExpression": 1,
		}],
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
		// Don't enforce a particular location for comments.
		"line-comment-position": "off",
		// Enforce unix-style line endings
		"linebreak-style": ["error", "unix"],
		// Enforce spaces before comment blocks and allow comments at the beginning of array and object declarations
		"lines-around-comment": ["error", {
			"beforeBlockComment": true,
			"allowObjectStart": true,
			"allowArrayStart": true
		}],
		// Enforces maximum nesting level, need to check with team if we want to enforce this
		"max-depth": ["warn", {
			"max": 5
		}],
		// Enforce a maximum line length of 100 characters, while treating tabs as 2 characters
		"max-len": ["warn", {
			"code": 100,
			"tabWidth": 2,
		}],
		// Don't enforce a max number of lines per file
		"max-lines": "off",
		// Enforce a maximum of 10 levels of nested callbacks
		"max-nested-callbacks": "error",
		// Enforce a maximum of 5 arguments a function can accept
		"max-params": ["error", {
			"max": 5
		}],
		// Don't enforce a max number of statements
		"max-statements": "off",
		// Only allow one statement per line
		"max-statements-per-line": ["error", {
			"max": 1
		}],
		// Require a capital letter to instantiate a constructor
		"new-cap": "error",
		// Require parentheses when instantiating a constructor
		"new-parens": "error",
		// Require a blank line after variable definitions
		"newline-after-var": "error",
		// Don't enforce a new line before returns
		"newline-before-return": "off",
		// Don't require a newline after each call in a method chain
		"newline-per-chained-call": "off",
		// Disallow using the Array constructor to create arrays
		"no-array-constructor": "error",
		// Disallow bitwise opearators (e.g. var x = y & z)
		"no-bitwise": "error",
		// Disallow the use of continue statements
		"no-continue": "error",
		// Take no stance on inline comments
		"no-inline-comments": "off",
		// Disallow a singular if statement inside of an else block in favor of using an else if statement
		"no-lonely-if": "error",
		// Disallow mixes of different operators.
		"no-mixed-operators": "error",
		// Disallow mixing of tabs and spaces, except for the purpose of alignment
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		// Disallow chained assignment expressions, like var a = b = c = 3;
		"no-multi-assign": "error",
		// Disallow more than three blank lines in a row, and only allow 1 at the end of a file
		"no-multiple-empty-lines": ["error", {
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
		// Don't enforce any restricted syntax
		"no-restricted-syntax": "off",
		// Allow tabs
		"no-tabs": "off",
		// Allow ternaries
		"no-ternary": "off",
		// Disallow trailing whitespace on lines
		"no-trailing-spaces": "error",
		// Allow underscores in identifiers
		"no-underscore-dangle": "off",
		// Disallow use of ternary assignment for variables
		"no-unneeded-ternary": ["error", {
			"defaultAssignment": false
		}],
		// No opinion on whitespace before properties
		"no-whitespace-before-property": "off",
		// No opinion on the location of single line statements
		"nonblock-statement-body-position": "off",
		// Require consistent line breaks inside braces
		"object-curly-newline": ["error", {
			// Consistent line breaking if doing a multiline object
			"multiline": true,
			// No more than 3 properties on a single line.
			"minProperties": 3,
		}],
		// Require extra spaces inside objects
		"object-curly-spacing": ["error", "always"],
		// Don't require object properties to be on a new line.
		"object-property-newline": "off",
		// Don't require one var declaration per function
		"one-var": "off",
		// Allow multiple variables declared on the same line
		"one-var-declaration-per-line": "off",
		// Allow operator assignments
		"operator-assignment": "off",
		// Require linebreaks with operators to be after the operator.
		"operator-linebreak": ["error", "after"],
		// Don't require blocks to be padded.
		"padded-blocks": "off",
		// Require quoting of object keys when necessary (e.g. var object = { "foo-bar": 5, bar: 2, foo: function() {}})
		"quote-props": ["error", "as-needed"],
		// Require use of double quotes for string literals, unless they would require escaping (e.g. var string = 'The woman said "Hi!"';)
		"quotes": ["error", "single", {
			"avoid-escape": true
		}],
		// Require JSDoc comments for all functions
		"require-jsdoc": ["error", {
			"require": {
				"FunctionDeclaration": true,
				"MethodDefinition": false,
				"ClassDeclaration": false
			}
		}],
		// Require semicolons after each new line
		"semi": ["error", "always"],
		// Require space after semicolon, prevent space before semicolon
		"semi-spacing": "error",
		// Do not require object keys to be alphabetically sorted.
		"sort-keys": "off",
		// Do not require variables to be alphabetically sorted.
		"sort-vars": "off",
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
		// Don't allow spacing between template tags and their literals
		"template-tag-spacing": ["error", "never"],
		// Disallow files from beginning with the unicode BOM.
		"unicode-bom": ["error", "never"],
		// Wrap regex in parens to make it clearer
		"wrap-regex": "error"
	}
};
