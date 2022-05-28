export = {
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
  ],
  plugins: [
    'import',
  ],
  ignorePatterns: [
    'node_modules',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    'no-new': 'off',
    'no-shadow': 'off',
    'no-bitwise': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'default-case': 'off',
    'prefer-template': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-use-before-define': ['error', { classes: false, functions: false }],
    'object-curly-newline': ['warn', { consistent: true }],

    // eslint-plugin-import
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
