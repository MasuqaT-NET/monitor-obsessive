module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // New JSX transform
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
};
