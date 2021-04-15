module.exports = {
	"rules": {
		// Require return with callback when multiple callbacks included in a function
		"callback-return": "error",
		// Require require() statements to be at the top-level of module scope
		"global-require": "warn",
		// Require error handling in callbacks using the "err or error" argument
		"handle-callback-err": ["error", "^(err|error)$"],
		// Warn if require() variables are declared with other non-require() variables
		"no-mixed-requires": "error",
		// Disallow using the new keyword with require() function
		"no-new-require": "error",
		// Disallow string concatenation using __dirname or __filename as using path.join() and path.resolve() are safer across systems
		"no-path-concat": "error",
		// Disallow using process.env in node environments in favor of using config files
		"no-process-env": "warn",
		// Disallow the use of process.exit() as throw new Error("Message") allows other parts of the application to handle the error
		"no-process-exit": "error",
		// Disallow node.js modules
		// This list is taken from http://eslint.org/docs/rules/no-restricted-modules
		"no-restricted-modules": ["error", "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"],
		// Warn when using synchronous versions of modules where an asynchronous version exists
		"no-sync": "warn"
	}
}
