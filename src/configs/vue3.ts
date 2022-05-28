/**
 * Prerequisite `eslint-plugin-vue`, being extended
 * https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
 */
export = {
  extends: [
    require.resolve('./typescript'),
    'plugin:vue/vue3-recommended',
    require.resolve('./vue-shared'),
  ],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
}
