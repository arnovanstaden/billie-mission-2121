module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    "setupFilesAfterEnv": [
        "<rootDir>/src/setupTests.ts"
    ]
};