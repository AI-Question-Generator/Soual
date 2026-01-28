// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    plugins: {
      prettier,
    },
    processor: angular.processInlineTemplates,
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: ['attribute'],
          prefix: ['soual', 'app'],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['soual', 'app'],
          style: 'kebab-case',
        },
      ],
      'lines-between-class-members': ['off'],
      'no-multiple-empty-lines': ['warn', { max: 2 }],
      '@angular-eslint/prefer-inject': ['warn'],
      '@angular-eslint/no-input-rename': ['off'],
      '@angular-eslint/no-output-on-prefix': ['warn'],
      '@angular-eslint/sort-lifecycle-methods': ['warn'],
      '@angular-eslint/use-lifecycle-interface': ['warn'],
      '@angular-eslint/prefer-output-readonly': ['error'],
      '@angular-eslint/no-conflicting-lifecycle': ['error'],
      '@angular-eslint/no-async-lifecycle-method': ['error'],
      '@angular-eslint/use-pipe-transform-interface': ['error'],
      '@angular-eslint/no-lifecycle-call': ['error'],
      '@angular-eslint/no-duplicates-in-metadata-arrays': ['error'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': ['warn'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          custom: {
            regex: '^(I|T|E)[A-Z]',
            match: false,
          },
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          prefix: ['T'],
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      prettierConfig,
    ],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@angular-eslint/template/alt-text': ['warn'],
      '@angular-eslint/template/valid-aria': ['warn'],
      '@angular-eslint/template/button-has-type': ['warn'],
      '@angular-eslint/template/prefer-at-empty': ['warn'],
      '@angular-eslint/template/attributes-order': ['warn'],
      '@angular-eslint/template/banana-in-box': ['error'],
      '@angular-eslint/template/prefer-control-flow': ['error'],
      '@angular-eslint/template/no-empty-control-flow': ['error'],
      '@angular-eslint/template/use-track-by-function': ['error'],
      '@angular-eslint/template/no-duplicate-attributes': ['error'],
      '@angular-eslint/template/prefer-static-string-properties': ['error'],
      '@angular-eslint/template/no-interpolation-in-attributes': [
        'error',
        { allowSubstringInterpolation: true },
      ],
      '@angular-eslint/template/label-has-associated-control': ['error', { checkIds: true }],
      '@angular-eslint/template/prefer-self-closing-tags': ['warn'],
      '@angular-eslint/template/prefer-template-literal': ['warn'],
      '@angular-eslint/template/click-events-have-key-events': ['off'],
      '@angular-eslint/template/interactive-supports-focus': ['off'],
    },
  },
);
