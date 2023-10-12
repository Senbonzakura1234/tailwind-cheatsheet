/** @type {NonNullable<import('eslint-define-config').ESLintConfig['overrides'][number]>} */
const commonOverride = {
	extends: ['plugin:tailwindcss/recommended', 'plugin:import/recommended'],
	plugins: ['@typescript-eslint', 'unused-imports', 'tailwindcss'],
	rules: {
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/consistent-type-imports': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',
		'import/extensions': [
			'warn',
			'ignorePackages',
			{ '': 'never', js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
		],
		'import/named': 'off',
		'import/prefer-default-export': 'off',
		'sort-imports': [
			'warn',
			{
				allowSeparatedGroups: true,
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'tailwindcss/classnames-order': ['warn', { officialSorting: true }],
		'tailwindcss/no-custom-classname': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
	},
};

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
	root: true,
	extends: [
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:json/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module', extraFileExtensions: ['.svelte'] },
	env: { browser: true, es2022: true, node: true },
	overrides: [
		{
			files: ['**/*.mjs', '**/*.cjs'],
			parser: '@typescript-eslint/parser',
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: { parser: '@typescript-eslint/parser' },
			...commonOverride,
		},
		{
			files: ['**/*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: { project: './tsconfig.json', ecmaVersion: 'latest', sourceType: 'module' },
			...commonOverride,
		},
	],
};
