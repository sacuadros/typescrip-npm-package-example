module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['modules/meta-service'],
  coverageReporters: ['cobertura', 'html', 'lcov', 'text', 'text-summary'],
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
};
