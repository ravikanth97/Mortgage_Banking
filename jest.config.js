module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameWrapper: {
    '\\.(css/less/scss/sass$': 'identify-obj-proxy'
  },
  setupFilesAfterEnv: ['']
}