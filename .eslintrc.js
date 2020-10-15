module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/no-unused-vars': ['error'],
    semi: 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': 0,
  },
};
