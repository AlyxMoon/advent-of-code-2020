const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
  ],
  moduleNameMapper: {
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@solutions/(.*)$': '<rootDir>/src/solutions/$1',
  },
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/solutions/day*.{js}',
    '!**/node_modules/**',
  ],
}
