module.exports = {
  testEnvironment: 'node',
  coverageDirectory: '../report',
  updateSnapshot: true,
  collectCoverage: true,
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
