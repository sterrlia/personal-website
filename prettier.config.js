/** @type {import("prettier").Options} */
export default {
    printWidth: 80, // max line length before wrapping
    tabWidth: 4, // 4 spaces per indent level
    useTabs: false, // use spaces, not tabs
    semi: true, // add semicolons at ends
    singleQuote: true, // prefer single quotes over double
    trailingComma: 'es5', // trailing commas where valid in ES5 (objects, arrays)
    bracketSpacing: true, // spaces between brackets in object literals
    arrowParens: 'always', // always include parens for arrow function params
    proseWrap: 'preserve', // respect existing wrapping in markdown
    endOfLine: 'lf', // enforce line feed only (avoid CRLF issues)
};
