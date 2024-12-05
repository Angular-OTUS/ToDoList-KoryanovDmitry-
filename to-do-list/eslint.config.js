const nx = require("@nx/eslint-plugin");

module.exports = [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: { "comma-dangle": [2, "always-multiline"] },
  },
  {
    files: ["**/*.json"],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: require("jsonc-eslint-parser"),
    },
  },
];
