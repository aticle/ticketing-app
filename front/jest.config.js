module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/serviceWorker.js'
    ],
    coveragePathIgnorePatterns: [
        'public',
        'node_modules'
    ],
    testPathIgnorePatterns: ['mocks'],
    moduleNameMapper: {},
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov'],
    testMatch: [
        '**/test/**/*.test.js'
    ],
    setupFiles: [
        '<rootDir>/test/jestSetup.js'
    ]
}