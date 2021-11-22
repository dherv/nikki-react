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
    // TODO: remove explicit any for CI setup (warning treated as error), to remove later on
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
