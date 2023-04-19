/* eslint-disable semi */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'cypress'],
  rules: {
    quotes: ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error', 'never'],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'no-unused-vars': 'warn',
    'require-jsdoc': 'warn',
    'max-len': ['error', { code: 120 }]
  }
};
