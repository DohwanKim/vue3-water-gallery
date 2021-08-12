module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/require-default-prop": "off",
    "prettier/prettier": "error",
  },
};
