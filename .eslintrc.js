module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@mate-academy/eslint-config',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    jest: true,
  },
  rules: {
    'no-proto': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
