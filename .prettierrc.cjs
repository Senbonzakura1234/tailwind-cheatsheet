/** @type {import('prettier').Config} */
module.exports = {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'auto',
	jsxSingleQuote: true,
	singleQuote: true,
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	printWidth: 120,
	tabWidth: 3,
	trailingComma: 'all',
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	useTabs: true,
};
