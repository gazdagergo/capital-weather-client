module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  rules: {
    "jsx-a11y/label-has-for": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "react/jsx-filename-extension": ["off"],
    "import/prefer-default-export": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "react/sort-comp": ["off"], // https://github.com/yannickcr/eslint-plugin-react/issues/1342
    "react/style-prop-object": ["warn"], // FormattedMessage#style https://github.com/yannickcr/eslint-plugin-react/pull/1819
    "react/no-unescaped-entities": ["off"],
    "global-require": ["off"],
    "no-restricted-globals": ["warn"],
    "react/jsx-no-bind": [
      "error",
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false
      }
    ]
  },
  globals: {
    fetch: true,
    window: true,
    document: true,
    Image: true,
    FormData: true,
    XMLHttpRequest: true,
    arguments: true,
    localStorage: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    },
    react: {
      version: 16.6
    }
  }
};

