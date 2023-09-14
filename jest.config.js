module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest'
  },

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/(*.)+(spec|test).[jt]s?(x)']
}
