module.exports = {
  "roots": [
    "<rootDir>/tests"
  ],
  "testMatch": [
    "**/*.+(ts|tsx|js)",
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
}
