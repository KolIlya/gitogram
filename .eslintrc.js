module.exports = {
  root: true,
  env: {
    node: true,
    'jest/globals': true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'plugin:storybook/recommended', 'plugin:jest/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        'src/components/**/*.vue',
        'src/pages/feeds/*.vue',
        'src/icons/**/*.vue',
        'src/pages/**/*'
      ],
      env: {
        jest: true
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
