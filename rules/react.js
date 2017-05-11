module.exports = {
	"rules": {
		// Don't allow displayName parameters, but require the component to be named by reference.
		"react/display-name": ["error", {
			"ignoreTranspilerName": false
		}],
		// Allow all prop types at this time.
		"react/forbid-component-props": "off",
		// Allow all element types.
		"react/forbid-elements": "off",
		// Don't allow messy imports of other component's prop types.
		"react/forbid-foreign-prop-types": "error",
		// Warn if the developer is using vague prop type descriptions, like any, array, and object.
		"react/forbid-prop-types": "warn",
		// Enforce boolean attributes notation No need for <Component variable={true} />.
		// Just do <Component variable />.
		"react/jsx-boolean-value": ["error", "never"],
		// Require closing brackets to be located immediately following the last prop.
		"react/jsx-closing-bracket-location": ["error", "after-props"],
		// Don't allow spaces between curly braces in JSX attributes.
		"react/jsx-curly-spacing": ["error", "never", {
			"allowMultiline": true
		}],
		// Don't allow spaces before or after the equal sign for components.
		"react/jsx-equals-spacing": ["error", "never"],
		// Allow either .js or .jsx files for components.
		"react/jsx-filename-extension": ["warn", {
			"extensions": [".js", ".jsx"]
		}],
		// The first prop of a component should never be on a new line.
		"react/jsx-first-prop-new-line": ["error", "never"],
		// Ensure correct prefixing of event handlers in JSX.
		"react/jsx-handler-names": ["warn", {
			"eventHandlerPrefix": "handle",
			"eventHandlerPropPrefix": "on"
		}],
		// Require a tab indentation in props.
		"react/jsx-indent-props": ["error", "tab"],
		// Require tab indentations in all JSX components
		"react/jsx-indent": ["error", "tab"],
		// Require key props to be used.
		"react/jsx-key": "error",
		// Limit number of props on a single line in JSX to 1
		"react/jsx-max-props-per-line":["error", {
			"maximum": 1,
			"when": "always"
		}],
		// Require binding to happen in the constructor.
		"react/jsx-no-bind": ["error", {
			"allowArrowFunctions": true
		}],
		// Don't allow comments inside JSX statements.
		"react/jsx-no-comment-textnodes": "error",
		// Don't allow duplicate props in the same component
		"react/jsx-no-duplicate-props": "error",
		// Don't allow unwrapped strings
		"react/jsx-no-literals": "error",
		// Don't allow unsafe target=_blanks, must include rel='noreferrer noopener' too.
		"react/jsx-no-target-blank": "error",
		// Don't allow undeclared variables in JSX
		"react/jsx-no-undef": "error",
		// PascalCase for all components
		"react/jsx-pascal-case": "error",
		// Don't require props to be sorted alphabetically, but put reserved props (key, ref) first,
		// and callbacks last.
		"react/jsx-sort-props": ["error", {
			"noSortAlphabetically": true,
			"reservedFirst": true,
			"callbacksLast": true,
		}],
		// Don't allow a space between / and >. Require a space before self closing.
		// No space before opening.
		"react/jsx-tag-spacing": ["error", {
			"closingSlash": "never",
			"beforeSelfClosing": "always",
			"afterOpening": "never"
		}],
		// Allow react to be called and not cause errors.
		"react/jsx-uses-react": "error",
		// Allow JSX variables to be marked as used
		"react/jsx-uses-vars": "error",
		// Require parentheses around miltline JSX statements.
		"react/jsx-wrap-multilines": "error",
		// Warn if you're using array indexes as a key. It might be unavoidable, but use a unique id
		// if possible.
		"react/no-array-index-key": "warn",
		// Don't allow somebody to use "children" as a declared prop.
		"react/no-children-prop": "error",
		// Don't allow problematic use of children AND dangerouslySetInnerHTML.
		"react/no-danger-with-children": "error",
		// Warn on dangerouslySetInnerHTML -- we should always be aware if we're using it.
		// More here https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		"react/no-danger": "warn",
		// Don't allow deprecated React methods.
		"react/no-deprecated": "error",
		// Prevent setState in componentDidMount
		"react/no-did-mount-set-state": "error",
		// Prevent setState in componentDidUpdate
		"react/no-did-update-set-state": "error",
		// Don't allow the state to be mutated. Ever.
		"react/no-direct-mutation-state": "error",
		// Don't allow findDOMNode, prefer using a callback ref instead.
		// https://github.com/yannickcr/eslint-plugin-react/issues/678#issue-165177220
		"react/no-find-dom-node": "error",
		// Don't allow "isMounted()" calls.
		"react/no-is-mounted": "error",
		// DISABLING, THERE ARE TIMES WHEN THIS SHOULD BE ALLOWED
		// Only allow one component to be defined per file.
		"react/no-multi-comp": "off",
		// Don't use the returned element from rendering with ReactDOM.
		"react/no-render-return-value": "error",
		// Allow local state to be changed, even though we're using Redux.
		"react/no-set-state": "off",
		// Don't allow string references.
		"react/no-string-refs": "error",
		// Don't allow (usually accidentally) unescaped entities from appearing.
		"react/no-unescaped-entities": "error",
		// Don't allow unknown properties.
		"react/no-unknown-property": "error",
		// Prevent setState in componentDidUpdate
		"react/no-will-update-set-state": "error",
		// Only allow ES6 classes.
		"react/prefer-es6-class": ["error", "always"],
		// Prefer stateless functions whenever possible.
		"react/prefer-stateless-function": "error",
		// Require prop types to be defined.
		"react/prop-types": "error",
		// Prevent React not being defined when using JSX
		"react/react-in-jsx-scope": "error",
		// Don't require defaultProps for props that are not required.
		// We often use optional props to selectively hide elements in a component if the prop is not
		// provided, this would be detrimental to that practice.
		"react/require-default-props": "off",
		// Don't require optimization -- yet.
		// This would require every compnent to have a shouldComponentUpdate defined.
		"react/require-optimization": "off",
		// Don't allow people to forget to return inside render.
		"react/require-render-return": "error",
		// Don't allow extra closing tags for components without children.
		"react/self-closing-comp": "error",
		// Require a certain organization of methods. Sure! Why not?!
		// Borrowed from AirBNB. https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L121
		"react/sort-comp": ["warn", {
			"order": [
				"lifecycle",
				"/^on.+$/",
				"/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
				"everything-else",
				"/^render.+$/",
				"render"
			]
		}],
		// Don't require sorted prop types, because alphabeticalness is overkill.
		"react/sort-prop-types": "off",
		// Require style prop values to be an object.
		"react/style-prop-object": "error",
		// Prevent void DOM elements from receiving children.
		"react/void-dom-elements-no-children": "error",
	}
};
