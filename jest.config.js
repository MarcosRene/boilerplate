module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['@/*.{ts,js,jsx,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
