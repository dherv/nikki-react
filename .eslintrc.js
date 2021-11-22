module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
    "prettier",
  ],
  env: {
    node: true,
  },
  rules: {
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "no-debugger": ["warn"],
  },
};
