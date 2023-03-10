module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
