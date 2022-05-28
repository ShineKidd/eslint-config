export = {
  rules: {
    // eslint-plugin-vue
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
  },
}
